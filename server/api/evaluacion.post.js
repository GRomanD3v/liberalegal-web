// server/api/evaluacion.post.js
import nodemailer from 'nodemailer'

const PHONE_REGEX = /^(569\d{8}|9\d{8})$/
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Nunca interpolar strings de usuario en HTML sin escapar para prevenir inyección XSS.
function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// Guard contra inyección CRLF en encabezados de correo / Subject.
function sanitizeHeader(str = '') {
  return String(str).replace(/[\r\n]/g, '').trim()
}

// Coerción y sanitización segura de strings (manejo de arrays de query y límites de longitud).
function sanitizeStr(val, maxLen = 250) {
  if (Array.isArray(val)) val = val[0]
  if (typeof val !== 'string') return ''
  return val.trim().slice(0, maxLen)
}

// Recalcular scoring en servidor (manejo defensivo contra null/undefined en respuestas).
function computeScore(respuestas) {
  const r = respuestas || {}
  if (r.tieneDemandas === true || r.descuentoPlanilla === true) return 'HOT_LEAD'
  if (r.montoDeuda === 'mas_15m') return 'WARM_LEAD'
  return 'STANDARD'
}

const LABELS = {
  tipoDeudor: { persona_natural: 'Persona Natural', empresa: 'Empresa / Persona Jurídica' },
  montoDeuda: { menos_6m: 'Menos de $6.000.000', '6m_15m': '$6.000.000 – $15.000.000', mas_15m: 'Más de $15.000.000' },
  situacionLaboral: { empleado: 'Empleado Dependiente', independiente: 'Independiente / Boletas', jubilado: 'Pensionado / Jubilado', cesante: 'Cesante' },
  situacionBienes: { sin_bienes: 'Sin bienes a su nombre', bienes_menor_deuda: 'Bienes por menos del total adeudado', bienes_mayor_deuda: 'Bienes por más del total adeudado' },
  bool: { true: 'Sí', false: 'No', null: '—' }
}

function buildEmailHtml(body, scoring) {
  const c = body.contacto || {}
  const r = body.respuestas || {}
  const o = body.origen || {}

  const badgeColor = { HOT_LEAD: '#e07b5a', WARM_LEAD: '#c8a000', STANDARD: '#7a8fa0' }[scoring] || '#7a8fa0'

  const row = (label, value, highlight = false) => `
    <tr>
      <td style="padding:8px 12px;border-bottom:1px solid #edf1f5;color:#7a8fa0;font-size:12px;width:220px;font-weight:${highlight ? 'bold' : 'normal'};">${escapeHtml(label)}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #edf1f5;color:${highlight ? '#1a3a4f' : '#1a2e3d'};font-size:13px;font-weight:600;">${escapeHtml(String(value ?? '—'))}</td>
    </tr>`

  return `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;background:#f4f7fa;padding:24px;">
    <div style="background:#1a3a4f;padding:20px 24px;border-radius:6px 6px 0 0;">
      <span style="color:#ffffff;font-size:14px;font-weight:bold;letter-spacing:1px;">LIBERA LEGAL</span>
      <span style="color:#c8d3dc;font-size:12px;margin-left:10px;">Evaluación de Viabilidad — Ley N° 20.720</span>
    </div>
    <div style="background:#ffffff;padding:24px;border-radius:0 0 6px 6px;">
      <div style="display:inline-block;background:${badgeColor};color:#ffffff;font-size:12px;font-weight:bold;padding:6px 14px;border-radius:20px;letter-spacing:0.5px;">
        ${escapeHtml(scoring.replace('_', ' '))}
      </div>
      <p style="color:#7a8fa0;font-size:11px;margin-top:14px;">Recibido: ${escapeHtml(new Date(body.timestamp || Date.now()).toLocaleString('es-CL'))}</p>

      <h3 style="color:#1a3a4f;font-size:14px;border-bottom:2px solid #e07b5a;padding-bottom:6px;margin-top:20px;">Contacto</h3>
      <table style="width:100%;border-collapse:collapse;">
        ${row('Nombre', c.nombre)}
        ${row('Teléfono', c.telefono)}
        ${row('Email', c.email)}
      </table>

      <h3 style="color:#1a3a4f;font-size:14px;border-bottom:2px solid #e07b5a;padding-bottom:6px;margin-top:20px;">Respuestas del test</h3>
      <table style="width:100%;border-collapse:collapse;">
        ${row('Tipo de deudor', LABELS.tipoDeudor[r.tipoDeudor] || r.tipoDeudor)}
        ${row('Monto de deuda', LABELS.montoDeuda[r.montoDeuda] || r.montoDeuda)}
        ${row('Situación laboral', LABELS.situacionLaboral[r.situacionLaboral] || r.situacionLaboral)}
        ${row('Tercero financia honorarios', LABELS.bool[r.tieneTerceroFinancia])}
        ${row('Situación de bienes', LABELS.situacionBienes[r.situacionBienes] || r.situacionBienes)}
        ${row('Dispuesto a entregar muebles', LABELS.bool[r.dispuestoMuebles])}
        ${row('Demandas / embargos activos', LABELS.bool[r.tieneDemandas])}
        ${row('Descuento por planilla', LABELS.bool[r.descuentoPlanilla])}
        ${row('Trámite SUPERIR en curso', LABELS.bool[r.tramiteSuperir])}
      </table>

      <h3 style="color:#1a3a4f;font-size:14px;border-bottom:2px solid #e07b5a;padding-bottom:6px;margin-top:20px;">Trazabilidad y Origen de Campaña</h3>
      <table style="width:100%;border-collapse:collapse;">
        ${row('Google Click ID (gclid)', o.gclid || '—', true)}
        ${o.gbraid ? row('Google BraID (gbraid)', o.gbraid) : ''}
        ${o.wbraid ? row('Google WbraID (wbraid)', o.wbraid) : ''}
        ${row('Palabra clave (utm_term)', o.utm_term || '—', true)}
        ${row('Tipo concordancia (utm_matchtype)', o.utm_matchtype || '—')}
        ${row('Campaña (utm_campaign)', o.utm_campaign || '—')}
        ${row('Fuente (utm_source)', o.utm_source || '—')}
        ${row('Medio (utm_medium)', o.utm_medium || '—')}
        ${row('Contenido anuncio (utm_content)', o.utm_content || '—')}
        ${row('URL de aterrizaje', o.landing_url || '—')}
        ${row('Referencia (referrer)', o.referrer || '—')}
      </table>

      <p style="color:#7a8fa0;font-size:11px;margin-top:20px;border-top:1px solid #edf1f5;padding-top:12px;">
        Compromiso de contacto: 24 horas hábiles desde la recepción de este correo.
      </p>
    </div>
  </div>`
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Validación y sanitización server-side
  const rawNombre = sanitizeStr(body?.contacto?.nombre, 100)
  const rawTelefono = sanitizeStr(body?.contacto?.telefono, 20).replace(/[\s\-\+]/g, '')
  const rawEmail = sanitizeStr(body?.contacto?.email, 100)

  if (rawNombre.split(/\s+/).filter(Boolean).length < 2) {
    throw createError({ statusCode: 400, statusMessage: 'Nombre y apellido incompletos' })
  }
  if (!PHONE_REGEX.test(rawTelefono)) {
    throw createError({ statusCode: 400, statusMessage: 'Teléfono inválido' })
  }
  if (!EMAIL_REGEX.test(rawEmail)) {
    throw createError({ statusCode: 400, statusMessage: 'Email inválido' })
  }

  // Sanitizar origen y UTMs defensivamente
  const cleanOrigen = {
    gclid: sanitizeStr(body?.origen?.gclid, 250),
    gbraid: sanitizeStr(body?.origen?.gbraid, 250),
    wbraid: sanitizeStr(body?.origen?.wbraid, 250),
    utm_source: sanitizeStr(body?.origen?.utm_source, 100),
    utm_medium: sanitizeStr(body?.origen?.utm_medium, 100),
    utm_campaign: sanitizeStr(body?.origen?.utm_campaign, 150),
    utm_term: sanitizeStr(body?.origen?.utm_term, 250),
    utm_matchtype: sanitizeStr(body?.origen?.utm_matchtype, 50),
    utm_content: sanitizeStr(body?.origen?.utm_content, 150),
    landing_url: sanitizeStr(body?.origen?.landing_url, 500),
    referrer: sanitizeStr(body?.origen?.referrer, 500)
  }

  const cleanBody = {
    ...body,
    contacto: {
      nombre: rawNombre,
      telefono: rawTelefono,
      email: rawEmail
    },
    origen: cleanOrigen
  }

  const scoring = computeScore(cleanBody.respuestas)
  const config = useRuntimeConfig(event)

  // Configuración de transporte SMTP con pool y timeouts explícitos
  const smtpPort = Number(config.smtpPort) || 465
  const transporter = nodemailer.createTransport({
    pool: true,
    maxConnections: 3,
    maxMessages: 50,
    host: config.smtpHost || 'mail.liberalegal.cl',
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000
  })

  try {
    const cleanHeaderNombre = sanitizeHeader(rawNombre)
    await transporter.sendMail({
      from: `"LIBERA Legal — Evaluación Web" <${config.smtpUser}>`,
      to: config.leadInbox,
      replyTo: rawEmail,
      subject: `[${scoring.replace('_', ' ')}] Nueva evaluación — ${cleanHeaderNombre}`,
      html: buildEmailHtml(cleanBody, scoring)
    })
  } catch (err) {
    // Log seguro sin PII (datos personales)
    console.error('Error enviando correo de evaluación:', err?.code || err?.message || 'SMTP_ERROR')
    throw createError({ statusCode: 502, statusMessage: 'No se pudo enviar el correo' })
  }

  return { ok: true, scoring }
})

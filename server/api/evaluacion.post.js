// server/api/evaluacion.post.js
//
// Requiere: npm install nodemailer
// Variables de entorno (.env, NO commitear):
//   SMTP_USER=estrategiajuridica@liberalegal.cl
//   SMTP_PASS=********
//   LEAD_INBOX=estrategiajuridica@liberalegal.cl
//
// nuxt.config.ts necesita:
//   runtimeConfig: {
//     leadInbox: process.env.LEAD_INBOX || 'estrategiajuridica@liberalegal.cl',
//   }

import nodemailer from 'nodemailer'

const PHONE_REGEX = /^(569\d{8}|9\d{8})$/
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Nunca interpolar strings de usuario en HTML sin escapar. Si un nombre viene con
// "<img src=x onerror=...>" y esto se abre en un cliente de correo que no sanitiza
// agresivamente (Outlook de escritorio), es un vector de XSS persistente.
function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// El scoring que llega del cliente es solo una sugerencia de UI — se recalcula aquí
// porque no hay que confiar en lógica de negocio computada en el navegador para triage interno.
function computeScore(respuestas = {}) {
  if (respuestas.tieneDemandas === true || respuestas.descuentoPlanilla === true) return 'HOT_LEAD'
  if (respuestas.montoDeuda === 'mas_15m') return 'WARM_LEAD'
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

  const row = (label, value) => `
    <tr>
      <td style="padding:8px 12px;border-bottom:1px solid #edf1f5;color:#7a8fa0;font-size:12px;width:220px;">${escapeHtml(label)}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #edf1f5;color:#1a2e3d;font-size:13px;font-weight:600;">${escapeHtml(String(value ?? '—'))}</td>
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

      <h3 style="color:#1a3a4f;font-size:14px;border-bottom:2px solid #e07b5a;padding-bottom:6px;margin-top:20px;">Origen</h3>
      <table style="width:100%;border-collapse:collapse;">
        ${row('Campaña (utm_campaign)', o.utm_campaign)}
        ${row('Fuente / medio', [o.utm_source, o.utm_medium].filter(Boolean).join(' / '))}
        ${row('URL de aterrizaje', o.landing_url)}
      </table>

      <p style="color:#7a8fa0;font-size:11px;margin-top:20px;border-top:1px solid #edf1f5;padding-top:12px;">
        Compromiso de contacto: 24 horas hábiles desde la recepción de este correo.
      </p>
    </div>
  </div>`
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Nunca confiar solo en la validación del cliente: se repite aquí antes de gastar
  // una conexión SMTP o dejar entrar datos sucios al correo del equipo.
  const nombre = body?.contacto?.nombre?.trim() || ''
  const telefono = (body?.contacto?.telefono || '').replace(/[\s\-\+]/g, '')
  const email = body?.contacto?.email?.trim() || ''

  if (nombre.split(/\s+/).filter(Boolean).length < 2) {
    throw createError({ statusCode: 400, statusMessage: 'Nombre y apellido incompletos' })
  }
  if (!PHONE_REGEX.test(telefono)) {
    throw createError({ statusCode: 400, statusMessage: 'Teléfono inválido' })
  }
  if (!EMAIL_REGEX.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Email inválido' })
  }

  const scoring = computeScore(body.respuestas)
  const config = useRuntimeConfig()

  const transporter = nodemailer.createTransport({
    host: config.smtpHost || 'mail.liberalegal.cl',
    port: config.smtpPort || 465,
    secure: true,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass
    }
  })

  try {
    await transporter.sendMail({
      from: `"LIBERA Legal — Evaluación Web" <${config.smtpUser}>`,
      to: config.leadInbox,
      replyTo: email,
      subject: `[${scoring.replace('_', ' ')}] Nueva evaluación — ${nombre}`,
      html: buildEmailHtml(body, scoring)
    })
  } catch (err) {
    // Log server-side para diagnóstico; no exponer detalle del error SMTP al cliente.
    console.error('Error enviando correo de evaluación:', err)
    throw createError({ statusCode: 502, statusMessage: 'No se pudo enviar el correo' })
  }

  return { ok: true, scoring }
})

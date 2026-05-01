import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()

  // Validate required fields
  if (!body || !body.informe || !body.informe.datos) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Faltan datos del informe'
    })
  }

  // Create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: config.smtpPort,
    secure: true, // true for 465, false for other ports
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass
    }
  })

  // Format the email content
  let htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.5;">
      <h2 style="color: #1a365d; border-bottom: 2px solid #1a365d; padding-bottom: 10px;">Nuevo Informe de Factibilidad - LIBERA Legal</h2>
      
      <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #2d3748;">Datos del Contacto</h3>
        <p style="margin: 5px 0;"><strong>Nombre:</strong> ${body.cliente?.nombre || 'No proporcionado'}</p>
        <p style="margin: 5px 0;"><strong>Teléfono:</strong> ${body.cliente?.telefono || 'No proporcionado'}</p>
        <p style="margin: 5px 0;"><strong>Correo:</strong> ${body.cliente?.correo || 'No proporcionado'}</p>
      </div>

      <div style="background-color: ${body.informe.estado === 'viable' ? '#f0fdf4' : (body.informe.estado === 'pending' ? '#fff7ed' : '#fef2f2')}; padding: 20px; border-radius: 8px; border-left: 4px solid ${body.informe.estado === 'viable' ? '#22c55e' : (body.informe.estado === 'pending' ? '#f97316' : '#ef4444')}; margin-bottom: 20px;">
        <p style="text-transform: uppercase; font-size: 12px; font-weight: bold; color: #64748b; margin-top: 0; margin-bottom: 5px;">Estado Preliminar: ${body.informe.estadoLabel}</p>
        <h3 style="margin-top: 0; color: ${body.informe.estado === 'viable' ? '#166534' : (body.informe.estado === 'pending' ? '#9a3412' : '#991b1b')}; margin-bottom: 10px;">${body.informe.titulo}</h3>
        <p style="margin: 0; color: #475569;">${body.informe.texto}</p>
      </div>

      <h3 style="border-bottom: 1px solid #eee; padding-bottom: 10px;">Datos Declarados</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
  `

  for (const [key, value] of Object.entries(body.informe.datos)) {
    htmlContent += `
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #64748b; font-size: 12px; text-transform: uppercase; width: 40%;">${key}</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #1e293b;">${value}</td>
        </tr>
    `
  }

  htmlContent += `
      </table>

      <h3 style="border-bottom: 1px solid #eee; padding-bottom: 10px;">Análisis de Criterios</h3>
      <div style="margin-bottom: 20px;">
  `

  body.informe.criterios.forEach((criterio: { tipo: string, titulo: string, texto: string }) => {
    let color = '#ef4444'; // bad
    if (criterio.tipo === 'ok') color = '#22c55e';
    if (criterio.tipo === 'warn') color = '#f97316';
    
    htmlContent += `
        <div style="margin-bottom: 15px;">
          <h4 style="margin: 0 0 5px 0; color: #1e293b;"><span style="color: ${color}; display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: ${color}; margin-right: 8px;"></span>${criterio.titulo}</h4>
          <p style="margin: 0 0 0 20px; font-size: 14px; color: #475569;">${criterio.texto}</p>
        </div>
    `
  })

  htmlContent += `
      </div>

      <h3 style="border-bottom: 1px solid #eee; padding-bottom: 10px;">Próximos Pasos Recomendados</h3>
      <ul style="padding-left: 20px; color: #475569; margin-bottom: 30px;">
  `

  body.informe.acciones.forEach((accion: string) => {
    htmlContent += `<li style="margin-bottom: 8px;">${accion}</li>`
  })

  htmlContent += `
      </ul>
      <div style="border-top: 1px solid #eee; padding-top: 15px; text-align: center;">
        <p style="font-size: 12px; color: #94a3b8; margin: 0;">Este es un correo generado automáticamente desde el asistente de evaluación de LIBERA Legal.</p>
      </div>
    </div>
  `

  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"LIBERA Web" <${config.smtpUser}>`, // sender address
      to: 'estrategiajuridica@liberalegal.cl', // list of receivers
      subject: `Nueva Evaluación: ${body.cliente?.nombre || 'Prospecto'} - ${body.informe.estado.toUpperCase()}`, // Subject line
      html: htmlContent // html body
    })

    return {
      success: true,
      messageId: info.messageId
    }
  } catch (error) {
    console.error('Error enviando correo:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Error al enviar el correo. Por favor revise las credenciales SMTP.'
    })
  }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Libera Legal | Defensa Frente al CAE y Embargos',
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png'
        }
      ]
    }
  },
  runtimeConfig: {
    smtpHost: process.env.SMTP_HOST || 'solu25.tuwebdns.net',
    smtpPort: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 465,
    smtpUser: process.env.SMTP_USER || 'estrategiajuridica@liberalegal.cl',
    smtpPass: process.env.SMTP_PASS,
  }
})

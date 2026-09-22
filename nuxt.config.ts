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
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'
        }
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=AW-18195127031',
          async: true
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18195127031');
          `,
          type: 'text/javascript'
        },
        // -- NUEVO SCRIPT DBASE DE META PIXEL ---
        {
          innerHTML: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1068607112710425');
      fbq('track', 'PageView');
    `,
          type: 'text/javascript'
        }
      ],
      noscript: [
        // Fallback para usuarios sin JavaScript (Opcional pero recomendado en Nuxt)
        {
          innerHTML: '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1068607112710425&ev=PageView&noscript=1" />'
        }
      ]
    }
  },
  runtimeConfig: {
    smtpHost: process.env.SMTP_HOST || 'solu25.tuwebdns.net',
    smtpPort: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 465,
    smtpUser: process.env.SMTP_USER || 'estrategiajuridica@liberalegal.cl',
    smtpPass: process.env.SMTP_PASS,
    leadInbox: process.env.LEAD_INBOX || 'estrategiajuridica@liberalegal.cl',
  }
})

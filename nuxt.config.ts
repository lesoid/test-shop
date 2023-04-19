// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
        htmlAttrs: {
            lang: 'en',
        },
        title: 'title',
        charset: 'utf-8',
        meta: [],
        link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]

    }
},
    nitro: {
        storage: {
          'redis': {
            driver: 'redis',
            /* redis connector options */
            port: 6379, // Redis port
            host: "127.0.0.1", // Redis host
            username: "", // needs Redis >= 6
            password: "",
            db: 0, // Defaults to 0
            tls: {} // tls/ssl
          }
        }
      }
})

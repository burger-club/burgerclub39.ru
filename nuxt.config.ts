import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  target: 'server',
  ssr: false,
  app: {
    head: {
      title: 'Burger Time | Меню',
      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap',
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        { hid: 'description', name: 'description', content: '' },
      ],
    },
  },

  css: [
    'vue3-snackbar/dist/style.css',
    'virtual:windi.css',
    'virtual:windi-devtools',
    '~/assets/css/main.css',
  ],

  modules: [
    'nuxt-windicss',
    '@nuxtjs/strapi',
  ],

  strapi: {
    url: 'http://localhost:1337',
  },

  windicss: {
    analyze: true,
  },
})

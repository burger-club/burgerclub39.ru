import { defineNuxtConfig } from 'nuxt'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

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
    'virtual:windi.css',
    'virtual:windi-devtools',
    '~/assets/css/main.css',
  ],

  modules: [
    'nuxt-windicss',
    'unplugin-icons/nuxt',
    '@nuxtjs/strapi',
  ],

  strapi: {
    url: 'http://localhost:1337',
  },

  windicss: {
    analyze: true,
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    plugins: [
      Components({
        resolvers: [IconsResolver()],
      }),
      Icons({
        autoInstall: true,
      }),
    ],
  },
})

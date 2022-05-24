import { defineNuxtConfig } from 'nuxt'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

export default defineNuxtConfig({
  target: 'static',
  ssr: false,
  app: {
    head: {
      title: 'Burger',
      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
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
    'vuetify/lib/styles/main.css',
  ],

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    'nuxt-windicss',
    'unplugin-icons/nuxt',
    '@pinia/nuxt',
  ],

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

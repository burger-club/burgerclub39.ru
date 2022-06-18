import { defineNuxtConfig } from 'nuxt'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

export default defineNuxtConfig({
  target: 'static',
  ssr: false,
  app: {
    head: {
      title: 'ТЕ САМЫЕ БУРГЕРЫ | Меню',
      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap',
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        { hid: 'description', name: 'description', content: '"Те самые бургеры" - это то место, где готоят наивкуснейшие бургеры по индивидуально рецептуре из натурального мяса на нежных и ароматных булочках. Приходя к нам, все любители фастфуда будут уходить только с положительными эмоциями... Гарантия качества - "Те Самые ..."' },
        {
          name: 'keywords',
          content: 'заказать бургер в Советске/Гусеве, хотдог, бурегр, доставка, Калининградская область бургерная, покушать Калининград',
        },
        { hid: 'og:site_name', property: 'og:site_name', content: 'ТЕ САМЫЕ БУРГЕРЫ | Доставка бургеров по Калининградской области' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://yoursburgers.ru/preview.png',
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: 'https://yoursburgers.ru/preview.png',
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Те самые бургеры',
        },
        { hid: 'twitter:site', name: 'twitter:site', content: '@socketsomeone' },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://yoursburgers.ru/preview.png',
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'Те самые бургеры',
        },
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
    '@pinia/nuxt',
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

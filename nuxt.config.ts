import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  target: 'server',
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
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
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
    'vue3-snackbar/dist/style.css',
    'virtual:windi.css',
    'virtual:windi-devtools',
    '~/assets/css/main.css',
  ],

  modules: [
    'nuxt-windicss',
    '@nuxtjs/strapi',
  ],
  
  runtimeConfig: {
    strapi: { // nuxt/strapi options available server-side
      url: 'http://example-strapi-instance:1337'
    },
    public: {
      strapi: {
        url: 'https://strapi.yoursburgers.ru'
      }
    }
  },

  windicss: {
    analyze: true,
  },
})

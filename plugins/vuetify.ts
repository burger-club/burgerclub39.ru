import { createVuetify } from 'vuetify'
import { VDialog } from 'vuetify/components'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components: {
      VDialog,
    },
  })

  nuxtApp.vueApp.use(vuetify)
})

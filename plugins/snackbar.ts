import { SnackbarService } from 'vue3-snackbar'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(SnackbarService)
})

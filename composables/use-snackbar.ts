export const useSnackbar = () => {
  const { vueApp } = useNuxtApp()

  return vueApp.config.globalProperties.$snackbar
}

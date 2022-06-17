import { $vfm } from 'vue-final-modal'

export const useModal = (component?: any) => {
  const show = () => {
    $vfm.show({ component })
  }

  const hideAll = () => {
    $vfm.hideAll()
  }

  return { show, hideAll }
}

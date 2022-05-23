export const defaultText = 'Добавить в корзину'

export function useButton (textOnButton: { value: string }) {
  textOnButton.value = '✓'
  setTimeout(() => { textOnButton.value = defaultText }, 500)
}

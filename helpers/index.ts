import { Product } from '~/interfaces/product'
import { useCartStore } from '~/store'

export function findProductIndex (product: Product) {
  const productIndex = useCartStore().getCart.findIndex((productInCart: Product) => {
    return productInCart.title === product.title
  })

  return productIndex
}

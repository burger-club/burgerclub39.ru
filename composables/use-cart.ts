import { computed, Ref } from 'vue'
import { CartItem } from '~/interfaces/cart-item'
import { Product } from '~/interfaces/product'

type Cart = CartItem[]

export const useCart = () => {
  const cart: Ref<Cart> = useState('cart', () => [])

  const productsCount = computed(() =>
    cart.value.reduce((acc, item) => acc + item.amount, 0),
  )

  const totalPrice = computed(() =>
    cart.value
      .reduce(
        (acc, item) => acc + item.product.attributes.price * item.amount,
        0,
      )
      .toLocaleString('de-DE'),
  )

  const addProduct = (product: Product) => {
    const item = cart.value.find(item => item.product.id === product.id)

    if (!item) {
      cart.value.push({ product, amount: 1 })
      return
    }

    item.amount++
  }

  const removeProduct = (product: Product) => {
    const itemIndex = cart.value.findIndex(
      item => item.product.id === product.id,
    )
    const item = cart.value[itemIndex]

    if (item.amount === 1) {
      cart.value.splice(itemIndex, 1)
      return
    }

    item.amount--
  }

  const clear = () => (cart.value = [])

  return { cart, productsCount, totalPrice, addProduct, removeProduct, clear }
}

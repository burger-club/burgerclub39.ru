import { defineStore } from 'pinia'
import { CardProps } from '~/interfaces/card-props'

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cart: [] as CardProps[],
  }),
  getters: {
    getCart: (state: { cart: CardProps[] }) => state.cart,
    getProductsCount: (state: { cart: CardProps[] }) => state.cart.length, // rewrite
  },
  actions: {
    addProduct (product: CardProps) {
      this.cart.push(product)
    },
  },
})

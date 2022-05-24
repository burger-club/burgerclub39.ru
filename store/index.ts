import { defineStore } from 'pinia'
import { Product } from '~/interfaces/product'

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cart: [] as Product[],
  }),

  getters: {
    getCart: (state: { cart: Product[] }) => state.cart,
    getProductsCount: (state: { cart: Product[] }) => {
      return state.cart.reduce((productsCount, product) => {
        return productsCount + product.amount
      }, 0)
    },
  },

  actions: {
    addProduct (product: Product) {
      if (this.cart.some((productInCart: Product) => productInCart.title === product.title)) {
        const productIndex = this.cart.findIndex((productInCart: Product) => {
          return productInCart.title === product.title
        })

        this.cart[productIndex].amount++
        return
      }

      this.cart.push(product)
    },
  },
})

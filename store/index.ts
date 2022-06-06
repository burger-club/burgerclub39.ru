import { defineStore } from 'pinia'
import { Product } from '~/interfaces/product'
import { findProductIndex } from '~/helpers'

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
    getTotalPrice: (state: { cart: Product[] }) => {
      return state.cart.reduce((totalPrice, product) => {
        return totalPrice + product.price * product.amount
      }, 0).toLocaleString('de-DE')
    },
  },

  actions: {
    addProduct (product: Product) {
      if (this.cart.some((productInCart: Product) => productInCart.title === product.title)) {
        const productIndex = findProductIndex(product)

        this.cart[productIndex].amount++
        return
      }

      this.cart.push(product)
    },
    decrementAmount (product: Product) {
      const productIndex = findProductIndex(product)

      if (product.amount <= 1) {
        this.cart.splice(productIndex, 1)
        return
      }

      this.cart[productIndex].amount--
    },
  },
})

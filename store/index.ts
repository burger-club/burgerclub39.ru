import { defineStore } from 'pinia'
import { Product } from '~/interfaces/product'
import { findProductIndex } from '~/helpers'
import { City } from '~/interfaces/city'

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cart: [] as Product[],
    city: {} as City,
    cities: [] as City[],
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
    getCities: (state: { cities: City[] }) => {
      return state.cities
    },
    getPhone: (state: { city: City }) => {
      if (state.city.attributes) {
        return state.city.attributes.phone
      }

      return ''
    },
  },

  actions: {
    addProduct (product: Product) {
      if (this.cart.some((productInCart: Product) => productInCart.name === product.name)) {
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
    async downloadCities () {
      const { find } = useStrapi4()
      const response = await find('cities')

      this.cities = response.data
      this.city = response.data[0]
    },
    changeCity (city: City) {
      this.city = city
    },
  },
})

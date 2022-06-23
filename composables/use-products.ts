import { Product } from '~/interfaces/product'

export const useProducts = (): { products: Product[]} => {
  const { find } = useStrapi4()
  const { data: products } = useAsyncData('products', async () => {
    const { data } = await find('products', { populate: '*' })
    return data
  })

  return { products }
}

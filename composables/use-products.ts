import { Product } from '~/interfaces/product'

interface LazyData<T> {
  pending: boolean;
  data: T;
}

export const useProducts = () => {
  const { find } = useStrapi4()
  const { pending, data: products }: LazyData<Product[]> = useLazyAsyncData('products', async () => {
    const { data } = await find('products', { populate: '*' })
    return data
  })

  return { pending, products }
}

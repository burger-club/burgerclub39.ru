import { CartItem } from '~/interfaces/cart-item'

type OrderItem = Omit<CartItem, 'product'> & {
  product: number;
  __component: 'order-item.order-item';
}

interface Order {
  city: number;
  name: string;
  phone: string;
  address: string;
  items: OrderItem[];
}

export const useOrders = () => {
  const { create: strapiCreate } = useStrapi4()

  const create = (data :Order) => {
    return strapiCreate('orders', data)
  }

  return { create }
}

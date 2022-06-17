import { Image } from './image'

export interface Product {
  attributes: {
    name: string;
    description: string;
    price: number;
    image: Image;
  };
  id: number;
}

import { Image } from './image'

export interface CardProps {
  attributes: {
    name: string;
    description: string;
    price: number;
    image: Image;
  };
  id: number;
}

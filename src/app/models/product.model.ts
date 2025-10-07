import { CategoryInterface } from './category.model';

export interface ProductModel {
  id: number;
  name: string;
  price: number;
  //to be fixed
  category: { id: number };
  //
  description: string;
  imageUrl: string;
}

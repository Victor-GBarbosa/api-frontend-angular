import { CategoryInterface } from './category.model';
import { UserModel } from './user.model';

export interface ProductModel {
  id: number;
  name: string;
  price: number;
  user: UserModel;
  category: CategoryInterface;
  description: string;
  imageUrl: string;
}

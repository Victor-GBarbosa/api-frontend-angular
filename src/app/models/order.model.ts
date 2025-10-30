import { ProductModel } from './product.model';

export default interface OrderProductModel {
  id: number;
  product: ProductModel;
  quantity: number;
  subtotal: number;
}

export default interface OrderModel {
  id: number;
  orderProductList: OrderProductModel[];
  orderStatus: string;
  total: number;
}

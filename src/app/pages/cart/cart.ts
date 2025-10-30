import { Component, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { CartItemCard } from './components/cart-item-card/cart-item-card';
import OrderModel from '../../models/order.model';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import OrderProductModel from '../../models/order.model';

@Component({
  selector: 'app-cart',
  imports: [Header, CartItemCard],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart implements OnInit {
  private hasChanged: boolean = false;

  items!: OrderModel;
  itemList: OrderProductModel[] = [];

  constructor(private cartService: CartService, private authService: AuthService) {}

  getCartItems() {
    if (this.authService.isLoggedIn()) {
      console.log('is logged');
      let request = this.cartService.getOrderItems() as Observable<OrderModel>;

      if (request != null) {
        console.log('is not null');
        request.subscribe({
          next: (response) => {
            this.items = response;
            this.itemList = [...response.orderProductList];
            console.log(this.itemList);
          },
        });
      }
    }
  }

  ngOnInit(): void {
    console.log('init');
    this.getCartItems();
  }
}

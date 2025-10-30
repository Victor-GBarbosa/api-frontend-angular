import { Component, Input, OnInit } from '@angular/core';
import OrderProductModel from '../../../../models/order.model';

@Component({
  selector: 'app-cart-item-card',
  imports: [],
  templateUrl: './cart-item-card.html',
  styleUrl: './cart-item-card.scss',
})
export class CartItemCard implements OnInit {
  @Input() item!: OrderProductModel;

  constructor() {}
  ngOnInit(): void {
    console.log(this.item);
  }

  increaseQuantity(): void {
    this.item.quantity++;
  }

  decreaseQuantity(): void {
    if (this.item.quantity > 0) {
      this.item.quantity--;
    }
  }
}

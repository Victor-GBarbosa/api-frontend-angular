import { Component, Input } from '@angular/core';
import { ProductCardData } from './product-card-data.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  @Input() productData!: ProductCardData;
}

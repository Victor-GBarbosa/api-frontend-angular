import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { ProductCardData } from '../product-card/product-card-data.model';

@Component({
  selector: 'app-header',
  imports: [ProductCard],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  productData: ProductCardData = {
    name: 'Nike PrintStream',
    price: 349.99,
    description:
      'Tenis Nike Air Force com acabamento inspirado na serie de skins PrintStream de Counter Strike 2',
    imageURL:
      'https://i.etsystatic.com/57544560/r/il/ce5f1f/7006977535/il_fullxfull.7006977535_7zu6.jpg',
  };
}

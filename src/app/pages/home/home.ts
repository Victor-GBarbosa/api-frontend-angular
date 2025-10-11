import { Component, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { Banner } from '../../components/banner/banner';
import { ProductCard } from '../../components/product-card/product-card';
import { HomePageService } from '../../services/home-page';
import { ProductModel } from '../../models/product.model';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-home',
  imports: [Header, Banner, ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  products: ProductModel[] = [];
  bannerImages: string[] = [
    'https://acdn-us.mitiendanube.com/stores/003/064/118/themes/amazonas/2-slide-1751391104739-4999304107-42f33b85d1734f0a887f32e81a5fcbbe1751391106-1920-1920.webp?633981898',
    'https://img.quizur.com/f/img6447f12cd4a6a2.53982006.png?lastEdited=1682436402',
    'https://pm1.aminoapps.com/8619/921d849b4417616568259608f5f39766e74013c9r1-1080-585v2_hq.jpg',
    'https://cdn-0001.qstv.on.epicgames.com/mVXxoBXWUDgKcAEOyr/image/landscape_comp.jpeg',
    'https://img.cdndsgni.com/preview/10025278.jpg',
    'https://www.shutterstock.com/image-vector/ad-banner-natural-beauty-products-600nw-1780339220.jpg',
  ];

  constructor(
    private pageService: HomePageService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.pageService.productsRequest().subscribe({
      next: (response) => (this.products = response),
      error: () => this.notificationService.show('Erro ao Carregar os produtos', 'error'),
    });
  }
}

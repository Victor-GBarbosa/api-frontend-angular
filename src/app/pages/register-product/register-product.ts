import { Component, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductCardData } from '../../components/product-card/product-card-data.model';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductRegistration } from '../../services/product-registration.service';
import { NotificationService } from '../../services/notification.service';
import { CategoryInterface } from '../../models/category.model';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-product',
  imports: [Header, ProductCard, ReactiveFormsModule],
  templateUrl: './register-product.html',
  styleUrl: './register-product.scss',
})
export class RegisterProduct implements OnInit {
  public productRegisterForm: FormGroup;
  public categories: CategoryInterface[] | [] = [];

  private placeholderData: ProductCardData = {
    name: 'Nome do produto',
    price: 0,
    description: 'Descrição do produto',
    imageUrl: 'https://placehold.co/600x400/EEE/31343C?text=Imagem',
  };

  productCardData: ProductCardData = { ...this.placeholderData };

  constructor(
    private fb: FormBuilder,
    private productRegistrationService: ProductRegistration,
    private notificationService: NotificationService,
    private cookieService: CookieService,
    private router: Router
  ) {
    if (!this.cookieService.check('auth_token')) {
      console.log(this.cookieService.get('auth_token'));
      this.router.navigate(['']);
    }

    console.log(this.cookieService.get('auth_token'));
    this.productRegisterForm = this.fb.group({
      name: ['', [Validators.required]],
      price: [null, [Validators.required]],
      description: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      initialStock: [null, [Validators.required]],
      category: ['0', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.productRegisterForm.valueChanges.subscribe((formValues) => {
      this.productCardData = {
        name: formValues.name || this.placeholderData.name,
        price: formValues.price || this.placeholderData.price,
        description: formValues.description || this.placeholderData.description,
        imageUrl: formValues.imageURL || this.placeholderData.imageUrl,
      };
    });

    this.setCategories();
  }

  setCategories(): void {
    this.productRegistrationService.getCategories().subscribe({
      next: (response) => {
        console.log(response);
        this.categories = response;
      },
      error: (response) => {
        this.notificationService.show('Não foi possivel carregar as categorias', 'error');
      },
    });
  }

  onSubmit(): void {
    // to be fixed
    let { initialStock, category, ...productToSubmit } = this.productRegisterForm.value;
    productToSubmit.category = { id: category };
    //
    console.log(productToSubmit);
    this.productRegistrationService
      .submitProduct(productToSubmit, this.cookieService.get('auth_token'))
      .subscribe({
        next: (promise) => {
          console.log(promise);
        },
        error: (promise) => {
          console.log(promise);
        },
      });
    console.log('submited');
  }
}

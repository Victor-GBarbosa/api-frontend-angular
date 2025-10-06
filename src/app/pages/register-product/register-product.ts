import { Component, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductCardData } from '../../components/product-card/product-card-data.model';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProductRegistration } from '../../services/product-registration.service';
import { privateDecrypt } from 'crypto';
import { NotificationService } from '../../services/notification.service';
import { error } from 'console';
import { CategoryInterface } from '../../models/category.model';
import { DefaultHttpExecptionHendler } from '../../models/defaultHttpExpectionHendler';

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
    imageURL: 'https://placehold.co/600x400/EEE/31343C?text=Imagem',
  };

  productCardData: ProductCardData = { ...this.placeholderData };

  constructor(
    private fb: FormBuilder,
    private productRegistrationService: ProductRegistration,
    private notificationService: NotificationService
  ) {
    this.productRegisterForm = this.fb.group({
      name: ['', [Validators.required]],
      price: [null, [Validators.required]],
      description: ['', [Validators.required]],
      imageURL: ['', [Validators.required]],
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
        imageURL: formValues.imageURL || this.placeholderData.imageURL,
      };
    });

    this.setCategories();
  }

  setCategories(): void {
    this.productRegistrationService.getCategories().subscribe({
      next: (response) => {
        this.categories = response;
      },
      error: (response) => {
        this.notificationService.show('Não foi possivel carregar as categorias', 'error');
      },
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../environments/environment';
import { CategoryInterface } from '../models/category.model';

import { Observable, throwError } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProductRegistration {
  private apiUrl = enviroment.apiUrl;

  constructor(
    private http: HttpClient,

    private authService: AuthService
  ) {}

  getCategories(): Observable<CategoryInterface[]> {
    return this.http.get<CategoryInterface[]>(this.apiUrl + 'category');
  }

  submitProduct(product: ProductModel): Observable<any> {
    if (!this.authService.isLoggedIn()) {
      return throwError(() => new Error('Usuario não esta autenticado'));
    }

    return this.http.post(this.apiUrl + 'product', product, {
      headers: {
        Authorization: this.authService.getToken(),
      },
    });
  }
}

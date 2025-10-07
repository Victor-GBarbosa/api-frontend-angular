import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../environments/environment';
import { CategoryInterface } from '../models/category.model';
import { HttpErrorHandling } from './http-error-handling';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductRegistration {
  private apiUrl = enviroment.apiUrl;

  constructor(private http: HttpClient, private httpErrorHandling: HttpErrorHandling) {}

  getCategories(): Observable<CategoryInterface[]> {
    return this.http.get<CategoryInterface[]>(this.apiUrl + 'category');
  }

  submitProduct(product: ProductModel, token: string): Observable<any> {
    return this.http.post(this.apiUrl + 'product', product, {
      headers: {
        Authorization: token,
      },
    });
  }
}

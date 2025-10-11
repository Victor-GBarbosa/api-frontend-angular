import { Injectable } from '@angular/core';
import { enviroment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  private apiUrl = enviroment.apiUrl;

  constructor(private http: HttpClient) {}

  productsRequest(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.apiUrl + 'products');
  }
}

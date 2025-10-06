import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../environments/environment';
import { CategoryInterface } from '../models/category.model';
import { HttpErrorHandling } from './http-error-handling';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductRegistration {
  private apiUrl = enviroment.apiUrl;

  constructor(private http: HttpClient, private httpErrorHandling: HttpErrorHandling) {}

  getCategories(): Observable<CategoryInterface[]> {
    return this.http.get<CategoryInterface[]>(this.apiUrl + 'category');
  }
}

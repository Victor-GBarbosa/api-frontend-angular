import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { enviroment } from '../../environments/environment';
import { UserAuthInfoModel } from '../models/auth.model';
import OrderProductModel from '../models/order.model';
import OrderModel from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getOrderItems(): Observable<OrderModel> | null {
    if (this.authService.isLoggedIn()) {
      let userInfo: UserAuthInfoModel = this.authService.getUserAuthInfo();
      return this.http.get<OrderModel>(enviroment.apiUrl + `users/${userInfo.email}/cart`, {
        headers: {
          Authorization: userInfo.token,
        },
      });
    }
    return null;
  }
}

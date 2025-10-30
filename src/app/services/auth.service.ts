import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoginCredentials, LoginResponse } from '../models/login.interface';
import { response } from 'express';
import { NotificationService } from './notification.service';
import { RegisterCredentials } from '../models/register.interface';
import { enviroment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { UserAuthInfoModel } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
    private cookieService: CookieService
  ) {}
  private apiUrl = enviroment.apiUrl;

  login(credentials: LoginCredentials) {
    this.http.post<UserAuthInfoModel>(`${this.apiUrl}auth/login`, credentials).subscribe({
      next: (loginResponse) => {
        this.setUserAuthInfo(loginResponse);
      },
      error: (error) => {},
    });
  }

  setToken(token: string): void {
    let maxAge = new Date();
    maxAge.setHours(maxAge.getHours() + 1);
    this.cookieService.set('auth_token', token, maxAge, '/', undefined, false, 'Lax');
  }

  getToken(): string {
    if (this.cookieService.get('auth_token')) {
      return this.cookieService.get('auth_token');
    }
    return '';
  }

  setUserAuthInfo(info: UserAuthInfoModel): void {
    let maxAge = new Date();
    maxAge.setHours(maxAge.getHours() + 1);
    this.cookieService.set('auth_token', info.token, maxAge, '/', undefined, false, 'Lax');
    this.cookieService.set('user_email', info.email);
    this.cookieService.set('user_id', info.id.toString());
  }

  getUserAuthInfo(): UserAuthInfoModel {
    return {
      token: this.cookieService.get('auth_token'),
      email: this.cookieService.get('user_email'),
      id: parseInt(this.cookieService.get('user_id')),
    };
  }

  isLoggedIn(): boolean {
    return this.cookieService.check('auth_token');
  }

  logout(): void {
    this.cookieService.delete('auth_token');
  }

  register(credentials: RegisterCredentials) {
    this.http.post<string>(`${this.apiUrl}auth/register`, credentials).subscribe({
      next: (registerResponse) => {
        this.notificationService.show('Logado com sucesso', 'success');
      },
      error: (error) => {
        // console.error('Erro na requisição:', error);
        this.notificationService.show('teste', 'error'); // notification test
      },
    });
  }
}

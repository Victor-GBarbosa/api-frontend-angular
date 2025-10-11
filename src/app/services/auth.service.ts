import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoginCredentials, LoginResponse } from '../models/login.interface';
import { response } from 'express';
import { NotificationService } from './notification.service';
import { RegisterCredentials } from '../models/register.interface';
import { enviroment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';

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
    this.http.post<LoginResponse>(`${this.apiUrl}auth/login`, credentials).subscribe({
      next: (loginResponse) => {
        this.setToken(loginResponse.token);
      },
      error: (error) => {},
    });
  }

  setToken(token: string): void {
    const maxAge = 60 * 60 * 24 * 30; // 30 dias em segundos (Será mudado em breve)
    this.cookieService.set('auth_token', token, maxAge, '/', undefined, true, 'Strict');
  }

  getToken(): string {
    if (this.cookieService.get('auth_tokenk')) {
      return this.cookieService.get('auth_tokenk');
    }
    return '';
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
        console.error('Erro na requisição:', error);
        this.notificationService.show('teste', 'error'); // notification test
      },
    });
  }
}

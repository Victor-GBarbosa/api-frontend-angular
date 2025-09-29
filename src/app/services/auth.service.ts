import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoginCredentials, LoginResponse } from '../models/login.interface';
import { response } from 'express';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  login(credentials: LoginCredentials) {
    console.log(credentials);
    let response;
    this.http.post<LoginResponse>(`${this.apiUrl}auth/login`, credentials).subscribe({
      next: (loginResponse) => {
        this.setToken(loginResponse.token);
        console.log('Resposta recebida:', loginResponse);
      },
      error: (error) => {
        console.error('Erro na requisição:', error);
      },
    });
  }

  setToken(token: string): void {
    document.cookie = `auth_token=${token}; path=/; secure; samesite=strict; max-age=2147483647 `;
  }

  getToken(): string | null {
    const cookies = document.cookie.split(';');
    const tokenCookie = cookies.find((cookie) => cookie.trim().startsWith('auth_token='));
    return tokenCookie ? tokenCookie.split('=')[1] : null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
}

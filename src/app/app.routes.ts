import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { RegisterProduct } from './pages/register-product/register-product';
import { Home } from './pages/home/home';
import { UserManagement } from './pages/user-management/user-management';
import { Cart } from './pages/cart/cart';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'register-product', component: RegisterProduct },
  { path: 'user-management', component: UserManagement },
  { path: 'test', component: Cart },
];

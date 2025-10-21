import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { RegisterProduct } from './pages/register-product/register-product';
import { Home } from './pages/home/home';
import { AlertPopUp } from './components/assets/alert-pop-up/alert-pop-up';
import { UserCard } from './components/user-card/user-card';
import { UserManagement } from './pages/user-management/user-management';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'register-product', component: RegisterProduct },
  { path: 'test', component: UserManagement },
];

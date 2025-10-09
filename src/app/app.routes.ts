import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Header } from './components/header/header';
import { ProductCard } from './components/product-card/product-card';
import { Dropdown } from './components/assets/dropdown/dropdown';
import { RegisterProduct } from './pages/register-product/register-product';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'register-product', component: RegisterProduct },
  { path: 'test', component: RegisterProduct },
];

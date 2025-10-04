import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Header } from './components/header/header';
import { ProductCard } from './components/product-card/product-card';
import { Dropdown } from './components/dropdown/dropdown';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'register', component: Register },
  { path: 'test', component: Dropdown },
];

import { Routes } from '@angular/router';
import { login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  { path: 'login', component: login },
  { path: 'register', component: Register },
  {
    path: 'dashboard',
    component: Dashboard,
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' },
];

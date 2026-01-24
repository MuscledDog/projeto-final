import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  // Welcome
  {
    path: 'welcome',
    loadComponent: () =>
      import('./pages/welcome/welcome').then(m => m.Welcome)
  },
  // Sobre
  {
  path: 'sobre',
  loadComponent: () =>
    import('./pages/sobre/sobre').then(m => m.Sobre)
},
  // Login
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login').then(m => m.Login)
  },


];

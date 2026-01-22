import { Homes } from './pages/homes/homes';
import { Routes } from '@angular/router';
import { Login } from './pages/login/login';

export const routes: Routes = [
  /* Nossa 1ª rota */
    {path:'', redirectTo:"welcome", pathMatch:'full'},

    {path:"welcome", loadComponent: () => import('./pages/welcome/welcome') .then ((vasco) => vasco.Welcome)} ,

    {path:"pages/login", loadComponent: () => import("./pages/login/login") .then (ze => ze.Login)},

  /** Rota padrão sem lazyload */

    {path:"pages/homes", component: Homes},


    /** Nossa ultima rota */
    {path:'**', loadComponent:() => import('./pages/welcome/welcome') .then(c => c.Welcome)},
];

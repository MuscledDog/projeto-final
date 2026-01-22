import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Sobre } from './pages/sobre/sobre';
import { Welcome } from './pages/welcome/welcome';

export const routes: Routes = [
  /* Nossa 1ª rota */
    {path:'', redirectTo:"welcome", pathMatch:'full'},

    {path:"welcome", loadComponent: () => import('./pages/welcome/welcome') .then ((a) => a.Welcome)} ,

    {path:"pages/login", loadComponent: () => import("./pages/login/login") .then (b => b.Login)},
    {path:'**', loadComponent:() => import('./pages/sobre/sobre') .then(c => c.Sobre)},

  /** Rota padrão sem lazyload */

    {path:"pages/welcome", component: Welcome},


    /** Nossa ultima rota */
    {path:'**', loadComponent:() => import('./pages/welcome/welcome') .then(c => c.Welcome)},
];

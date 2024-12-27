import {  Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pages',
    loadComponent: () =>
      import('./layout/layout.component').then((m) => m.LayoutComponent),
    loadChildren: () =>
      import('./pages/pages.routes').then((mod) => mod.PAGES_ROUTES),
  },

  {
    path: 'auth',
    loadComponent: () =>
      import('./@core/auth/auth/auth.component').then((m) => m.AuthComponent),
    loadChildren: () =>
      import('./@core/auth/auth/auth.routes').then((mod) => mod.AUTH_ROUTES),
  },

  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

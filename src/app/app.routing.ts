import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'read', pathMatch: 'full' },
  {
    path: 'read',
    loadChildren: () => import('./read/read.module').then((m) => m.ReadModule),
  },
];

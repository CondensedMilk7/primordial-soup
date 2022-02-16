import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'reader', pathMatch: 'full' },
  {
    path: 'reader',
    loadChildren: () =>
      import('./reader/reader.module').then((m) => m.ReaderModule),
  },
];

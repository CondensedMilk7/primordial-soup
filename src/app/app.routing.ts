import { Route } from '@angular/router';
import { ReaderComponent } from './reader/reader.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'reader', pathMatch: 'full' },
  {
    path: 'reader/:article',
    component: ReaderComponent,
    pathMatch: 'full',
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
];

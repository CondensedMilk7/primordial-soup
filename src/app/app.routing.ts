import { Route } from '@angular/router';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';
import { ReaderComponent } from './reader/reader.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
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
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];

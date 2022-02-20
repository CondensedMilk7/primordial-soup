import { Route } from '@angular/router';
import { ReaderComponent } from './reader.component';

export const readRoutes: Route[] = [
  { path: ':article', component: ReaderComponent, pathMatch: 'full' },
];

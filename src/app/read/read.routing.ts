import { Route } from '@angular/router';
import { ReadComponent } from './read.component';

export const readRoutes: Route[] = [
  { path: '', component: ReadComponent, pathMatch: 'full' },
];

import { Route } from '@angular/router';
import { ReaderComponent } from './reader.component';

export const readRoutes: Route[] = [
  { path: '', component: ReaderComponent, pathMatch: 'full' },
];

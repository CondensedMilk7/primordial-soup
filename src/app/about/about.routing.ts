import { Route } from '@angular/router';
import { AboutComponent } from './about.component';

export const aboutRoutes: Route[] = [
  { path: '', component: AboutComponent, pathMatch: 'full' },
];

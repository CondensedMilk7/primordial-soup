import { Route } from '@angular/router';
import { ContactComponent } from './contact.component';

export const contactRoutes: Route[] = [
  { path: '', component: ContactComponent, pathMatch: 'full' },
];

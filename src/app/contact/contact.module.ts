import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ContactComponent } from './contact.component';
import { contactRoutes } from './contact.routing';
import { ContactEffects } from './store/effects';
import { contactReducer } from './store/reducers';
import { ContactService } from './store/services/';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(contactRoutes),
    StoreModule.forFeature('contact', contactReducer),
    EffectsModule.forFeature([ContactEffects]),
  ],
  providers: [ContactService],
})
export class ContactModule {}

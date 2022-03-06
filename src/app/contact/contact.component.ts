import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ContactActions } from './store/actions';
import { ContactSelectors } from './store/selectors';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  loading$ = this.store.select(ContactSelectors.selectLoading);

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });

  constructor(private store: Store) {}

  onSubmit() {
    this.store.dispatch(ContactActions.submitMessage(this.contactForm.value));
  }
}

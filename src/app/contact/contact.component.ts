import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { MetaService } from '../common/services/meta/meta.service';
import { ContactActions } from './store/actions';
import { ContactSelectors } from './store/selectors';

@UntilDestroy()
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  loading$ = this.store.select(ContactSelectors.selectLoading);
  success$ = this.store.select(ContactSelectors.selectSuccess);

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });

  constructor(private store: Store, private metaService: MetaService) {}

  ngOnInit(): void {
    // Reset form only if it has been submitted successfully
    this.success$.pipe(untilDestroyed(this)).subscribe((success) => {
      if (success) {
        this.contactForm.reset();
      }
    });

    this.metaService.updateMetaTags(
      'Contact Us',
      'https://i.imgur.com/N9o6LfX.jpg',
      'Fill out the contact form'
    );
  }

  onSubmit() {
    this.store.dispatch(ContactActions.submitMessage(this.contactForm.value));
  }
}

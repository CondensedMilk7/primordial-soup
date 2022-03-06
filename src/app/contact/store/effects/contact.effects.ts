import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { ContactActions, ContactApiActions } from '../actions';
import { ContactService } from '../services';

@Injectable()
export class ContactEffects {
  submitMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.submitMessage),
      concatMap((message) =>
        this.contactService
          .sendMessage(message)
          .pipe(
            map((response) =>
              ContactApiActions.submitMessagSuccess({ success: response })
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private contactService: ContactService
  ) {}
}

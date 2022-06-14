import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of } from 'rxjs';
import { NotificationService } from 'src/app/common/services/notification/notification.service';
import { ContactActions, ContactApiActions } from '../actions';
import { ContactErrorResponse } from '../models';
import { ContactService } from '../services';

@Injectable()
export class ContactEffects {
  submitMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.submitMessage),
      concatMap((message) =>
        this.contactService.sendMessage(message).pipe(
          map(() => {
            const successMessage = 'Your message has been sent, thank you!';
            this.notificationService.notify(successMessage, 'OK', 'success');
            return ContactApiActions.submitMessagSuccess({
              success: successMessage,
            });
          }),
          catchError((response: ContactErrorResponse) => {
            const error = response.error.errors[0];
            this.notificationService.notify(
              `Error: issue with ${error.field}, ${error.message}`,
              'close',
              'error'
            );
            return of(
              ContactApiActions.submitMessageFailed({ error: error.message })
            );
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private contactService: ContactService,
    private notificationService: NotificationService
  ) {}
}

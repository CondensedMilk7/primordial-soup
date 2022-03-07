import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { NotificationService } from 'src/app/common/notification/notification.service';
import { ContactActions, ContactApiActions } from '../actions';
import { ContactService } from '../services';

@Injectable()
export class ContactEffects {
  submitMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.submitMessage),
      concatMap((message) =>
        this.contactService.sendMessage(message).pipe(
          map((response) => {
            this.notificationService.notify(response, 'OK', 'success');
            return ContactApiActions.submitMessagSuccess({ success: response });
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

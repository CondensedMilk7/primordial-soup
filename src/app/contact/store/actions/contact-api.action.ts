import { createAction, props } from '@ngrx/store';

export const submitMessagSuccess = createAction(
  '[Contact API] Submit Message Successfully',
  props<{ success: string }>()
);

export const submitMessageFailed = createAction(
  '[Contact API] Submit Message Failed',
  props<{ error: string }>()
);

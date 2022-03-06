import { createAction, props } from '@ngrx/store';

export const submitMessage = createAction(
  '[Contact Page] Submit Message',
  props<{ name: string; surname: string; email: string; message: string }>()
);

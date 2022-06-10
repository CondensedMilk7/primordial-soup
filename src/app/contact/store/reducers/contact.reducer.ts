import { createReducer, on } from '@ngrx/store';
import { ContactActions, ContactApiActions } from '../actions';
import { ContactState } from '../states';

const initialState: ContactState = {
  error: '',
  success: '',
  loading: false,
};

export const contactReducer = createReducer(
  initialState,
  on(
    ContactActions.submitMessage,
    (state): ContactState => ({ ...state, loading: true })
  ),
  on(
    ContactApiActions.submitMessagSuccess,
    (state, { success }): ContactState => ({
      ...state,
      loading: false,
      success: success,
    })
  ),
  on(
    ContactApiActions.submitMessageFailed,
    (state, { error }): ContactState => ({
      ...state,
      loading: false,
      error: error,
    })
  )
);

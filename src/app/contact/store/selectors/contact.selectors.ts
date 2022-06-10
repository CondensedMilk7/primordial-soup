import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ContactState } from '../states';

export const selectContact = createFeatureSelector<ContactState>('contact');

export const selectLoading = createSelector(
  selectContact,
  (state: ContactState) => state.loading
);

export const selectError = createSelector(
  selectContact,
  (state: ContactState) => state.error
);

export const selectSuccess = createSelector(
  selectContact,
  (state: ContactState) => state.success
);

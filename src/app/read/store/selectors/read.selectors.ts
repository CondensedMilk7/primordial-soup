import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReadState } from '../states';

export const selectRead = createFeatureSelector<ReadState>('read');

export const selectArticlesList = createSelector(
  selectRead,
  (state: ReadState) => state.articlesList
);

export const selectCurrentArticle = createSelector(
  selectRead,
  (state: ReadState) => state.selectedArticle
);

export const selectError = createSelector(
  selectRead,
  (state: ReadState) => state.error
);

export const selectLoading = createSelector(
  selectRead,
  (state: ReadState) => state.loading
);

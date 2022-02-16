import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReaderState } from '../states';

export const selectRead = createFeatureSelector<ReaderState>('reader');

export const selectArticlesList = createSelector(
  selectRead,
  (state: ReaderState) => state.articlesList
);

export const selectCurrentArticle = createSelector(
  selectRead,
  (state: ReaderState) => state.selectedArticle
);

export const selectError = createSelector(
  selectRead,
  (state: ReaderState) => state.error
);

export const selectLoading = createSelector(
  selectRead,
  (state: ReaderState) => state.loading
);

export const selectFilteredArticles = createSelector(
  selectRead,
  (state: ReaderState) => state.filteredList
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReaderState } from '../states';

export const selectReader = createFeatureSelector<ReaderState>('reader');

export const selectArticlesList = createSelector(
  selectReader,
  (state: ReaderState) => state.articlesList
);

export const selectCurrentArticle = createSelector(
  selectReader,
  (state: ReaderState) => state.selectedArticle
);

export const selectError = createSelector(
  selectReader,
  (state: ReaderState) => state.error
);

export const selectLoadingList = createSelector(
  selectReader,
  (state: ReaderState) => state.loadingList
);

export const selectLoadingArticle = createSelector(
  selectReader,
  (state: ReaderState) => state.loadingArticle
);

export const selectFilteredArticles = createSelector(
  selectReader,
  (state: ReaderState) => state.filteredList
);

export const selectDrawerOpen = createSelector(
  selectReader,
  (state: ReaderState) => state.drawerOpen
);

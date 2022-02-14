import { createReducer, on } from '@ngrx/store';
import { ReadActions, ReadApiActions } from '../actions';
import { ArticleUtils } from '../services/article.utils';
import { ReadState } from '../states';

const initialState: ReadState = {
  articlesList: [],
  filteredList: [],
  selectedArticle: '',
  loading: false,
  error: null,
};
export const readReducer = createReducer(
  initialState,
  on(ReadActions.getArticlesList, (state) => ({ ...state, loading: true })),

  on(ReadApiActions.getArticlesListSuccess, (state, { articles }) => ({
    ...state,
    articlesList: articles,
    loading: false,
  })),
  on(ReadApiActions.getArticlesListFailed, (state) => ({
    ...state,
    loading: false,
    error: 'Error: Failed to retrieve articles',
  })),

  on(ReadActions.searchArticle, (state, { filter }) => ({
    ...state,
    filteredList: ArticleUtils.filterArticles(state.articlesList, filter),
  }))
);

import { createReducer, on } from '@ngrx/store';
import { ReadActions, ReadApiActions } from '../actions';
import { ReadState } from '../states';

const initialState: ReadState = {
  articlesList: [],
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
  }))
);

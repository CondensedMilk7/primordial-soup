import { createReducer, on } from '@ngrx/store';
import { ReaderActions, ReaderApiActions } from '../actions';
import { ArticleUtils } from '../services/article.utils';
import { ReaderState } from '../states';

const initialState: ReaderState = {
  articlesList: [],
  filteredList: [],
  selectedArticle: {
    key: '',
    videoUrl: '',
    date: 0,
  },
  loading: false,
  error: null,
  filter: '',
};
export const readerReducer = createReducer(
  initialState,
  on(ReaderActions.getArticlesList, (state) => ({ ...state, loading: true })),

  on(ReaderApiActions.getArticlesListSuccess, (state, { articles }) => ({
    ...state,
    articlesList: articles,
    filteredList: ArticleUtils.filterArticles(articles, state.filter),
    loading: false,
  })),
  on(ReaderApiActions.getArticlesListFailed, (state) => ({
    ...state,
    loading: false,
    error: 'Error: Failed to retrieve articles',
  })),

  on(ReaderActions.searchArticle, (state, { filter }) => ({
    ...state,
    filteredList: ArticleUtils.filterArticles(state.articlesList, filter),
  })),

  on(ReaderActions.selectArticle, (state, { key }) => ({
    ...state,
    loading: true,
    selectedArticle: {
      key: key,
      videoUrl: '',
      date: 0,
    },
  })),

  on(ReaderApiActions.getArticleDataSuccess, (state, { videoUrl, date }) => ({
    ...state,
    loading: false,
    selectedArticle: {
      ...state.selectedArticle,
      videoUrl: videoUrl,
      date: date,
    },
  }))
);

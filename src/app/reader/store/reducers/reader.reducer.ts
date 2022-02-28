import { createReducer, on } from '@ngrx/store';
import { ReaderActions, ReaderApiActions } from '../actions';
import { ArticleUtils } from '../services/article.utils';
import { ReaderState } from '../states';

const initialState: ReaderState = {
  articlesList: [],
  filteredList: [],
  selectedArticle: {
    title: '',
    key: '',
    videoId: '',
    date: 0,
  },
  loadingList: false,
  loadingArticle: false,
  error: null,
  filter: '',
  drawerOpen: false,
};

export const readerReducer = createReducer(
  initialState,
  on(
    ReaderActions.getArticlesList,
    (state): ReaderState => ({ ...state, loadingList: true })
  ),

  on(
    ReaderApiActions.getArticlesListSuccess,
    (state, { articles }): ReaderState => ({
      ...state,
      articlesList: articles,
      filteredList: ArticleUtils.filterArticles(articles, state.filter),
      loadingList: false,
    })
  ),
  on(
    ReaderApiActions.getArticlesListFailed,
    (state): ReaderState => ({
      ...state,
      loadingList: false,
      error: 'Error: Failed to retrieve articles',
    })
  ),

  on(
    ReaderActions.searchArticle,
    (state, { filter }): ReaderState => ({
      ...state,
      filteredList: ArticleUtils.filterArticles(state.articlesList, filter),
    })
  ),

  on(
    ReaderActions.selectArticle,
    (state, { key }): ReaderState => ({
      ...state,
      loadingArticle: true,
      selectedArticle: {
        key: key,
        title: '',
        videoId: '',
        date: 0,
      },
    })
  ),

  on(
    ReaderApiActions.getArticleDataSuccess,
    (state, { videoId, date, title }): ReaderState => ({
      ...state,
      loadingArticle: false,
      selectedArticle: {
        ...state.selectedArticle,
        videoId: videoId,
        date: date,
        title: title,
      },
    })
  ),

  on(
    ReaderActions.toggleArticlesDrawer,
    (state): ReaderState => ({
      ...state,
      drawerOpen: !state.drawerOpen,
    })
  )
);

import { createAction, props } from '@ngrx/store';
import { ArticleListItem } from '../models/article-list.model';

export const getArticlesListSuccess = createAction(
  '[Reader API] Get Articles List Successfully',
  props<{ articles: ArticleListItem[] }>()
);

export const getArticlesListFailed = createAction(
  '[Reader API] Get Articles List Failed',
  props<{ error: string }>()
);

export const getArticleDataSuccess = createAction(
  '[Reader API] Get Article Data Successfully',
  props<{
    title: string;
    videoId: string;
    date: string;
    author: string;
    references: string[];
  }>()
);

export const getArticleDataFailed = createAction(
  '[Reader API] Get Article Data Failed',
  props<{ error: string }>()
);

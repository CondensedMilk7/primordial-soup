import { createAction, props } from '@ngrx/store';
import { ArticleListItem } from '../models/article-list.model';

export const getArticlesListSuccess = createAction(
  '[Reader API] Get Articles List Successfully',
  props<{ articles: ArticleListItem[] }>()
);

export const getArticlesListFailed = createAction(
  '[Reader API] Get Articles List Failed'
);

export const getArticleTextSuccess = createAction(
  '[Reader API] Get Article Text Successfully',
  props<{ articleText: string }>()
);

export const getArticleTextFailed = createAction(
  '[Reader API] Get Article Text Failed'
);

export const getArticleDataSuccess = createAction(
  '[Reader API] Get Article Data Successfully',
  props<{ title: string; videoId: string; date: number }>()
);

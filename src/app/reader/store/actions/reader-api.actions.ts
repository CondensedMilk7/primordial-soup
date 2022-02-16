import { createAction, props } from '@ngrx/store';
import { ArticleListItem } from '../models/article-list.model';

export const getArticlesListSuccess = createAction(
  '[Reader API] Get Articles List Successfully',
  props<{ articles: ArticleListItem[] }>()
);

export const getArticlesListFailed = createAction(
  '[Reader API] Get Articles List Failed'
);

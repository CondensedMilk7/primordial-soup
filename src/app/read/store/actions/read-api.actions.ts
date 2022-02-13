import { createAction, props } from '@ngrx/store';
import { ArticleListItem } from '../../article-list.model';

export const getArticlesListSuccess = createAction(
  '[Read API] Get Articles List Successfully',
  props<{ articles: ArticleListItem[] }>()
);

export const getArticlesListFailed = createAction(
  '[Read API] Get Articles List Failed'
);

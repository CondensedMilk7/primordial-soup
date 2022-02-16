import { createAction, props } from '@ngrx/store';

export const getArticlesList = createAction('[Read Page] Get Articles List');

export const searchArticle = createAction(
  '[Reader Page] Search Article',
  props<{ filter: string }>()
);

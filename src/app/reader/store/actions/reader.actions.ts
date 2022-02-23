import { createAction, props } from '@ngrx/store';

export const getArticlesList = createAction(
  '[Read Vertical Navigation] Get Articles List'
);

export const searchArticle = createAction(
  '[Reader Vertical Navigation] Search Article',
  props<{ filter: string }>()
);

export const selectArticle = createAction(
  '[Reader Page] Select Article',
  props<{ key: string }>()
);

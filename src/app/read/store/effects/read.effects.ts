import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { ReadActions, ReadApiActions } from '../actions';
import { ArticlesService } from '../services';

@Injectable()
export class ReadEffects {
  getArticlesList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ReadActions.getArticlesList),
      concatMap(() =>
        this.articlesService
          .getArticlesList()
          .pipe(
            map((articles) =>
              ReadApiActions.getArticlesListSuccess({ articles })
            )
          )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService
  ) {}
}

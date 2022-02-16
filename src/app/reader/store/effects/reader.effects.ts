import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { ReaderActions, ReaderApiActions } from '../actions';
import { ArticlesService } from '../services';

@Injectable()
export class ReaderEffects {
  getArticlesList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ReaderActions.getArticlesList),
      concatMap(() =>
        this.articlesService
          .getArticlesList()
          .pipe(
            map((articles) =>
              ReaderApiActions.getArticlesListSuccess({ articles })
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

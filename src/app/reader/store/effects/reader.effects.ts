import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of, tap } from 'rxjs';
import { NotificationService } from 'src/app/common/notification/notification.service';
import { ReaderActions, ReaderApiActions } from '../actions';
import { ArticlesService } from '../services';

@Injectable()
export class ReaderEffects {
  getArticlesList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ReaderActions.getArticlesList),
      concatMap(() =>
        this.articlesService.getArticlesList().pipe(
          map((articles) =>
            ReaderApiActions.getArticlesListSuccess({ articles })
          ),
          catchError((error) => {
            this.notificationService.notify(
              `Failed to get articles list. Server responded with error ${error.error}`,
              'close',
              'error'
            );
            return of(
              ReaderApiActions.getArticlesListFailed({ error: error.error })
            );
          })
        )
      )
    );
  });

  selectArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ReaderActions.selectArticle),
      concatMap(({ key }) =>
        this.articlesService.getArticleData(key).pipe(
          map((data) => ReaderApiActions.getArticleDataSuccess(data)),
          catchError((error) => {
            this.notificationService.notify(
              `Failed to get article data. Server responded with error ${error.error}`,
              'close'
            );
            return of(
              ReaderApiActions.getArticleDataFailed({ error: error.error })
            );
          })
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService,
    private notificationService: NotificationService
  ) {}
}

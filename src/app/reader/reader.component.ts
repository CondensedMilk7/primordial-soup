import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { ReaderActions } from './store/actions';
import { ReaderSelectors } from './store/selectors';

@UntilDestroy()
@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ReaderComponent implements OnInit {
  loading$ = this.store.select(ReaderSelectors.selectLoading);
  currentArticle$ = this.store.select(ReaderSelectors.selectCurrentArticle);

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(untilDestroyed(this)).subscribe((params) => {
      const key = params['article'];
      if (key) {
        this.store.dispatch(ReaderActions.selectArticle({ key: key }));
      }
    });
  }
}

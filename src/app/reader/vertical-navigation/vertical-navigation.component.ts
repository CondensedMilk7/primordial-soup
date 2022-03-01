import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { ReaderActions } from '../store/actions';
import { ReaderSelectors } from '../store/selectors';

@Component({
  selector: 'app-vertical-navigation',
  templateUrl: './vertical-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class VerticalNavigationComponent implements OnInit {
  loading$ = this.store.select(ReaderSelectors.selectLoadingList);
  filteredArticles$ = this.store.select(ReaderSelectors.selectFilteredArticles);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ReaderActions.getArticlesList());
  }

  onSearch(filterVal: string) {
    this.store.dispatch(ReaderActions.searchArticle({ filter: filterVal }));
  }
}

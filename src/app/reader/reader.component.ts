import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ReaderActions } from './store/actions';
import { ReaderSelectors } from './store/selectors';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
})
export class ReaderComponent implements OnInit {
  filteredArticles$ = this.store.select(ReaderSelectors.selectFilteredArticles);
  loading$ = this.store.select(ReaderSelectors.selectLoading);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ReaderActions.getArticlesList());
  }

  onSearch(filterVal: string) {
    this.store.dispatch(ReaderActions.searchArticle({ filter: filterVal }));
  }
}

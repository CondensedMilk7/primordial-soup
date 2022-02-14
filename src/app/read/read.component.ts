import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ReadActions } from './store/actions';
import { ReadSelectors } from './store/selectors';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {
  articles$ = this.store.select(ReadSelectors.selectArticlesList);
  filteredArticles$ = this.store.select(ReadSelectors.selectFilteredArticles);
  loading$ = this.store.select(ReadSelectors.selectLoading);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ReadActions.getArticlesList());
  }

  onSearch(filterVal: string) {
    this.store.dispatch(ReadActions.searchArticle({ filter: filterVal }));
  }
}

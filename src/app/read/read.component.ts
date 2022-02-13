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
  loading$ = this.store.select(ReadSelectors.selectLoading);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ReadActions.getArticlesList());
  }
}

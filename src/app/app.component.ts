import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ReaderSelectors } from './reader/store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  drawerOpened$ = this.store.select(ReaderSelectors.selectDrawerOpen);
  constructor(private store: Store) {}
}

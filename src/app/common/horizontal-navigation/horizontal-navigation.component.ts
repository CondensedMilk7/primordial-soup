import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { ReaderActions } from '../../reader/store/actions';
import { ReaderSelectors } from '../../reader/store/selectors';

@Component({
  selector: 'app-horizontal-navigation',
  templateUrl: './horizontal-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class HorizontalNavigationComponent {
  drawerOpened$ = this.store.select(ReaderSelectors.selectDrawerOpen);
  articleLoading$ = this.store.select(ReaderSelectors.selectLoadingArticle);

  constructor(private store: Store) {}

  onToggleDrawer() {
    this.store.dispatch(ReaderActions.toggleArticlesDrawer());
  }
}

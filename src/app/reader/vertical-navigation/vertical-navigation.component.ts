import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { MediaWatcherService, MEDIA_QUERY } from 'src/app/common/media-watcher';
import { ReaderActions } from '../store/actions';
import { ReaderSelectors } from '../store/selectors';
@UntilDestroy()
@Component({
  selector: 'app-vertical-navigation',
  templateUrl: './vertical-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class VerticalNavigationComponent implements OnInit {
  filteredArticles$ = this.store.select(ReaderSelectors.selectFilteredArticles);
  drawerOpen$ = this.store.select(ReaderSelectors.selectDrawerOpen);

  screenSmall = false;

  constructor(
    private store: Store,
    private mediaWatcherService: MediaWatcherService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(ReaderActions.getArticlesList());
    // Check if screen is small
    this.mediaWatcherService
      .matchMedia(MEDIA_QUERY.sm)
      .pipe(untilDestroyed(this))
      .subscribe((small) => {
        this.screenSmall = small;
      });
  }

  onSearch(filterVal: string) {
    this.store.dispatch(ReaderActions.searchArticle({ filter: filterVal }));
  }

  // Navigation happens through routerlink,
  // this method is only needed to close
  // The drawer when the screen is small
  onCardClicked() {
    if (this.screenSmall) {
      this.toggleDrawer();
    }
  }

  toggleDrawer() {
    this.store.dispatch(ReaderActions.toggleArticlesDrawer());
  }
}

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
  loading$ = this.store.select(ReaderSelectors.selectLoadingList);
  filteredArticles$ = this.store.select(ReaderSelectors.selectFilteredArticles);

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

  onCardClicked() {
    // Close drawer after a card is clicked, only if the screen is small.
    if (this.screenSmall) {
      this.toggleDrawer();
    }
  }

  toggleDrawer() {
    this.store.dispatch(ReaderActions.toggleArticlesDrawer());
  }
}

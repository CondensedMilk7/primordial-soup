import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MediaWatcherService, MEDIA_QUERY } from './common/media-watcher';
import { ReaderSelectors } from './reader/store/selectors';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  drawerOpened$ = this.store.select(ReaderSelectors.selectDrawerOpen);
  screenSmall$ = new Observable();
  constructor(
    private store: Store,
    private mediaWatcherService: MediaWatcherService
  ) {
    this.screenSmall$ = this.mediaWatcherService.matchMedia(MEDIA_QUERY.sm);
  }

  ngOnInit(): void {}
}

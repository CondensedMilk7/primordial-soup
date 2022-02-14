import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReadComponent } from './read.component';
import { readRoutes } from './read.routing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { FilterComponent } from './components/filter/filter.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { readReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ReadEffects } from './store/effects';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';

@NgModule({
  declarations: [
    ReadComponent,
    ArticleCardComponent,
    FilterComponent,
    ArticlesListComponent,
  ],
  exports: [ReadComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatProgressBarModule,
    RouterModule.forChild(readRoutes),
    StoreModule.forFeature('read', readReducer),
    EffectsModule.forFeature([ReadEffects]),
  ],
})
export class ReadModule {}

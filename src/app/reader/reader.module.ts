import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReaderComponent } from './reader.component';
import { readRoutes } from './reader.routing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { FilterComponent } from './components/filter/filter.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { readerReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ReaderEffects } from './store/effects';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReaderComponent,
    ArticleCardComponent,
    FilterComponent,
    ArticlesListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatProgressBarModule,
    RouterModule.forChild(readRoutes),
    StoreModule.forFeature('reader', readerReducer),
    EffectsModule.forFeature([ReaderEffects]),
  ],
})
export class ReaderModule {}

import { NgModule } from '@angular/core';
import { ReaderComponent } from './reader.component';
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
import { ArticleComponent } from './components/article/article.component';
import { MarkdownModule } from 'ngx-markdown';
import { VideoComponent } from './components/video/video.component';
import { VerticalNavigationComponent } from './vertical-navigation/vertical-navigation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ReaderComponent,
    VerticalNavigationComponent,
    ArticleCardComponent,
    FilterComponent,
    ArticlesListComponent,
    ArticleComponent,
    VideoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    RouterModule,
    StoreModule.forFeature('reader', readerReducer),
    EffectsModule.forFeature([ReaderEffects]),
    MarkdownModule.forChild(),
  ],

  exports: [VerticalNavigationComponent, ReaderComponent],
})
export class ReaderModule {}

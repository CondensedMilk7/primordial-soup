import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { FilterComponent } from './components/filter/filter.component';
import { MarkdownModule } from 'ngx-markdown';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ReaderComponent } from './reader.component';
import { ReaderEffects } from './store/effects';
import { readerReducer } from './store/reducers';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { VerticalNavigationComponent } from './vertical-navigation/vertical-navigation.component';
import { VideoComponent } from './components/video/video.component';

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
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule,
    StoreModule.forFeature('reader', readerReducer),
    EffectsModule.forFeature([ReaderEffects]),
    MarkdownModule.forChild(),
  ],

  exports: [VerticalNavigationComponent, ReaderComponent],
})
export class ReaderModule {}

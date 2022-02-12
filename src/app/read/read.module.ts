import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReadComponent } from './read.component';
import { readRoutes } from './read.routing';
import { VerticalNavigationComponent } from './vertical-navigation/vertical-navigation.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { FilterComponent } from './filter/filter.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ReadComponent,
    VerticalNavigationComponent,
    ArticleListComponent,
    ArticleCardComponent,
    FilterComponent,
  ],
  exports: [ReadComponent],
  imports: [CommonModule, MatSidenavModule, RouterModule.forChild(readRoutes)],
})
export class ReadModule {}

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ArticleListItem } from '../../store/models/article-list.model';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
})
export class ArticlesListComponent {
  @Input() articles!: ArticleListItem[] | null;
}

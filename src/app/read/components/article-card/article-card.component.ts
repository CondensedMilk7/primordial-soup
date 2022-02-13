import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ArticleListItem } from '../../article-list.model';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCardComponent {
  @Input() article!: ArticleListItem;
}

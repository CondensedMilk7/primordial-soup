import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ArticleListItem } from '../../store/models/article-list.model';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ArticleCardComponent {
  @Input() article!: ArticleListItem;
}

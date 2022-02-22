import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ArticleListItem } from '../../store/models/article-list.model';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ArticlesListComponent {
  @Input() articles!: ArticleListItem[] | null;
}

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
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
  @Output() cardClicked = new EventEmitter<void>();
  @Input() articles!: ArticleListItem[] | null;

  onCardClicked() {
    this.cardClicked.emit();
  }
}

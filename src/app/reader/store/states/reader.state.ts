import { ArticleListItem } from '../models/article-list.model';
import { SelectedArticle } from '../models/selected-article.model';

export interface ReaderState {
  articlesList: ArticleListItem[];
  filteredList: ArticleListItem[] | null;
  selectedArticle: SelectedArticle;
  error: string | null;
  loadingList: boolean;
  loadingArticle: boolean;
  filter: string;
  drawerOpen: boolean;
}

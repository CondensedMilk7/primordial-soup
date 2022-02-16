import { ArticleListItem } from '../models/article-list.model';

export interface ReadState {
  articlesList: ArticleListItem[];
  filteredList: ArticleListItem[] | null;
  selectedArticle: string;
  error: string | null;
  loading: boolean;
  filter: string;
}

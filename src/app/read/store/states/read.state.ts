import { ArticleListItem } from '../../article-list.model';

export interface ReadState {
  articlesList: ArticleListItem[];
  selectedArticle: string;
  error: string | null;
  loading: boolean;
}

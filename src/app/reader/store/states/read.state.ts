import { ArticleListItem } from '../models/article-list.model';

export interface ReaderState {
  articlesList: ArticleListItem[];
  filteredList: ArticleListItem[] | null;
  selectedArticle: {
    title: string;
    key: string;
    videoUrl: string;
    date: number;
  };
  error: string | null;
  loading: boolean;
  filter: string;
}

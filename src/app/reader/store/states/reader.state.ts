import { ArticleListItem } from '../models/article-list.model';

export interface ReaderState {
  articlesList: ArticleListItem[];
  filteredList: ArticleListItem[] | null;
  selectedArticle: {
    title: string;
    key: string;
    videoId: string;
    date: number;
    references: string[];
  };
  error: string | null;
  loadingList: boolean;
  loadingArticle: boolean;
  filter: string;
  drawerOpen: boolean;
}

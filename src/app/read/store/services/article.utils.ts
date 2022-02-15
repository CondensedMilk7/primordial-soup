import { ArticleListItem } from '../models/article-list.model';

export class ArticleUtils {
  // Filters articles that include given filter string in their title.
  // Returns initial articles array, if the string is empty.
  public static filterArticles(
    state: ArticleListItem[],
    filter: string
  ): ArticleListItem[] | null {
    if (filter === '') {
      return state;
    }
    const filteredArticles = [];
    for (let article of state) {
      if (
        article.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      )
        filteredArticles.push(article);
    }
    return filteredArticles;
  }
}

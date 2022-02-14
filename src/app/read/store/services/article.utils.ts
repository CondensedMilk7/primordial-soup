import { ArticleListItem } from '../models/article-list.model';

export class ArticleUtils {
  public static filterArticles(
    state: ArticleListItem[],
    filter: string
  ): ArticleListItem[] | null {
    if (filter === '') {
      return null;
    }
    const articles = state;
    const filteredArticles = [];
    for (let article of articles) {
      if (
        article.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      )
        filteredArticles.push(article);
    }
    console.log(filteredArticles);
    return filteredArticles;
  }
}

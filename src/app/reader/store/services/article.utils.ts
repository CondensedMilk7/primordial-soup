import { environment } from 'src/environments/environment';
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

  // Generate search url with of a given paper/book title or DOI
  // Other site urls can be added later
  public static generateSearchLink(
    type: 'libgen' | 'sci-hub',
    reference: string
  ) {
    let url = '';
    // Search title on libgen
    if (type === 'libgen') {
      // Extract title from APA style reference
      const title = reference.split('). ')[1].split('.')[0];
      url = environment.libgenUrl + title.toLowerCase().replace(/ /g, '+');
    }
    // Search DOI on sci-hub
    if (type === 'sci-hub') {
      url =
        environment.scihubUrl +
        'https://doi.org' +
        reference.split('doi.org')[1];
    }

    return url;
  }

  public static sortAlphabetically(array: string[]) {
    let result = [...array];
    return result.sort();
  }
}

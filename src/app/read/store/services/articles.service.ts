import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ArticleListItem } from '../../article-list.model';

@Injectable({ providedIn: 'root' })
export class ArticlesService {
  baseUrl = environment.githubUrl;
  constructor(private http: HttpClient) {}
  getArticlesList() {
    console.log('req');
    return this.http.get<ArticleListItem[]>(
      this.baseUrl + 'articles-list.json'
    );
  }
}

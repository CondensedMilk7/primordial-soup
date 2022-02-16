import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ArticleListItem } from '../models/article-list.model';

@Injectable({ providedIn: 'root' })
export class ArticlesService {
  baseUrl = environment.githubUrl;

  constructor(private http: HttpClient) {}

  getArticlesList() {
    return this.http.get<ArticleListItem[]>(
      this.baseUrl + 'articles-list.json'
    );
  }
}

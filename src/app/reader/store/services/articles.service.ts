import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArticleData } from '../models/article-data.model';
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

  getArticle(key: string): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}${key}/text.md`);
  }

  getArticleData(key: string) {
    return this.http.get<ArticleData>(`${this.baseUrl}${key}/data.json`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ArticleListItem } from './article-list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  articleKeys: string[] = [];
  baseUrl = environment.githubUrl;
  constructor(private http: HttpClient) {
    this.http
      .get<ArticleListItem[]>(this.baseUrl + '/articles-list.json')
      .subscribe((res) => {
        for (let item of res) {
          this.articleKeys.push(item.key);
        }
      });
  }
}

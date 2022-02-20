import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent {
  @Input() article = {
    key: '',
    videoUrl: '',
    date: 0,
  };

  baseUrl = environment.githubUrl;
}

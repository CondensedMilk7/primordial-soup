import { Component, Input } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent {
  // article metadata
  @Input() article = {
    title: '',
    key: '',
    videoUrl: '',
    date: 0,
  };

  baseUrl = environment.githubUrl;

  constructor(private markdownService: MarkdownService) {
    this.markdownService.renderer.heading = (text, level) => {
      if (level === 1) {
        // exclude h1 as it is only used for main title, which is displayed from article metadata
        return '';
      } else if (level === 2) {
        return `
          <h${level} class="text-xl font-bold mb-8" >${text}</h${level}>
        `;
      } else {
        return `
          <h${level} class="text-lg font-bold" >${text}</h${level}>
        `;
      }
    };

    this.markdownService.renderer.paragraph = (text) => {
      return `
        <p class="mb-8" >${text}</p>
      `;
    };
  }
}

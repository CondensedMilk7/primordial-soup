import { Component, Input } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
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

  constructor(private markdownService: MarkdownService) {
    this.markdownService.renderer.heading = (text, level) => {
      if (level === 1) {
        return `
          <h${level} class="text-2xl font-bold mb-8" >${text}</h${level}>
        `;
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
        <p class="my-4" >${text}</p>
      `;
    };
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { environment } from 'src/environments/environment';
import { ArticleUtils } from '../../store/services/article.utils';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ArticleComponent {
  // article metadata
  @Input() article = {
    title: '',
    key: '',
    videoId: '',
    date: '',
    author: '',
    references: [''],
  };

  baseUrl = environment.github.articleBaseUrl;

  constructor(private markdownService: MarkdownService) {
    // Markdown renderer configuration

    // Heading configuration
    this.markdownService.renderer.heading = (text, level) => {
      if (level === 1) {
        // exclude h1 as it is only used for main title, which is displayed from article metadata
        return '';
      } else if (level === 2) {
        return `
          <h${level} class="text-xl sm:text-2xl font-bold mb-8 text-left" >${text}</h${level}>
        `;
      } else {
        return `
          <h${level} class="text-lg sm:text-xl font-bold mb-8 text-left" >${text}</h${level}>
        `;
      }
    };

    // Paragraph configuration
    this.markdownService.renderer.paragraph = (text) => {
      return `
        <p class="mb-8" >${text}</p>
      `;
    };

    // List configuration
    this.markdownService.renderer.list = (body, ordered) => {
      const listStyle = ordered ? 'list-decimal' : 'list-disc';
      return `
        <ul class="${listStyle} list-inside mb-8 leading-relaxed text-left" >${body}</ul>
      `;
    };
  }

  searchLink(type: 'libgen' | 'sci-hub', reference: string) {
    return ArticleUtils.generateSearchLink(type, reference);
  }
}

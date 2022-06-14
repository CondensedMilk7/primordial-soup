import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MetaService {
  constructor(private meta: Meta, private title: Title) {}

  private generateMetaTags(title: string, image: string, description: string) {
    this.meta.addTags([
      { property: 'og:title', content: title },
      { property: 'og:image', content: image },
      { property: 'og:description', content: description },
    ]);
    this.title.setTitle(`${title} | ${environment.projectName}`);
  }

  updateMetaTags(title: string, image: string, description: string) {
    this.generateMetaTags(title, image, description);
  }
}

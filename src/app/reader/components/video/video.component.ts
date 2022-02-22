import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class VideoComponent implements OnChanges {
  @Input() videoId = '';

  embedUrl: string | SafeUrl = '';
  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['videoId']) {
      this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`
          https://www.youtube.com/embed/${this.videoId}
        `);
    }
  }
}

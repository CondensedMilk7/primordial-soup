import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MetaService } from '../common/services/meta/meta.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  donationLinks = environment.donationLinks;

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.updateMetaTags(
      'About',
      'https://i.imgur.com/N9o6LfX.jpg',
      'Academic inquiry outside academia'
    );
  }
}

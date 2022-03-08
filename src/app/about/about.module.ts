import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { aboutRoutes } from './about.routing';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, RouterModule.forChild(aboutRoutes)],
})
export class AboutModule {}

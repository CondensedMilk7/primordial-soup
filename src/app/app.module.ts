import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { ReaderModule } from './reader/reader.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HorizontalNavigationComponent } from './horizontal-navigation/horizontal-navigation.component';

@NgModule({
  declarations: [AppComponent, HorizontalNavigationComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatSidenavModule,
    MatButtonModule,
    MatIconModule,

    // Custom modules
    ReaderModule,

    RouterModule.forRoot(appRoutes),

    // 3rd party modules
    MarkdownModule.forRoot(),

    StoreModule.forRoot({}),

    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),

    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

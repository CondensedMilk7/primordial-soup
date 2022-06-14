import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';

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
import { HorizontalNavigationComponent } from './common/components/horizontal-navigation/horizontal-navigation.component';
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FooterComponent } from './common/components/footer/footer.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HorizontalNavigationComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TransferHttpCacheModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // Angular material
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatMenuModule,
    MatTooltipModule,

    // Custom modules
    ReaderModule,

    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabledBlocking',
    }),

    // 3rd party modules
    MarkdownModule.forRoot(),

    StoreModule.forRoot({}),

    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),

    EffectsModule.forRoot([]),
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: { duration: environment.snackBarDuration },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

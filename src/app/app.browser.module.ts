import { BrowserModule } from '@angular/platform-browser';
import { NgModule , ErrorHandler } from '@angular/core';
import { AppComponent } from './app';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Shared } from './providers/shared';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MenuModule } from './components/index';
import {
  AboutModule,
  ExpertinModule,
  ContactModule,
  AccomplishmentsModule,
  EducationConferencesModule,
  ExperienceModule,
  VideoModule,
  ProjectsModule
} from './sections/index';
import { ScrollTrigger } from './providers/scrollTrigger';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BaBackTopModule } from './components/babacktop/babacktop.module';
/*
import { RouterModule } from '@angular/router';
import { Routing } from './app.routes';
*/
  /*
  import * as Raven from 'raven-js';

Raven
  .config('https://4cbb01e3731e4f0bbf13b4ce25b16fba@sentry.io/145646')
  .install();

export class RavenErrorHandler implements ErrorHandler {
  handleError(err:any) : void {
    Raven.captureException(err.originalError);
  }
}*/

  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule.withServerTransition({appId: 'portfolio'}),
      TransferHttpCacheModule,
      BrowserTransferStateModule,
      BrowserAnimationsModule,
      HttpClientModule,
      BaBackTopModule,
      // RouterModule.forRoot( Routing ),
      MenuModule, VideoModule,
      AboutModule, ExpertinModule, ContactModule, AccomplishmentsModule, EducationConferencesModule, ExperienceModule, ProjectsModule,
      ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
    ],
    providers: [ Shared , ScrollTrigger,
      // { provide: ErrorHandler, useClass: RavenErrorHandler }
    ],
    bootstrap: [ AppComponent ]
  })
export class AppBrowserModule {}

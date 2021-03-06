import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ServerTransferStateModule } from '@angular/platform-server';
import { AppBrowserModule } from './app.browser.module';
import { AppComponent } from './app';

@NgModule({
  imports: [
    // The AppServerModule should import your AppModule followed
    // by the ServerModule from @angular/platform-server.
    AppBrowserModule,
    ServerModule,
    // ModuleMapLoaderModule,
    ServerTransferStateModule
  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [ AppComponent ],
})
export class AppServerModule {}

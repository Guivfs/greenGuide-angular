import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app';
import { MapComponent } from './component/map-component/map-component';
import { Home } from './component/home/home';

@NgModule({
  declarations: [
    App,
    MapComponent,
    Home
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Flashlight } from '@ionic-native/flashlight/ngx'; // Import Flashlight
import { Geolocation } from '@ionic-native/geolocation/ngx'; // Import Geolocation

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [Flashlight,Geolocation,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }], // added Flashlight/Geolocation to providers
  bootstrap: [AppComponent],
})
export class AppModule {}

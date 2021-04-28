import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lat: any;
  longitude: any;

  constructor(private flashlight: Flashlight,private geolocation: Geolocation) {} // Added to argument of constructor

  // Function: Flashlight
  Flashlight(){
    this.flashlight.toggle(); // toggle flashlight
  }

  // Function: Gelocation
  GPS(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
  }
}

import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public coords: any;
  public isActive: boolean = false;

  constructor(public navCtrl: NavController, public platform: Platform) {
    this.platform.ready().then(() => {
      Geolocation.getCurrentPosition().then((resp) => {
        this.coords = {
          lat: resp.coords.latitude,
          lng: resp.coords.longitude
        };
        this.isActive = true;
      })
        .catch((error) => {
          console.dir(error);
        });
    });
  }

}

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Api } from '../classes/api'
import { TabsPage } from '../pages/tabs/tabs'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage

  constructor(platform: Platform,
              public api: Api) {
    platform.ready().then(() => {
      // TODO Check if already log
      // console.log(this.api.log)
      // if(this.api.log === true){
      //   this.rootPage = HomePage
      // }
      // else{
      //   this.rootPage = SignInPage
      // }
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

}

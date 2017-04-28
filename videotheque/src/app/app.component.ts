import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Api } from '../classes/api'
import { TabsPage } from '../pages/tabs/tabs'
import { SignInPage } from '../pages/signIn/signIn'



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage

  constructor(platform: Platform,
              public api: Api,
              public modalCtrl: ModalController) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  presentSignInModal() {
   let profileModal = this.modalCtrl.create(SignInPage);
   profileModal.present();
 }

}

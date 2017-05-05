import { Component } from '@angular/core';

import { NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Api } from '../../classes/api';
import { TabsPage } from '../tabs/tabs'
import { User } from '../../classes/user'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController,
              public api: Api,
              public user: User,
              public me: User,
              public toastCtrl: ToastController,
              public storage: Storage) {

  }

  ionViewDidLoad(){}

  login(){
    this.api.login(this.user).subscribe(res => {
      this.me = res.json()
      if(this.me[0].password == this.user.password){
          console.log(this.user.password)
          this.storage.set("logged", true)
          this.navCtrl.push(TabsPage)
      }
    })
  }

}

import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Api } from '../../classes/api';
import { TabsPage } from '../tabs/tabs'
import { User } from '../../classes/user'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController, public api: Api, public user: User) {
    
  }

  ionViewDidLoad(){}

  login(){
    this.api.login(this.user)
    this.navCtrl.push(TabsPage)
  }

}

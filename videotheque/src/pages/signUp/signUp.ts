import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Api } from '../../classes/api'
import { User } from '../../classes/user'
import { LoginPage } from '../login/login'

@Component({
  selector: 'page-signUp',
  templateUrl: 'signUp.html'
})
export class SignUpPage {
  constructor(public navCtrl: NavController, public api: Api, public user: User) {
    
  }

  ionViewDidLoad(){}

  signUp(){
   
    this.api.postUser(this.user);
    this.navCtrl.push(LoginPage)
  }

}

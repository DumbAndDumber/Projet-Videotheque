import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Api } from '../../classes/api';
import { SignUpPage } from '../signUp/signUp'
import { LoginPage } from '../login/login'

@Component({
  selector: 'page-signIn',
  templateUrl: 'signIn.html'
})
export class SignInPage {

  constructor(public navCtrl: NavController, public api: Api) {
    
  }

  ionViewDidLoad(){}

  goToSignUp(){
    this.navCtrl.push(SignUpPage)
  }

  goToLogin(){
    this.navCtrl.push(LoginPage)
  }

}

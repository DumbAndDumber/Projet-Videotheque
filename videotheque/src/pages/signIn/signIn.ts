import { Component } from '@angular/core';

import { NavController, ViewController } from 'ionic-angular';

import { Api } from '../../classes/api';
import { SignUpPage } from '../signUp/signUp'
import { LoginPage } from '../login/login'
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-signIn',
  templateUrl: 'signIn.html'
})
export class SignInPage {

  constructor(public navCtrl: NavController,
              public api: Api,
              public viewCtrl: ViewController,
              public storage: Storage){
  }
  ionViewWillEnter() {
    this.addClass()
  }
  ionViewWillUnload(){
    this.addClass()
  }

  addClass(){
    let el = document.querySelector("page-signin > ion-header > ion-navbar >.back-button.disable-hover.bar-button.bar-button-md.back-button-md.bar-button-default.bar-button-default-md");
    el.classList.add("show-back-button")
  }

  ionViewDidLoad(){

  }
  ionViewDidEnter(){
    this.addClass()
  }

  goToSignUp(){
    this.navCtrl.push(SignUpPage)
  }

  goToLogin(){
    this.navCtrl.push(LoginPage)
  }

  back(){
    this.viewCtrl.dismiss();
  }

  logout(){
    this.storage.remove("id");
    location.reload()
  }

}

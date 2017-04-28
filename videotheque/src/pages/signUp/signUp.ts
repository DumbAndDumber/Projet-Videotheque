import { Component } from '@angular/core';

import { NavController, ToastController } from 'ionic-angular';

import { Api } from '../../classes/api'
import { User } from '../../classes/user'
import { LoginPage } from '../login/login'

@Component({
  selector: 'page-signUp',
  templateUrl: 'signUp.html'
})
export class SignUpPage {
  isDuplicated = false
  result = {error: {code: 400}, success: {code: 200}}
  constructor(public navCtrl: NavController, public api: Api, public user: User, private toastCtrl: ToastController) {

  }

  ionViewDidLoad(){}

  signUp(){
    this.postUser();

  }

  presentToast() {
  let toast = this.toastCtrl.create({
    message: 'User was added successfully',
    duration: 3000,
    position: 'middle'
  });

  toast.present();
}

  postUser(){
    this.api.postUser(this.user).subscribe(res => {
      console.log(res.json())
      this.navCtrl.push(LoginPage);
      this.presentToast()
      this.isDuplicated = false
    },
    err => {
      this.isDuplicated = true
    })
  }

}

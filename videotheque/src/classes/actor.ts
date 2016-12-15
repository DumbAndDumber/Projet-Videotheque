import { Injectable } from '@angular/core';

import { NavController } from 'ionic-angular';

@Injectable()
export class Actor {
    id:number
    lastname: string
    firstname: string
    dob: Date
    
  constructor(public navCtrl: NavController) {}


}

import { Injectable } from '@angular/core';

import { NavController } from 'ionic-angular';

@Injectable()
export class Director {
    id:number
    lastname: string
    firstname: string
    dob: Date
    
  constructor(public navCtrl: NavController) {}


}

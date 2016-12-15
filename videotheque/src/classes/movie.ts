import { Injectable } from '@angular/core';

import { NavController } from 'ionic-angular';

@Injectable()
export class Movie {
    id:number
    name: string
    releaseDate: Date
    rate: number
    description: string
    duration: number
    
  constructor(public navCtrl: NavController) {}


}

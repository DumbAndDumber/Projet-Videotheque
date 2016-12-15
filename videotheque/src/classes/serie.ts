import { Injectable } from '@angular/core';

import { NavController } from 'ionic-angular';

@Injectable()
export class Serie {
    id:number
    name: string
    rate: number
    description: string
    
  constructor(public navCtrl: NavController) {}


}

import { Injectable } from '@angular/core';

import { NavController } from 'ionic-angular';

@Injectable()
export class Episode {
    id:number
    name: string
    season: number
    releaseDate: Date
    description: string
    
  constructor(public navCtrl: NavController) {}


}

import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Api } from '../../classes/api'

@Component({
  selector: 'page-series',
  templateUrl: 'series.html'
})
export class SeriesPage {
  series: any

  constructor(public navCtrl: NavController,
              public api: Api) { }

  ionViewDidLoad(){
    this.api.getSeries().subscribe(res => this.series = res.json())
  }
}

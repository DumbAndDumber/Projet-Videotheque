import { Component }      from '@angular/core';
import { NavController }  from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Api }            from '../../classes/api'

@Component({
  selector: 'page-serie-detail',
  templateUrl: 'serieDetail.html'
})
export class SerieDetailPage {
  serie: any
  constructor(public navCtrl: NavController,
              public api: Api,
              public navParam: NavParams) {
    this.serie = this.navParam.get('serie');
  }


  ionViewDidLoad(){
    console.log(this.serie)
  }



}

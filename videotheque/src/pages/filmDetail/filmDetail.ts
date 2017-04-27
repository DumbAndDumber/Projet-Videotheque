import { Component }      from '@angular/core';
import { NavController }  from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Api }            from '../../classes/api'

@Component({
  selector: 'page-film-detail',
  templateUrl: 'filmDetail.html'
})
export class FilmDetailPage {
  movie: any
  detail: any
  constructor(public navCtrl: NavController,
              public api: Api,
              public navParam: NavParams) {
    this.movie = this.navParam.get('movie');
    console.log(this.movie)
  }


  ionViewDidLoad(){

  }

  convertMinutsToHour(minuts){
    let m = minuts % 60;
    let h = (minuts-m)/60;

    let hour = h.toString() + "h" + (m<10?"0":"") + m.toString();
    return hour
  }




}

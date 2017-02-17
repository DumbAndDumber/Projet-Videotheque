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
  constructor(public navCtrl: NavController,
              public api: Api,
              public navParam: NavParams) {
    this.movie = this.navParam.get('movie');
  }


  ionViewDidLoad(){
    console.log(this.movie)
  }



}

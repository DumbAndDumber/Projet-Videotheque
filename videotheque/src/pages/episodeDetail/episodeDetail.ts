import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Episode } from '../../classes/episode'

/*
  Generated class for the EpisodeDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-episode-detail',
  templateUrl: 'episodeDetail.html'
})
export class EpisodeDetailPage {
  episode:any
  serie: any
  constructor(public navCtrl: NavController,
              public params: NavParams) {
      this.episode = this.params.get("episode")
      this.serie = this.params.get("serie")

  }

  ionViewWillEnter(){
    this.addClass()
  }

  addClass(){
    let el = document.querySelector("page-episode-detail > ion-header > ion-navbar > .disable-hover.bar-button.bar-button-md.back-button-md.bar-button-default.bar-button-default-md");
    el.classList.add("show-back-button")
  }

  ionViewDidLoad() {
  }

}

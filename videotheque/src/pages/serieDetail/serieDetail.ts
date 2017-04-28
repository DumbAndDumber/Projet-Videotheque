import { Component }      from '@angular/core';
import { NavController, ModalController }  from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Api }            from '../../classes/api';
import { EpisodePage } from '../episode/episode';

@Component({
  selector: 'page-serie-detail',
  templateUrl: 'serieDetail.html'
})
export class SerieDetailPage {
  serie: any
  seasons = []
  episodes: any
  constructor(public navCtrl: NavController,
              public api: Api,
              public navParam: NavParams,
              public modalCtrl: ModalController) {
    this.serie = this.navParam.get('serie');
  }


  ionViewDidLoad(){
    this.getSeasons()
  }

  getSeasons(){
    for(let i = 1; i <= this.serie.seasons; i++){
      this.seasons.push(i)
    }
    return this.seasons
  }

  itemSelected(i){
    this.getEpisodes(i)
  }

  getEpisodes(seasonNumber){
    this.api.getSeason(this.serie, seasonNumber).subscribe(res => {
      this.episodes = res.json()
      this.presentSeasonModal()
    })
  }

  presentSeasonModal() {
    let modal = this.modalCtrl.create(EpisodePage, { season: this.episodes, serie: this.serie });
    modal.present();
  }


}

import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';
import { Api } from '../../classes/api'
import { SerieDetailPage } from '../serieDetail/serieDetail'

@Component({
  selector: 'page-series',
  templateUrl: 'series.html'
})
export class SeriesPage {
  series: any
  isActive = true;
  isSerie = false
  serieName: any = ""

  constructor(public navCtrl: NavController,
              public api: Api,
              public loadingCtrl: LoadingController,
              ) { }

  ionViewDidLoad(){
  }

  getSeries(){
    this.api.getSeries(this.serieName).subscribe(res => {
      this.series = res.json()
      console.log(this.series)
    })
  }

  presentLoadingText() {
  let loading = this.loadingCtrl.create({
    content: 'Nous recherchons ' + this.serieName
  });

  loading.present();

  setTimeout(() => {
    this.getSeries()
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
    this.isActive = false;
    this.isSerie = true
  }, 3000);
}

  displaySearchBar(){
    this.isActive = true
  }
  hideSearchBar(){
    this.isActive = false
  }

  getItems(){
    this.presentLoadingText()
  }

  getSerieDetail(serie){
    this.api.getSerieDetail(serie.imdbID).subscribe(res => {
      let detail = res.json()
      this.navCtrl.push(SerieDetailPage, { serie : detail})
    })
  }

  checkLength(){
    if(this.serieName.length > 1 ){
      return true
    }
  }

}

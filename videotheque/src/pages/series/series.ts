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
  Series= []
  isActive = true;
  isSerie = false
  serieName: any = ""
  pager: number = 1
  isEnd = false
  hasData = true
  constructor(public navCtrl: NavController,
              public api: Api,
              public loadingCtrl: LoadingController,
              ) { }

  ionViewDidLoad(){
  }

  getSeries(pager){
    this.api.getSeries(this.serieName, pager).subscribe(res => {
      this.hasData = true
      console.log(res.json())
      this.series = res.json()
      for(let serie of this.series.Search){
        this.Series.push(serie)
      }
    },
    err => {
      this.hasData = false
    })
  }

  getSeriesInfinite(pager){
    this.api.getSeries(this.serieName, pager).subscribe(res => {
      this.hasData = true
      this.series = res.json()
      for(let movie of this.series.Search){
        this.Series.push(movie)
      }
    },
    err => {
      this.isEnd = true
    })
  }

  presentLoadingText() {
  let loading = this.loadingCtrl.create({
    content: 'Nous recherchons ' + this.serieName
  });

  loading.present();

  setTimeout(() => {
    this.pager = 1
    this.Series = []
    this.isEnd = false
    this.getSeries(this.pager)
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

  doInfinite(e){
    this.pager++

    if(this.Series.length == parseInt(this.series.totalResults)){
      this.getSeriesInfinite(this.pager)
    }

    setTimeout(() => {
      this.getSeriesInfinite(this.pager)

      console.log('Async operation has ended');
      e.complete();
    }, 1000);

  }

}

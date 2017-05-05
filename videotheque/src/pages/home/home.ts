import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Api }            from '../../classes/api'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	recentMovies = []
	recentSeries = []

  constructor(
  		public navCtrl: NavController,
  		public api: Api	
  ) {}

  ionViewDidEnter(){
  	this.getRecentMovies()
  	this.getRecentSeries()
  }

  getRecentMovies(){
  	this.api.getRecentMovies().subscribe(res => {
  		this.recentMovies = res.json()
  	},
    err => {

    })
  }

  getRecentSeries(){
  	this.api.getRecentSeries().subscribe(res => {
  		this.recentSeries = res.json()
  	},
    err => {

    })
  }

}

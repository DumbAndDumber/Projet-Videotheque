import { Component }      from '@angular/core';
import { NavController }  from 'ionic-angular';
import { Api }            from '../../classes/api'

@Component({
  selector: 'page-films',
  templateUrl: 'films.html'
})
export class FilmsPage {
  movies: any
  constructor(public navCtrl: NavController, 
              public api: Api) { }

  
  ionViewDidLoad(){
    this.api.getMovies().subscribe(res => this.movies = res.json() )
  }

}

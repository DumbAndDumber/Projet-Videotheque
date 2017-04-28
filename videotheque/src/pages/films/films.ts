import { Component }      from '@angular/core';
import { NavController, LoadingController }  from 'ionic-angular';
import { Api }            from '../../classes/api'
import { FilmDetailPage } from '../filmDetail/filmDetail'

@Component({
  selector: 'page-films',
  templateUrl: 'films.html'
})
export class FilmsPage {
  movies: any
  movieName: any
  isMovie = false
  isActive = true;
  constructor(public navCtrl: NavController,
              public api: Api,
              public loadingCtrl: LoadingController) {
              }


  ionViewDidLoad(){ }

  ionViewDidEnter(){
  }

  getMovies(){
    this.api.getMovies(this.movieName).subscribe(res => {
      this.movies = res.json()
    })
  }

  getItems(){
    this.presentLoadingText()
  }

  presentLoadingText() {
  let loading = this.loadingCtrl.create({
    content: 'Nous recherchons ' + this.movieName
  });

  loading.present();

  setTimeout(() => {
    this.getMovies()
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
    this.isActive = false;
    this.isMovie = true
  }, 3000);
}

  getfilmDetail(movie){
    console.log(movie)
    this.api.getMovieDetail(movie.imdbID).subscribe(res => {
      let detail = res.json()
      this.navCtrl.push(FilmDetailPage, { movie : detail})
    })
  }

  displaySearchBar(){
    this.isActive = true
  }
  hideSearchBar(){
    this.isActive = false
  }
}

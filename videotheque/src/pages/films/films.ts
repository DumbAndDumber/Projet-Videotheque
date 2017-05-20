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
  Movies = []
  userMovies = []
  movieName: any = ""
  isMovie = false
  isActive = true;
  pager: number = 1
  isEnd = false
  hasData = true
  hasWatchlist = false
  constructor(public navCtrl: NavController,
              public api: Api,
              public loadingCtrl: LoadingController) {
              }


  ionViewDidLoad(){
    this.getUserMovieWatchlist()
  }

  ionViewDidEnter(){
  }

  getMovies(pager){
    this.api.getMovies(this.movieName, pager).subscribe(res => {
      this.hasData = true
      this.movies = res.json()
      for(let movie of this.movies.Search){
        this.Movies.push(movie)
      }
    },
    err => {
      this.hasData = false
    })
  }

  getMoviesInfinite(pager){
    this.api.getMovies(this.movieName, pager).subscribe(res => {
      this.hasData = true
      this.movies = res.json()
      for(let movie of this.movies.Search){
        this.Movies.push(movie)
      }
    },
    err => {
      this.isEnd = true
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
    this.pager = 1
    this.Movies = []
    this.isEnd = false
    this.getMovies(this.pager)
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

  getUserMovieWatchlist() {
    this.hasData = false
    this.api.getUserMovieWatchlist().subscribe(res => {
      this.movies = res.json()
      for(let userMovie of this.movies){
        if (userMovie.is_seen == 0)
          this.userMovies.push(userMovie)
      }
      this.hasWatchlist = true
    },
    err => {
      this.hasWatchlist = false
    })
  }

  displaySearchBar(){
    this.isActive = true
  }
  hideSearchBar(){
    this.isActive = false
  }

  checkLength(){
    if(this.movieName.length > 1 ){
      return true
    }
  }

  doInfinite(e){
    this.pager++

    if(this.Movies.length == parseInt(this.movies.totalResults)){
      this.getMoviesInfinite(this.pager)
    }

    setTimeout(() => {
      this.getMoviesInfinite(this.pager)

      console.log('Async operation has ended');
      e.complete();
    }, 1000);

  }
}

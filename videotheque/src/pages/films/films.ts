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
  pager: number = 1
  isEnd = false
  hasData = true
  hasWatchlist = false
  isSearching = false
  constructor(public navCtrl: NavController,
              public api: Api,
              public loadingCtrl: LoadingController) {
              }


  ionViewDidLoad(){
  }

  ionViewDidEnter(){
    this.getUserMovieWatchlist()
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
    this.isSearching = true
    this.getMovies(this.pager)
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
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
      this.userMovies = res.json()
      console.log(this.userMovies)
      this.hasWatchlist = true
    },
    err => {
      this.hasWatchlist = false
    })
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

  clearSearchbar(){
    this.isSearching = false
    this.movieName = ""
    this.movies = {}
    this.getUserMovieWatchlist()
  }

  addToWatchList(movie){
    this.api.addToWatchList(movie).subscribe(res => {
      console.log(res.json())
    },
    err=> {
      console.error(err)
    })
  }
}

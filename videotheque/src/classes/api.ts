import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { User } from '../classes/user'

@Injectable()
export class Api {
    apiUrl: string = "http://www.sarryromain.com/videotheque/scripts"

    //API ROMAIN
    //localApiUrl: string = "http://localhost/Videotheque/videotheque/src/scripts"

    //API SAM
    //localApiUrl: string = "http://localhost/projets/Projet-Videotheque/videotheque/src/scripts"

    //apiUrl = this.localApiUrl
    headers = new Headers();
    _user: User
    meId: any
    currentUser: any
  constructor(public http: Http,
              public storage: Storage) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.getTokenFromStorage()
  }

  getUsers(){
    this.http.request(this.apiUrl + "user", this.headers).subscribe(res => {
      console.log(res.json())
    })
  }

  postUser(user){
    return this.http.get(this.apiUrl + "/user/signin.php?username=" + user.username + "&password=" + user.password + "&email=" + user.email + "&lastname=" + user.lastname + "&firstname=" + user.firstname + "&cp=" + user.cp + "&address=" + user.address + "&country=" + user.country + "&phone=" + user.phone, this.headers)
  }

  login(user){
    return this.http.get(this.apiUrl + "/user/get_by_email.php?email=" + user.email)
  }

  getTokenFromStorage(){
    this.storage.get("id").then(res => {
      this.meId = res
      this.getCurrentUser(this.meId).subscribe(res => {
        this.currentUser = res.json()
        this.currentUser = this.currentUser[0]
        console.info("L'utilisateur actuel ::", this.currentUser)
      },
      err => {
        this.currentUser = null
        console.error("Pas de current user", this.currentUser)
      })
    },
    err =>{
      this.meId = null
      console.error("Pas de meId dans le storage", this.meId)
    })
  }

  getCurrentUser(id): Observable<Response>{
    return this.http.get(this.apiUrl + "/user/get_by_id.php?id=" + id)
  }


  getMovies(movieName, pager): Observable<Response>{
    return this.http.get(this.apiUrl + "/movie/search_movies.php?search=" + movieName + "&page=" + pager, this.headers)
  }

  getMovieDetail(movieId): Observable<Response>{
    return this.http.get(this.apiUrl + "/movie/get_movie_by_imdb_id.php?imdb_id=" + movieId , this.headers)
  }

  getUserMovieWatchlist(){
    this.getTokenFromStorage()
    return this.http.get(this.apiUrl + "/user_movie/get_user_movie_watchlist.php?id_user=" + this.currentUser.id_user, this.headers)
  }

  getRecentMovies(): Observable<Response>{
    return this.http.get(this.apiUrl + "/movie/get_recent_movies.php", this.headers)
  }

  getSeries(serieName, pager): Observable<Response>{
    return this.http.get(this.apiUrl + "/serie/search_series.php?search=" + serieName + "&page="+ pager, this.headers)
  }

  getSerieDetail(serieId): Observable<Response>{
    return this.http.get(this.apiUrl + "/serie/get_serie_by_imdb_id.php?imdb_id=" + serieId , this.headers)
  }

  getRecentSeries(): Observable<Response>{
    return this.http.get(this.apiUrl + "/serie/get_recent_series.php", this.headers)
  }

  getSeason(serie,season): Observable<Response>{
    return this.http.get(this.apiUrl + "/episode/get_season.php?imdb_id=" + serie.imdb_id + "&id_serie=" + serie.id + "&season=" + season, this.headers)
  }

  getEpisode(episode): Observable<Response>{
    return this.http.get(this.apiUrl + "/episode/get_episode_by_imdb_id.php?imdb_id=" + episode[0].imdb_id, this.headers)
  }

}

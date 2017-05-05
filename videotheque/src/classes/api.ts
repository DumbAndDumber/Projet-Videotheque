import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { User } from '../classes/user'

@Injectable()
export class Api {
    //apiUrl: string = "http://www.sarryromain.com/videotheque/scripts"
    localApiUrl: string = "http://127.0.0.1/projets/Projet-Videotheque/videotheque/src/scripts"
    apiUrl = this.localApiUrl
    headers = new Headers();
    _user: User
    log: boolean
  constructor(public http: Http,
              public storage: Storage) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  getUsers(){
    this.http.request(this.apiUrl + "user", this.headers).subscribe(res => {
      console.log(res.json())
    })
  }

  postUser(user){
    console.log("USERRR", user)
    return this.http.get(this.apiUrl + "/user/signin.php?username=" + user.username + "&password=" + user.password + "&email=" + user.email + "&lastname=" + user.lastname + "&firstname=" + user.firstname + "&cp=" + user.cp + "&address=" + user.address + "&country=" + user.country + "&phone=" + user.phone, this.headers)
  }

  //TODO Faire les vérifications de conformité du username et password.
  login(user){
    this.http.get(this.apiUrl + "" + user.username).subscribe(res => {
      console.log(res.json())
      this.storage.set("log", true)
    })
  }

  getTokenFromStorage(){
    this.storage.get("log").then(res => this.log = res)
  }

  getMovies(movieName, pager): Observable<Response>{
    return this.http.get(this.apiUrl + "/movie/search_movies.php?search=" +movieName + "&page=" + pager, this.headers)
  }

  getMovieDetail(movieId): Observable<Response>{
    return this.http.get(this.apiUrl + "/movie/get_movie_by_imdb_id.php?imdb_id=" + movieId , this.headers)
  }

  getSeries(serieName, pager): Observable<Response>{
    return this.http.get(this.apiUrl + "/serie/search_series.php?search=" + serieName + "&page="+ pager, this.headers)
  }

  getSerieDetail(serieId): Observable<Response>{
    return this.http.get(this.apiUrl + "/serie/get_serie_by_imdb_id.php?imdb_id=" + serieId , this.headers)
  }

  getSeason(serie,season): Observable<Response>{
    return this.http.get(this.apiUrl + "/episode/get_season.php?imdb_id=" + serie.imdb_id + "&id_serie=" + serie.id + "&season=" + season, this.headers)
  }

  getEpisode(episode): Observable<Response>{
    return this.http.get(this.apiUrl + "/episode/get_episode_by_imdb_id.php?imdb_id=" + episode[0].id, this.headers)
  }

}

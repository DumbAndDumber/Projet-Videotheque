import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { User } from '../classes/user'

@Injectable()
export class Api {
    apiUrl: string = "http://www.sarryromain.com/videotheque/scripts"
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
    this.http.post(this.apiUrl + "user",{
      username: user.username,
      password: user.password,
      email: user.email,
      lastname: user.lastname,
      firstname: user.firstname,
      cp: user.cp,
      address: user.address,
      country: user.country,
      phone: user.phone
    }).subscribe(res => {
      console.log(res)
    })
  }

  //TODO Faire les vérifications de conformité du username et password.
  login(user){
    this.http.get(this.apiUrl + "user/username/" + user.username).subscribe(res => {
      console.log(res.json())
      this.storage.set("log", true)
    })
  }

  getTokenFromStorage(){
    this.storage.get("log").then(res => this.log = res)
  }

  getMovies(movieName): Observable<Response>{
    return this.http.get(this.apiUrl + "/movie/search_movies.php?search=" +movieName + "&page=1", this.headers)
  }

  getMovieDetail(movieId): Observable<Response>{
    return this.http.get(this.apiUrl + "/movie/get_movie_by_imdb_id.php?imdb_id=" + movieId , this.headers)
  }

  getSeries(): Observable<Response>{
    return this.http.get(this.apiUrl + "serie", this.headers)
  }

}

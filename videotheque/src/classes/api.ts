import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { User } from '../classes/user'

@Injectable()
export class Api {
    apiUrl: string = "http://sarryromain.com/videotheque/arrestdb.php/vid_"
    headers = new Headers();
    _user: User

  constructor(public http: Http) {
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
    this.http.get(this.apiUrl + "user/username/" + user.username, this.headers).subscribe(res => {
      console.log(res.json())
    })
  }

  getMovies(): Observable<Response>{
    return this.http.get(this.apiUrl + "movie", this.headers)
  }
  
}

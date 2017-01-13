import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { FilmsPage } from '../pages/films/films';
import { SeriesPage } from '../pages/series/series';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { GamesPage } from '../pages/games/games';
import { SignInPage } from '../pages/signIn/signIn'
import { SignUpPage } from '../pages/signUp/signUp'
import { Api } from '../classes/api';
import { LoginPage } from '../pages/login/login'
import { FilmDetailPage } from '../pages/filmDetail/filmDetail'

// import { Actor } from '../classes/actor';
// import { Director } from '../classes/director';
// import { Episode } from '../classes/episode';
// import { Movie } from '../classes/movie';
// import { Serie } from '../classes/serie';
import { User } from '../classes/user';

@NgModule({
  declarations: [
    MyApp,
    FilmsPage,
    SeriesPage,
    HomePage,
    TabsPage,
    GamesPage,
    SignInPage,
    SignUpPage,
    LoginPage,
    FilmDetailPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FilmsPage,
    SeriesPage,
    HomePage,
    TabsPage,
    GamesPage,
    SignInPage,
    SignUpPage,
    LoginPage,
    FilmDetailPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Api, User, Storage]
})
export class AppModule {}

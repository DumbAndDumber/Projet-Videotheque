import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FilmsPage } from '../pages/films/films';
import { SeriesPage } from '../pages/series/series';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { GamesPage } from '../pages/games/games';

@NgModule({
  declarations: [
    MyApp,
    FilmsPage,
    SeriesPage,
    HomePage,
    TabsPage,
    GamesPage,
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
    GamesPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

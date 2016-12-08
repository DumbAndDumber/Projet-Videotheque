import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FilmsPage } from '../films/films';
import { SeriesPage } from '../series/series';
import { GamesPage } from '../games/games';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = FilmsPage;
  tab3Root: any = SeriesPage;
  tab4Root: any = GamesPage;

  constructor() {

  }
}

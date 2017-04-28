import { Component }      from '@angular/core';
import { NavController, ViewController }  from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Api }            from '../../classes/api'

@Component({
  selector: 'page-episode',
  templateUrl: 'episode.html'
})
export class EpisodePage {
  episodes:any
  serie:any
  constructor(public navCtrl: NavController,
              public api: Api,
              public navParam: NavParams,
              public viewCtrl: ViewController) {
    this.serie = this.navParam.get('serie');
    this.episodes = this.navParam.get('season');
    console.log(this.episodes)

  }
  back(){
    this.viewCtrl.dismiss();
  }


  ionViewDidLoad(){}

  getEpisodeDetail(episode){
    console.log(episode[0])
    this.api.getEpisode(episode).subscribe(res => {
      console.log(res.json())
    })
  }

}

import { Component }      from '@angular/core';
import { NavController, ViewController, ModalController, ToastController }  from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Api }            from '../../classes/api'
import { EpisodeDetailPage } from '../episodeDetail/episodeDetail'

@Component({
  selector: 'page-episode',
  templateUrl: 'episode.html'
})
export class EpisodePage {
  episodes:any
  serie:any
  epi:any
  constructor(public navCtrl: NavController,
              public api: Api,
              public navParam: NavParams,
              public viewCtrl: ViewController,
              public modalCtrl: ModalController,
              private toastCtrl: ToastController) {
    this.serie = this.navParam.get('serie');
    this.episodes = this.navParam.get('season');
    console.log(this.episodes)

  }
  back(){
    this.viewCtrl.dismiss();
  }


  ionViewDidLoad(){}

  getDetail(episode){
    this.getEpisodeDetail(episode)
  }

  getEpisodeDetail(episode){
    this.api.getEpisode(episode).subscribe(res => {
      this.epi = res.json()
      console.log(this.epi)
      let modal = this.modalCtrl.create(EpisodeDetailPage, {episode: episode, serie: this.serie});
      modal.present();
    },
    err => {
      this.presentToast(episode)
    })
  }

  presentToast(episode) {
  let toast = this.toastCtrl.create({
    message: 'Aucun détail pour '+ episode.name,
    duration: 2000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

}

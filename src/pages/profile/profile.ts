import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';

import { Auth } from '../../providers/auth.provider';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  plants:Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public auth: Auth, public alertCtrl: AlertController) {
    this.plants = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  logOut(){
    let alert = this.alertCtrl.create({
      title: 'Salir',
      subTitle: 'Se cerrará su sesión actual',
      buttons: [
        {
          text: 'Salir',
          handler: () => {
            this.auth.logOut().then(()=>{
              this.navCtrl.parent.setRoot(HomePage);
            });
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });
    alert.present();
  }

}

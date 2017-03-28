import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, App, Slides,
  ToastController, LoadingController } from 'ionic-angular';

import { SocialSharing } from '@ionic-native/social-sharing';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';

import { HomePage } from '../home/home';
import { SignupPetplantPage } from '../signup-petplant/signup-petplant';

import { Auth } from '../../providers/auth.provider';
import { Data } from '../../providers/data.provider';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  plants:Array<any> = [];
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public auth: Auth, public alertCtrl: AlertController, public socialSharing: SocialSharing,
    public app: App, public actionSheet: ActionSheet, public data: Data, public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {
    this.plants = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  addPlant(){
    this.app.getRootNav().push(SignupPetplantPage);
  }

  plantSelect(){
    let buttonLabels = ['Editar planta', 'Eliminar planta'];
    const options: ActionSheetOptions = {
      title: 'Selecciona una opción',
      buttonLabels: buttonLabels,
      addCancelButtonWithLabel: 'Cancelar',
      androidTheme: this.actionSheet.ANDROID_THEMES.THEME_HOLO_LIGHT,
      androidEnableCancelButton: true
    };

    this.actionSheet.show(options).then((buttonIndex: number) => {
      if(buttonIndex == 1){
        console.log("Editar imagen");
      }
      if(buttonIndex == 2){
        let loading = this.loadingCtrl.create();
        loading.present();
        var hasImage;
        if(this.plants[this.slides.realIndex].img=='assets/img/default_plant_avatar.png'){
          hasImage = false;
        }else{
          hasImage = true;
        }
        this.data.remove_plant(this.plants[this.slides.realIndex]._id,hasImage).then(()=>{
          this.auth.getUserKey().then(userKey=>{
            this.data.get_plants_by_user(userKey).then(data=>{
              this.plants = data;
              let toast = this.toastCtrl.create({
                duration: 3000,
                position: 'bottom',
                message: 'Planta eliminada exitosamente!'
              });
              loading.dismiss().then(()=>{
                toast.present();
                this.navCtrl.setRoot(this.navCtrl.getActive().component,this.plants);
              });
            });
          });
        });
      }
    });
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
              this.app.getRootNav().setRoot(HomePage);
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

  facebookShare(){
    var img;
    if(this.plants[this.slides.realIndex].img=="assets/img/default_plant_avatar.png"){
      img = 'http://res.cloudinary.com/dfhduki0t/image/upload/v1490638633/default_plant_avatar_g09q7t.png';
    }else{
      img = this.plants[this.slides.realIndex].img;
    }
    this.socialSharing.shareViaFacebook("Conoce como cuido mi planta", img ,"http://petplant.com")
      .then(()=>console.log("Shared with WP"))
      .catch(err=>{
        let toast = this.toastCtrl.create({
          duration: 2000,
          position: 'middle',
          message: 'Debes tener la aplicación Facebook instalada'
        });
        toast.present();
      });
  }

  instagramShare(){
    var img;
    if(this.plants[this.slides.realIndex].img=="assets/img/default_plant_avatar.png"){
      img = 'http://res.cloudinary.com/dfhduki0t/image/upload/v1490638633/default_plant_avatar_g09q7t.png';
    }else{
      img = this.plants[this.slides.realIndex].img;
    }
    this.socialSharing.shareViaInstagram("Conoce como cuido mi planta", img )
      .then(()=>console.log("Shared with WP"))
      .catch(err=>{
        let toast = this.toastCtrl.create({
          duration: 2000,
          position: 'middle',
          message: 'Debes tener la aplicación Instagram instalada'
        });
        toast.present();
      });
  }

  twitterShare(){
    var img;
    if(this.plants[this.slides.realIndex].img=="assets/img/default_plant_avatar.png"){
      img = 'http://res.cloudinary.com/dfhduki0t/image/upload/v1490638633/default_plant_avatar_g09q7t.png';
    }else{
      img = this.plants[this.slides.realIndex].img;
    }
    this.socialSharing.shareViaTwitter("Conoce como cuido mi planta", img ,"http://petplant.com")
      .then(()=>console.log("Shared with WP"))
      .catch(err=>{
        let toast = this.toastCtrl.create({
          duration: 2000,
          position: 'middle',
          message: 'Debes tener la aplicación Twitter instalada'
        });
        toast.present();
      });
  }

  whatsAppShare(){
    var img;
    if(this.plants[this.slides.realIndex].img=="assets/img/default_plant_avatar.png"){
      img = 'http://res.cloudinary.com/dfhduki0t/image/upload/v1490638633/default_plant_avatar_g09q7t.png';
    }else{
      img = this.plants[this.slides.realIndex].img;
    }
    this.socialSharing.shareViaWhatsApp("Conoce como cuido mi planta", img ,"http://petplant.com")
      .then(()=>console.log("Shared with WP"))
      .catch(err=>{
        let toast = this.toastCtrl.create({
          duration: 2000,
          position: 'middle',
          message: 'Debes tener la aplicación WhatsApp instalada'
        });
        toast.present();
      });
  }

}

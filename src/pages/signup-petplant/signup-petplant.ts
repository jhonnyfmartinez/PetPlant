import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';

import { FormBuilder, Validators } from '@angular/forms';

import { DashboardPage } from '../dashboard/dashboard';

import { Auth } from '../../providers/auth.provider';
import { Data } from '../../providers/data.provider';

@Component({
  selector: 'page-signup-petplant',
  templateUrl: 'signup-petplant.html'
})
export class SignupPetplantPage {

  namePlanta: string;
  tipo: string;
  genero: string;
  imagenPlanta = "assets/img/Camera.png";
  textTakephoto = "Tomale una foto a tu planta";

  public base64ImagePlanta: string;
  username: string;

  plantForm;

  constructor(private params: NavParams, private navCtrl: NavController,
    public camera: Camera, public fb: FormBuilder, private actionSheet: ActionSheet,
    public auth: Auth, public data: Data, public loadingCtrl: LoadingController) {

    this.username = params.data.user;

    this.plantForm = fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      type: ['', Validators.required],
      gender: ['', Validators.required]
    });

  }

  onRegisterPlanta() {
    let loading = this.loadingCtrl.create({dismissOnPageChange:true});
    loading.present();
    this.auth.createPlan(this.plantForm.controls,this.base64ImagePlanta?this.base64ImagePlanta:undefined)
      .then(()=>{
        this.auth.getUserKey().then(data=>{
          this.data.get_plants_by_user(data).then(res=>{
            console.log(res);
            this.navCtrl.setRoot(DashboardPage,res);
          }).catch(err=>console.log(err));
        });
      }).catch(err=>console.log(err));
  }

  pickImage(pointer) {
    const options: CameraOptions = {
      allowEdit: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      quality: 100,
      sourceType: pointer,
      targetHeight: 500,
      targetWidth: 500
    }
    this.camera.getPicture(options)
      .then(imageData => {
        this.base64ImagePlanta = "data:image/jpeg;base64," + imageData;
        this.imagenPlanta = this.base64ImagePlanta;
        this.textTakephoto = "Foto cargada correctamente";
      })
      .catch(error => {
        console.error(error);
      });
  }

  chooseOption() {
    let buttonLabels = ['Tomar una foto', 'Cargar de la galería'];
    const options: ActionSheetOptions = {
      title: 'Seleccionar origen de la imagen',
      buttonLabels: buttonLabels,
      addCancelButtonWithLabel: 'Cancelar',
      androidTheme: this.actionSheet.ANDROID_THEMES.THEME_HOLO_LIGHT
    };

    this.actionSheet.show(options).then((buttonIndex: number) => {
      var pointer;
      if(buttonIndex == 1){
        pointer = this.camera.PictureSourceType.CAMERA;
        this.pickImage(pointer);
      }
      if(buttonIndex == 2){
        pointer = this.camera.PictureSourceType.PHOTOLIBRARY;
        this.pickImage(pointer);
      }
    });
  }

}

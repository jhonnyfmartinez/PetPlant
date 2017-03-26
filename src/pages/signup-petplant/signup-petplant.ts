import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';

import { FormBuilder, Validators } from '@angular/forms';

import { Auth } from '../../providers/auth.provider';

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
    public auth: Auth) {

    this.username = params.data.user;

    this.plantForm = fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      tipo: ['', Validators.required],
      genero: ['', Validators.required]
    });

  }

  onRegisterPlanta() {

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
      let pointer = buttonIndex == 1 ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY;
      this.pickImage(pointer);
    });
  }

}

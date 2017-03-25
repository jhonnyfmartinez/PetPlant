import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-signup-petplant',
  templateUrl: 'signup-petplant.html'
})
export class SignupPetplantPage {

  namePlanta:string;
  tipo:string;
  genero:string;
  imagenPlanta = "assets/img/Camera.png";
  textTakephoto="Tomale una foto a tu planta";

  public base64ImagePlanta: string;
  username:string;

  plantForm;

  constructor(private params: NavParams, private navCtrl: NavController,
    public camera:Camera, public fb: FormBuilder, public actionSheetCtrl: ActionSheetController) {

    this.username= params.data.user;

    this.plantForm = fb.group({
      name: ['',Validators.compose([Validators.required,Validators.minLength(3)])],
      tipo: ['',Validators.required],
      genero: ['',Validators.required]
    });

  }

  onRegisterPlanta() {

  }

  pickImage(pointer){
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      quality: 100,
      sourceType: pointer
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.base64ImagePlanta = "data:image/jpeg;base64," + imageData;
      this.imagenPlanta = this.base64ImagePlanta;
      this.textTakephoto="Foto cargada correctamente";
    })
    .catch(error =>{
      console.error( error );
    });
  }

  chooseOption() {

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Selecciona el origen de la imagen',
      buttons: [
        {
          text: 'Cargar de la galería',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },{
          text: 'Tomar una foto',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.CAMERA);
          }
        },{
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

}

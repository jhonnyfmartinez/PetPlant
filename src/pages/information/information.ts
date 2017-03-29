import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SignupPetplantPage } from '../signup-petplant/signup-petplant';

@Component({
  selector: 'page-information',
  templateUrl: 'information.html'
})
export class InformationPage {

  slides = [
    {
      title: "Bienvenido a PetPlant",
      description: "Ahora podras darte cuenta de las necesidades de tu planta con sólo un par de pasos.",
      image: "assets/img/slide1.png"

    },
    {
      title: "¿Cómo funciona PetPlant?",
      description: "<b>Muy Fácil</b> Simplemente sincroniza el bluetooth de tu telefono móvil con el dispostivo adquirido.",
      image: "assets/img/slide2.png"
    },
    {
      title: "¿Qué tipo de planta tienes?",
      description: "<b>Escoge</b> el tipo de planta que vas a tener en tu cuidado.",
      image: "assets/img/slide3.png"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  onHome() {

    this.navCtrl.setRoot(SignupPetplantPage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
  }

}

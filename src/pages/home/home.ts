import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

import { FormBuilder, Validators } from '@angular/forms';

import { SigninPage } from '../signin/signin';
import { DashboardPage } from '../dashboard/dashboard';

import { Auth } from '../../providers/auth.provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  authForm: any;
  loading: any;

  constructor(public navCtrl: NavController, public fb: FormBuilder, public loadingCtrl: LoadingController,
    public auth: Auth, public alertCtrl: AlertController) {
    this.authForm = fb.group({
      user: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      pass: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)])]
    });
  }

  onLogin(valid) {
    this.loading = this.loadingCtrl.create({ dismissOnPageChange: true });
    this.loading.present();
    this.auth.signIn(this.authForm.controls).then(() => {
      this.navCtrl.setRoot(DashboardPage);
    }).catch(err => {
      let alert = this.alertCtrl.create({
        title: 'Error de autentificación',
        message: 'Usuario o contraseña incorrectos',
        buttons: [
          {
            text: 'Ok',
            role: 'cancel'
          }]
      });
      this.loading.dismiss().then(() => alert.present());
    });
  }

  onReg() {
    this.navCtrl.push(SigninPage);
  }

}

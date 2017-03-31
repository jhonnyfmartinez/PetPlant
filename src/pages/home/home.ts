import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

import { FormBuilder, Validators } from '@angular/forms';

import { SigninPage } from '../signin/signin';
import { DashboardPage } from '../dashboard/dashboard';
import { InformationPage } from '../information/information';

import { Auth } from '../../providers/auth.provider';
import { Data } from '../../providers/data.provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  authForm: any;
  loading: any;

  constructor(public navCtrl: NavController, public fb: FormBuilder, public loadingCtrl: LoadingController,
    public auth: Auth, public data: Data, public alertCtrl: AlertController) {
    this.authForm = fb.group({
      user: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      pass: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)])]
    });
  }

  onLogin() {
    this.loading = this.loadingCtrl.create({ dismissOnPageChange: true });
    this.loading.present();
    this.auth.signIn(this.authForm.controls).then(() => {
      this.auth.getUserKey().then(data=>{
        this.data.get_plants_by_user(data).then(res=>{
          res.length>0?this.navCtrl.setRoot(DashboardPage,res):this.navCtrl.setRoot(InformationPage);
        }).catch(err=>console.log(err));
      }).catch(err=>console.log(err));
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

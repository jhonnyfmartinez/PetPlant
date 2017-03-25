import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';

import { FormBuilder, Validators } from '@angular/forms';

import { SigninPage } from '../signin/signin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  authForm:any;
  loading:any;

  constructor(public navCtrl: NavController, public fb:FormBuilder, public loadingCtrl:LoadingController) {
    this.authForm = fb.group({
      user: ['',Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      pass: ['',Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)])]
    });
  }

  onLogin(valid){
    
  }

  onReg(){
    this.navCtrl.setRoot(SigninPage);
  }

}

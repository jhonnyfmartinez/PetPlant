import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { matchingPasswords } from '../../validators/matchingPassword';

import { SignupPetplantPage } from '../signup-petplant/signup-petplant';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  regForm:any;
  loading:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.regForm = fb.group({
      user: ['',Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(20)])],
      pass: ['',Validators.compose([Validators.required,Validators.minLength(6)])],
      Cpass: ['',Validators.required],
      email: ['',Validators.compose([Validators.required,EmailValidator.isValid])],
      legals: [false,Validators.required]
    },{validator:matchingPasswords('pass','Cpass')});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  onReg(){
    this.navCtrl.push(SignupPetplantPage,{user:this.regForm.controls.user.value});
  }

}

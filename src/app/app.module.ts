import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import { SignupPetplantPage } from '../pages/signup-petplant/signup-petplant';
import { DashboardPage } from '../pages/dashboard/dashboard';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Camera } from '@ionic-native/camera';
import { ActionSheet } from '@ionic-native/action-sheet';
import { NativeStorage } from '@ionic-native/native-storage';

import { Auth } from '../providers/auth.provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPetplantPage,
    DashboardPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, { scrollAssist: false, autoFocusAssist: false })
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPetplantPage,
    DashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    ActionSheet,
    Auth,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import { SignupPetplantPage } from '../pages/signup-petplant/signup-petplant';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ProfilePage } from '../pages/profile/profile';
import { SearchPage, PlantDetailPage } from '../pages/search/search';
import { NotificationsPage } from '../pages/notifications/notifications';
import { SettingsPage } from '../pages/settings/settings';
import { InformationPage } from '../pages/information/information';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Camera } from '@ionic-native/camera';
import { ActionSheet } from '@ionic-native/action-sheet';
import { NativeStorage } from '@ionic-native/native-storage';
import { SocialSharing } from '@ionic-native/social-sharing';

import { Auth } from '../providers/auth.provider';
import { Data } from '../providers/data.provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPetplantPage,
    DashboardPage,
    ProfilePage,
    SearchPage,
    PlantDetailPage,
    NotificationsPage,
    SettingsPage,
    InformationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPetplantPage,
    DashboardPage,
    ProfilePage,
    SearchPage,
    PlantDetailPage,
    NotificationsPage,
    SettingsPage,
    InformationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    ActionSheet,
    Auth,
    NativeStorage,
    Data,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}

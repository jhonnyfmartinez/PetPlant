import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Tabs } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { ProfilePage } from '../../pages/profile/profile';
import { SearchPage } from '../../pages/search/search';
import { NotificationsPage } from '../../pages/notifications/notifications';
import { SettingsPage } from '../../pages/settings/settings';

import { Auth } from '../../providers/auth.provider';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  @ViewChild('tabs') tabRef: Tabs;

  tab1Root: any = ProfilePage;
  tab2Root: any = SearchPage;
  tab3Root: any = NotificationsPage;
  tab4Root: any = SettingsPage;

  nav_tittle:String = "PetPlant";

  username: String;
  img: String;
  user: String;
  objectLogin;

  constructor(public navCtrl: NavController, private params: NavParams,
    public auth: Auth) {

    this.objectLogin = this.params.data;

  }

  tabChange(){
    console.log(this.tabRef.getSelected());
  }

  logOut() {
    this.auth.logOut().then(()=>this.navCtrl.setRoot(HomePage));
  }

}

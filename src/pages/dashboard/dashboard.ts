import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Tabs } from 'ionic-angular';

import { ProfilePage } from '../../pages/profile/profile';
import { SearchPage } from '../../pages/search/search';
import { NotificationsPage } from '../../pages/notifications/notifications';
import { SettingsPage } from '../../pages/settings/settings';

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

  username: String;
  img: String;
  user: String;
  objectLogin;

  constructor(public navCtrl: NavController, private params: NavParams) {

    this.objectLogin = this.params.data;

  }

  tabChange(){
    console.log(this.tabRef.getSelected().index);
  }

}

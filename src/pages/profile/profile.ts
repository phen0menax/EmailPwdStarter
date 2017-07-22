import { Component } from '@angular/core';
import { Loading, 
  LoadingController, 
  IonicPage, 
  NavController, 
  NavParams, 
  AlertController } from 'ionic-angular';

@IonicPage({
  name:'profile'
})

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}

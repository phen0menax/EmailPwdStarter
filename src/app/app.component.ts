import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.rootPage = 'login';
        unsubscribe();
      } else {
        this.rootPage = HomePage;
        unsubscribe();
      }
    });

    //Change database as required.

    firebase.initializeApp({
      apiKey: "AIzaSyDyuOPBDWoDAJCQ0gpOq5xIuDjdYtnP9rw",
      authDomain: "emailpwdauth-c200e.firebaseapp.com",
      databaseURL: "https://emailpwdauth-c200e.firebaseio.com",
      projectId: "emailpwdauth-c200e",
      storageBucket: "emailpwdauth-c200e.appspot.com",
      messagingSenderId: "882064725939"
    });


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}


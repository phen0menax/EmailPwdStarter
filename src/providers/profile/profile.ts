import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
import firebase from 'firebase';

/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProfileProvider {

  public userProfile:firebase.database.Reference;
  public currentUser:firebase.User;

  constructor() {
    console.log('Hello ProfileProvider Provider');
  }

}

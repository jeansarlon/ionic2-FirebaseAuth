import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
   items: FirebaseListObservable<any[]>;
   name: String;

   constructor(public navCtrl: NavController,af: AngularFire,private _auth: AuthData) {
      // this.items = af.database.list('/items');
    }

    signInWithFacebook(): void {
      this._auth.signInWithFacebook()
        .then(() => this.onSignInSuccess());
    }

    signOutFacebook(): void {
      this._auth.signOut()
         this.name = null;
    }

    private onSignInSuccess(): void {
      console.log("Facebook display name ",this._auth.displayName());
      this.name = this._auth.displayName();
    }

}

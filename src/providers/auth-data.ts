import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';

/*
  Generated class for the AuthData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthData {
   private authState: FirebaseAuthState;

   constructor(public auth$: AngularFireAuth) {
      //  console.log('Hello AuthData Provider');
      this.authState = auth$.getAuth();
      auth$.subscribe((state: FirebaseAuthState) => {
         this.authState = state;
      });
   }

   get authenticated(): boolean {
      return this.authState !== null;
   }

   signInWithFacebook(): firebase.Promise<FirebaseAuthState> {
      return this.auth$.login({
         provider: AuthProviders.Facebook,
         method: AuthMethods.Popup
      });
   }

   signOut(): void {
      this.auth$.logout().then(() => {
         console.log("Saiu");
      })
   }

   displayName(): string {
      if (this.authState != null) {
         return this.authState.facebook.displayName;
      } else {
         return '';
      }
   }


}

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';

// Import providers
import { AuthData } from '../providers/auth-data';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// Import Firebase config
import {getConfig} from '../firebase.config.js';

// AF2 Settings
export const firebaseConfig = getConfig()

@NgModule({
   declarations: [
      MyApp,
      HomePage,
      LoginPage,
   ],
   imports: [
      IonicModule.forRoot(MyApp),
      AngularFireModule.initializeApp(firebaseConfig)
   ],
   bootstrap: [IonicApp],
   entryComponents: [
      MyApp,
      HomePage,
      LoginPage,
   ],
   providers: [
      { provide: ErrorHandler, useClass: IonicErrorHandler },
      AuthData
   ]
})
export class AppModule { }

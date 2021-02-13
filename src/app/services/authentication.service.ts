import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'auth-token';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);


  constructor(private storage: Storage, private plt: Platform) {
    //auto login function
    // this.plt.ready().then(() => {
    //     this.checkToken();
    //   });

  }

  checkToken() {
    console.log("checktoken detected");
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    })
  }


  login() {
    console.log("login detected");
    return this.storage.set(TOKEN_KEY, 'logged in senheng prediagnostic').then(() => {
      this.authenticationState.next(true);
    });
  }

  logout() {
    console.log("logout detected");
    return this.storage.remove(TOKEN_KEY).then(() => {
      // this.storage.clear();
      this.authenticationState.next(false);
    });

  }

  isAuthenticated() {
    console.log("authenticated detected", this.authenticationState.value);
    return this.authenticationState.value;
  }



}

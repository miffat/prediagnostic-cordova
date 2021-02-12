import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Pre-Diagnostic Declaration', url: '/home' },
    { title: 'Submitted Form', url: '/submitted' },
  ];

  constructor(
    private router: Router,
    // private splashScreen: SplashScreen
  ) {}

  // ionViewWillEnter() {
  //   this.splashScreen.show();
  // }

  logout() {
    this.router.navigateByUrl('/login');
    // this.userData.logout().then(() => {
    //   return this.router.navigateByUrl('/login');
    // });
  }

  // ionViewWillLeave() {
  //   this.splashScreen.hide();
  // }
}

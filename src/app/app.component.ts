import { Http, Headers } from '@angular/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Platform, AlertController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { AuthenticationService } from './services/authentication.service';
import { ClooneproviderService } from './services/clooneprovider.service';
import { Location } from '@angular/common';

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

  // app_version: any;
  thisPlatform: any;

  constructor(
    private platform: Platform,
    private router: Router,
    private appVersion: AppVersion,
    private screenOrientation: ScreenOrientation,
    private authenticationService: AuthenticationService,
    private clooneprovider: ClooneproviderService,
    private http: Http,
    private _location: Location,
    public alertController: AlertController
  ) {
    this.initializeApp();
  }

  // ionViewWillEnter() {
  //   this.splashScreen.show();
  // }

  initializeApp() { 
    this.platform.ready().then(() => {
      
      this.appVersion.getVersionNumber().then((res) => {
        if (this.platform.is('ios')) {
          this.thisPlatform = 'ios';
        } else if(this.platform.is('android')){
          this.thisPlatform = 'android';
        }

        // this.app_version = res;
        this.clooneprovider.currentAppVersion = res;

        console.log("from app component, app version: ", res);
        this.versionCheck();
        // this.storage.set(this.Clooneprovider.DWStorage.app_version,res);
      })

      this.screenOrientation.lock('portrait');

      this.authenticationService.authenticationState.subscribe(state => {
        console.log("status=", state);

        // this.router.navigate(['success']);

        if (state) {
          this.router.navigate(['home']);
        } else {
          this.router.navigate(['login']);
        }

      });

    })

    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Back press handler!');
      if (this._location.isCurrentPathEqualTo('/login')) {

        // Show Exit Alert!
        console.log('Show Exit Alert!');
        this.showExitConfirm();
      } else {
        this.platform.backButton.subscribeWithPriority(1, () => { 
          // to disable hardware back button on whole app
        });
        // Navigate to back page
        // console.log('Navigate to back page');
        // this._location.back();

      }

    });

    
  }
  
  showExitConfirm() {
    this.alertController.create({
      header: 'App termination',
      message: 'Do you want to close the app?',
      backdropDismiss: false,
      buttons: [{
        text: 'Stay',
        role: 'cancel',
        handler: () => {
          console.log('Application exit prevented!');
        }
      }, {
        text: 'Exit',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    })
      .then(alert => {
        alert.present();
      });
  }


  logout() {
    this.authenticationService.logout();
    // this.router.navigateByUrl('/login');
    // this.userData.logout().then(() => {
    //   return this.router.navigateByUrl('/login');
    // });
  }

  versionCheck(){
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let postForm = {
      check_version: 'check_version',
      os: this.thisPlatform,
      version: this.clooneprovider.currentAppVersion,
		}
    console.log(postForm)

    this.http.post(this.clooneprovider.apiUrl, this.clooneprovider.jsonToURLEncoded(postForm), { headers: headers }).subscribe((resp) => {
      let apiData           = resp.json();
      console.log('Succes get data', apiData)
 
      if(apiData.isCurrent == true || apiData.isCurrent == 'true'){

      }else if(apiData.success == 0){
        this.clooneprovider.showAlert('Warning!', 'Network Error')
      }else{
        this.clooneprovider.showAlert(apiData.title,apiData.message)
      }
      
    }, (error) => { 
      console.log('Failed: ', error)
      this.clooneprovider.showAlert(this.clooneprovider.unableConnectTitle, this.clooneprovider.unableConnectMsg);
    });
  }

  // ionViewWillLeave() {
  //   this.splashScreen.hide();
  // }
}

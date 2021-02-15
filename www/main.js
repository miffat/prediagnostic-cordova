(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/apple/Documents/senheng_prediagnostic apps/iffat/prediagnostic/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "uJRU");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "0QAI");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/authentication.service */ "ej43");
/* harmony import */ var _services_clooneprovider_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/clooneprovider.service */ "crRc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");












let AppComponent = class AppComponent {
    constructor(platform, router, appVersion, screenOrientation, authenticationService, clooneprovider, http, _location, alertController) {
        this.platform = platform;
        this.router = router;
        this.appVersion = appVersion;
        this.screenOrientation = screenOrientation;
        this.authenticationService = authenticationService;
        this.clooneprovider = clooneprovider;
        this.http = http;
        this._location = _location;
        this.alertController = alertController;
        this.appPages = [
            { title: 'Pre-Diagnostic Declaration', url: '/home' },
            { title: 'Submitted Form', url: '/submitted' },
        ];
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
                }
                else if (this.platform.is('android')) {
                    this.thisPlatform = 'android';
                }
                // this.app_version = res;
                this.clooneprovider.currentAppVersion = res;
                console.log("from app component, app version: ", res);
                this.versionCheck();
                // this.storage.set(this.Clooneprovider.DWStorage.app_version,res);
            });
            this.screenOrientation.lock('portrait');
            this.authenticationService.authenticationState.subscribe(state => {
                console.log("status=", state);
                // this.router.navigate(['home']);
                if (state) {
                    this.router.navigate(['home']);
                }
                else {
                    this.router.navigate(['login']);
                }
            });
        });
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Back press handler!');
            if (this._location.isCurrentPathEqualTo('/login')) {
                // Show Exit Alert!
                console.log('Show Exit Alert!');
                this.showExitConfirm();
            }
            else {
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
    versionCheck() {
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let postForm = {
            check_version: 'check_version',
            os: this.thisPlatform,
            version: this.clooneprovider.currentAppVersion,
        };
        console.log(postForm);
        this.http.post(this.clooneprovider.apiUrl, this.clooneprovider.jsonToURLEncoded(postForm), { headers: headers }).subscribe((resp) => {
            let apiData = resp.json();
            console.log('Succes get data', apiData);
            if (apiData.success == 0) {
                this.clooneprovider.showAlert('Warning!', 'Network Error');
            }
        }, (error) => {
            console.log('Failed: ', error);
            this.clooneprovider.showAlert(this.clooneprovider.unableConnectTitle, this.clooneprovider.unableConnectMsg);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__["AppVersion"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] },
    { type: _services_clooneprovider_service__WEBPACK_IMPORTED_MODULE_10__["ClooneproviderService"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu [swipeGesture]=\"false\" contentId=\"main-content\" >\n      <ion-content>\n        <ion-list lines=\"full\">\n          <!-- <ion-list-header>Menu</ion-list-header> -->\n          <ion-header >\n            <ion-toolbar>\n              <ion-title style=\"text-align: left; padding-left: 16px;\" class=\"ion-no-padding\">Menu</ion-title>\n            </ion-toolbar>\n          </ion-header>\n\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" detail=\"false\" routerLinkActive=\"selected\">\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle autoHide=\"false\">\n            <ion-item button (click)=\"logout()\" detail=\"false\">\n              <ion-label>\n                Logout\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n        \n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-signaturepad */ "Zw0B");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "uJRU");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "0QAI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "eHpL");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "G769");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/File/ngx */ "B7Vy");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "0PQT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");




















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__["SignaturePadModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["IonicStorageModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_11__["HttpModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
        ],
        providers: [
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__["Camera"],
            _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_17__["File"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_15__["WebView"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_16__["FilePath"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_8__["AppVersion"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_9__["ScreenOrientation"],
            _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_18__["Base64"],
            _angular_common__WEBPACK_IMPORTED_MODULE_19__["DatePipe"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "crRc":
/*!****************************************************!*\
  !*** ./src/app/services/clooneprovider.service.ts ***!
  \****************************************************/
/*! exports provided: ClooneproviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClooneproviderService", function() { return ClooneproviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "c7TG");



let ClooneproviderService = class ClooneproviderService {
    constructor(alertCtrl, loadingController) {
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.apiUrl = "http://eticket.senheng.com.my/sh_ebs/defectAPI.php";
        this.invalidTitle = 'Login Error';
        this.invalidMsg = 'Invalid username/password';
        this.unableConnectTitle = 'Unable to connect to server';
        this.unableConnectMsg = 'Could not connect to server. Please try again later.';
        this.currentAppVersion = '';
        this.branchCode = '';
        this.signature = '';
        this.tncAgree = false;
    }
    showAlert(title, text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: title,
                message: text,
                buttons: ['OK'],
                cssClass: 'my-alert'
            });
            yield alert.present();
            return alert;
        });
    }
    jsonToURLEncoded(jsonString) {
        return Object.keys(jsonString).map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key]);
        }).join('&');
    }
    showLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: "crescent",
                message: 'Please wait...'
            });
            yield loading.present();
            return loading;
        });
    }
    dismissLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingController.dismiss();
        });
    }
};
ClooneproviderService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
ClooneproviderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ClooneproviderService);



/***/ }),

/***/ "ej43":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");





const TOKEN_KEY = 'auth-token';
let AuthenticationService = class AuthenticationService {
    constructor(storage, plt) {
        //auto login function
        // this.plt.ready().then(() => {
        //     this.checkToken();
        //   });
        this.storage = storage;
        this.plt = plt;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
    }
    checkToken() {
        console.log("checktoken detected");
        this.storage.get(TOKEN_KEY).then(res => {
            if (res) {
                this.authenticationState.next(true);
            }
        });
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
};
AuthenticationService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-controller_8.entry.js": [
		"0BR9",
		"common",
		0
	],
	"./ion-action-sheet-ios.entry.js": [
		"bnjm",
		"common",
		1
	],
	"./ion-action-sheet-md.entry.js": [
		"utt2",
		"common",
		2
	],
	"./ion-alert-ios.entry.js": [
		"yaSn",
		"common",
		3
	],
	"./ion-alert-md.entry.js": [
		"2/RY",
		"common",
		4
	],
	"./ion-app_8-ios.entry.js": [
		"iInF",
		"common",
		5
	],
	"./ion-app_8-md.entry.js": [
		"K9Nc",
		"common",
		6
	],
	"./ion-avatar_3-ios.entry.js": [
		"hH1s",
		"common",
		7
	],
	"./ion-avatar_3-md.entry.js": [
		"Jw9y",
		"common",
		8
	],
	"./ion-back-button-ios.entry.js": [
		"ouVF",
		"common",
		9
	],
	"./ion-back-button-md.entry.js": [
		"/joy",
		"common",
		10
	],
	"./ion-backdrop-ios.entry.js": [
		"uJLv",
		11
	],
	"./ion-backdrop-md.entry.js": [
		"fSmE",
		12
	],
	"./ion-button_2-ios.entry.js": [
		"s1jK",
		"common",
		13
	],
	"./ion-button_2-md.entry.js": [
		"Wou7",
		"common",
		14
	],
	"./ion-card_5-ios.entry.js": [
		"qshq",
		"common",
		15
	],
	"./ion-card_5-md.entry.js": [
		"Q1uX",
		"common",
		16
	],
	"./ion-checkbox-ios.entry.js": [
		"059i",
		"common",
		17
	],
	"./ion-checkbox-md.entry.js": [
		"eLfv",
		"common",
		18
	],
	"./ion-chip-ios.entry.js": [
		"+FzG",
		"common",
		19
	],
	"./ion-chip-md.entry.js": [
		"yRpg",
		"common",
		20
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		21
	],
	"./ion-datetime_3-ios.entry.js": [
		"Z1Jy",
		"common",
		22
	],
	"./ion-datetime_3-md.entry.js": [
		"X0Dk",
		"common",
		23
	],
	"./ion-fab_3-ios.entry.js": [
		"wvyA",
		"common",
		24
	],
	"./ion-fab_3-md.entry.js": [
		"NkKY",
		"common",
		25
	],
	"./ion-img.entry.js": [
		"wHD8",
		26
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		"nf6t",
		"common",
		27
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		"lg/V",
		"common",
		28
	],
	"./ion-input-ios.entry.js": [
		"sdJS",
		"common",
		29
	],
	"./ion-input-md.entry.js": [
		"uQUw",
		"common",
		30
	],
	"./ion-item-option_3-ios.entry.js": [
		"Pa1g",
		"common",
		31
	],
	"./ion-item-option_3-md.entry.js": [
		"KTnd",
		"common",
		32
	],
	"./ion-item_8-ios.entry.js": [
		"Z51p",
		"common",
		33
	],
	"./ion-item_8-md.entry.js": [
		"8bam",
		"common",
		34
	],
	"./ion-loading-ios.entry.js": [
		"J3Yu",
		"common",
		35
	],
	"./ion-loading-md.entry.js": [
		"N3W9",
		"common",
		36
	],
	"./ion-menu_4-ios.entry.js": [
		"GEuc",
		"common",
		37
	],
	"./ion-menu_4-md.entry.js": [
		"BHpw",
		"common",
		38
	],
	"./ion-modal-ios.entry.js": [
		"mgaC",
		"common",
		39
	],
	"./ion-modal-md.entry.js": [
		"EpFf",
		"common",
		40
	],
	"./ion-nav_5.entry.js": [
		"qF1+",
		"common",
		41
	],
	"./ion-popover-ios.entry.js": [
		"Gdks",
		"common",
		42
	],
	"./ion-popover-md.entry.js": [
		"VgKV",
		"common",
		43
	],
	"./ion-progress-bar-ios.entry.js": [
		"0PGG",
		"common",
		44
	],
	"./ion-progress-bar-md.entry.js": [
		"h/Bu",
		"common",
		45
	],
	"./ion-radio_2-ios.entry.js": [
		"5bK7",
		"common",
		46
	],
	"./ion-radio_2-md.entry.js": [
		"pOmE",
		"common",
		47
	],
	"./ion-range-ios.entry.js": [
		"5g9+",
		"common",
		48
	],
	"./ion-range-md.entry.js": [
		"fD4w",
		"common",
		49
	],
	"./ion-refresher_2-ios.entry.js": [
		"CXux",
		"common",
		50
	],
	"./ion-refresher_2-md.entry.js": [
		"RODS",
		"common",
		51
	],
	"./ion-reorder_2-ios.entry.js": [
		"IdzL",
		"common",
		52
	],
	"./ion-reorder_2-md.entry.js": [
		"Ftzj",
		"common",
		53
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		54
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		55
	],
	"./ion-searchbar-ios.entry.js": [
		"l0q3",
		"common",
		56
	],
	"./ion-searchbar-md.entry.js": [
		"mLlG",
		"common",
		57
	],
	"./ion-segment_2-ios.entry.js": [
		"Iymp",
		"common",
		58
	],
	"./ion-segment_2-md.entry.js": [
		"3msy",
		"common",
		59
	],
	"./ion-select_3-ios.entry.js": [
		"rYLK",
		"common",
		60
	],
	"./ion-select_3-md.entry.js": [
		"WOXB",
		"common",
		61
	],
	"./ion-slide_2-ios.entry.js": [
		"F/Xn",
		62
	],
	"./ion-slide_2-md.entry.js": [
		"k8us",
		63
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		64
	],
	"./ion-split-pane-ios.entry.js": [
		"edcM",
		65
	],
	"./ion-split-pane-md.entry.js": [
		"RyPD",
		66
	],
	"./ion-tab-bar_2-ios.entry.js": [
		"DP4G",
		"common",
		67
	],
	"./ion-tab-bar_2-md.entry.js": [
		"gaXT",
		"common",
		68
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		69
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		70
	],
	"./ion-textarea-ios.entry.js": [
		"xNZy",
		"common",
		71
	],
	"./ion-textarea-md.entry.js": [
		"p1XJ",
		"common",
		72
	],
	"./ion-toast-ios.entry.js": [
		"XGfm",
		"common",
		73
	],
	"./ion-toast-md.entry.js": [
		"Y/uG",
		"common",
		74
	],
	"./ion-toggle-ios.entry.js": [
		"WbT0",
		"common",
		75
	],
	"./ion-toggle-md.entry.js": [
		"upP9",
		"common",
		76
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		77
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() | pages-home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "99Un")).then(m => m.HomePageModule)
    },
    {
        path: 'submitted',
        loadChildren: () => Promise.all(/*! import() | pages-submitted-submitted-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-submitted-submitted-module")]).then(__webpack_require__.bind(null, /*! ./pages/submitted/submitted.module */ "Cu6l")).then(m => m.SubmittedPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-login-login-module */ "pages-login-login-module").then(__webpack_require__.bind(null, /*! ./pages/login/login.module */ "F4UR")).then(m => m.LoginPageModule)
    },
    {
        path: 'signature-modal',
        loadChildren: () => Promise.all(/*! import() | pages-signature-modal-signature-modal-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-signature-modal-signature-modal-module")]).then(__webpack_require__.bind(null, /*! ./pages/signature-modal/signature-modal.module */ "/v4M")).then(m => m.SignatureModalPageModule)
    },
    {
        path: 'submitted-details',
        loadChildren: () => Promise.all(/*! import() | pages-submitted-details-submitted-details-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-submitted-details-submitted-details-module")]).then(__webpack_require__.bind(null, /*! ./pages/submitted-details/submitted-details.module */ "aMa3")).then(m => m.SubmittedDetailsPageModule)
    },
    {
        path: 'tnc-modal',
        loadChildren: () => Promise.all(/*! import() | pages-tnc-modal-tnc-modal-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-tnc-modal-tnc-modal-module")]).then(__webpack_require__.bind(null, /*! ./pages/tnc-modal/tnc-modal.module */ "iZ4L")).then(m => m.TncModalPageModule)
    },
    {
        path: 'success',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-success-success-module */ "pages-success-success-module").then(__webpack_require__.bind(null, /*! ./pages/success/success.module */ "fGwd")).then(m => m.SuccessPageModule)
    },
    {
        path: 'test',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-test-test-module */ "pages-test-test-module").then(__webpack_require__.bind(null, /*! ./pages/test/test.module */ "ezsy")).then(m => m.TestPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 0;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 0 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 0 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAwIDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
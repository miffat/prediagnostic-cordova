(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "aTZN");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "bP1B");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "H+1c":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-logo {\n  padding: 20px 0 0 0;\n  min-height: 200px;\n  text-align: center;\n}\n\n.login-logo img {\n  text-align: center;\n  width: auto;\n  height: auto;\n  margin-top: 20%;\n  padding: 15px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\n.form_class {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\n.login_form {\n  margin: 50px;\n}\n\n.login_btn {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tbG9nbyB7XG4gICAgcGFkZGluZzogMjBweCAwIDAgMDtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5sb2dpbi1sb2dvIGltZyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICBcbiAgLmxpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgXG4gIC5mb3JtX2NsYXNzIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gIH1cbiAgXG4gIC5sb2dpbl9mb3JtIHtcbiAgICBtYXJnaW46IDUwcHg7XG4gIH1cbiAgXG4gIC5sb2dpbl9idG4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAiXX0= */");

/***/ }),

/***/ "TuYN":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n  <div class=\"login-logo\">\n    <img src=\"assets/img/logo.png\">\n    <p><b>Pre-Diagnostic Declaration Form</b></p>\n  </div>\n\n  <form [formGroup]=\"loginform\" novalidate>\n    <ion-list class=\"login_form\">\n      <ion-item>\n        <ion-input placeholder=\"Username\" formControlName=\"username\" type=\"text\"  spellcheck=\"false\" autocapitalize=\"off\">\n          <ion-icon style=\"color: red; padding-right: 20px;\" name=\"person\"></ion-icon>\n        </ion-input>\n        <!-- <ng-container *ngFor=\"let error of error_messages.username\">\n\t\t\t\t\t<div class=\"error-message\" *ngIf=\"loginform.get('username').hasError(error.type) && (loginform.get('username').dirty || loginform.get('username').touched)\">\n\t\t\t\t\t\t{{error.message}}\n\t\t\t\t\t</div>\n\t\t\t\t</ng-container> -->\n      </ion-item>\n\n      <ion-text color=\"danger\" *ngFor=\"let error of error_messages.username\">\n        <p class=\"ion-padding-start\" *ngIf=\"loginform.get('username').hasError(error.type) && (loginform.get('username').dirty || loginform.get('username').touched)\">\n          Username is required\n        </p>\n      </ion-text>\n\n      <ion-item>\n        <ion-input placeholder=\"Password\" formControlName=\"password\" type=\"password\">\n          <ion-icon style=\"color: red; padding-right: 20px;\" name=\"key\"></ion-icon>\n        </ion-input>\n      </ion-item>\n\n      <ion-text color=\"danger\" *ngFor=\"let error of error_messages.password\">\n        <p class=\"ion-padding-start\" *ngIf=\"loginform.get('password').hasError(error.type) && (loginform.get('password').dirty || loginform.get('password').touched)\">\n          Password is required\n        </p>\n      </ion-text>\n    </ion-list>\n\n    <div class=\"login_btn\">\n      <ion-button style=\"width: 130px;\" color=\"danger\" (click)=\"login()\" [disabled]=\"!loginform.valid\">\n        Login\n        <ion-icon style=\"padding-left: 5px;\" name=\"log-in\"></ion-icon>\n      </ion-button>\n    </div>\n  </form>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n    <div style=\"text-align: center;\">\n      <span>Version {{version}}</span>\n    </div>\n</ion-footer>\n");

/***/ }),

/***/ "aTZN":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "bP1B");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "bP1B":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "TuYN");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "H+1c");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/authentication.service */ "ej43");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _services_clooneprovider_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/clooneprovider.service */ "crRc");











let LoginPage = class LoginPage {
    constructor(router, menuCtrl, platform, authenticationService, formBuilder, http, storage, clooneprovider) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.storage = storage;
        this.clooneprovider = clooneprovider;
        this.username = '';
        this.password = '';
        this.error_messages = {
            'username': [
                { type: "required" }
            ],
            'password': [
                { type: "required" }
            ]
        };
        this.loginform = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required)
        });
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(false);
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
            let postForm = {
                username: this.loginform.value.username,
                password: this.loginform.value.password
            };
            console.log(postForm);
            this.http.post(this.clooneprovider.apiUrl, this.clooneprovider.jsonToURLEncoded(postForm), { headers: headers }).subscribe((resp) => {
                let apiData = resp.json();
                console.log('Succes get data', apiData);
                if (apiData.success == 0) {
                    this.clooneprovider.showAlert(this.clooneprovider.invalidTitle, this.clooneprovider.invalidMsg);
                }
                else {
                    this.router.navigateByUrl('/home');
                }
            }, (error) => {
                console.log('Failed: ', error);
                this.clooneprovider.showAlert(this.clooneprovider.unableConnectTitle, this.clooneprovider.unableConnectMsg);
            });
        });
    }
    ionViewDidLeave() {
        this.menuCtrl.enable(true);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
    { type: _services_clooneprovider_service__WEBPACK_IMPORTED_MODULE_10__["ClooneproviderService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map
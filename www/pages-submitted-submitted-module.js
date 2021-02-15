(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-submitted-submitted-module"],{

/***/ "Cu6l":
/*!*****************************************************!*\
  !*** ./src/app/pages/submitted/submitted.module.ts ***!
  \*****************************************************/
/*! exports provided: SubmittedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmittedPageModule", function() { return SubmittedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _submitted_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./submitted-routing.module */ "O0H5");
/* harmony import */ var _submitted_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submitted.page */ "paS3");







let SubmittedPageModule = class SubmittedPageModule {
};
SubmittedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _submitted_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubmittedPageRoutingModule"]
        ],
        declarations: [_submitted_page__WEBPACK_IMPORTED_MODULE_6__["SubmittedPage"]]
    })
], SubmittedPageModule);



/***/ }),

/***/ "EaTS":
/*!*****************************************************!*\
  !*** ./src/app/pages/submitted/submitted.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  color: var(--ion-color-dark);\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.photo {\n  margin: 10px 10px 10px 0px;\n  height: 100px;\n  width: 100px;\n}\n\n.item-details {\n  margin: 0;\n  color: #8c8c8c;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N1Ym1pdHRlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoic3VibWl0dGVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucGhvdG8ge1xuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4XG59XG5cbi5pdGVtLWRldGFpbHMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBmb250LXNpemU6IDEzcHg7XG59Il19 */");

/***/ }),

/***/ "O0H5":
/*!*************************************************************!*\
  !*** ./src/app/pages/submitted/submitted-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SubmittedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmittedPageRoutingModule", function() { return SubmittedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _submitted_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submitted.page */ "paS3");




const routes = [
    {
        path: '',
        component: _submitted_page__WEBPACK_IMPORTED_MODULE_3__["SubmittedPage"]
    }
];
let SubmittedPageRoutingModule = class SubmittedPageRoutingModule {
};
SubmittedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubmittedPageRoutingModule);



/***/ }),

/***/ "fGi9":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/submitted/submitted.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-no-padding\">Submitted Form</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"arrow-down\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"crescent\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <!-- <ion-searchbar style=\"--cancel-button-color: black;\" showCancelButton=\"always\"></ion-searchbar> -->\n    <ion-grid class=\"bg-color\" fixed>\n      <ion-list lines=\"full\" class=\"form-list\">\n        <ion-item *ngFor=\"let item of arrlist\" (click)=\"openDetails(item.id)\">\n          <img class=\"photo\" src=\"http://eticket.senheng.com.my/sh_ebs/uploads/{{item.img}}\" alt=\"\">\n          <div>\n            <h5 style=\"margin: 0;\">{{item.brand}} {{item.model}}</h5>\n            <p class=\"item-details\" >{{item.son}}</p>\n            <p class=\"item-details\" >{{item.created}}</p>\n          </div>\n        </ion-item>\n        <!-- <ion-item>\n          <img class=\"photo\" src=\"https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80\" alt=\"\">\n          <div>\n            <h2 style=\"margin: 0;\">Model</h2>\n            <p style=\"margin: 0;\">code</p>\n            <p style=\"margin: 0;\">date</p>\n          </div>\n        </ion-item>\n        <ion-button style=\"width: 130px;\" color=\"danger\" (click)=\"loading()\">\n          Loading\n          <ion-icon style=\"padding-left: 5px;\" name=\"log-in\"></ion-icon>\n        </ion-button> -->\n      </ion-list>\n    </ion-grid>\n  \n  <!-- <div id=\"container\">\n    <ion-searchbar showCancelButton=\"always\"></ion-searchbar>\n    <strong class=\"capitalize\">Submitted Form</strong>\n  </div> -->\n</ion-content>\n");

/***/ }),

/***/ "paS3":
/*!***************************************************!*\
  !*** ./src/app/pages/submitted/submitted.page.ts ***!
  \***************************************************/
/*! exports provided: SubmittedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmittedPage", function() { return SubmittedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_submitted_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./submitted.page.html */ "fGi9");
/* harmony import */ var _submitted_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submitted.page.scss */ "EaTS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _submitted_details_submitted_details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../submitted-details/submitted-details.page */ "2C/m");
/* harmony import */ var _services_clooneprovider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/clooneprovider.service */ "crRc");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "qlzE");








let SubmittedPage = class SubmittedPage {
    constructor(modalCtrl, clooneprovider, http, platform) {
        this.modalCtrl = modalCtrl;
        this.clooneprovider = clooneprovider;
        this.http = http;
        this.platform = platform;
        this.arrlist = [];
        this.isDataAvailable = false;
        // this.initSubmitted
    }
    ngOnInit() {
        // this.platform.ready().then(() => {
        //   this.initSubmitted
        // });
    }
    ionViewWillEnter() {
        console.log('first');
        this.initSubmitted();
        this.isDataAvailable = true;
    }
    doRefresh(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Begin async operation');
            this.initSubmitted();
            let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_7__["Headers"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
            let postForm = {
                getsubmitlist: this.clooneprovider.branchCode
            };
            console.log(postForm);
            let loading = yield this.clooneprovider.showLoading();
            this.http.post(this.clooneprovider.apiUrl, this.clooneprovider.jsonToURLEncoded(postForm), { headers: headers }).subscribe((resp) => {
                let apiData = resp.json();
                this.arrlist = apiData;
                console.log('Succes get data', this.arrlist);
                loading.dismiss();
                event.target.complete(); //close ion-refresher
            }, (error) => {
                console.log('Failed: ', error);
                this.clooneprovider.showAlert('Error!', 'Network error. Please pull to refresh');
            });
            // setTimeout(() => {
            //   console.log('Async operation has ended');
            //   event.target.complete();
            // }, 2000);
        });
    }
    initSubmitted() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_7__["Headers"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
            let postForm = {
                getsubmitlist: this.clooneprovider.branchCode
            };
            console.log(postForm);
            let loading = yield this.clooneprovider.showLoading();
            this.http.post(this.clooneprovider.apiUrl, this.clooneprovider.jsonToURLEncoded(postForm), { headers: headers }).subscribe((resp) => {
                let apiData = resp.json();
                this.arrlist = apiData;
                loading.dismiss();
            }, (error) => {
                console.log('Failed: ', error);
                this.clooneprovider.showAlert('Error!', 'Network error. Please pull to refresh');
            });
        });
    }
    openDetails(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _submitted_details_submitted_details_page__WEBPACK_IMPORTED_MODULE_5__["SubmittedDetailsPage"],
                componentProps: {
                    detailID: id
                }
                // cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
};
SubmittedPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_clooneprovider_service__WEBPACK_IMPORTED_MODULE_6__["ClooneproviderService"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_7__["Http"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
SubmittedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-submitted',
        template: _raw_loader_submitted_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_submitted_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SubmittedPage);



/***/ })

}]);
//# sourceMappingURL=pages-submitted-submitted-module.js.map
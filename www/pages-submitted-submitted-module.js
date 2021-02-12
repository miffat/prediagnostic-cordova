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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
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
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  color: var(--ion-color-dark);\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.photo {\n  margin: 10px 10px 10px 0px;\n  height: 100px;\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N1Ym1pdHRlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtBQUNKOztBQUVFO0VBQ0UsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InN1Ym1pdHRlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIH1cbiAgXG4gICNjb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgXG4gICNjb250YWluZXIgc3Ryb25nIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIH1cbiAgXG4gICNjb250YWluZXIgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGNvbG9yOiAjOGM4YzhjO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIC5waG90byB7XG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDsgXG4gICAgd2lkdGg6IDEwMHB4XG4gIH0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-no-padding\">Submitted Form</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <!-- <ion-searchbar style=\"--cancel-button-color: black;\" showCancelButton=\"always\"></ion-searchbar> -->\n  <ion-grid class=\"bg-color\" fixed>\n    <ion-list lines=\"full\" class=\"form-list\">\n      <ion-item (click)=\"openDetails()\">\n        <img class=\"photo\" src=\"https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80\" alt=\"\">\n        <div>\n          <h2 style=\"margin: 0;\">Model</h2>\n          <p style=\"margin: 0;\">code</p>\n          <p style=\"margin: 0;\">date</p>\n        </div>\n      </ion-item>\n      <ion-item>\n        <img class=\"photo\" src=\"https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80\" alt=\"\">\n        <div>\n          <h2 style=\"margin: 0;\">Model</h2>\n          <p style=\"margin: 0;\">code</p>\n          <p style=\"margin: 0;\">date</p>\n        </div>\n      </ion-item>\n    </ion-list>\n  </ion-grid>\n  <!-- <div id=\"container\">\n    <ion-searchbar showCancelButton=\"always\"></ion-searchbar>\n    <strong class=\"capitalize\">Submitted Form</strong>\n  </div> -->\n</ion-content>\n");

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _submitted_details_submitted_details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../submitted-details/submitted-details.page */ "2C/m");






let SubmittedPage = class SubmittedPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
    }
    openDetails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _submitted_details_submitted_details_page__WEBPACK_IMPORTED_MODULE_5__["SubmittedDetailsPage"],
            });
            return yield modal.present();
        });
    }
};
SubmittedPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
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
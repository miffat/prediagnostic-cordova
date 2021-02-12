(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signature-modal-signature-modal-module"],{

/***/ "/v4M":
/*!*****************************************************************!*\
  !*** ./src/app/pages/signature-modal/signature-modal.module.ts ***!
  \*****************************************************************/
/*! exports provided: SignatureModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureModalPageModule", function() { return SignatureModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _signature_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signature-modal-routing.module */ "YpIJ");
/* harmony import */ var _signature_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signature-modal.page */ "OJ+J");







let SignatureModalPageModule = class SignatureModalPageModule {
};
SignatureModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signature_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignatureModalPageRoutingModule"]
        ],
        declarations: [_signature_modal_page__WEBPACK_IMPORTED_MODULE_6__["SignatureModalPage"]]
    })
], SignatureModalPageModule);



/***/ }),

/***/ "YpIJ":
/*!*************************************************************************!*\
  !*** ./src/app/pages/signature-modal/signature-modal-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: SignatureModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureModalPageRoutingModule", function() { return SignatureModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signature_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signature-modal.page */ "OJ+J");




const routes = [
    {
        path: '',
        component: _signature_modal_page__WEBPACK_IMPORTED_MODULE_3__["SignatureModalPage"]
    }
];
let SignatureModalPageRoutingModule = class SignatureModalPageRoutingModule {
};
SignatureModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignatureModalPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-signature-modal-signature-modal-module.js.map
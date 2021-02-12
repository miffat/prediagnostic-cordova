(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tnc-modal-tnc-modal-module"],{

/***/ "hqaJ":
/*!*************************************************************!*\
  !*** ./src/app/pages/tnc-modal/tnc-modal-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: TncModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TncModalPageRoutingModule", function() { return TncModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tnc_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tnc-modal.page */ "I3CW");




const routes = [
    {
        path: '',
        component: _tnc_modal_page__WEBPACK_IMPORTED_MODULE_3__["TncModalPage"]
    }
];
let TncModalPageRoutingModule = class TncModalPageRoutingModule {
};
TncModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TncModalPageRoutingModule);



/***/ }),

/***/ "iZ4L":
/*!*****************************************************!*\
  !*** ./src/app/pages/tnc-modal/tnc-modal.module.ts ***!
  \*****************************************************/
/*! exports provided: TncModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TncModalPageModule", function() { return TncModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tnc_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tnc-modal-routing.module */ "hqaJ");
/* harmony import */ var _tnc_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tnc-modal.page */ "I3CW");







let TncModalPageModule = class TncModalPageModule {
};
TncModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tnc_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["TncModalPageRoutingModule"]
        ],
        declarations: [_tnc_modal_page__WEBPACK_IMPORTED_MODULE_6__["TncModalPage"]]
    })
], TncModalPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-tnc-modal-tnc-modal-module.js.map
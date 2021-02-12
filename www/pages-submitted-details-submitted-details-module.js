(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-submitted-details-submitted-details-module"],{

/***/ "Dprz":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/submitted-details/submitted-details-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: SubmittedDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmittedDetailsPageRoutingModule", function() { return SubmittedDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _submitted_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submitted-details.page */ "2C/m");




const routes = [
    {
        path: '',
        component: _submitted_details_page__WEBPACK_IMPORTED_MODULE_3__["SubmittedDetailsPage"]
    }
];
let SubmittedDetailsPageRoutingModule = class SubmittedDetailsPageRoutingModule {
};
SubmittedDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubmittedDetailsPageRoutingModule);



/***/ }),

/***/ "aMa3":
/*!*********************************************************************!*\
  !*** ./src/app/pages/submitted-details/submitted-details.module.ts ***!
  \*********************************************************************/
/*! exports provided: SubmittedDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmittedDetailsPageModule", function() { return SubmittedDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _submitted_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./submitted-details-routing.module */ "Dprz");
/* harmony import */ var _submitted_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submitted-details.page */ "2C/m");







let SubmittedDetailsPageModule = class SubmittedDetailsPageModule {
};
SubmittedDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _submitted_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubmittedDetailsPageRoutingModule"]
        ],
        declarations: [_submitted_details_page__WEBPACK_IMPORTED_MODULE_6__["SubmittedDetailsPage"]]
    })
], SubmittedDetailsPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-submitted-details-submitted-details-module.js.map
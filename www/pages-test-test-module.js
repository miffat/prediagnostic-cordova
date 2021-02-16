(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-test-test-module"],{

/***/ "8NRt":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>test</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  \n</ion-content>\n");

/***/ }),

/***/ "FB+Z":
/*!*******************************************!*\
  !*** ./src/app/pages/test/test.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "I1aY":
/*!***************************************************!*\
  !*** ./src/app/pages/test/test-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageRoutingModule", function() { return TestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.page */ "hwu9");




const routes = [
    {
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_3__["TestPage"]
    }
];
let TestPageRoutingModule = class TestPageRoutingModule {
};
TestPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TestPageRoutingModule);



/***/ }),

/***/ "ezsy":
/*!*******************************************!*\
  !*** ./src/app/pages/test/test.module.ts ***!
  \*******************************************/
/*! exports provided: TestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageModule", function() { return TestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-routing.module */ "I1aY");
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test.page */ "hwu9");







let TestPageModule = class TestPageModule {
};
TestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _test_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestPageRoutingModule"]
        ],
        declarations: [_test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]]
    })
], TestPageModule);



/***/ }),

/***/ "hwu9":
/*!*****************************************!*\
  !*** ./src/app/pages/test/test.page.ts ***!
  \*****************************************/
/*! exports provided: TestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPage", function() { return TestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_test_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./test.page.html */ "8NRt");
/* harmony import */ var _test_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test.page.scss */ "FB+Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");





let TestPage = class TestPage {
    constructor(platform) {
        this.platform = platform;
    }
    ngOnInit() {
        // this.platform.ready().then(() => {
        //   $rootScope.lock = null
        //   $rootScope.lock = new PatternLock("#patternContainer");
        //   //$rootScope.lock2 = new PatternLock("#patternHolderset",{enableSetPattern : true});
        //   //alert("initHome")
        //   //console.log($rootScope.lock)
        //   //$rootScope.lock.getPattern();
        //   //$rootScope.$apply();
        //   //$location.reload()
        //   // this.signaturePad.off();
        //   if ($window.localStorage["reload"] == 1) {
        //     $window.location.reload(true)
        //     $window.localStorage["reload"] = 0
        //   }
        // })
    }
};
TestPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
TestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-test',
        template: _raw_loader_test_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_test_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TestPage);



/***/ })

}]);
//# sourceMappingURL=pages-test-test-module.js.map
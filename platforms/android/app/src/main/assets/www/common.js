(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "0/6H":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "A36C");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "2C/m":
/*!*******************************************************************!*\
  !*** ./src/app/pages/submitted-details/submitted-details.page.ts ***!
  \*******************************************************************/
/*! exports provided: SubmittedDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmittedDetailsPage", function() { return SubmittedDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_submitted_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./submitted-details.page.html */ "PiZJ");
/* harmony import */ var _submitted_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submitted-details.page.scss */ "Bctj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let SubmittedDetailsPage = class SubmittedDetailsPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
};
SubmittedDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
SubmittedDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-submitted-details',
        template: _raw_loader_submitted_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_submitted_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SubmittedDetailsPage);



/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "Bctj":
/*!*********************************************************************!*\
  !*** ./src/app/pages/submitted-details/submitted-details.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-header {\n  padding: 10px;\n  background-color: lightgrey;\n}\n\n.card-subtitle {\n  margin: 0;\n  color: black;\n  text-transform: capitalize !important;\n  font-size: 0.9em;\n}\n\n.photo {\n  width: 50%;\n}\n\nion-card-content {\n  display: flex;\n  position: relative;\n}\n\n.detailItems {\n  padding-right: 12px;\n  text-transform: uppercase;\n  font-size: 0.9em;\n  color: gray;\n}\n\n.label {\n  font-size: 0.9em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N1Ym1pdHRlZC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoic3VibWl0dGVkLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbn1cblxuLmNhcmQtc3VidGl0bGUge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDAuOWVtO1xufVxuXG4ucGhvdG8ge1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZGV0YWlsSXRlbXMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGNvbG9yOiBncmF5O1xufVxuXG4ubGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG59Il19 */");

/***/ }),

/***/ "I3CW":
/*!***************************************************!*\
  !*** ./src/app/pages/tnc-modal/tnc-modal.page.ts ***!
  \***************************************************/
/*! exports provided: TncModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TncModalPage", function() { return TncModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tnc_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tnc-modal.page.html */ "fZHQ");
/* harmony import */ var _tnc_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tnc-modal.page.scss */ "vpE3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let TncModalPage = class TncModalPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
};
TncModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
TncModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tnc-modal',
        template: _raw_loader_tnc_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tnc_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TncModalPage);



/***/ }),

/***/ "OJ+J":
/*!***************************************************************!*\
  !*** ./src/app/pages/signature-modal/signature-modal.page.ts ***!
  \***************************************************************/
/*! exports provided: SignatureModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureModalPage", function() { return SignatureModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signature_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signature-modal.page.html */ "ppnA");
/* harmony import */ var _signature_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signature-modal.page.scss */ "alnF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let SignatureModalPage = class SignatureModalPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
};
SignatureModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
SignatureModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signature-modal',
        template: _raw_loader_signature_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signature_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignatureModalPage);



/***/ }),

/***/ "PiZJ":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/submitted-details/submitted-details.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">Close</ion-button>\n    </ion-buttons>\n    <ion-title>Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list lines=\"full\" class=\"form-list\">\n    <ion-item>\n      <ion-label class=\"label\">Name</ion-label>\n      <p class=\"detailItems\">Name</p>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"label\">Contact</ion-label>\n      <p class=\"detailItems\">Name</p>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"label\">Email</ion-label>\n      <p class=\"detailItems\">Name</p>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"label\">Brand</ion-label>\n      <p class=\"detailItems\">Name</p>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"label\">Model</ion-label>\n      <p class=\"detailItems\">Name</p>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"label\">CSO</ion-label>\n      <p class=\"detailItems\">Name</p>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"label\">Submitted Date</ion-label>\n      <p class=\"detailItems\">Name</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-card>\n    <ion-card-header class=\"card-header\">\n      <ion-card-subtitle class=\"card-subtitle\">front</ion-card-subtitle>\n    </ion-card-header>\n  \n    <ion-card-content style=\"justify-content: center;\">\n        <img class=\"photo\" src=\"https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80\" alt=\"\">\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "ZaV5":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "alnF":
/*!*****************************************************************!*\
  !*** ./src/app/pages/signature-modal/signature-modal.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-list {\n  margin: 12px 5px 12px 5px;\n  padding: 0;\n  border: 1px solid lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpZ25hdHVyZS1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtBQUNKIiwiZmlsZSI6InNpZ25hdHVyZS1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1saXN0IHtcbiAgICBtYXJnaW46IDEycHggNXB4IDEycHggNXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICB9XG4gICJdfQ== */");

/***/ }),

/***/ "fZHQ":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnc-modal/tnc-modal.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">Close</ion-button>\n    </ion-buttons>\n    <ion-title>Terms & Conditions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-list lines=\"full\" class=\"form-list\">\n      <ion-item class=\"tncDetails\">\n        <p><b>1. </b> In-warranty/manufacturer warranty will be carried out subject to warranty validity check by Senheng authorised person.</p>\n      </ion-item>\n      <ion-item class=\"tncDetails\">\n        <p><b>2. </b> For Product under manufacturer warranty, PlusOne® warranty or V-Care extended warranty, the warranty is only applicable for damage caused by normal use condition and specifically void if:<br>\n          - Warranty seal is broken: - Product is beyond repair condition (oxidized, liquid immersed, physical damages & such other conditions as may be informed by Senheng): or<br>\n          - Product has been opened, modified, tampered with or repaired or attempted to be opened, modified, tampered with or repaired by unauthorized person; or<br>\n          - Product failure is caused by software being corrupted or Product being downloaded with incompatible software The warranties shall not apply if:<br>\n          - Made void by any reason(s) above;<br>\n          - Damaged by use with products not sold or licensed by manufacturer (including, for example, games and accessories not manufactured or licensed by manufacturer, and \"pirated\" games, etc.);<br>\n          - Product used for commercial purposes (including, for example, rental, pay-per-use, etc.);<br>\n          - Damaged by any external cause (including, for example, by being dropped, failure to follow instructions on operation etc.);<br>\n          - Scratched, dented, etc. or shows other cosmetic damage; or - Repaired by anyone other than Senheng.<br></p>\n      </ion-item>\n      <ion-item class=\"tncDetails\">\n        <p><b>3. </b> Customer shall back up all data and delete anything which Customer deems confidential from the Product on his/her own efforts before sending/ releasing the Product to Senheng. Senheng will not be responsible for any data lost or disclosure.</p>\n      </ion-item>\n      <ion-item class=\"tncDetails\">\n        <p><b>4. </b> In the event of diagnostic/repair, the Product may be to factory mode without prior notice to Customer.</p>\n      </ion-item>\n      <ion-item class=\"tncDetails\">\n        <p><b>5. </b> Customer should collect the Product within thirty (30) days from the date of the repair completion notification. Senheng reserves its right to dispose the Product without further notice and liability to Customer if Customer fails to collect the Product within thirty (30) days from the date of repair completion notification. Product shall only be released in exchange of payment of invoice (if any) for non-warrantable parts, inspection and labour cost.</p>\n      </ion-item>\n      <ion-item class=\"tncDetails\">\n        <p><b>6. </b> Inspection cost, labour cost and parts replacement cost for any non-warrantable parts or Product is at the cost of the Customer.</p>\n      </ion-item>\n      <ion-item class=\"tncDetails\">\n        <p><b>7. </b> All accessories attached to or accompanying the Product and delivered to Senheng shall be at the risks of Customer and Senheng will not responsible for any loss or damage.</p>\n      </ion-item>\n      <ion-item class=\"tncDetails\">\n        <p><b>8. </b> Senheng and its employees, affiliates and sub-ctonractors will exercise reasonable care of the Product during possession of the Product; however neither Senheng or any of its employees, affiliates and/or sub-contractor will not responsible for the Product (save for the requested repair areas) or any scratches or cosmetic damage to the Product while carry out any inspection and repairing works.</p>\n      </ion-item>\n      <ion-item class=\"tncDetails\">\n        <p><b>9. </b> To the extent permitted by law, SENHENG IS NOT responsible FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES; ANY LOSS OF DATA, PRIVACY, CONFIDENTIALITY, OR PROFITS; OR ANY INABILITYTO USE YOUR Product or accessory. THESE EXCLUSIONS APPLY EVEN IF SENHENG HAS BEEN ADVISED OF THE POSSIBILITY OF THESE DAMAGES, AND EVEN IF ANY REMEDY FAILS OF ITS ESSENTIAL PURPOSE.</p>\n      </ion-item>\n      <ion-item class=\"tncDetails\">\n        <p><b>10. </b> By signing the declaration below, you consent to the disclosure and processing of your personal data by and confirm that you have obtained the consent of such persons to the disclosure of their personal data to Senheng and its employees, affiliates and sub-contractors and undertake to comply with all relevant privacy laws.</p>\n      </ion-item>\n      <ion-item class=\"tncDetails\">\n        <p><b>11. </b> For the purpose of this form, all reference to “Senheng\" shall include Senheng Electric (KL) Sdn Bhd, its subsidiary companies, employees, authorised affiliates and sub-contractors.</p>\n      </ion-item>\n\n      \n      \n    </ion-list>\n\n    <ion-list lines=\"full\" class=\"form-list\">\n      <ion-item class=\"tncDetails\">\n        <ion-checkbox slot=\"start\" color=\"danger\"></ion-checkbox>\n        <p style=\"padding-left: 12px;\">I agree to the terms & conditions.</p>\n      </ion-item>\n    </ion-list>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "ppnA":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signature-modal/signature-modal.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">Close</ion-button>\n    </ion-buttons>\n    <ion-title>Signature Pad</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-list lines=\"full\" class=\"form-list\">\n      <ion-item>\n        <p>Sign in the box provided</p>\n      </ion-item>\n\n      <ion-item>\n        <canvas></canvas>\n      </ion-item>\n\n      <ion-item>\n        <ion-button style=\"height: 34px; width: 50px;\" color=\"danger\" (click)=\"onClick()\" >\n          Save\n        </ion-button>\n        <ion-button style=\"height: 34px; width: 50px;\" color=\"light\" (click)=\"onClick()\" >\n          Clear\n        </ion-button>\n      </ion-item>\n      \n    </ion-list>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "vpE3":
/*!*****************************************************!*\
  !*** ./src/app/pages/tnc-modal/tnc-modal.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-list {\n  margin: 12px 5px 12px 5px;\n  padding: 0;\n  border: 1px solid lightgrey;\n}\n\n.tncDetails {\n  font-size: 0.9em;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RuYy1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoidG5jLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWxpc3Qge1xuICAgIG1hcmdpbjogMTJweCA1cHggMTJweCA1cHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIH1cbiAgXG4gIC50bmNEZXRhaWxzIHtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICAiXX0= */");

/***/ })

}]);
//# sourceMappingURL=common.js.map
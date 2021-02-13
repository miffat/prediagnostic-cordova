(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");





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

/***/ "Dl6n":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
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
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
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
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");





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

/***/ "K6rM":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-4d91f03a.js ***!
  \*************************************************************/
/*! exports provided: d, g, l, s, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getIonPageElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return transition; });
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "c1op");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "kBU6");



const iosTransitionAnimation = () => __webpack_require__.e(/*! import() | ios-transition-504cdd09-js */ "ios-transition-504cdd09-js").then(__webpack_require__.bind(null, /*! ./ios.transition-504cdd09.js */ "5+Pq"));
const mdTransitionAnimation = () => __webpack_require__.e(/*! import() | md-transition-fea2bbfb-js */ "md-transition-fea2bbfb-js").then(__webpack_require__.bind(null, /*! ./md.transition-fea2bbfb.js */ "RRi8"));
const transition = (opts) => {
    return new Promise((resolve, reject) => {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
            beforeTransition(opts);
            runTransition(opts).then(result => {
                if (result.animation) {
                    result.animation.destroy();
                }
                afterTransition(opts);
                resolve(result);
            }, error => {
                afterTransition(opts);
                reject(error);
            });
        });
    });
};
const beforeTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    setZIndex(enteringEl, leavingEl, opts.direction);
    if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
    }
    else {
        enteringEl.classList.remove('can-go-back');
    }
    setPageHidden(enteringEl, false);
    if (leavingEl) {
        setPageHidden(leavingEl, false);
    }
};
const runTransition = async (opts) => {
    const animationBuilder = await getAnimationBuilder(opts);
    const ani = (animationBuilder)
        ? animation(animationBuilder, opts)
        : noAnimation(opts); // fast path for no animation
    return ani;
};
const afterTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    enteringEl.classList.remove('ion-page-invisible');
    if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
    }
};
const getAnimationBuilder = async (opts) => {
    if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
        return undefined;
    }
    if (opts.animationBuilder) {
        return opts.animationBuilder;
    }
    const getAnimation = (opts.mode === 'ios')
        ? (await iosTransitionAnimation()).iosTransitionAnimation
        : (await mdTransitionAnimation()).mdTransitionAnimation;
    return getAnimation;
};
const animation = async (animationBuilder, opts) => {
    await waitForReady(opts, true);
    let trans;
    try {
        const mod = await __webpack_require__.e(/*! import() | index-69c37885-js */ "index-69c37885-js").then(__webpack_require__.bind(null, /*! ./index-69c37885.js */ "gHMO"));
        trans = await mod.create(animationBuilder, opts.baseEl, opts);
    }
    catch (err) {
        trans = animationBuilder(opts.baseEl, opts);
    }
    fireWillEvents(opts.enteringEl, opts.leavingEl);
    const didComplete = await playTransition(trans, opts);
    if (opts.progressCallback) {
        opts.progressCallback(undefined);
    }
    if (didComplete) {
        fireDidEvents(opts.enteringEl, opts.leavingEl);
    }
    return {
        hasCompleted: didComplete,
        animation: trans
    };
};
const noAnimation = async (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    await waitForReady(opts, false);
    fireWillEvents(enteringEl, leavingEl);
    fireDidEvents(enteringEl, leavingEl);
    return {
        hasCompleted: true
    };
};
const waitForReady = async (opts, defaultDeep) => {
    const deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
    const promises = deep ? [
        deepReady(opts.enteringEl),
        deepReady(opts.leavingEl),
    ] : [
        shallowReady(opts.enteringEl),
        shallowReady(opts.leavingEl),
    ];
    await Promise.all(promises);
    await notifyViewReady(opts.viewIsReady, opts.enteringEl);
};
const notifyViewReady = async (viewIsReady, enteringEl) => {
    if (viewIsReady) {
        await viewIsReady(enteringEl);
    }
};
const playTransition = (trans, opts) => {
    const progressCallback = opts.progressCallback;
    // TODO: Remove AnimationBuilder
    const promise = new Promise(resolve => {
        trans.onFinish((currentStep) => {
            if (typeof currentStep === 'number') {
                resolve(currentStep === 1);
            }
            else if (trans.hasCompleted !== undefined) {
                resolve(trans.hasCompleted);
            }
        });
    });
    // cool, let's do this, start the transition
    if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart(true);
        progressCallback(trans);
    }
    else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
    }
    // create a callback for when the animation is done
    return promise;
};
const fireWillEvents = (enteringEl, leavingEl) => {
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
};
const fireDidEvents = (enteringEl, leavingEl) => {
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
};
const lifecycle = (el, eventName) => {
    if (el) {
        const ev = new CustomEvent(eventName, {
            bubbles: false,
            cancelable: false,
        });
        el.dispatchEvent(ev);
    }
};
const shallowReady = (el) => {
    if (el && el.componentOnReady) {
        return el.componentOnReady();
    }
    return Promise.resolve();
};
const deepReady = async (el) => {
    const element = el;
    if (element) {
        if (element.componentOnReady != null) {
            const stencilEl = await element.componentOnReady();
            if (stencilEl != null) {
                return;
            }
        }
        await Promise.all(Array.from(element.children).map(deepReady));
    }
};
const setPageHidden = (el, hidden) => {
    if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
    }
    else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
    }
};
const setZIndex = (enteringEl, leavingEl, direction) => {
    if (enteringEl !== undefined) {
        enteringEl.style.zIndex = (direction === 'back')
            ? '99'
            : '101';
    }
    if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
    }
};
const getIonPageElement = (element) => {
    if (element.classList.contains('ion-page')) {
        return element;
    }
    const ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
    if (ionPage) {
        return ionPage;
    }
    // idk, return the original element so at least something animates and we don't have a null pointer
    return element;
};




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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");





// import { SignaturePad } from 'ngx-signaturepad/signature-pad';
let SignatureModalPage = class SignatureModalPage {
    constructor(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.signaturePadOptions = {
            'minWidth': 2,
            'canvasWidth': 400,
            'canvasHeight': 200,
            'backgroundColor': 'white',
        };
    }
    ngOnInit() {
    }
    drawComplete() {
        // will be notified of szimek/signature_pad's onEnd event
        this.sign = this.signaturePad.toDataURL();
        console.log(this.sign);
    }
    drawStart() {
        // will be notified of szimek/signature_pad's onBegin event
        console.log('begin drawing');
    }
    clearSign() {
        this.signaturePad.clear();
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
SignatureModalPage.propDecorators = {
    signaturePad: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['SignaturePad',] }]
};
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

/***/ "YtD4":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3476b023.js ***!
  \*************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
const sanitizeDOMString = (untrustedString) => {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        const documentFragment = document.createDocumentFragment();
        const workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(blockedTag => {
            const getElementsToRemove = documentFragment.querySelectorAll(blockedTag);
            for (let elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                const element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                const childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (let childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        const dfChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */
        for (let childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        const fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment);
        // First child is always the div we did our work in
        const getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
const sanitizeElement = (element) => {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (let i = element.attributes.length - 1; i >= 0; i--) {
        const attribute = element.attributes.item(i);
        const attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        const attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    const childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (let i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
const getElementChildren = (el) => {
    return (el.children != null) ? el.children : el.childNodes;
};
const allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
const blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];




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

/***/ "m9yc":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js ***!
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

/***/ "nN+u":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js ***!
  \*********************************************************************/
/*! exports provided: f, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findCheckedOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return watchForOptions; });
const watchForOptions = (containerEl, tagName, onChange) => {
    const mutation = new MutationObserver(mutationList => {
        onChange(getSelectedOption(mutationList, tagName));
    });
    mutation.observe(containerEl, {
        childList: true,
        subtree: true
    });
    return mutation;
};
const getSelectedOption = (mutationList, tagName) => {
    let newOption;
    mutationList.forEach(mut => {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
    });
    return newOption;
};
const findCheckedOption = (el, tagName) => {
    if (el.nodeType !== 1) {
        return undefined;
    }
    const options = (el.tagName === tagName.toUpperCase())
        ? [el]
        : Array.from(el.querySelectorAll(tagName));
    return options.find((o) => o.checked === true);
};




/***/ }),

/***/ "opz7":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};




/***/ }),

/***/ "ppnA":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signature-modal/signature-modal.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">Close</ion-button>\n    </ion-buttons>\n    <ion-title>Signature Pad</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-list lines=\"full\" class=\"form-list\">\n      <ion-item>\n        <p>Sign in the box provided</p>\n      </ion-item>\n\n      <ion-item>\n        <signature-pad #SignaturePad [options]=\"signaturePadOptions\" (onBeginEvent)=\"drawStart()\"\n\t\t\t\t(onEndEvent)=\"drawComplete()\"></signature-pad>\n        \n          <!-- <signature-pad [options]=\"signaturePadOptions\" (onBeginEvent)=\"drawStart()\" (onEndEvent)=\"drawComplete()\"></signature-pad> -->\n      </ion-item>\n\n      <!-- <ion-item *ngIf=\"sign !== '' \">\n        <img src=\"{{sign}}\">\n      </ion-item> -->\n      \n      <ion-item>\n        <ion-button style=\"height: 34px; width: 50px;\" color=\"danger\" (click)=\"onClick()\" >\n          Save\n        </ion-button>\n        <ion-button style=\"height: 34px; width: 50px;\" color=\"light\" (click)=\"clearSign()\" >\n          Clear\n        </ion-button>\n      </ion-item>\n      \n    </ion-list>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "qaSm":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js ***!
  \********************************************************************/
/*! exports provided: P, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTimeGivenProgression; });
/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 * TODO: Reduce rounding error
 */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
/**
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 *
 * If you give a cubic bezier curve that never reaches the
 * provided progression, this function will return NaN.
 */
const getTimeGivenProgression = (p0, p1, p2, p3, progression) => {
    const tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
    return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
};
/**
 * Solve a cubic equation in one dimension (time)
 */
const solveCubicParametricEquation = (p0, p1, p2, p3, t) => {
    const partA = (3 * p1) * Math.pow(t - 1, 2);
    const partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
    const partC = p0 * Math.pow(t - 1, 3);
    return t * (partA + (t * partB)) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
const solveCubicBezier = (p0, p1, p2, p3, refPoint) => {
    p0 -= refPoint;
    p1 -= refPoint;
    p2 -= refPoint;
    p3 -= refPoint;
    const roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
    return roots.filter(root => root >= 0 && root <= 1);
};
const solveQuadraticEquation = (a, b, c) => {
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return [];
    }
    else {
        return [
            (-b + Math.sqrt(discriminant)) / (2 * a),
            (-b - Math.sqrt(discriminant)) / (2 * a)
        ];
    }
};
const solveCubicEquation = (a, b, c, d) => {
    if (a === 0) {
        return solveQuadraticEquation(b, c, d);
    }
    b /= a;
    c /= a;
    d /= a;
    const p = (3 * c - b * b) / 3;
    const q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
    if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
    }
    else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
    }
    const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
    }
    else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
    }
    const r = Math.sqrt(Math.pow(-(p / 3), 3));
    const phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
    const s = 2 * Math.pow(r, 1 / 3);
    return [
        s * Math.cos(phi / 3) - b / 3,
        s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
        s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
    ];
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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-home-home-module~pages-lockpattern-modal-lockpattern-modal-module"],{

/***/ "0wvK":
/*!*********************************************************************!*\
  !*** ./src/app/pages/lockpattern-modal/lockpattern-modal.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-list {\n  margin: 12px 5px 12px 5px;\n  padding: 0;\n}\n\n#patternContainer {\n  margin: 10px auto 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvY2twYXR0ZXJuLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRiIsImZpbGUiOiJsb2NrcGF0dGVybi1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1saXN0IHtcbiAgbWFyZ2luOiAxMnB4IDVweCAxMnB4IDVweDtcbiAgcGFkZGluZzogMDtcbn1cblxuI3BhdHRlcm5Db250YWluZXIge1xuICBtYXJnaW46IDEwcHggYXV0byAwcHhcbn1cbiJdfQ== */");

/***/ }),

/***/ "37GB":
/*!*******************************************************************!*\
  !*** ./src/app/pages/lockpattern-modal/lockpattern-modal.page.ts ***!
  \*******************************************************************/
/*! exports provided: LockpatternModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockpatternModalPage", function() { return LockpatternModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lockpattern_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lockpattern-modal.page.html */ "badI");
/* harmony import */ var _lockpattern_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lockpattern-modal.page.scss */ "0wvK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var patternlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! patternlock */ "DWIF");
/* harmony import */ var patternlock__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(patternlock__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_clooneprovider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/clooneprovider.service */ "crRc");







let LockpatternModalPage = class LockpatternModalPage {
    // public getLockPattern: any = '';
    constructor(navCtrl, modalCtrl, clooneprovider) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.clooneprovider = clooneprovider;
        this.lockPattern = '';
    }
    ngOnInit() {
        this.lockPattern = new patternlock__WEBPACK_IMPORTED_MODULE_5___default.a('#patternContainer', {
            onDraw(pattern) {
                console.log(pattern);
            }
        });
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
    saveLockPattern() {
        this.clooneprovider.pattern = this.lockPattern.getPattern();
        console.log('Saved lock pattern: ', this.clooneprovider.pattern);
        this.dismiss();
    }
};
LockpatternModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_clooneprovider_service__WEBPACK_IMPORTED_MODULE_6__["ClooneproviderService"] }
];
LockpatternModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lockpattern-modal',
        template: _raw_loader_lockpattern_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lockpattern_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LockpatternModalPage);



/***/ }),

/***/ "54fG":
/*!**********************************************!*\
  !*** ./node_modules/patternlock/lib/util.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noop = noop;
exports.toArray = toArray;
exports.assign = assign;
exports.css = css;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.remove = remove;
exports.createDom = createDom;
exports.getLengthAngle = getLengthAngle;
function noop() {}

function toArray(list) {
  if (!(list instanceof NodeList || list instanceof HTMLCollection)) return [list];
  return Array.prototype.slice.call(list);
}

function assign(target) {
  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  rest.forEach(function (obj) {
    Object.keys(obj).forEach(function (key) {
      target[key] = obj[key]; // eslint-disable-line no-param-reassign
    });
  });
  return target;
}

function css(element, properties) {
  if (typeof properties === 'string') {
    return window.getComputedStyle(element)[properties];
  }

  Object.keys(properties).forEach(function (key) {
    var value = properties[key];
    element.style[key] = value; // eslint-disable-line no-param-reassign
  });

  return undefined;
}

function addClass(el, className) {
  var classNameAry = className.split(' ');

  if (classNameAry.length > 1) {
    classNameAry.forEach(function (classItem) {
      return addClass(el, classItem);
    });
  } else if (el.classList) {
    el.classList.add(className);
  } else {
    el.className += ' ' + className; // eslint-disable-line no-param-reassign
  }
}

function removeClass(el, className) {
  var classNameAry = className.split(' ');
  if (classNameAry.length > 1) {
    classNameAry.forEach(function (classItem) {
      return removeClass(el, classItem);
    });
  } else if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' '); // eslint-disable-line no-param-reassign
  }
}

function remove(nodes) {
  toArray(nodes).forEach(function (el) {
    el.parentNode.removeChild(el);
  });
}

function createDom(str) {
  var div = document.createElement('div');
  div.innerHTML = str;
  return div.children[0];
}

// return height and angle for lines
function getLengthAngle(x1, x2, y1, y2) {
  var xDiff = x2 - x1;

  var yDiff = y2 - y1;

  return {
    length: Math.ceil(Math.sqrt(xDiff * xDiff + yDiff * yDiff)),
    angle: Math.round(Math.atan2(yDiff, xDiff) * 180 / Math.PI)
  };
}

/***/ }),

/***/ "DWIF":
/*!*****************************************************!*\
  !*** ./node_modules/patternlock/lib/PatternLock.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(/*! ./util */ "54fG");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var privateMap = new WeakMap();

var PatternLockInternal = function () {
  function PatternLockInternal() {
    _classCallCheck(this, PatternLockInternal);

    this.holder = null;
    this.option = null;
    this.mapperFunc = _util.noop;
    this.wrapLeft = 0;
    this.wrapTop = 0;
    this.disabled = false;
    this.patternAry = [];
    this.lastPosObj = [];
    this.rightPattern = null;
    this.onSuccess = _util.noop;
    this.onError = _util.noop;
    this.pattCircle = null;
    this.lineX1 = 0;
    this.lineY1 = 0;
    this.line = null;
    this.lastPosObj = null;
  }

  _createClass(PatternLockInternal, [{
    key: 'getIdxFromPoint',
    value: function getIdxFromPoint(x, y) {
      var option = this.option;
      var matrix = option.matrix,
          margin = option.margin;


      var xi = x - this.wrapLeft;
      var yi = y - this.wrapTop;

      var plotLn = option.radius * 2 + margin * 2;

      var qsntX = Math.ceil(xi / plotLn);
      var qsntY = Math.ceil(yi / plotLn);

      var remX = xi % plotLn;
      var remY = yi % plotLn;

      var idx = null;

      if (qsntX <= matrix[1] && qsntY <= matrix[0] && remX > margin * 2 && remY > margin * 2) {
        idx = (qsntY - 1) * matrix[1] + qsntX;
      }

      return {
        idx: idx,
        i: qsntX,
        j: qsntY,
        x: xi,
        y: yi
      };
    }
  }, {
    key: 'markPoint',
    value: function markPoint(elm, pattId) {
      // add the current element on pattern
      (0, _util.addClass)(elm, 'hovered');

      // push pattern on array
      this.patternAry.push(pattId);

      this.lastElm = elm;
    }

    // method to add lines between two element

  }, {
    key: 'addLine',
    value: function addLine(posObj) {
      var patternAry = this.patternAry,
          option = this.option;

      // add start point for line

      var lineOnMove = option.lineOnMove,
          margin = option.margin,
          radius = option.radius;


      var newX = (posObj.i - 1) * (2 * margin + 2 * radius) + 2 * margin + radius;
      var newY = (posObj.j - 1) * (2 * margin + 2 * radius) + 2 * margin + radius;

      if (patternAry.length > 1) {
        // to fix line
        var _getLengthAngle = (0, _util.getLengthAngle)(this.lineX1, newX, this.lineY1, newY),
            length = _getLengthAngle.length,
            angle = _getLengthAngle.angle;

        (0, _util.css)(this.line, {
          width: length + 10 + 'px',
          transform: 'rotate(' + angle + 'deg)'
        });

        if (!lineOnMove) (0, _util.css)(this.line, { display: 'block' });
      }

      // to create new line
      var line = (0, _util.createDom)('<div class="patt-lines" style="top:' + (newY - 5) + 'px; left: ' + (newX - 5) + 'px;"></div>');

      this.line = line;
      this.lineX1 = newX;
      this.lineY1 = newY;
      // add on dom

      this.holder.appendChild(line);
      if (!lineOnMove) (0, _util.css)(this.line, { display: 'none' });
    }

    // add direction on point and line

  }, {
    key: 'addDirectionClass',
    value: function addDirectionClass(curPos) {
      var point = this.lastElm,
          line = this.line,
          lastPos = this.lastPosObj;


      var direction = [];

      if (curPos.j - lastPos.j > 0) {
        direction.push('s');
      } else if (curPos.j - lastPos.j < 0) {
        direction.push('n');
      }

      if (curPos.i - lastPos.i > 0) {
        direction.push('e');
      } else if (curPos.i - lastPos.i < 0) {
        direction.push('w');
      }

      direction = direction.join('-');

      if (direction) {
        var className = direction + ' dir';
        (0, _util.addClass)(point, className);
        (0, _util.addClass)(line, className);
      }
    }
  }]);

  return PatternLockInternal;
}();

var PatternLock = function () {
  function PatternLock(selector) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, PatternLock);

    _initialiseProps.call(this);

    var iObj = new PatternLockInternal();

    var holder = document.querySelector(selector);

    // if holder is not present return
    if (!holder || holder.length === 0) return;

    // optimizing options
    var defaultsFixes = {
      onDraw: _util.noop
    };

    var matrix = option.matrix;

    if (matrix && matrix[0] * matrix[1] > 9) defaultsFixes.delimiter = ',';

    iObj.option = (0, _util.assign)({}, PatternLock.defaults, defaultsFixes, option);

    // add a mapper function
    var mapper = iObj.option.mapper;

    if ((typeof mapper === 'undefined' ? 'undefined' : _typeof(mapper)) === 'object') {
      iObj.mapperFunc = function (idx) {
        return mapper[idx];
      };
    } else if (typeof mapper === 'function') {
      iObj.mapperFunc = mapper;
    } else {
      iObj.mapperFunc = _util.noop;
    }

    // delete mapper from option object
    iObj.option.mapper = null;
    iObj.holder = holder;

    //set object to private map
    privateMap.set(this, iObj);

    //render
    this._render();

    // add class on holder
    (0, _util.addClass)(holder, 'patt-holder');

    // change offset property of holder if it does not have any property
    if ((0, _util.css)(holder, 'position') === 'static') (0, _util.css)(holder, { position: 'relative' });

    // assign event
    holder.addEventListener('touchstart', this._onStart);
    holder.addEventListener('mousedown', this._onStart);
  }

  // get drawn pattern as string


  _createClass(PatternLock, [{
    key: 'getPattern',
    value: function getPattern() {
      var _privateMap$get = privateMap.get(this),
          patternAry = _privateMap$get.patternAry,
          option = _privateMap$get.option;

      return (patternAry || []).join(option.delimiter);
    }

    // method to draw a pattern dynamically

  }, {
    key: 'setPattern',
    value: function setPattern(pattern) {
      var iObj = privateMap.get(this);

      var option = iObj.option;
      var matrix = option.matrix,
          margin = option.margin,
          radius = option.radius,
          enableSetPattern = option.enableSetPattern,
          delimiter = option.delimiter;

      // allow to set password manually only when enable set pattern option is true

      if (!enableSetPattern) return;

      // check if pattern is string break it with the delimiter
      var patternAry = typeof pattern === 'string' ? pattern.split(delimiter) : pattern;

      this.reset();
      iObj.wrapLeft = 0;
      iObj.wrapTop = 0;

      for (var i = 0; i < patternAry.length; i += 1) {
        var idx = patternAry[i] - 1;

        var x = idx % matrix[1];
        var y = Math.floor(idx / matrix[1]);

        var clientX = x * (2 * margin + 2 * radius) + 2 * margin + radius;
        var clientY = y * (2 * margin + 2 * radius) + 2 * margin + radius;

        this._onMove.call(null, {
          clientX: clientX,
          clientY: clientY,
          preventDefault: _util.noop
        }, this);
      }
    }

    // to temporary enable disable plugin

  }, {
    key: 'enable',
    value: function enable() {
      var iObj = privateMap.get(this);

      iObj.disabled = false;
    }
  }, {
    key: 'disable',
    value: function disable() {
      var iObj = privateMap.get(this);

      iObj.disabled = true;
    }

    // reset pattern lock

  }, {
    key: 'reset',
    value: function reset() {
      var iObj = privateMap.get(this);

      // to remove lines and class from each points
      (0, _util.toArray)(iObj.pattCircle).forEach(function (el) {
        return (0, _util.removeClass)(el, 'hovered dir s n w e s-w s-e n-w n-e');
      });
      (0, _util.remove)(iObj.holder.querySelectorAll('.patt-lines'));

      // add/reset a array which capture pattern
      iObj.patternAry = [];

      // remove last Obj
      iObj.lastPosObj = null;

      // remove error class if added
      (0, _util.removeClass)(iObj.holder, 'patt-error');
    }

    // to display error if pattern is not drawn correct

  }, {
    key: 'error',
    value: function error() {
      var iObj = privateMap.get(this);

      (0, _util.addClass)(iObj.holder, 'patt-error');
    }

    // to check the drawn pattern against given pattern

  }, {
    key: 'checkForPattern',
    value: function checkForPattern(pattern, success, error) {
      var iObj = privateMap.get(this);

      iObj.rightPattern = pattern;
      iObj.onSuccess = success || _util.noop;
      iObj.onError = error || _util.noop;
    }
  }, {
    key: '_render',
    value: function _render() {
      var iObj = privateMap.get(this);
      var option = iObj.option,
          holder = iObj.holder;
      var matrix = option.matrix,
          margin = option.margin,
          radius = option.radius;


      var html = '<ul class="patt-wrap" style="padding: ' + margin + 'px">\n      ' + Array.apply(undefined, _toConsumableArray({ length: matrix[0] * matrix[1] })).map(this._renderCircle).join('') + '\n    </ul>';

      holder.innerHTML = html;

      (0, _util.css)(holder, {
        width: matrix[1] * (radius * 2 + margin * 2) + margin * 2 + 'px',
        height: matrix[0] * (radius * 2 + margin * 2) + margin * 2 + 'px'
      });

      // select pattern circle
      iObj.pattCircle = iObj.holder.querySelectorAll('.patt-circ');
    }
  }, {
    key: 'option',
    value: function option(key, val) {
      var _privateMap$get2 = privateMap.get(this),
          option = _privateMap$get2.option;

      // for set methods


      if (val === undefined) {
        return option[key];
      }
      // for setter

      option[key] = val;
      if (key === 'margin' || key === 'matrix' || key === 'radius') {
        this._render();
      }

      return this;
    }
  }]);

  return PatternLock;
}();

var _initialiseProps = function _initialiseProps() {
  var _this = this;

  this._onStart = function (e) {
    e.preventDefault();
    var iObj = privateMap.get(_this);
    var holder = iObj.holder;


    if (iObj.disabled) return;

    // check if pattern is visible or not
    if (!iObj.option.patternVisible) {
      (0, _util.addClass)(iObj.holder, 'patt-hidden');
    }

    _this.moveEvent = e.type === 'touchstart' ? 'touchmove' : 'mousemove';
    _this.endEvent = e.type === 'touchstart' ? 'touchend' : 'mouseup';

    // assign events
    holder.addEventListener(_this.moveEvent, _this._onMove);

    document.addEventListener(_this.endEvent, _this._onEnd);

    // set pattern offset
    var wrap = iObj.holder.querySelector('.patt-wrap');

    var offset = wrap.getBoundingClientRect();
    iObj.wrapTop = offset.top;
    iObj.wrapLeft = offset.left;

    // reset pattern
    _this.reset();
  };

  this._onMove = function (e) {
    e.preventDefault();
    var iObj = privateMap.get(_this);
    var option = iObj.option,
        patternAry = iObj.patternAry;


    var x = e.clientX || e.touches[0].clientX;
    var y = e.clientY || e.touches[0].clientY;

    var li = iObj.pattCircle;
    var posObj = iObj.getIdxFromPoint(x, y);
    var idx = posObj.idx;

    var pattId = iObj.mapperFunc(idx) || idx;

    if (patternAry.length > 0) {
      var _getLengthAngle2 = (0, _util.getLengthAngle)(iObj.lineX1, posObj.x, iObj.lineY1, posObj.y),
          length = _getLengthAngle2.length,
          angle = _getLengthAngle2.angle;

      (0, _util.css)(iObj.line, {
        width: length + 10 + 'px',
        transform: 'rotate(' + angle + 'deg)'
      });
    }

    if (idx && (option.allowRepeat && patternAry[patternAry.length - 1] !== pattId || patternAry.indexOf(pattId) === -1)) {
      var elm = li[idx - 1];

      // mark if any points are in middle of previous point and current point, if it does check them
      if (iObj.lastPosObj) {
        var lastPosObj = iObj.lastPosObj;


        var xDelta = posObj.i - lastPosObj.i > 0 ? 1 : -1;
        var yDelta = posObj.j - lastPosObj.j > 0 ? 1 : -1;
        var ip = lastPosObj.i;
        var jp = lastPosObj.j;
        var iDiff = Math.abs(posObj.i - ip);
        var jDiff = Math.abs(posObj.j - jp);

        while (iDiff === 0 && jDiff > 1 || jDiff === 0 && iDiff > 1 || jDiff === iDiff && jDiff > 1) {
          ip = iDiff ? ip + xDelta : ip;
          jp = jDiff ? jp + yDelta : jp;
          iDiff = Math.abs(posObj.i - ip);
          jDiff = Math.abs(posObj.j - jp);

          var nextIdx = (jp - 1) * option.matrix[1] + ip;
          var nextPattId = iObj.mapperFunc(nextIdx) || nextIdx;

          if (option.allowRepeat || patternAry.indexOf(nextPattId) === -1) {
            // add direction to previous point and line
            iObj.addDirectionClass({ i: ip, j: jp });

            // mark a point added
            iObj.markPoint(li[nextPattId - 1], nextPattId);

            // add line between the points
            iObj.addLine({ i: ip, j: jp });
          }
        }
      }

      // add direction to last point and line
      if (iObj.lastPosObj) iObj.addDirectionClass(posObj);

      // mark the initial point added
      iObj.markPoint(elm, pattId);

      // add initial line
      iObj.addLine(posObj);

      iObj.lastPosObj = posObj;
    }
  };

  this._onEnd = function (e) {
    e.preventDefault();
    var iObj = privateMap.get(_this);
    var option = iObj.option;


    var pattern = iObj.patternAry.join(option.delimiter);

    // remove hidden pattern class and remove event
    iObj.holder.removeEventListener(_this.moveEvent, _this._onMove);
    document.removeEventListener(_this.endEvent, _this._onEnd);
    (0, _util.removeClass)(iObj.holder, 'patt-hidden');

    if (!pattern) return;

    // to remove last line
    (0, _util.remove)(iObj.line);

    option.onDraw(pattern);

    if (iObj.rightPattern) {
      if (pattern === iObj.rightPattern) {
        iObj.onSuccess();
      } else {
        iObj.onError();
        _this.error();
      }
    }
  };

  this._renderCircle = function () {
    var _privateMap$get$optio = privateMap.get(_this).option,
        margin = _privateMap$get$optio.margin,
        radius = _privateMap$get$optio.radius;


    return '<li \n      class="patt-circ"\n      style="margin: ' + margin + 'px; width: ' + radius * 2 + 'px; height: ' + radius * 2 + 'px; border-radius: ' + radius + 'px;"\n    >\n      <div class="patt-dots"></div>\n    </li>';
  };
};

PatternLock.defaults = {
  matrix: [3, 3],
  margin: 20,
  radius: 25,
  patternVisible: true,
  lineOnMove: true,
  delimiter: '', // a delimiter between the pattern
  enableSetPattern: false,
  allowRepeat: false
};

exports.default = PatternLock;

/***/ }),

/***/ "badI":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lockpattern-modal/lockpattern-modal.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">Close</ion-button>\n    </ion-buttons>\n    <ion-title>Lock Pattern Pad</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-list class=\"form-list\">\n      <div class=\"list list-inset\">\n        <div class=\"ion-text-center\"> \n          <ion-row>\n            <ion-col>\n              <div id=\"patternContainer\"></div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n      \n      \n      <div class=\"ion-text-center\">\n        <ion-row>\n          <ion-col>\n            <ion-button class=\"ion-text-center\" style=\"height: 34px; width: 100px;\" color=\"danger\" (click)=\"saveLockPattern()\" >\n              Save\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-list>\n  </ion-grid>\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default~pages-home-home-module~pages-lockpattern-modal-lockpattern-modal-module.js.map
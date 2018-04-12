module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "babel-runtime/regenerator"
var regenerator_ = __webpack_require__(3);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "isomorphic-fetch"
var external__isomorphic_fetch_ = __webpack_require__(4);
var external__isomorphic_fetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_fetch_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(5);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "query-string"
var external__query_string_ = __webpack_require__(6);
var external__query_string__default = /*#__PURE__*/__webpack_require__.n(external__query_string_);

// EXTERNAL MODULE: external "@nteract/transforms"
var transforms_ = __webpack_require__(7);
var transforms__default = /*#__PURE__*/__webpack_require__.n(transforms_);

// EXTERNAL MODULE: external "@nteract/notebook-preview"
var notebook_preview_ = __webpack_require__(8);
var notebook_preview__default = /*#__PURE__*/__webpack_require__.n(notebook_preview_);

// EXTERNAL MODULE: external "@nteract/transform-dataresource"
var transform_dataresource_ = __webpack_require__(9);
var transform_dataresource__default = /*#__PURE__*/__webpack_require__.n(transform_dataresource_);

// EXTERNAL MODULE: external "@nteract/transform-vega"
var transform_vega_ = __webpack_require__(10);
var transform_vega__default = /*#__PURE__*/__webpack_require__.n(transform_vega_);

// EXTERNAL MODULE: external "lodash"
var external__lodash_ = __webpack_require__(11);
var external__lodash__default = /*#__PURE__*/__webpack_require__.n(external__lodash_);

// CONCATENATED MODULE: ./src/PlotlyTransform.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Plotly = void 0;
var Props = {
  data: ""
};

var NULL_MIMETYPE = "text/vnd.plotly.v1+html";
var MIMETYPE = "application/vnd.plotly.v1+json";

/*
 * As part of the init notebook mode, Plotly sneaks a <script> tag in to load
 * the plotlyjs lib. We have already loaded this though, so we "handle" the
 * transform by doing nothing and returning null.
 */
var PlotlyNullTransform = function PlotlyNullTransform() {
  return null;
};
PlotlyNullTransform.MIMETYPE = NULL_MIMETYPE;

var PlotlyTransform_PlotlyTransform = function (_React$Component) {
  _inherits(PlotlyTransform, _React$Component);

  function PlotlyTransform() {
    _classCallCheck(this, PlotlyTransform);

    var _this = _possibleConstructorReturn(this, (PlotlyTransform.__proto__ || Object.getPrototypeOf(PlotlyTransform)).call(this));

    _this.getFigure = _this.getFigure.bind(_this);
    _this.plotDivRef = _this.plotDivRef.bind(_this);
    return _this;
  }

  _createClass(PlotlyTransform, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Handle case of either string to be `JSON.parse`d or pure object
      var figure = this.getFigure();
      Plotly.newPlot(this.plotDiv, figure.data, figure.layout);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.props.data !== nextProps.data;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var figure = this.getFigure();
      this.plotDiv.data = figure.data;
      this.plotDiv.layout = figure.layout;
      Plotly.redraw(this.plotDiv);
    }
  }, {
    key: "plotDivRef",
    value: function plotDivRef(plotDiv) {
      if (plotDiv) {
        this.plotDiv = plotDiv;
      }
    }
  }, {
    key: "getFigure",
    value: function getFigure() {
      var figure = this.props.data;
      if (typeof figure === "string") {
        return JSON.parse(figure);
      }

      // The Plotly API *mutates* the figure to include a UID, which means
      // they won't take our frozen objects
      if (Object.isFrozen(figure)) {
        return Object(external__lodash_["cloneDeep"])(figure);
      }
      return figure;
    }
  }, {
    key: "render",
    value: function render() {
      var _getFigure = this.getFigure(),
          layout = _getFigure.layout;

      var style = {};
      if (layout && layout.height && !layout.autosize) {
        style.height = layout.height;
      }
      // $FlowFixMe: Add typings to ref.
      return external__react_["createElement"]("div", { ref: this.plotDivRef, style: style });
    }
  }]);

  return PlotlyTransform;
}(external__react_["Component"]);

PlotlyTransform_PlotlyTransform.MIMETYPE = MIMETYPE;



/* harmony default export */ var src_PlotlyTransform = (PlotlyTransform_PlotlyTransform);
// CONCATENATED MODULE: ./src/index.js
var src__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function src__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function src__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function src__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var _reduce = [transform_dataresource__default.a, transform_vega_["VegaLite1"], transform_vega_["VegaLite2"], transform_vega_["Vega2"], transform_vega_["Vega3"]].reduce(transforms_["registerTransform"], {
  transforms: transforms_["standardTransforms"],
  displayOrder: transforms_["standardDisplayOrder"]
}),
    transforms = _reduce.transforms,
    displayOrder = _reduce.displayOrder;

var setDisplay = function setDisplay(_class, val) {
  Array.from(document.getElementsByClassName(_class)).forEach(function (elem) {
    return elem.setAttribute('style', "display:" + val + " !important");
  });
};

var src__class2 = function (_React$Component) {
  src__inherits(_class2, _React$Component);

  function _class2(props) {
    src__classCallCheck(this, _class2);

    var _this = src__possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).call(this, props));

    _this.state = { display: props.display || 'hidden' };
    if (typeof window === 'undefined') return src__possibleConstructorReturn(_this);
    var query = external__query_string__default.a.parse(window.location.search);
    if (query && Object.prototype.hasOwnProperty.call(query, 'code')) {
      // eslint-disable-line
      _this.state = { display: query.code };
    }
    return _this;
  }

  src__createClass(_class2, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.setState({ display: props.display });
    }
  }, {
    key: "onChangeDisplay",
    value: function onChangeDisplay(e) {
      e.preventDefault();
      var display = e.target.value;
      this.setState({ display: e.target.value });

      if (display === 'hidden') {
        setDisplay('input-container', 'none');
        setDisplay('nteract-display-area-stdout', 'none');
        setDisplay('nteract-display-area-sterr', 'none');
      }

      if (display === 'shown') {
        setDisplay('input-container', 'flex');
        setDisplay('nteract-display-area-stdout', 'flex');
        setDisplay('nteract-display-area-sterr', 'flex');
      }

      if (display === 'output') {
        setDisplay('input-container', 'none');
        setDisplay('nteract-display-area-stdout', 'flex');
        setDisplay('nteract-display-area-sterr', 'flex');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          content = _props.content,
          type = _props.type;
      var display = this.state.display;


      var style = "\n      " + (display === 'hidden' || display === 'output' ? "\n        .input-container {\n          display: none!important;\n        }\n      " : "") + "\n\n      " + (display === 'hidden' ? "\n        .nteract-display-area-stdout {\n          display: none!important;\n        }\n\n        .nteract-display-area-stderr {\n          display: none!important;\n        }\n      " : "") + "\n    ";

      return external__react__default.a.createElement(
        "div",
        null,
        "Code:",
        '  ',
        external__react__default.a.createElement(
          "select",
          { onChange: function onChange(e) {
              return _this2.onChangeDisplay(e);
            }, value: display },
          external__react__default.a.createElement(
            "option",
            { value: "hidden", defaultValue: display === 'hidden' },
            "Hidden"
          ),
          external__react__default.a.createElement(
            "option",
            { value: "shown", defaultValue: display === 'shown' },
            "Shown"
          ),
          external__react__default.a.createElement(
            "option",
            { value: "output", defaultValue: display === 'output' },
            "Hidden, but show code outputs"
          )
        ),
        external__react__default.a.createElement(notebook_preview__default.a, {
          notebook: content,
          displayOrder: displayOrder,
          transforms: transforms
        }),
        external__react__default.a.createElement(style__default.a, {
          styleId: style.__hash,
          css: style
        })
      );
    }
  }]);

  return _class2;
}(external__react__default.a.Component);

/* harmony default export */ var src = (src__class2);
// CONCATENATED MODULE: ./pages/index.js


var pages__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var pages__class = function (_React$Component) {
  pages__inherits(_class, _React$Component);

  function _class(props) {
    pages__classCallCheck(this, _class);

    var _this = pages__possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.state = { loading: true, content: null };
    return _this;
  }

  pages__createClass(_class, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = _asyncToGenerator(regenerator__default.a.mark(function _callee() {
        var response;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return external__isomorphic_fetch__default()('/static/notebook.ipynb');

              case 2:
                response = _context.sent;
                _context.t0 = this;
                _context.next = 6;
                return response.json();

              case 6:
                _context.t1 = _context.sent;
                _context.t2 = {
                  content: _context.t1,
                  loading: false
                };

                _context.t0.setState.call(_context.t0, _context.t2);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          loading = _state.loading,
          content = _state.content;


      return external__react__default.a.createElement(
        'div',
        null,
        external__react__default.a.createElement(
          'h1',
          null,
          'react-jupyter'
        ),
        loading && external__react__default.a.createElement(
          'p',
          null,
          'loading...'
        ),
        content && external__react__default.a.createElement(src, {
          content: content,
          display: 'shown'
        })
      );
    }
  }]);

  return _class;
}(external__react__default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages__class);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@nteract/transforms");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@nteract/notebook-preview");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@nteract/transform-dataresource");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@nteract/transform-vega");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ })
/******/ ]);
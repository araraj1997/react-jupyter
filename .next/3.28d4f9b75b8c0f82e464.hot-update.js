webpackHotUpdate(3,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/next/node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src__ = __webpack_require__("./src/index.js");

var _jsxFileName = '/Users/eoinmurray/kyso/react-jupyter/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var _default = function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

    _this.state = { loading: true, content: null };
    return _this;
  }

  _createClass(_default, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default()('/static/notebook.ipynb');

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


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          'react-jupyter'
        ),
        loading && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          'loading...'
        ),
        content && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src__["a" /* default */], {
          content: content,
          display: 'hidden',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/eoinmurray/kyso/react-jupyter/pages/index.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_query_string__ = __webpack_require__("./node_modules/query-string/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nteract_transforms__ = __webpack_require__("./node_modules/@nteract/transforms/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nteract_transforms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__nteract_transforms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nteract_notebook_preview__ = __webpack_require__("./node_modules/@nteract/notebook-preview/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nteract_notebook_preview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__nteract_notebook_preview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nteract_transform_dataresource__ = __webpack_require__("./node_modules/@nteract/transform-dataresource/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nteract_transform_dataresource___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__nteract_transform_dataresource__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nteract_transform_vega__ = __webpack_require__("./node_modules/@nteract/transform-vega/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nteract_transform_vega___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__nteract_transform_vega__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PlotlyTransform__ = __webpack_require__("./src/PlotlyTransform.js");
var _jsxFileName = "/Users/eoinmurray/kyso/react-jupyter/src/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var _reduce = [__WEBPACK_IMPORTED_MODULE_5__nteract_transform_dataresource___default.a, __WEBPACK_IMPORTED_MODULE_6__nteract_transform_vega__["VegaLite1"], __WEBPACK_IMPORTED_MODULE_6__nteract_transform_vega__["VegaLite2"], __WEBPACK_IMPORTED_MODULE_6__nteract_transform_vega__["Vega2"], __WEBPACK_IMPORTED_MODULE_6__nteract_transform_vega__["Vega3"]].reduce(__WEBPACK_IMPORTED_MODULE_3__nteract_transforms__["registerTransform"], {
  transforms: __WEBPACK_IMPORTED_MODULE_3__nteract_transforms__["standardTransforms"],
  displayOrder: __WEBPACK_IMPORTED_MODULE_3__nteract_transforms__["standardDisplayOrder"]
}),
    transforms = _reduce.transforms,
    displayOrder = _reduce.displayOrder;

var _default = function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

    _this.state = { display: 'hidden' };
    if (typeof window === 'undefined') return _possibleConstructorReturn(_this);
    var query = __WEBPACK_IMPORTED_MODULE_2_query_string___default.a.parse(window.location.search);
    if (query && Object.prototype.hasOwnProperty.call(query, 'code')) {
      // eslint-disable-line
      _this.state = { display: query.code };
    }
    return _this;
  }

  _createClass(_default, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      if (typeof props.showCode !== 'undefined') this.setState({ display: 'hidden' });
      if (props.setUrl === 'shown') this.setState({ display: 'shown' });
      if (props.setUrl === 'hidden') this.setState({ display: 'hidden' });
      if (props.setUrl === 'output') this.setState({ display: 'output' });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          content = _props.content,
          type = _props.type;
      var display = this.state.display;


      var changeShowCode = function changeShowCode(e) {
        e.preventDefault();
        _this2.setState({ display: e.target.value });
      };

      var style = "\n      " + (display === 'shown' ? "\n        .input-container {\n          display: none!important;\n        }\n      " : '') + "\n\n      " + (display === 'shown' || display === 'output' ? "\n        .nteract-display-area-stdout {\n          display: none!important;\n        }\n\n        .nteract-display-area-stderr {\n          display: none!important;\n        }\n      " : '') + "\n    ";

      console.log(showCode, showCodeOutput, style);

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        },
        "Code:",
        '  ',
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "select",
          { onChange: changeShowCode, value: optionsState, __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "option",
            { value: "hidden", defaultValue: display === 'hidden', __source: {
                fileName: _jsxFileName,
                lineNumber: 77
              }
            },
            "Hidden"
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "option",
            { value: "shown", defaultValue: display === 'shown', __source: {
                fileName: _jsxFileName,
                lineNumber: 78
              }
            },
            "Shown"
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "option",
            { value: "output", defaultValue: display === 'output', __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              }
            },
            "Hidden, but show code outputs"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__nteract_notebook_preview___default.a, {
          notebook: content,
          displayOrder: displayOrder,
          transforms: transforms,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: style.__hash,
          css: style
        })
      );
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(transforms, "transforms", "/Users/eoinmurray/kyso/react-jupyter/src/index.js");
  reactHotLoader.register(displayOrder, "displayOrder", "/Users/eoinmurray/kyso/react-jupyter/src/index.js");
  reactHotLoader.register(_default, "default", "/Users/eoinmurray/kyso/react-jupyter/src/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.28d4f9b75b8c0f82e464.hot-update.js.map
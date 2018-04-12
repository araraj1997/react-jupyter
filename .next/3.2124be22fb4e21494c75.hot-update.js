webpackHotUpdate(3,{

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

    _this.state = {
      showCode: props.showCode || false,
      showCodeOutput: props.showCodeOutput || false,
      setUrl: props.setUrl || 'hidden',
      optionsState: props.optionsState || '2'
    };

    if (typeof window === 'undefined') return _possibleConstructorReturn(_this);

    var query = __WEBPACK_IMPORTED_MODULE_2_query_string___default.a.parse(window.location.search);

    if (query && Object.prototype.hasOwnProperty.call(query, 'code')) {
      // eslint-disable-line
      if (query.code === 'hidden') {
        _this.state = {
          setUrl: 'hidden',
          optionsState: '2'
        };
      } else if (query.code === 'shown') {
        _this.state = {
          showCode: true,
          showCodeOutput: true,
          setUrl: 'shown',
          optionsState: '1'
        };
      } else if (query.code === 'output') {
        _this.state = {
          showCode: false,
          showCodeOutput: true,
          setUrl: 'output',
          optionsState: '3'
        };
      }
    }
    return _this;
  }

  _createClass(_default, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      if (typeof props.showCode !== 'undefined') this.setState({ showCode: props.showCode });
      if (props.setUrl === 'shown') this.setState({ showCode: true, optionsState: '1' });
      if (props.setUrl === 'hidden') this.setState({ showCode: false, showCodeOutput: false, optionsState: '2' });
      if (props.setUrl === 'output') this.setState({ showCode: false, showCodeOutput: true, optionsState: '3' });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          content = _props.content,
          type = _props.type;
      var _state = this.state,
          showCode = _state.showCode,
          showCodeOutput = _state.showCodeOutput,
          optionsState = _state.optionsState;


      var changeShowCode = function changeShowCode(e) {
        e.preventDefault();
        if (e.target.value === '1') _this2.setState({ showCode: true, showCodeOutput: true, optionsState: 1 });
        if (e.target.value === '2') _this2.setState({ showCode: false, showCodeOutput: false, optionsState: 2 });
        if (e.target.value === '3') _this2.setState({ showCode: false, showCodeOutput: true, optionsState: 3 });
      };

      var style = "\n      " + (!showCode ? "\n        .input-container {\n          display: none!important;\n        }\n      " : '') + "\n\n      " + (!showCodeOutput ? "\n        .nteract-display-area-stdout {\n          display: none!important;\n        }\n\n        .nteract-display-area-stderr {\n          display: none!important;\n        }\n      " : '') + "\n    ";

      console.log(showCode, showCodeOutput, style);

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        },
        "Code:",
        '  ',
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "select",
          { onChange: changeShowCode, value: optionsState, __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "option",
            { value: 2, defaultValue: optionsState === 2, __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              }
            },
            "Hidden"
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "option",
            { value: 1, defaultValue: optionsState === 1, __source: {
                fileName: _jsxFileName,
                lineNumber: 108
              }
            },
            "Shown"
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "option",
            { value: 3, defaultValue: optionsState === 3, __source: {
                fileName: _jsxFileName,
                lineNumber: 109
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
            lineNumber: 114
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
//# sourceMappingURL=3.2124be22fb4e21494c75.hot-update.js.map
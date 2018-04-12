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

var setDisplay = function setDisplay(_class, val) {
  Array.from(document.getElementsByClassName(_class)).forEach(function (elem) {
    return elem.setAttribute('style', "display:" + val + " !important");
  });
};

var _default = function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

    _this.state = { display: props.display || 'hidden' };
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

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        },
        "Code:",
        '  ',
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "select",
          { onChange: function onChange(e) {
              return _this2.onChangeDisplay(e);
            }, value: display, __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "option",
            { value: "hidden", defaultValue: display === 'hidden', __source: {
                fileName: _jsxFileName,
                lineNumber: 99
              }
            },
            "Hidden"
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "option",
            { value: "shown", defaultValue: display === 'shown', __source: {
                fileName: _jsxFileName,
                lineNumber: 100
              }
            },
            "Shown"
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "option",
            { value: "output", defaultValue: display === 'output', __source: {
                fileName: _jsxFileName,
                lineNumber: 101
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
            lineNumber: 106
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
  reactHotLoader.register(setDisplay, "setDisplay", "/Users/eoinmurray/kyso/react-jupyter/src/index.js");
  reactHotLoader.register(_default, "default", "/Users/eoinmurray/kyso/react-jupyter/src/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.e311c8013012c840369b.hot-update.js.map
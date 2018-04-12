'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _transforms = require('@nteract/transforms');

var _notebookPreview = require('@nteract/notebook-preview');

var _notebookPreview2 = _interopRequireDefault(_notebookPreview);

var _transformDataresource = require('@nteract/transform-dataresource');

var _transformDataresource2 = _interopRequireDefault(_transformDataresource);

var _transformVega = require('@nteract/transform-vega');

var _PlotlyTransform = require('./PlotlyTransform');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _reduce = [_transformDataresource2.default, _transformVega.VegaLite1, _transformVega.VegaLite2, _transformVega.Vega2, _transformVega.Vega3].reduce(_transforms.registerTransform, {
  transforms: _transforms.standardTransforms,
  displayOrder: _transforms.standardDisplayOrder
}),
    transforms = _reduce.transforms,
    displayOrder = _reduce.displayOrder;

var setDisplay = function setDisplay(_class, val) {
  Array.from(document.getElementsByClassName(_class)).forEach(function (elem) {
    return elem.setAttribute('style', 'display:' + val + ' !important');
  });
};

var _default = function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = { display: props.display || 'hidden' };
    if (typeof window === 'undefined') return _possibleConstructorReturn(_this);
    var query = _queryString2.default.parse(window.location.search);
    if (query && Object.prototype.hasOwnProperty.call(query, 'code')) {
      // eslint-disable-line
      _this.state = { display: query.code };
    }
    return _this;
  }

  _default.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    this.setState({ display: props.display });
  };

  _default.prototype.onChangeDisplay = function onChangeDisplay(e) {
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
  };

  _default.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        content = _props.content,
        type = _props.type;
    var display = this.state.display;


    var style = '\n      ' + (display === 'hidden' || display === 'output' ? '\n        .input-container {\n          display: none!important;\n        }\n      ' : '') + '\n\n      ' + (display === 'hidden' ? '\n        .nteract-display-area-stdout {\n          display: none!important;\n        }\n\n        .nteract-display-area-stderr {\n          display: none!important;\n        }\n      ' : '') + '\n    ';

    return _react2.default.createElement(
      'div',
      null,
      'Code:',
      '  ',
      _react2.default.createElement(
        'select',
        { onChange: function onChange(e) {
            return _this2.onChangeDisplay(e);
          }, value: display },
        _react2.default.createElement(
          'option',
          { value: 'hidden', defaultValue: display === 'hidden' },
          'Hidden'
        ),
        _react2.default.createElement(
          'option',
          { value: 'shown', defaultValue: display === 'shown' },
          'Shown'
        ),
        _react2.default.createElement(
          'option',
          { value: 'output', defaultValue: display === 'output' },
          'Hidden, but show code outputs'
        )
      ),
      _react2.default.createElement(_notebookPreview2.default, {
        notebook: content,
        displayOrder: displayOrder,
        transforms: transforms
      }),
      _react2.default.createElement(
        'style',
        { jsx: true, global: true },
        style
      )
    );
  };

  return _default;
}(_react2.default.Component);

exports.default = _default;
module.exports = exports['default'];
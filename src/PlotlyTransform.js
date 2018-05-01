"use strict";

exports.__esModule = true;
exports.PlotlyNullTransform = undefined;

var _class, _temp;

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _lodash = require("lodash");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

var PlotlyTransform = (_temp = _class = function (_React$Component) {
  _inherits(PlotlyTransform, _React$Component);

  function PlotlyTransform() {
    _classCallCheck(this, PlotlyTransform);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.getFigure = _this.getFigure.bind(_this);
    _this.plotDivRef = _this.plotDivRef.bind(_this);
    return _this;
  }

  PlotlyTransform.prototype.componentDidMount = function componentDidMount() {
    // Handle case of either string to be `JSON.parse`d or pure object
    var figure = this.getFigure();
    Plotly.newPlot(this.plotDiv, figure.data, figure.layout);
  };

  PlotlyTransform.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return this.props.data !== nextProps.data;
  };

  PlotlyTransform.prototype.componentDidUpdate = function componentDidUpdate() {
    var figure = this.getFigure();
    this.plotDiv.data = figure.data;
    this.plotDiv.layout = figure.layout;
    Plotly.redraw(this.plotDiv);
  };

  PlotlyTransform.prototype.plotDivRef = function plotDivRef(plotDiv) {
    if (plotDiv) {
      this.plotDiv = plotDiv;
    }
  };

  PlotlyTransform.prototype.getFigure = function getFigure() {
    var figure = this.props.data;
    if (typeof figure === "string") {
      return JSON.parse(figure);
    }

    // The Plotly API *mutates* the figure to include a UID, which means
    // they won't take our frozen objects
    if (Object.isFrozen(figure)) {
      return (0, _lodash.cloneDeep)(figure);
    }
    return figure;
  };

  PlotlyTransform.prototype.render = function render() {
    var _getFigure = this.getFigure(),
        layout = _getFigure.layout;

    var style = {};
    if (layout && layout.height && !layout.autosize) {
      style.height = layout.height;
    }
    // $FlowFixMe: Add typings to ref.
    return React.createElement("div", { ref: this.plotDivRef, style: style });
  };

  return PlotlyTransform;
}(React.Component), _class.MIMETYPE = MIMETYPE, _temp);
exports.PlotlyNullTransform = PlotlyNullTransform;
exports.default = PlotlyTransform;

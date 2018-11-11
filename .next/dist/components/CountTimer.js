"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/Daniel/Desktop/playground/components/CountTimer.js";


var CountTimer = function (_React$Component) {
  (0, _inherits3.default)(CountTimer, _React$Component);

  function CountTimer(props) {
    (0, _classCallCheck3.default)(this, CountTimer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CountTimer.__proto__ || (0, _getPrototypeOf2.default)(CountTimer)).call(this));

    _this.state = { time: {}, seconds: props.seconds };
    _this.timer = 0;
    _this.startTimer = _this.startTimer.bind(_this);
    _this.countDown = _this.countDown.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(CountTimer, [{
    key: "secondsToTime",
    value: function secondsToTime(secs) {
      var hours = Math.floor(secs / (60 * 60));

      var divisor_for_minutes = secs % (60 * 60);
      var minutes = Math.floor(divisor_for_minutes / 60);

      var divisor_for_seconds = divisor_for_minutes % 60;
      var seconds = Math.ceil(divisor_for_seconds);

      var obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
      };
      return obj;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
    }
  }, {
    key: "startTimer",
    value: function startTimer() {
      if (this.timer == 0 && this.state.seconds > 0) {
        this.timer = setInterval(this.countDown, 1000);
      }
    }
  }, {
    key: "countDown",
    value: function countDown() {
      // Remove one second, set state so a re-render happens.
      var seconds = this.state.seconds - 1;
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds
      });

      // Check if we're at zero.
      if (seconds <= 0) {
        clearInterval(this.timer);
        this.props.onCompletion(this.props.selectedCard);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, this.startTimer(), this.state.time.m, ":", this.state.time.s);
    }
  }]);

  return CountTimer;
}(_react2.default.Component);

exports.default = CountTimer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ291bnRUaW1lci5qcyJdLCJuYW1lcyI6WyJDb3VudFRpbWVyIiwicHJvcHMiLCJzdGF0ZSIsInRpbWUiLCJzZWNvbmRzIiwidGltZXIiLCJzdGFydFRpbWVyIiwiYmluZCIsImNvdW50RG93biIsInNlY3MiLCJob3VycyIsIk1hdGgiLCJmbG9vciIsImRpdmlzb3JfZm9yX21pbnV0ZXMiLCJtaW51dGVzIiwiZGl2aXNvcl9mb3Jfc2Vjb25kcyIsImNlaWwiLCJvYmoiLCJ0aW1lTGVmdFZhciIsInNlY29uZHNUb1RpbWUiLCJzZXRTdGF0ZSIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm9uQ29tcGxldGlvbiIsInNlbGVjdGVkQ2FyZCIsIm0iLCJzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU0sQTtzQ0FDSjs7c0JBQUEsQUFBWSxPQUFPO3dDQUFBOzt3SUFFakI7O1VBQUEsQUFBSyxRQUFRLEVBQUUsTUFBRixBQUFRLElBQUksU0FBUyxNQUFsQyxBQUFhLEFBQTJCLEFBQ3hDO1VBQUEsQUFBSyxRQUFMLEFBQWEsQUFDYjtVQUFBLEFBQUssYUFBYSxNQUFBLEFBQUssV0FBTCxBQUFnQixLQUFsQyxBQUNBO1VBQUEsQUFBSyxZQUFZLE1BQUEsQUFBSyxVQUFMLEFBQWUsS0FMZixBQUtqQjtXQUNEOzs7OztrQyxBQUVhLE1BQUssQUFDakI7VUFBSSxRQUFRLEtBQUEsQUFBSyxNQUFNLFFBQVEsS0FBL0IsQUFBWSxBQUFXLEFBQWEsQUFFcEM7O1VBQUksc0JBQXNCLFFBQVEsS0FBbEMsQUFBMEIsQUFBYSxBQUN2QztVQUFJLFVBQVUsS0FBQSxBQUFLLE1BQU0sc0JBQXpCLEFBQWMsQUFBaUMsQUFFL0M7O1VBQUksc0JBQXNCLHNCQUExQixBQUFnRCxBQUNoRDtVQUFJLFVBQVUsS0FBQSxBQUFLLEtBQW5CLEFBQWMsQUFBVSxBQUV4Qjs7VUFBSTthQUFNLEFBQ0gsQUFDTDthQUZRLEFBRUgsQUFDTDthQUhGLEFBQVUsQUFHSCxBQUVQO0FBTFUsQUFDUjthQUlGLEFBQU8sQUFDUjs7Ozt3Q0FFbUIsQUFDbEI7VUFBSSxjQUFjLEtBQUEsQUFBSyxjQUFjLEtBQUEsQUFBSyxNQUExQyxBQUFrQixBQUE4QixBQUNoRDtXQUFBLEFBQUssU0FBUyxFQUFFLE1BQWhCLEFBQWMsQUFBUSxBQUN2Qjs7OztpQ0FFWSxBQUNYO1VBQUksS0FBQSxBQUFLLFNBQUwsQUFBYyxLQUFLLEtBQUEsQUFBSyxNQUFMLEFBQVcsVUFBbEMsQUFBNEMsR0FBRyxBQUM3QzthQUFBLEFBQUssUUFBUSxZQUFZLEtBQVosQUFBaUIsV0FBOUIsQUFBYSxBQUE0QixBQUMxQztBQUNGOzs7O2dDQUVXLEFBQ1Y7QUFDQTtVQUFJLFVBQVUsS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUF6QixBQUFtQyxBQUNuQztXQUFBLEFBQUs7Y0FDRyxLQUFBLEFBQUssY0FEQyxBQUNOLEFBQW1CLEFBQ3pCO2lCQUZGLEFBQWMsQUFFSCxBQUdYO0FBTGMsQUFDWjs7QUFLRjtVQUFJLFdBQUosQUFBZSxHQUFHLEFBQ2hCO3NCQUFjLEtBQWQsQUFBbUIsQUFDbkI7YUFBQSxBQUFLLE1BQUwsQUFBVyxhQUFhLEtBQUEsQUFBSyxNQUE3QixBQUFtQyxBQUNwQztBQUNGOzs7OzZCQUVRLEFBQ1A7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsT0FBQSxPQUFBLEFBQ0csQUFBSyxBQUNMLG1CQUFBLEFBQUssTUFBTCxBQUFXLEtBRmQsQUFFbUIsR0FBSSxVQUFBLEFBQUssTUFBTCxBQUFXLEtBSHBDLEFBQ0UsQUFFdUMsQUFHMUM7Ozs7O0VBM0RzQixnQkFBTSxBLEFBOEQvQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb3VudFRpbWVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9EYW5pZWwvRGVza3RvcC9wbGF5Z3JvdW5kIn0=
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

var _jsxFileName = "/Users/jihyeseo/Sources/Playground/components/CountTimer.js";


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
      }, this.startTimer(), this.props.selectedCard.id, " - ", this.props.selectedCard.title, this.state.time.m, ":", this.state.time.s);
    }
  }]);

  return CountTimer;
}(_react2.default.Component);

exports.default = CountTimer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ291bnRUaW1lci5qcyJdLCJuYW1lcyI6WyJDb3VudFRpbWVyIiwicHJvcHMiLCJzdGF0ZSIsInRpbWUiLCJzZWNvbmRzIiwidGltZXIiLCJzdGFydFRpbWVyIiwiYmluZCIsImNvdW50RG93biIsInNlY3MiLCJob3VycyIsIk1hdGgiLCJmbG9vciIsImRpdmlzb3JfZm9yX21pbnV0ZXMiLCJtaW51dGVzIiwiZGl2aXNvcl9mb3Jfc2Vjb25kcyIsImNlaWwiLCJvYmoiLCJ0aW1lTGVmdFZhciIsInNlY29uZHNUb1RpbWUiLCJzZXRTdGF0ZSIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm9uQ29tcGxldGlvbiIsInNlbGVjdGVkQ2FyZCIsImlkIiwidGl0bGUiLCJtIiwicyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNLEE7c0NBQ0o7O3NCQUFBLEFBQVksT0FBTzt3Q0FBQTs7d0lBRWpCOztVQUFBLEFBQUssUUFBUSxFQUFFLE1BQUYsQUFBUSxJQUFJLFNBQVMsTUFBbEMsQUFBYSxBQUEyQixBQUN4QztVQUFBLEFBQUssUUFBTCxBQUFhLEFBQ2I7VUFBQSxBQUFLLGFBQWEsTUFBQSxBQUFLLFdBQUwsQUFBZ0IsS0FBbEMsQUFDQTtVQUFBLEFBQUssWUFBWSxNQUFBLEFBQUssVUFBTCxBQUFlLEtBTGYsQUFLakI7V0FDRDs7Ozs7a0NBRWEsQSxNQUFLLEFBQ2pCO1VBQUksUUFBUSxLQUFBLEFBQUssTUFBTSxRQUFRLEtBQS9CLEFBQVksQUFBVyxBQUFhLEFBRXBDOztVQUFJLHNCQUFzQixRQUFRLEtBQWxDLEFBQTBCLEFBQWEsQUFDdkM7VUFBSSxVQUFVLEtBQUEsQUFBSyxNQUFNLHNCQUF6QixBQUFjLEFBQWlDLEFBRS9DOztVQUFJLHNCQUFzQixzQkFBMUIsQUFBZ0QsQUFDaEQ7VUFBSSxVQUFVLEtBQUEsQUFBSyxLQUFuQixBQUFjLEFBQVUsQUFFeEI7O1VBQUk7YUFBTSxBQUNILEFBQ0w7YUFGUSxBQUVILEFBQ0w7YUFIRixBQUFVLEFBR0gsQUFFUDtBQUxVLEFBQ1I7YUFJRixBQUFPLEFBQ1I7Ozs7d0NBRW1CLEFBQ2xCO1VBQUksY0FBYyxLQUFBLEFBQUssY0FBYyxLQUFBLEFBQUssTUFBMUMsQUFBa0IsQUFBOEIsQUFDaEQ7V0FBQSxBQUFLLFNBQVMsRUFBRSxNQUFoQixBQUFjLEFBQVEsQUFDdkI7Ozs7aUNBRVksQUFDWDtVQUFJLEtBQUEsQUFBSyxTQUFMLEFBQWMsS0FBSyxLQUFBLEFBQUssTUFBTCxBQUFXLFVBQWxDLEFBQTRDLEdBQUcsQUFDN0M7YUFBQSxBQUFLLFFBQVEsWUFBWSxLQUFaLEFBQWlCLFdBQTlCLEFBQWEsQUFBNEIsQUFDMUM7QUFDRjs7OztnQ0FFVyxBQUNWO0FBQ0E7VUFBSSxVQUFVLEtBQUEsQUFBSyxNQUFMLEFBQVcsVUFBekIsQUFBbUMsQUFDbkM7V0FBQSxBQUFLO2NBQ0csS0FBQSxBQUFLLGNBREMsQUFDTixBQUFtQixBQUN6QjtpQkFGRixBQUFjLEFBRUgsQUFHWDtBQUxjLEFBQ1o7O0FBS0Y7VUFBSSxXQUFKLEFBQWUsR0FBRyxBQUNoQjtzQkFBYyxLQUFkLEFBQW1CLEFBQ25CO2FBQUEsQUFBSyxNQUFMLEFBQVcsYUFBYSxLQUFBLEFBQUssTUFBN0IsQUFBbUMsQUFDcEM7QUFDRjs7Ozs2QkFFUSxBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLE9BQUEsT0FBQSxBQUNHLEFBQUssQUFDTCxtQkFBQSxBQUFLLE1BQUwsQUFBVyxhQUZkLEFBRTJCLElBQU8sWUFBQSxBQUFLLE1BQUwsQUFBVyxhQUY3QyxBQUUwRCxBQUN2RCxZQUFBLEFBQUssTUFBTCxBQUFXLEtBSGQsQUFHbUIsR0FBSSxVQUFBLEFBQUssTUFBTCxBQUFXLEtBSnBDLEFBQ0UsQUFHdUMsQUFHMUM7Ozs7O0VBNURzQixnQkFBTSxBLEFBK0QvQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb3VudFRpbWVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qaWh5ZXNlby9Tb3VyY2VzL1BsYXlncm91bmQifQ==
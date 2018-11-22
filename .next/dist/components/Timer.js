'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timer = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jihyeseo/Sources/Playground/components/Timer.js';
var Timer = exports.Timer = function (_Component) {
  (0, _inherits3.default)(Timer, _Component);

  function Timer(props) {
    (0, _classCallCheck3.default)(this, Timer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Timer.__proto__ || (0, _getPrototypeOf2.default)(Timer)).call(this, props));

    _this.state = {
      remainingMinutes: 0,
      remainingSeconds: 0
    };
    return _this;
  }

  (0, _createClass3.default)(Timer, [{
    key: 'updateRemainMinutesAndSeconds',
    value: function updateRemainMinutesAndSeconds(timeRemainingInSeconds) {
      var remainingMinutes = Math.floor(timeRemainingInSeconds / 60);
      var remainingSeconds = timeRemainingInSeconds % 60;
      this.setState({
        remainingMinutes: remainingMinutes,
        remainingSeconds: remainingSeconds
      });
    }
  }, {
    key: 'countDown',
    value: function countDown(timeRemainingInSeconds, shouldSkipCallback) {
      this.setState({
        timeRemainingInSeconds: timeRemainingInSeconds
      });
      if (!shouldSkipCallback && timeRemainingInSeconds % 60 === 0) {
        this.props.onEveryMinute(1);
      }
      if (timeRemainingInSeconds === 0) {
        this.props.onCompletion();
      }
      localStorage.setItem('timeRemainingInSeconds', timeRemainingInSeconds);
      if (timeRemainingInSeconds > 0) {
        this.updateRemainMinutesAndSeconds(timeRemainingInSeconds);
        timeRemainingInSeconds = timeRemainingInSeconds - 1;
        this.setTimeoutId = setTimeout(this.countDown.bind(this, timeRemainingInSeconds, false), 1000);
      }
    }
  }, {
    key: 'compareServerTimeAndComponentTimeAndUpdateServer',
    value: function compareServerTimeAndComponentTimeAndUpdateServer(serverSideTimeRemainingInSeconds) {
      var componentTimeRemainingInSeconds = localStorage.getItem('timeRemainingInSeconds');
      if (componentTimeRemainingInSeconds && componentTimeRemainingInSeconds < serverSideTimeRemainingInSeconds) {
        var differenceInMinutes = Math.floor((serverSideTimeRemainingInSeconds - componentTimeRemainingInSeconds) / 60);
        if (differenceInMinutes > 0) {
          this.props.onEveryMinute(differenceInMinutes);
        }
        return componentTimeRemainingInSeconds;
      }
      return serverSideTimeRemainingInSeconds;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.timeRemainingInSeconds !== nextProps.timeRemainingInSeconds) {
        var timeRemainingInSeconds = this.compareServerTimeAndComponentTimeAndUpdateServer(nextProps.timeRemainingInSeconds);
        this.countDown(timeRemainingInSeconds, true);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.setTimeoutId);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'timer', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement('div', { className: 'font-weight-bold lead number-display', __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, this.state.remainingMinutes > 9 ? this.state.remainingMinutes : '0' + this.state.remainingMinutes, ':', this.state.remainingSeconds > 9 ? this.state.remainingSeconds : '0' + this.state.remainingSeconds))), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement('div', { className: 'info', __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, 'remaining')))));
    }
  }]);

  return Timer;
}(_react.Component);

exports.default = Timer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGltZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUaW1lciIsInByb3BzIiwic3RhdGUiLCJyZW1haW5pbmdNaW51dGVzIiwicmVtYWluaW5nU2Vjb25kcyIsInRpbWVSZW1haW5pbmdJblNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJzZXRTdGF0ZSIsInNob3VsZFNraXBDYWxsYmFjayIsIm9uRXZlcnlNaW51dGUiLCJvbkNvbXBsZXRpb24iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidXBkYXRlUmVtYWluTWludXRlc0FuZFNlY29uZHMiLCJzZXRUaW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwiY291bnREb3duIiwiYmluZCIsInNlcnZlclNpZGVUaW1lUmVtYWluaW5nSW5TZWNvbmRzIiwiY29tcG9uZW50VGltZVJlbWFpbmluZ0luU2Vjb25kcyIsImdldEl0ZW0iLCJkaWZmZXJlbmNlSW5NaW51dGVzIiwibmV4dFByb3BzIiwiY29tcGFyZVNlcnZlclRpbWVBbmRDb21wb25lbnRUaW1lQW5kVXBkYXRlU2VydmVyIiwiY2xlYXJUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVEsQUFJZjs7Ozs7OztJQUFBLEFBQWEsOENBQWI7aUNBQ0U7O2lCQUFBLEFBQVksT0FBTTt3Q0FBQTs7b0lBQUEsQUFDVixBQUNOOztVQUFBLEFBQUs7d0JBQVEsQUFDTyxBQUNsQjt3QkFKYyxBQUVoQixBQUFhLEFBRU87QUFGUCxBQUNYO1dBR0g7QUFQSDs7O1NBQUE7a0RBQUEsQUFTZ0Msd0JBQXVCLEFBQ25EO1VBQUksbUJBQW1CLEtBQUEsQUFBSyxNQUFNLHlCQUFsQyxBQUF1QixBQUFrQyxBQUN6RDtVQUFJLG1CQUFtQix5QkFBdkIsQUFBZ0QsQUFDaEQ7V0FBQSxBQUFLOzBCQUFTLEFBRVo7MEJBRkYsQUFBYyxBQUlmO0FBSmUsQUFDWjtBQWJOO0FBQUE7U0FBQTs4QkFBQSxBQWtCWSx3QkFsQlosQUFrQm1DLG9CQUFtQixBQUNsRDtXQUFBLEFBQUs7Z0NBQUwsQUFBYyxBQUdkO0FBSGMsQUFDWjtVQUVFLENBQUEsQUFBQyxzQkFBc0IseUJBQUEsQUFBeUIsT0FBcEQsQUFBMkQsR0FBRyxBQUM1RDthQUFBLEFBQUssTUFBTCxBQUFXLGNBQVgsQUFBeUIsQUFDMUI7QUFDRDtVQUFJLDJCQUFKLEFBQStCLEdBQUUsQUFDL0I7YUFBQSxBQUFLLE1BQUwsQUFBVyxBQUNaO0FBQ0Q7bUJBQUEsQUFBYSxRQUFiLEFBQXFCLDBCQUFyQixBQUE4QyxBQUM5QztVQUFHLHlCQUFILEFBQTRCLEdBQUUsQUFDNUI7YUFBQSxBQUFLLDhCQUFMLEFBQW1DLEFBQ25DO2lDQUF5Qix5QkFBekIsQUFBZ0QsQUFDaEQ7YUFBQSxBQUFLLGVBQWUsV0FBVyxLQUFBLEFBQUssVUFBTCxBQUFlLEtBQWYsQUFBb0IsTUFBcEIsQUFBeUIsd0JBQXBDLEFBQVcsQUFBaUQsUUFBaEYsQUFBb0IsQUFBb0UsQUFDekY7QUFDRjtBQWxDSDtBQUFBO1NBQUE7cUVBQUEsQUFvQ21ELGtDQUFpQyxBQUNoRjtVQUFJLGtDQUFrQyxhQUFBLEFBQWEsUUFBbkQsQUFBc0MsQUFBcUIsQUFDM0Q7VUFBRyxtQ0FBbUMsa0NBQXRDLEFBQXdFLGtDQUFrQyxBQUN4RztZQUFJLHNCQUFzQixLQUFBLEFBQUssTUFBTSxDQUFDLG1DQUFELEFBQW9DLG1DQUF6RSxBQUEwQixBQUFnRixBQUMxRztZQUFHLHNCQUFILEFBQXVCLEdBQUUsQUFDdkI7ZUFBQSxBQUFLLE1BQUwsQUFBVyxjQUFYLEFBQXlCLEFBQzFCO0FBQ0Q7ZUFBQSxBQUFPLEFBQ1I7QUFDRDthQUFBLEFBQU8sQUFDUjtBQTlDSDtBQUFBO1NBQUE7OENBQUEsQUFnRDRCLFdBQVUsQUFDbEM7VUFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLDJCQUEyQixVQUF6QyxBQUFtRCx3QkFBdUIsQUFDeEU7WUFBSSx5QkFBeUIsS0FBQSxBQUFLLGlEQUFpRCxVQUFuRixBQUE2QixBQUFnRSxBQUM3RjthQUFBLEFBQUssVUFBTCxBQUFlLHdCQUFmLEFBQXNDLEFBQ3ZDO0FBQ0Y7QUFyREg7QUFBQTtTQUFBOzJDQXVEd0IsQUFDcEI7bUJBQWEsS0FBYixBQUFrQixBQUNuQjtBQXpESDtBQUFBO1NBQUE7NkJBMkRVLEFBQ047NkJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNJO0FBREo7T0FBQSxrQkFDSSxjQUFBOztvQkFBQTtzQkFBQSxBQUNBO0FBREE7QUFBQSx5QkFDQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNGO0FBREU7QUFBQSx5QkFDRixjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBRUk7QUFGSjtjQUVJLEFBQUssTUFBTCxBQUFXLG1CQUFYLEFBQTRCLElBQzVCLEtBQUEsQUFBSyxNQURMLEFBQ1csbUJBQWlCLE1BQUksS0FBQSxBQUFLLE1BSHpDLEFBRytDLGtCQUUzQyxVQUFBLEFBQUssTUFBTCxBQUFXLG1CQUFYLEFBQTRCLElBQzVCLEtBQUEsQUFBSyxNQURMLEFBQ1csbUJBQWlCLE1BQUksS0FBQSxBQUFLLE1BVHpDLEFBQ0EsQUFDRSxBQUNGLEFBTStDLEFBSy9DLHFDQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUE7QUFBQTtTQWxCVixBQUNFLEFBQ0ksQUFjQSxBQUNFLEFBQ0UsQUFPWDtBQXJGSDtBQUFBOztTQUFBO0FBQUEsQUFBMkIsQUF3RjNCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlRpbWVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qaWh5ZXNlby9Tb3VyY2VzL1BsYXlncm91bmQifQ==
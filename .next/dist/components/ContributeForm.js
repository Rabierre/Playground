'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _semanticUiReact = require('semantic-ui-react');

var _project = require('../ethereum/project');

var _project2 = _interopRequireDefault(_project);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Daniel/Desktop/playground2/components/ContributeForm.js';


var ContributeForm = function (_Component) {
  (0, _inherits3.default)(ContributeForm, _Component);

  function ContributeForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {

      errorMessage: '',
      loading: false
    }, _this.onSelectedCardChange = function (event) {

      _this.props.selectedCard.point = event.target.value;
      _this.props.onSelectedCardChange(_this.props.selectedCard);
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var project;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:

                event.preventDefault();
                project = (0, _project2.default)(_this.props.address);

                _this.setState({ loading: true });

                _this.props.onStaking(true);

                console.log(_this.props.selectedCard.point);
                _this.props.onAssign(_this.props.selectedCard, _this.props.selectedCard.point);
                _this.setState({ loading: false, value: '' });
                _this.props.onClose();
              // this.props.selectedCard['test'] = 1;


              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContributeForm, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, ' Amount to stake '), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.props.selectedCard.point,
        onChange: this.onSelectedCardChange,
        label: 'ether',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, 'Put my stake!'));
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiUHJvamVjdCIsIndlYjMiLCJSb3V0ZXIiLCJDb250cmlidXRlRm9ybSIsInN0YXRlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU2VsZWN0ZWRDYXJkQ2hhbmdlIiwiZXZlbnQiLCJwcm9wcyIsInNlbGVjdGVkQ2FyZCIsInBvaW50IiwidGFyZ2V0IiwidmFsdWUiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicHJvamVjdCIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsIm9uU3Rha2luZyIsImNvbnNvbGUiLCJsb2ciLCJvbkFzc2lnbiIsIm9uQ2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQU0sQUFBTyxBQUFTOztBQUM5QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBYTs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7Ozs7Ozs0TkFFSixBOztvQkFBUSxBQUVRLEFBQ2Q7ZUFITSxBLEFBR0c7QUFISCxBQUVOLGEsQUFJRix1QkFBdUIsVUFBQSxBQUFDLE9BQVUsQUFHaEM7O1lBQUEsQUFBSyxNQUFMLEFBQVcsYUFBWCxBQUF3QixRQUFRLE1BQUEsQUFBTSxPQUF0QyxBQUE2QyxBQUM3QztZQUFBLEFBQUssTUFBTCxBQUFXLHFCQUFxQixNQUFBLEFBQUssTUFBckMsQUFBMkMsQUFDNUM7QSxhLEFBRUQ7MkZBQVcsaUJBQUEsQUFBTSxPQUFOO1lBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBRVQ7O3NCQUFBLEFBQU0sQUFDQTtBQUhHLDBCQUdPLHVCQUFRLE1BQUEsQUFBSyxNQUhwQixBQUdPLEFBQW1CLEFBRW5DOztzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFmLEFBQWMsQUFBVSxBQW9CeEI7O3NCQUFBLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsQUFFckI7O3dCQUFBLEFBQVEsSUFBSSxNQUFBLEFBQUssTUFBTCxBQUFXLGFBQXZCLEFBQW9DLEFBQ3BDO3NCQUFBLEFBQUssTUFBTCxBQUFXLFNBQVMsTUFBQSxBQUFLLE1BQXpCLEFBQStCLGNBQWMsTUFBQSxBQUFLLE1BQUwsQUFBVyxhQUF4RCxBQUFxRSxBQUNyRTtzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVUsT0FBTyxPQUEvQixBQUFjLEFBQXVCLEFBQ3JDO3NCQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1g7QUEvQlM7OzttQkFBQTttQkFBQTtnQ0FBQTs7QUFBQTtvQkFBQTtBOzs7Ozs7Ozs7OzZCQXFDRixBQUVQOzs2QkFDRSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUI7b0JBQXJCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUVBLHNDQUFBLEFBQUM7ZUFDUSxLQUFBLEFBQUssTUFBTCxBQUFXLGFBRHBCLEFBQ2lDLEFBQy9CO2tCQUFVLEtBRlosQUFFaUIsQUFDZjtlQUhGLEFBR1EsQUFDTjt1QkFKRixBQUlnQjs7b0JBSmhCO3NCQUpKLEFBQ0UsQUFHRSxBQU9GO0FBUEU7QUFDRSwyQkFNSixBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7b0JBQXBDO3NCQUFBO0FBQUE7U0FaSixBQUNFLEFBV0UsQUFPTDs7Ozs7QUF6RTBCLEEsQUE4RTdCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNvbnRyaWJ1dGVGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9EYW5pZWwvRGVza3RvcC9wbGF5Z3JvdW5kMiJ9
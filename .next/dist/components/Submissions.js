'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactCopyToClipboard = require('react-copy-to-clipboard');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Daniel/Desktop/playground2/components/Submissions.js';


var SubmissionList = function (_Component) {
  (0, _inherits3.default)(SubmissionList, _Component);

  function SubmissionList(props) {
    (0, _classCallCheck3.default)(this, SubmissionList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SubmissionList.__proto__ || (0, _getPrototypeOf2.default)(SubmissionList)).call(this, props));

    _this.onLinkHandler = function (url) {

      alert(url);
    };

    _this.state = {
      value: '',
      copied: false
    };

    return _this;
  }

  (0, _createClass3.default)(SubmissionList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var submissions = this.props.selectedCard.submissions;

      if (submissions) {

        submissions = submissions.map(function (submission) {

          return _react2.default.createElement(_semanticUiReact.List.Item, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          }, _react2.default.createElement(_semanticUiReact.List.Content, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          }, _react2.default.createElement('button', { onClick: function onClick() {
              window.open(submission.url);
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          }, 'Show Notebook'), _react2.default.createElement(_reactCopyToClipboard.CopyToClipboard, { text: submission.id,
            onCopy: function onCopy() {
              return _this2.setState({ copied: true });
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          }, ' ', submission.id))));
        });
      } else {
        submissions = [];
      }

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, submissions);
    }
  }]);

  return SubmissionList;
}(_react.Component);

;

exports.default = SubmissionList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3VibWlzc2lvbnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDb250YWluZXIiLCJTdGlja3kiLCJCdXR0b24iLCJJbnB1dCIsIkxpc3QiLCJJbWFnZSIsIkZvcm0iLCJIZWFkZXIiLCJIZWFkIiwiYXhpb3MiLCJwb3N0IiwiQ29weVRvQ2xpcGJvYXJkIiwiU3VibWlzc2lvbkxpc3QiLCJwcm9wcyIsIm9uTGlua0hhbmRsZXIiLCJ1cmwiLCJhbGVydCIsInN0YXRlIiwidmFsdWUiLCJjb3BpZWQiLCJzdWJtaXNzaW9ucyIsInNlbGVjdGVkQ2FyZCIsIm1hcCIsIndpbmRvdyIsIm9wZW4iLCJzdWJtaXNzaW9uIiwiaWQiLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQVcsQUFBUSxBQUFRLEFBQU8sQUFBTSxBQUFPOztBQUN2RCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQU8sQUFBUzs7OztBQUNoQixBQUFROzs7Ozs7O0lBRUYsQTswQ0FFSjs7MEJBQUEsQUFBWSxPQUFPO3dDQUFBOztzSkFBQSxBQUNYOztVQURXLEFBWW5CLGdCQUFnQixVQUFBLEFBQUMsS0FBUSxBQUV2Qjs7WUFBQSxBQUFNLEFBQ1A7QUFma0IsQUFHakI7O1VBQUEsQUFBSzthQUFRLEFBQ0osQUFDUDtjQUxlLEFBR2pCLEFBQWEsQUFFSDtBQUZHLEFBQ1g7O1dBTUg7Ozs7OzZCQVFRO21CQUVQOztVQUFJLGNBQWMsS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUE3QixBQUEwQyxBQUUxQzs7VUFBQSxBQUFJLGFBQWEsQUFHZjs7a0NBQWMsQUFBWSxJQUFJLHNCQUFjLEFBRTFDOztpQ0FFRyxjQUFELHNCQUFBLEFBQU07O3dCQUFOOzBCQUFBLEFBRUU7QUFGRjtBQUFBLFdBQUEsa0JBRUcsY0FBRCxzQkFBQSxBQUFNOzt3QkFBTjswQkFBQSxBQUNFO0FBREY7QUFBQSw2QkFDRSxjQUFBLFlBQVEsU0FBUyxtQkFBTSxBQUFFO3FCQUFBLEFBQU8sS0FBSyxXQUFaLEFBQXVCLEFBQUs7QUFBckQ7d0JBQUE7MEJBQUE7QUFBQTthQURGLEFBQ0UsQUFDQSxrQ0FBQSxBQUFDLHVEQUFnQixNQUFNLFdBQXZCLEFBQWtDLEFBQ2hDO29CQUFRLGtCQUFBO3FCQUFNLE9BQUEsQUFBSyxTQUFTLEVBQUMsUUFBckIsQUFBTSxBQUFjLEFBQVM7QUFEdkM7d0JBQUE7MEJBQUEsQUFHRTtBQUhGOzZCQUdFLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxhQUFLLGdCQVRiLEFBRUUsQUFFRSxBQUVFLEFBR0UsQUFBZ0IsQUFVekI7QUFyQkQsQUFBYyxBQXVCZixTQXZCZTtBQUhoQixhQTBCTyxBQUNMO3NCQUFBLEFBQWMsQUFDZjtBQUVEOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxPQUFBLEVBREYsQUFDRSxBQUtIOzs7OztBQTVEMEIsQTs7QUE2RDVCLEFBR0Q7O2tCQUFBLEFBQWUiLCJmaWxlIjoiU3VibWlzc2lvbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0RhbmllbC9EZXNrdG9wL3BsYXlncm91bmQyIn0=
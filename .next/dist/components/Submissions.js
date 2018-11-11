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

var _SessionMockup = require('./SessionMockup');

var _reactCopyToClipboard = require('react-copy-to-clipboard');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Daniel/Desktop/playground/components/Submissions.js';


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
              lineNumber: 40
            }
          }, _react2.default.createElement(_semanticUiReact.List.Content, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          }, _react2.default.createElement('button', { onClick: function onClick() {
              window.open(submission.url);
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          }, 'Show Notebook'), _react2.default.createElement(_reactCopyToClipboard.CopyToClipboard, { text: submission.id,
            onCopy: function onCopy() {
              return _this2.setState({ copied: true });
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          }, _react2.default.createElement('button', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          }, 'Copy notebook id'))));
        });
      } else {
        submissions = [];
      }

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, submissions);
    }
  }]);

  return SubmissionList;
}(_react.Component);

;

exports.default = SubmissionList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3VibWlzc2lvbnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDb250YWluZXIiLCJTdGlja3kiLCJCdXR0b24iLCJJbnB1dCIsIkxpc3QiLCJJbWFnZSIsIkZvcm0iLCJIZWFkZXIiLCJIZWFkIiwiYXhpb3MiLCJwb3N0IiwiU2Vzc2lvblJvbGUiLCJVc2VySWQiLCJDb3B5VG9DbGlwYm9hcmQiLCJTdWJtaXNzaW9uTGlzdCIsInByb3BzIiwib25MaW5rSGFuZGxlciIsInVybCIsImFsZXJ0Iiwic3RhdGUiLCJ2YWx1ZSIsImNvcGllZCIsInN1Ym1pc3Npb25zIiwic2VsZWN0ZWRDYXJkIiwibWFwIiwid2luZG93Iiwib3BlbiIsInN1Ym1pc3Npb24iLCJpZCIsInNldFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBVyxBQUFRLEFBQVEsQUFBTyxBQUFNLEFBQU87O0FBQ3ZELEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVEsQUFBYSxBQUFhOztBQUNsQyxBQUFROzs7Ozs7O0lBRUYsQTswQ0FFSjs7MEJBQUEsQUFBWSxPQUFPO3dDQUFBOztzSkFBQSxBQUNYOztVQURXLEFBWW5CLGdCQUFnQixVQUFBLEFBQUMsS0FBUSxBQUV2Qjs7WUFBQSxBQUFNLEFBQ1A7QUFma0IsQUFHakI7O1VBQUEsQUFBSzthQUFRLEFBQ0osQUFDUDtjQUxlLEFBR2pCLEFBQWEsQUFFSDtBQUZHLEFBQ1g7O1dBTUg7Ozs7OzZCQVFRO21CQUVQOztVQUFJLGNBQWMsS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUE3QixBQUEwQyxBQUUxQzs7VUFBQSxBQUFJLGFBQWEsQUFHZjs7a0NBQWMsQUFBWSxJQUFJLHNCQUFjLEFBRTFDOztpQ0FFRyxjQUFELHNCQUFBLEFBQU07O3dCQUFOOzBCQUFBLEFBRUU7QUFGRjtBQUFBLFdBQUEsa0JBRUcsY0FBRCxzQkFBQSxBQUFNOzt3QkFBTjswQkFBQSxBQUNFO0FBREY7QUFBQSw2QkFDRSxjQUFBLFlBQVEsU0FBUyxtQkFBTSxBQUFFO3FCQUFBLEFBQU8sS0FBSyxXQUFaLEFBQXVCLEFBQUs7QUFBckQ7d0JBQUE7MEJBQUE7QUFBQTthQURGLEFBQ0UsQUFDQSxrQ0FBQSxBQUFDLHVEQUFnQixNQUFNLFdBQXZCLEFBQWtDLEFBQ2hDO29CQUFRLGtCQUFBO3FCQUFNLE9BQUEsQUFBSyxTQUFTLEVBQUMsUUFBckIsQUFBTSxBQUFjLEFBQVM7QUFEdkM7d0JBQUE7MEJBQUEsQUFHRTtBQUhGOzZCQUdFLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxhQVRSLEFBRUUsQUFFRSxBQUVFLEFBR0UsQUFVVDtBQXJCRCxBQUFjLEFBdUJmLFNBdkJlO0FBSGhCLGFBMEJPLEFBQ0w7c0JBQUEsQUFBYyxBQUNmO0FBRUQ7OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLE9BQUEsRUFERixBQUNFLEFBS0g7Ozs7O0FBNUQwQixBOztBQTZENUIsQUFHRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJTdWJtaXNzaW9ucy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRGFuaWVsL0Rlc2t0b3AvcGxheWdyb3VuZCJ9
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

var _CommentList = require('../CommentList');

var _CommentList2 = _interopRequireDefault(_CommentList);

var _Submissions = require('../Submissions');

var _Submissions2 = _interopRequireDefault(_Submissions);

var _SubmissionForm = require('../SubmissionForm');

var _SubmissionForm2 = _interopRequireDefault(_SubmissionForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jihyeseo/Sources/Playground/components/lanes/NotStartedDetailModal.js';


var NotStartedDetailModal = function (_Component) {
  (0, _inherits3.default)(NotStartedDetailModal, _Component);

  function NotStartedDetailModal(props) {
    (0, _classCallCheck3.default)(this, NotStartedDetailModal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NotStartedDetailModal.__proto__ || (0, _getPrototypeOf2.default)(NotStartedDetailModal)).call(this, props));

    _this.state = {

      comment: '',
      selectedCard: _this.props.selectedCard

    };

    return _this;
  }

  (0, _createClass3.default)(NotStartedDetailModal, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_semanticUiReact.Modal, { open: this.props.openDetail == 'NOT_STARTED', onClose: this.props.closeDetail, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, { onChange: this.props.onChangeTitleHandler, style: { fontSize: '20px', fontWeight: 'bold' }, control: _semanticUiReact.TextArea, value: this.props.selectedCard.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, { onChange: this.props.onChangeDescriptionHandler, control: _semanticUiReact.TextArea, placeholder: 'Add a more detailed description...', value: this.props.selectedCard.description, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      })), _react2.default.createElement(_semanticUiReact.Modal.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_CommentList2.default, { selectedCard: this.props.selectedCard, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      })))));
    }
  }]);

  return NotStartedDetailModal;
}(_react.Component);

exports.default = NotStartedDetailModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGFuZXMvTm90U3RhcnRlZERldGFpbE1vZGFsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiSGVhZGVyIiwiSWNvbiIsIklucHV0IiwiTGlzdCIsIkltYWdlIiwiTW9kYWwiLCJUZXh0QXJlYSIsIklucHV0Rm9ybWF0IiwiRm9ybSIsIkNvbW1lbnRMaXN0IiwiU3VibWlzc2lvbnMiLCJTdWJtaXNzaW9uRm9ybSIsIk5vdFN0YXJ0ZWREZXRhaWxNb2RhbCIsInByb3BzIiwic3RhdGUiLCJjb21tZW50Iiwic2VsZWN0ZWRDYXJkIiwib3BlbkRldGFpbCIsImNsb3NlRGV0YWlsIiwib25DaGFuZ2VUaXRsZUhhbmRsZXIiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0aXRsZSIsIm9uQ2hhbmdlRGVzY3JpcHRpb25IYW5kbGVyIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUyxBQUFRLEFBQVEsQUFBTSxBQUFPLEFBQU0sQUFBTyxBQUFPLEFBQVUsQUFBYTs7QUFDakYsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBb0I7Ozs7Ozs7OztJLEFBRXJCO2lEQUVKOztpQ0FBQSxBQUFZLE9BQU87d0NBQUE7O29LQUFBLEFBQ1gsQUFFTjs7VUFBQSxBQUFLOztlQUFRLEFBRUYsQUFDVDtvQkFBYyxNQUFBLEFBQUssTUFOSixBQUdqQixBQUFhLEFBR2M7O0FBSGQsQUFFWDs7V0FLSDs7Ozs7NkJBRVEsQUFFUDs7NkJBQ0ksY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDLHdDQUFNLE1BQU0sS0FBQSxBQUFLLE1BQUwsQUFBVyxjQUF4QixBQUFzQyxlQUFlLFNBQVMsS0FBQSxBQUFLLE1BQW5FLEFBQXlFO29CQUF6RTtzQkFBQSxBQUNBO0FBREE7eUJBQ0EsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDQTtBQURBO0FBQUEsdUNBQ0EsQUFBQyxzQkFBRCxBQUFNLFNBQU0sVUFBVSxLQUFBLEFBQUssTUFBM0IsQUFBaUMsc0JBQXNCLE9BQU8sRUFBQyxVQUFELEFBQVcsUUFBUSxZQUFqRixBQUE4RCxBQUErQixVQUE3RixBQUFzRyxBQUFTLG9DQUFVLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUEzSSxBQUF3SjtvQkFBeEo7c0JBREEsQUFDQSxBQUNBO0FBREE7d0NBQ0EsQUFBQyxzQkFBRCxBQUFNLFNBQU0sVUFBVSxLQUFBLEFBQUssTUFBM0IsQUFBaUMsNEJBQWpDLEFBQTZELEFBQVMsb0NBQVUsYUFBaEYsQUFBNEYsc0NBQXFDLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFuSixBQUFnSztvQkFBaEs7c0JBSEEsQUFDQSxBQUVBLEFBR0E7QUFIQTsyQkFHQyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUEsQUFFRTtBQUZGO0FBQUEseUJBRUUsQUFBQyx1Q0FBWSxjQUFjLEtBQUEsQUFBSyxNQUFoQyxBQUFzQztvQkFBdEM7c0JBWFYsQUFDSSxBQUNFLEFBTUEsQUFDRSxBQUVFLEFBU1g7QUFUVzs7Ozs7O0FBM0JzQixBLEFBMENwQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJOb3RTdGFydGVkRGV0YWlsTW9kYWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ppaHllc2VvL1NvdXJjZXMvUGxheWdyb3VuZCJ9
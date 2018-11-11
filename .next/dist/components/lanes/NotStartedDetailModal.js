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

var _SessionMockup = require('../SessionMockup');

var _CommentList = require('../CommentList');

var _CommentList2 = _interopRequireDefault(_CommentList);

var _Submissions = require('../Submissions');

var _Submissions2 = _interopRequireDefault(_Submissions);

var _SubmissionForm = require('../SubmissionForm');

var _SubmissionForm2 = _interopRequireDefault(_SubmissionForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Daniel/Desktop/playground/components/lanes/NotStartedDetailModal.js';


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
          lineNumber: 25
        }
      }, _react2.default.createElement(_semanticUiReact.Modal, { open: this.props.openDetail == 'NOT_STARTED', onClose: this.props.closeDetail, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, { style: { fontSize: '20px', fontWeight: 'bold' }, control: _semanticUiReact.TextArea, value: this.props.selectedCard.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.TextArea, placeholder: 'Add a more detailed description...', value: this.props.selectedCard.description, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      })), _react2.default.createElement(_semanticUiReact.Modal.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_CommentList2.default, { selectedCard: this.props.selectedCard, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      })))));
    }
  }]);

  return NotStartedDetailModal;
}(_react.Component);

exports.default = NotStartedDetailModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGFuZXMvTm90U3RhcnRlZERldGFpbE1vZGFsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiSGVhZGVyIiwiSWNvbiIsIklucHV0IiwiTGlzdCIsIkltYWdlIiwiTW9kYWwiLCJUZXh0QXJlYSIsIklucHV0Rm9ybWF0IiwiRm9ybSIsIlNlc3Npb25Sb2xlIiwiVXNlcklkIiwiQ29tbWVudExpc3QiLCJTdWJtaXNzaW9ucyIsIlN1Ym1pc3Npb25Gb3JtIiwiTm90U3RhcnRlZERldGFpbE1vZGFsIiwicHJvcHMiLCJzdGF0ZSIsImNvbW1lbnQiLCJzZWxlY3RlZENhcmQiLCJvcGVuRGV0YWlsIiwiY2xvc2VEZXRhaWwiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVMsQUFBUSxBQUFRLEFBQU0sQUFBTyxBQUFNLEFBQU8sQUFBTyxBQUFVLEFBQWE7O0FBQ2pGLEFBQVEsQUFBYSxBQUFhOztBQUNsQyxBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFvQjs7Ozs7Ozs7O0lBRXJCLEE7aURBRUo7O2lDQUFBLEFBQVksT0FBTzt3Q0FBQTs7b0tBQUEsQUFDWCxBQUVOOztVQUFBLEFBQUs7O2VBQVEsQUFFRixBQUNUO29CQUFjLE1BQUEsQUFBSyxNQU5KLEFBR2pCLEFBQWEsQUFHYzs7QUFIZCxBQUVYOztXQUtIOzs7Ozs2QkFFUSxBQUVQOzs2QkFDSSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsd0NBQU0sTUFBTSxLQUFBLEFBQUssTUFBTCxBQUFXLGNBQXhCLEFBQXNDLGVBQWUsU0FBUyxLQUFBLEFBQUssTUFBbkUsQUFBeUU7b0JBQXpFO3NCQUFBLEFBQ0E7QUFEQTt5QkFDQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx1Q0FDRSxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFPLEVBQUMsVUFBRCxBQUFXLFFBQVEsWUFBdEMsQUFBbUIsQUFBK0IsVUFBbEQsQUFBMkQsQUFBUyxvQ0FBVSxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBaEcsQUFBNkc7b0JBQTdHO3NCQURGLEFBQ0UsQUFDQTtBQURBO3dDQUNBLEFBQUMsc0JBQUQsQUFBTSxTQUFOLEFBQVksQUFBUyxvQ0FBVSxhQUEvQixBQUEyQyxzQ0FBcUMsT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQWxHLEFBQStHO29CQUEvRztzQkFIRixBQUNBLEFBRUUsQUFHRjtBQUhFOzJCQUdELGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQSxBQUVFO0FBRkY7QUFBQSx5QkFFRSxBQUFDLHVDQUFZLGNBQWMsS0FBQSxBQUFLLE1BQWhDLEFBQXNDO29CQUF0QztzQkFYVixBQUNJLEFBQ0UsQUFNQSxBQUNFLEFBRUUsQUFTWDtBQVRXOzs7Ozs7QUEzQnNCLEEsQUEwQ3BDOztrQkFBQSxBQUFlIiwiZmlsZSI6Ik5vdFN0YXJ0ZWREZXRhaWxNb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRGFuaWVsL0Rlc2t0b3AvcGxheWdyb3VuZCJ9
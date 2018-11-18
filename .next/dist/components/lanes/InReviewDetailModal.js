'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _jsxFileName = '/Users/Daniel/Desktop/playground2/components/lanes/InReviewDetailModal.js';


var InReviewDetailModal = function (_Component) {
  (0, _inherits3.default)(InReviewDetailModal, _Component);

  function InReviewDetailModal(props) {
    (0, _classCallCheck3.default)(this, InReviewDetailModal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InReviewDetailModal.__proto__ || (0, _getPrototypeOf2.default)(InReviewDetailModal)).call(this, props));

    _this.state = {

      comment: '',
      selectedCard: _this.props.selectedCard

    };

    return _this;
  }

  (0, _createClass3.default)(InReviewDetailModal, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_semanticUiReact.Modal, { open: this.props.openDetail == 'IN_REVIEW', onClose: this.props.closeDetail, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Group, { size: 'large', fluid: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { onClick: this.props.onUpVote, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, 'Up vote'), _react2.default.createElement(_semanticUiReact.Button.Or, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { onClick: this.props.onDownVote, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, 'Down vote')), _react2.default.createElement(_semanticUiReact.Form.Field, { onChange: this.props.onChangeTitleHandler, style: { fontSize: '20px', fontWeight: 'bold' }, control: _semanticUiReact.TextArea, value: this.props.selectedCard.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, { onChange: this.props.onChangeDescriptionHandler, control: _semanticUiReact.TextArea, placeholder: 'Add a more detailed description...', value: this.props.selectedCard.description, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })), _react2.default.createElement(_semanticUiReact.Modal.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, (0, _stringify2.default)(this.props.selectedCard.submission)), _react2.default.createElement(_Submissions2.default, { selectedCard: this.props.selectedCard, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react2.default.createElement(_CommentList2.default, { selectedCard: this.props.selectedCard, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      })))));
    }
  }]);

  return InReviewDetailModal;
}(_react.Component);

exports.default = InReviewDetailModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGFuZXMvSW5SZXZpZXdEZXRhaWxNb2RhbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkhlYWRlciIsIkljb24iLCJJbnB1dCIsIkxpc3QiLCJJbWFnZSIsIk1vZGFsIiwiVGV4dEFyZWEiLCJJbnB1dEZvcm1hdCIsIkZvcm0iLCJDb21tZW50TGlzdCIsIlN1Ym1pc3Npb25zIiwiU3VibWlzc2lvbkZvcm0iLCJJblJldmlld0RldGFpbE1vZGFsIiwicHJvcHMiLCJzdGF0ZSIsImNvbW1lbnQiLCJzZWxlY3RlZENhcmQiLCJvcGVuRGV0YWlsIiwiY2xvc2VEZXRhaWwiLCJvblVwVm90ZSIsIm9uRG93blZvdGUiLCJvbkNoYW5nZVRpdGxlSGFuZGxlciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRpdGxlIiwib25DaGFuZ2VEZXNjcmlwdGlvbkhhbmRsZXIiLCJkZXNjcmlwdGlvbiIsInN1Ym1pc3Npb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVMsQUFBUSxBQUFRLEFBQU0sQUFBTyxBQUFNLEFBQU8sQUFBTyxBQUFVLEFBQWE7O0FBQ2pGLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQW9COzs7Ozs7Ozs7SUFFckIsQTsrQ0FFSjs7K0JBQUEsQUFBWSxPQUFPO3dDQUFBOztnS0FBQSxBQUNYLEFBRU47O1VBQUEsQUFBSzs7ZUFBUSxBQUVGLEFBQ1Q7b0JBQWMsTUFBQSxBQUFLLE1BTkosQUFHakIsQUFBYSxBQUdjOztBQUhkLEFBRVg7O1dBS0g7Ozs7OzZCQUVRLEFBRVA7OzZCQUNJLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyx3Q0FBTSxNQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsY0FBeEIsQUFBc0MsYUFBYSxTQUFTLEtBQUEsQUFBSyxNQUFqRSxBQUF1RTtvQkFBdkU7c0JBQUEsQUFDQTtBQURBO3lCQUNBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsd0JBQUEsQUFBUSxTQUFNLE1BQWQsQUFBbUIsU0FBUSxPQUEzQjtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QjtvQkFBNUI7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSwwQ0FBQSxBQUFDLHdCQUFELEFBQVE7O29CQUFSO3NCQUZGLEFBRUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QjtvQkFBNUI7c0JBQUE7QUFBQTtTQUpKLEFBQ0UsQUFHRSxBQUVGLDZDQUFBLEFBQUMsc0JBQUQsQUFBTSxTQUFNLFVBQVUsS0FBQSxBQUFLLE1BQTNCLEFBQWlDLHNCQUFzQixPQUFPLEVBQUMsVUFBRCxBQUFXLFFBQVEsWUFBakYsQUFBOEQsQUFBK0IsVUFBN0YsQUFBc0csQUFBUyxvQ0FBVSxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBM0ksQUFBd0o7b0JBQXhKO3NCQU5GLEFBTUUsQUFDQTtBQURBO3dDQUNBLEFBQUMsc0JBQUQsQUFBTSxTQUFNLFVBQVUsS0FBQSxBQUFLLE1BQTNCLEFBQWlDLDRCQUFqQyxBQUE2RCxBQUFTLG9DQUFVLGFBQWhGLEFBQTRGLHNDQUFxQyxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBbkosQUFBZ0s7b0JBQWhLO3NCQVJGLEFBQ0EsQUFPRSxBQUdGO0FBSEU7MkJBR0QsY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQUs7QUFBTDtBQUFBLGtDQUFvQixLQUFBLEFBQUssTUFBTCxBQUFXLGFBRGpDLEFBQ0UsQUFBSyxBQUF1QyxBQUM1Qyw4QkFBQSxBQUFDLHVDQUFZLGNBQWMsS0FBQSxBQUFLLE1BQWhDLEFBQXNDO29CQUF0QztzQkFGRixBQUVFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHVDQUFZLGNBQWMsS0FBQSxBQUFLLE1BQWhDLEFBQXNDO29CQUF0QztzQkFqQlYsQUFDSSxBQUNFLEFBV0EsQUFDRSxBQUdFLEFBVVg7QUFWVzs7Ozs7O0FBakNvQixBLEFBaURsQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJJblJldmlld0RldGFpbE1vZGFsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9EYW5pZWwvRGVza3RvcC9wbGF5Z3JvdW5kMiJ9
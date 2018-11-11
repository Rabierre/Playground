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

var _jsxFileName = '/Users/Daniel/Desktop/playground/components/lanes/InReviewDetailModal.js';


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
          lineNumber: 25
        }
      }, _react2.default.createElement(_semanticUiReact.Modal, { open: this.props.openDetail == 'IN_REVIEW', onClose: this.props.closeDetail, __source: {
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
          lineNumber: 33
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.TextArea, placeholder: 'Add a more detailed description...', value: this.props.selectedCard.description, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      })), _react2.default.createElement(_semanticUiReact.Modal.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_Submissions2.default, { selectedCard: this.props.selectedCard, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), _react2.default.createElement(_CommentList2.default, { selectedCard: this.props.selectedCard, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      })))));
    }
  }]);

  return InReviewDetailModal;
}(_react.Component);

exports.default = InReviewDetailModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGFuZXMvSW5SZXZpZXdEZXRhaWxNb2RhbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkhlYWRlciIsIkljb24iLCJJbnB1dCIsIkxpc3QiLCJJbWFnZSIsIk1vZGFsIiwiVGV4dEFyZWEiLCJJbnB1dEZvcm1hdCIsIkZvcm0iLCJTZXNzaW9uUm9sZSIsIlVzZXJJZCIsIkNvbW1lbnRMaXN0IiwiU3VibWlzc2lvbnMiLCJTdWJtaXNzaW9uRm9ybSIsIkluUmV2aWV3RGV0YWlsTW9kYWwiLCJwcm9wcyIsInN0YXRlIiwiY29tbWVudCIsInNlbGVjdGVkQ2FyZCIsIm9wZW5EZXRhaWwiLCJjbG9zZURldGFpbCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUyxBQUFRLEFBQVEsQUFBTSxBQUFPLEFBQU0sQUFBTyxBQUFPLEFBQVUsQUFBYTs7QUFDakYsQUFBUSxBQUFhLEFBQWE7O0FBQ2xDLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQW9COzs7Ozs7Ozs7SUFFckIsQTsrQ0FFSjs7K0JBQUEsQUFBWSxPQUFPO3dDQUFBOztnS0FBQSxBQUNYLEFBRU47O1VBQUEsQUFBSzs7ZUFBUSxBQUVGLEFBQ1Q7b0JBQWMsTUFBQSxBQUFLLE1BTkosQUFHakIsQUFBYSxBQUdjOztBQUhkLEFBRVg7O1dBS0g7Ozs7OzZCQUVRLEFBRVA7OzZCQUNJLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyx3Q0FBTSxNQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsY0FBeEIsQUFBc0MsYUFBYSxTQUFTLEtBQUEsQUFBSyxNQUFqRSxBQUF1RTtvQkFBdkU7c0JBQUEsQUFDQTtBQURBO3lCQUNBLEFBQUM7O29CQUFEO3NCQUFBLEFBTUU7QUFORjtBQUFBLHVDQU1FLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQU8sRUFBQyxVQUFELEFBQVcsUUFBUSxZQUF0QyxBQUFtQixBQUErQixVQUFsRCxBQUEyRCxBQUFTLG9DQUFVLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFoRyxBQUE2RztvQkFBN0c7c0JBTkYsQUFNRSxBQUNBO0FBREE7d0NBQ0EsQUFBQyxzQkFBRCxBQUFNLFNBQU4sQUFBWSxBQUFTLG9DQUFVLGFBQS9CLEFBQTJDLHNDQUFxQyxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBbEcsQUFBK0c7b0JBQS9HO3NCQVJGLEFBQ0EsQUFPRSxBQUdGO0FBSEU7MkJBR0QsY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBLEFBRUU7QUFGRjtBQUFBLHlCQUVFLEFBQUMsdUNBQVksY0FBYyxLQUFBLEFBQUssTUFBaEMsQUFBc0M7b0JBQXRDO3NCQUZGLEFBRUUsQUFDQTtBQURBOzBCQUNBLEFBQUMsdUNBQVksY0FBYyxLQUFBLEFBQUssTUFBaEMsQUFBc0M7b0JBQXRDO3NCQWpCVixBQUNJLEFBQ0UsQUFXQSxBQUNFLEFBR0UsQUFVWDtBQVZXOzs7Ozs7QUFqQ29CLEEsQUFpRGxDOztrQkFBQSxBQUFlIiwiZmlsZSI6IkluUmV2aWV3RGV0YWlsTW9kYWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0RhbmllbC9EZXNrdG9wL3BsYXlncm91bmQifQ==
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

var _jsxFileName = '/Users/Daniel/Desktop/playground2/components/lanes/BacklogDetailModal.js';


var BacklogDetailModal = function (_Component) {
  (0, _inherits3.default)(BacklogDetailModal, _Component);

  function BacklogDetailModal(props) {
    (0, _classCallCheck3.default)(this, BacklogDetailModal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BacklogDetailModal.__proto__ || (0, _getPrototypeOf2.default)(BacklogDetailModal)).call(this, props));

    _this.state = {
      comment: ''
    };
    return _this;
  }

  (0, _createClass3.default)(BacklogDetailModal, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      this.setState({ title: this.props.selectedCard.title });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.setState({ title: this.props.selectedCard.title });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_semanticUiReact.Modal, { open: this.props.openDetail == 'BACKLOG', onClose: this.props.closeDetail, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, { onChange: this.props.onChangeTitleHandler, style: { fontSize: '20px', fontWeight: 'bold' }, control: _semanticUiReact.TextArea, value: this.props.selectedCard.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, { onChange: this.props.onChangeDescriptionHandler, control: _semanticUiReact.TextArea, placeholder: 'Add a more detailed description...', value: this.props.selectedCard.description, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
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
          lineNumber: 39
        }
      }), _react2.default.createElement(_CommentList2.default, { selectedCard: this.props.selectedCard, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      })))));
    }
  }]);

  return BacklogDetailModal;
}(_react.Component);

exports.default = BacklogDetailModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGFuZXMvQmFja2xvZ0RldGFpbE1vZGFsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiSGVhZGVyIiwiSWNvbiIsIklucHV0IiwiTGlzdCIsIkltYWdlIiwiTW9kYWwiLCJUZXh0QXJlYSIsIklucHV0Rm9ybWF0IiwiRm9ybSIsIkNvbW1lbnRMaXN0IiwiU3VibWlzc2lvbnMiLCJTdWJtaXNzaW9uRm9ybSIsIkJhY2tsb2dEZXRhaWxNb2RhbCIsInByb3BzIiwic3RhdGUiLCJjb21tZW50Iiwic2V0U3RhdGUiLCJ0aXRsZSIsInNlbGVjdGVkQ2FyZCIsIm9wZW5EZXRhaWwiLCJjbG9zZURldGFpbCIsIm9uQ2hhbmdlVGl0bGVIYW5kbGVyIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Iiwib25DaGFuZ2VEZXNjcmlwdGlvbkhhbmRsZXIiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFTLEFBQVEsQUFBUSxBQUFNLEFBQU8sQUFBTSxBQUFPLEFBQU8sQUFBVSxBQUFhOztBQUNqRixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFvQjs7Ozs7Ozs7O0ksQUFFckI7OENBRUo7OzhCQUFBLEFBQVksT0FBTzt3Q0FBQTs7OEpBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUs7ZUFGWSxBQUVqQixBQUFhLEFBQ0Y7QUFERSxBQUNYO1dBRUg7Ozs7O3lDQUVtQixBQUVsQjs7V0FBQSxBQUFLLFNBQVMsRUFBQyxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBakMsQUFBYyxBQUFnQyxBQUUvQzs7Ozt3Q0FDa0IsQUFFakI7O1dBQUEsQUFBSyxTQUFTLEVBQUMsT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQWpDLEFBQWMsQUFBZ0MsQUFFL0M7Ozs7NkJBSVEsQUFDUDs2QkFDSSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsd0NBQU0sTUFBTSxLQUFBLEFBQUssTUFBTCxBQUFXLGNBQXhCLEFBQXNDLFdBQVcsU0FBUyxLQUFBLEFBQUssTUFBL0QsQUFBcUU7b0JBQXJFO3NCQUFBLEFBQ0E7QUFEQTt5QkFDQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx1Q0FDRSxBQUFDLHNCQUFELEFBQU0sU0FBTSxVQUFVLEtBQUEsQUFBSyxNQUEzQixBQUFpQyxzQkFBc0IsT0FBTyxFQUFDLFVBQUQsQUFBVyxRQUFRLFlBQWpGLEFBQThELEFBQStCLFVBQTdGLEFBQXNHLEFBQVMsb0NBQVUsT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQTNJLEFBQXdKO29CQUF4SjtzQkFERixBQUNFLEFBQ0E7QUFEQTt3Q0FDQSxBQUFDLHNCQUFELEFBQU0sU0FBTSxVQUFVLEtBQUEsQUFBSyxNQUEzQixBQUFpQyw0QkFBakMsQUFBNkQsQUFBUyxvQ0FBVSxhQUFoRixBQUE0RixzQ0FBcUMsT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQW5KLEFBQWdLO29CQUFoSztzQkFIRixBQUNBLEFBRUUsQUFFRjtBQUZFOzJCQUVELGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHVDQUFZLGNBQWMsS0FBQSxBQUFLLE1BQWhDLEFBQXNDO29CQUF0QztzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHVDQUFZLGNBQWMsS0FBQSxBQUFLLE1BQWhDLEFBQXNDO29CQUF0QztzQkFWVixBQUNJLEFBQ0UsQUFLQSxBQUNFLEFBRUUsQUFNWDtBQU5XOzs7Ozs7QUFqQ21CLEEsQUEyQ2pDOztrQkFBQSxBQUFlIiwiZmlsZSI6IkJhY2tsb2dEZXRhaWxNb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRGFuaWVsL0Rlc2t0b3AvcGxheWdyb3VuZDIifQ==
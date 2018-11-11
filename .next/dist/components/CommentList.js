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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Daniel/Desktop/playground/components/CommentList.js';


var CommentList = function (_Component) {
  (0, _inherits3.default)(CommentList, _Component);

  function CommentList(props) {
    (0, _classCallCheck3.default)(this, CommentList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CommentList.__proto__ || (0, _getPrototypeOf2.default)(CommentList)).call(this, props));

    _this.onAddCommentHandler = function () {

      var self = _this;
      var cardId = _this.props.selectedCard.cardId;

      _axios2.default.post('https://snowball-api-backend.herokuapp.com/cards/' + cardId + '/comment', {
        userId: _SessionMockup.UserId,
        title: _this.state.comment,
        content: _this.state.comment
      }).then(function (response) {

        if (response.status == 200) {

          self.props.selectedCard.comments.push({ title: self.state.comment });
          self.setState({ comment: '' });
        }
      });
    };

    _this.onChangeHandler = function (event) {

      _this.setState({ comment: event.target.value });
    };

    _this.state = {

      comment: ''
    };

    return _this;
  }

  (0, _createClass3.default)(CommentList, [{
    key: 'render',
    value: function render() {

      var comments = this.props.selectedCard.comments;

      if (comments) {

        comments = comments.map(function (comment) {

          return _react2.default.createElement(_semanticUiReact.List.Item, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          }, _react2.default.createElement(_semanticUiReact.Image, { avatar: true, src: 'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg', __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          }), _react2.default.createElement(_semanticUiReact.List.Content, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          }, _react2.default.createElement(_semanticUiReact.List.Header, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          }, comment.title)));
        });
      } else {
        comments = [];
      }

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_semanticUiReact.List, { celled: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, comments), _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { fluid: true,
        placeholder: 'Add a comment...',
        value: this.state.comment,
        onChange: this.onChangeHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      })), _react2.default.createElement(_semanticUiReact.Button, {
        onClick: this.onAddCommentHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, 'Done')));
    }
  }]);

  return CommentList;
}(_react.Component);

;

exports.default = CommentList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29tbWVudExpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDb250YWluZXIiLCJTdGlja3kiLCJCdXR0b24iLCJJbnB1dCIsIkxpc3QiLCJJbWFnZSIsIkZvcm0iLCJIZWFkZXIiLCJIZWFkIiwiYXhpb3MiLCJwb3N0IiwiU2Vzc2lvblJvbGUiLCJVc2VySWQiLCJDb21tZW50TGlzdCIsInByb3BzIiwib25BZGRDb21tZW50SGFuZGxlciIsInNlbGYiLCJjYXJkSWQiLCJzZWxlY3RlZENhcmQiLCJ1c2VySWQiLCJ0aXRsZSIsInN0YXRlIiwiY29tbWVudCIsImNvbnRlbnQiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJjb21tZW50cyIsInB1c2giLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlSGFuZGxlciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFXLEFBQVEsQUFBUSxBQUFPLEFBQU0sQUFBTzs7QUFDdkQsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUSxBQUFhLEFBQWE7Ozs7Ozs7SUFFNUIsQTt1Q0FFSjs7dUJBQUEsQUFBWSxPQUFPO3dDQUFBOztnSkFBQSxBQUNYOztVQURXLEFBVW5CLHNCQUFzQixZQUFNLEFBRTFCOztVQUFNLE9BQU4sQUFDQTtVQUFNLFNBQVMsTUFBQSxBQUFLLE1BQUwsQUFBVyxhQUExQixBQUF1QyxBQUV2Qzs7c0JBQUEsQUFBTSwyREFBTixBQUErRDtBQUFrQixBQUN2RSxBQUNSO2VBQU8sTUFBQSxBQUFLLE1BRm1FLEFBRTdELEFBQ2xCO2lCQUFTLE1BQUEsQUFBSyxNQUhoQixBQUFpRixBQUczRDtBQUgyRCxBQUMvRSxTQURGLEFBSUcsS0FBSyxVQUFBLEFBQVUsVUFBVSxBQUUxQjs7WUFBSSxTQUFBLEFBQVMsVUFBYixBQUF1QixLQUFLLEFBRXhCOztlQUFBLEFBQUssTUFBTCxBQUFXLGFBQVgsQUFBd0IsU0FBeEIsQUFBaUMsS0FBSyxFQUFDLE9BQU8sS0FBQSxBQUFLLE1BQW5ELEFBQXNDLEFBQW1CLEFBQ3pEO2VBQUEsQUFBSyxTQUFTLEVBQUMsU0FBZixBQUFjLEFBQVUsQUFDM0I7QUFDRjtBQVhELEFBYUQ7QUE1QmtCOztVQUFBLEFBOEJuQixrQkFBa0IsVUFBQSxBQUFDLE9BQVUsQUFFM0I7O1lBQUEsQUFBSyxTQUFTLEVBQUMsU0FBUyxNQUFBLEFBQU0sT0FBOUIsQUFBYyxBQUF1QixBQUN0QztBQWpDa0IsQUFHakI7O1VBQUEsQUFBSzs7ZUFIWSxBQUdqQixBQUFhLEFBRUY7QUFGRSxBQUVYOztXQUdIOzs7Ozs2QkEyQlEsQUFFUDs7VUFBSSxXQUFXLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBMUIsQUFBdUMsQUFFdkM7O1VBQUEsQUFBSSxVQUFVLEFBR1o7OzRCQUFXLEFBQVMsSUFBSSxtQkFBVyxBQUVqQzs7aUNBRUcsY0FBRCxzQkFBQSxBQUFNOzt3QkFBTjswQkFBQSxBQUNFO0FBREY7QUFBQSxXQUFBLGtCQUNFLEFBQUMsd0NBQU0sUUFBUCxNQUFjLEtBQWQsQUFBa0I7d0JBQWxCOzBCQURGLEFBQ0UsQUFDQTtBQURBOzhCQUNDLGNBQUQsc0JBQUEsQUFBTTs7d0JBQU47MEJBQUEsQUFDRTtBQURGO0FBQUEsNkJBQ0csY0FBRCxzQkFBQSxBQUFNOzt3QkFBTjswQkFBQSxBQUFjO0FBQWQ7QUFBQSxxQkFMTixBQUVFLEFBRUUsQUFDRSxBQUFzQixBQU83QjtBQWRELEFBQVcsQUFnQlosU0FoQlk7QUFIYixhQW1CTyxBQUNMO21CQUFBLEFBQVcsQUFDWjtBQUVEOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNBO0FBREE7QUFBQSxPQUFBLGtCQUNBLEFBQUMsdUNBQUssUUFBTjtvQkFBQTtzQkFBQSxBQUVHO0FBRkg7U0FEQSxBQUNBLEFBSUEsMkJBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0EsQUFBQyx3Q0FBTSxPQUFQLEFBQ0k7cUJBREosQUFDZ0IsQUFDWjtlQUFPLEtBQUEsQUFBSyxNQUZoQixBQUVzQixBQUNsQjtrQkFBVSxLQUhkLEFBR21COztvQkFIbkI7c0JBRkYsQUFDRSxBQUNBLEFBT0E7QUFQQTsyQkFPQSxBQUFDO2lCQUNZLEtBRGIsQUFDa0I7O29CQURsQjtzQkFBQTtBQUFBO0FBQ0ksU0FoQlIsQUFDRSxBQUtBLEFBU0UsQUFPTDs7Ozs7QUF0RnVCLEE7O0FBd0Z6QixBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNvbW1lbnRMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9EYW5pZWwvRGVza3RvcC9wbGF5Z3JvdW5kIn0=
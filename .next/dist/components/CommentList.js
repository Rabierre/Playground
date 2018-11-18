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

var _jsxFileName = '/Users/Daniel/Desktop/playground2/components/CommentList.js';


var CommentList = function (_Component) {
  (0, _inherits3.default)(CommentList, _Component);

  function CommentList(props) {
    (0, _classCallCheck3.default)(this, CommentList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CommentList.__proto__ || (0, _getPrototypeOf2.default)(CommentList)).call(this, props));

    _this.onAddCommentHandler = function () {

      var self = _this;
      var cardId = _this.props.selectedCard.cardId;

      _axios2.default.post('https://snowball-api-backend.herokuapp.com/cards/' + cardId + '/comment', {
        userId: ls.get('User').id,
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
              lineNumber: 46
            }
          }, _react2.default.createElement(_semanticUiReact.Image, { avatar: true, src: 'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg', __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          }), _react2.default.createElement(_semanticUiReact.List.Content, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          }, _react2.default.createElement(_semanticUiReact.List.Header, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          }, comment.title)));
        });
      } else {
        comments = [];
      }

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_semanticUiReact.List, { celled: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, comments), _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { fluid: true,
        placeholder: 'Add a comment...',
        value: this.state.comment,
        onChange: this.onChangeHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })), _react2.default.createElement(_semanticUiReact.Button, {
        onClick: this.onAddCommentHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, 'Done')));
    }
  }]);

  return CommentList;
}(_react.Component);

;

exports.default = CommentList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29tbWVudExpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDb250YWluZXIiLCJTdGlja3kiLCJCdXR0b24iLCJJbnB1dCIsIkxpc3QiLCJJbWFnZSIsIkZvcm0iLCJIZWFkZXIiLCJIZWFkIiwiYXhpb3MiLCJwb3N0IiwiU2Vzc2lvblJvbGUiLCJVc2VySWQiLCJDb21tZW50TGlzdCIsInByb3BzIiwib25BZGRDb21tZW50SGFuZGxlciIsInNlbGYiLCJjYXJkSWQiLCJzZWxlY3RlZENhcmQiLCJ1c2VySWQiLCJscyIsImdldCIsImlkIiwidGl0bGUiLCJzdGF0ZSIsImNvbW1lbnQiLCJjb250ZW50IiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiY29tbWVudHMiLCJwdXNoIiwic2V0U3RhdGUiLCJvbkNoYW5nZUhhbmRsZXIiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBVyxBQUFRLEFBQVEsQUFBTyxBQUFNLEFBQU87O0FBQ3ZELEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVEsQUFBYSxBQUFhOzs7Ozs7O0lBRTVCLEE7dUNBRUo7O3VCQUFBLEFBQVksT0FBTzt3Q0FBQTs7Z0pBQUEsQUFDWDs7VUFEVyxBQVFuQixzQkFBc0IsWUFBTSxBQUUxQjs7VUFBTSxPQUFOLEFBQ0E7VUFBTSxTQUFTLE1BQUEsQUFBSyxNQUFMLEFBQVcsYUFBMUIsQUFBdUMsQUFFdkM7O3NCQUFBLEFBQU0sMkRBQU4sQUFBK0Q7Z0JBQ3JELEdBQUEsQUFBRyxJQUFILEFBQU8sUUFEZ0UsQUFDeEQsQUFDdkI7ZUFBTyxNQUFBLEFBQUssTUFGbUUsQUFFN0QsQUFDbEI7aUJBQVMsTUFBQSxBQUFLLE1BSGhCLEFBQWlGLEFBRzNEO0FBSDJELEFBQy9FLFNBREYsQUFJRyxLQUFLLFVBQUEsQUFBVSxVQUFVLEFBRTFCOztZQUFJLFNBQUEsQUFBUyxVQUFiLEFBQXVCLEtBQUssQUFDMUI7ZUFBQSxBQUFLLE1BQUwsQUFBVyxhQUFYLEFBQXdCLFNBQXhCLEFBQWlDLEtBQUssRUFBQyxPQUFPLEtBQUEsQUFBSyxNQUFuRCxBQUFzQyxBQUFtQixBQUN6RDtlQUFBLEFBQUssU0FBUyxFQUFDLFNBQWYsQUFBYyxBQUFVLEFBQ3pCO0FBQ0Y7QUFWRCxBQVdEO0FBeEJrQjs7VUFBQSxBQTBCbkIsa0JBQWtCLFVBQUEsQUFBQyxPQUFVLEFBQzNCO1lBQUEsQUFBSyxTQUFTLEVBQUMsU0FBUyxNQUFBLEFBQU0sT0FBOUIsQUFBYyxBQUF1QixBQUN0QztBQTVCa0IsQUFHakI7O1VBQUEsQUFBSztlQUhZLEFBR2pCLEFBQWEsQUFDRjtBQURFLEFBQ1g7V0FFSDs7Ozs7NkJBd0JRLEFBRVA7O1VBQUksV0FBVyxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQTFCLEFBQXVDLEFBQ3ZDO1VBQUEsQUFBSSxVQUFVLEFBQ1o7NEJBQVcsQUFBUyxJQUFJLG1CQUFXLEFBQ2pDO2lDQUNHLGNBQUQsc0JBQUEsQUFBTTs7d0JBQU47MEJBQUEsQUFDRTtBQURGO0FBQUEsV0FBQSxrQkFDRSxBQUFDLHdDQUFNLFFBQVAsTUFBYyxLQUFkLEFBQWtCO3dCQUFsQjswQkFERixBQUNFLEFBQ0E7QUFEQTs4QkFDQyxjQUFELHNCQUFBLEFBQU07O3dCQUFOOzBCQUFBLEFBQ0U7QUFERjtBQUFBLDZCQUNHLGNBQUQsc0JBQUEsQUFBTTs7d0JBQU47MEJBQUEsQUFBYztBQUFkO0FBQUEscUJBSk4sQUFDRSxBQUVFLEFBQ0UsQUFBc0IsQUFJN0I7QUFURCxBQUFXLEFBVVosU0FWWTtBQURiLGFBV08sQUFDTDttQkFBQSxBQUFXLEFBQ1o7QUFFRDs7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDQTtBQURBO0FBQUEsT0FBQSxrQkFDQSxBQUFDLHVDQUFLLFFBQU47b0JBQUE7c0JBQUEsQUFFRztBQUZIO1NBREEsQUFDQSxBQUlBLDJCQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLHlCQUNBLEFBQUMsd0NBQU0sT0FBUCxBQUNJO3FCQURKLEFBQ2dCLEFBQ1o7ZUFBTyxLQUFBLEFBQUssTUFGaEIsQUFFc0IsQUFDbEI7a0JBQVUsS0FIZCxBQUdtQjs7b0JBSG5CO3NCQUZGLEFBQ0UsQUFDQSxBQU9BO0FBUEE7MkJBT0EsQUFBQztpQkFDWSxLQURiLEFBQ2tCOztvQkFEbEI7c0JBQUE7QUFBQTtBQUNJLFNBaEJSLEFBQ0UsQUFLQSxBQVNFLEFBT0w7Ozs7O0FBeEV1QixBOztBQTBFekIsQUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb21tZW50TGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRGFuaWVsL0Rlc2t0b3AvcGxheWdyb3VuZDIifQ==
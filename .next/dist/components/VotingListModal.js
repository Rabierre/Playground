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

var _localStorage = require('local-storage');

var _localStorage2 = _interopRequireDefault(_localStorage);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Daniel/Desktop/playground2/components/VotingListModal.js';


var VotingListModal = function (_Component) {
  (0, _inherits3.default)(VotingListModal, _Component);

  function VotingListModal(props) {
    (0, _classCallCheck3.default)(this, VotingListModal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (VotingListModal.__proto__ || (0, _getPrototypeOf2.default)(VotingListModal)).call(this, props));

    _this.onRateHandler = function (e, _ref) {
      var rating = _ref.rating,
          maxRating = _ref.maxRating,
          card = _ref.card;

      _axios2.default.post('https://snowball-api-backend.herokuapp.com/cards/' + card.id + '/rate', {
        userId: _localStorage2.default.get('User').id,
        point: rating
      }).then(function (response) {

        if (response.status == 200) {

          console.log('voting successful');
        }
      });
    };

    _this.state = { votingWindowOpen: _this.props.openVoting };
    return _this;
  }

  (0, _createClass3.default)(VotingListModal, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var open = this.state.open;

      var votingList = void 0;

      if (this.props.votingList) {

        votingList = this.props.votingList.map(function (card) {
          return _react2.default.createElement(_semanticUiReact.List.Item, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          }, _react2.default.createElement(_semanticUiReact.List.Content, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          }, _react2.default.createElement(_semanticUiReact.List.Header, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          }, card.title), _react2.default.createElement(_semanticUiReact.Rating, { maxRating: 5,
            onRate: _this2.onRateHandler,
            card: card,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          })));
        });
      } else {
        votingList = _react2.default.createElement(_semanticUiReact.List.Item, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        });
      }

      return _react2.default.createElement(_semanticUiReact.Modal, { open: this.props.openVoting, onClose: this.props.onCloseVotingList, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, 'Voting list'), _react2.default.createElement(_semanticUiReact.Modal.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_semanticUiReact.List, { celled: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, votingList))));
    }
  }]);

  return VotingListModal;
}(_react.Component);

exports.default = VotingListModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVm90aW5nTGlzdE1vZGFsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiSGVhZGVyIiwiSW1hZ2UiLCJNb2RhbCIsIkxpc3QiLCJSYXRpbmciLCJscyIsImF4aW9zIiwicG9zdCIsIlZvdGluZ0xpc3RNb2RhbCIsInByb3BzIiwib25SYXRlSGFuZGxlciIsImUiLCJyYXRpbmciLCJtYXhSYXRpbmciLCJjYXJkIiwiaWQiLCJ1c2VySWQiLCJnZXQiLCJwb2ludCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsInZvdGluZ1dpbmRvd09wZW4iLCJvcGVuVm90aW5nIiwib3BlbiIsInZvdGluZ0xpc3QiLCJtYXAiLCJ0aXRsZSIsIm9uQ2xvc2VWb3RpbmdMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVMsQUFBUSxBQUFRLEFBQU8sQUFBTyxBQUFNOztBQUM3QyxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFTOzs7Ozs7Ozs7SSxBQUdWOzJDQUVKOzsyQkFBQSxBQUFZLE9BQU87d0NBQUE7O3dKQUFBLEFBQ1g7O1VBRFcsQUFLbkIsZ0JBQWdCLFVBQUEsQUFBQyxTQUFrQztVQUE3QixBQUE2QixjQUE3QixBQUE2QjtVQUFyQixBQUFxQixpQkFBckIsQUFBcUI7VUFBVixBQUFVLFlBQVYsQUFBVSxBQUlqRDs7c0JBQUEsQUFBTSwyREFBeUQsS0FBL0QsQUFBb0U7Z0JBQzFELHVCQUFBLEFBQUcsSUFBSCxBQUFPLFFBRDhELEFBQ3RELEFBQ3ZCO2VBRkYsQUFBK0UsQUFFdEU7QUFGc0UsQUFDN0UsU0FERixBQUdHLEtBQUssVUFBQSxBQUFVLFVBQVUsQUFFMUI7O1lBQUksU0FBQSxBQUFTLFVBQWIsQUFBdUIsS0FBSyxBQUUxQjs7a0JBQUEsQUFBUSxJQUFSLEFBQVksQUFFYjtBQUVGO0FBWEQsQUFhRDtBQXRCa0IsQUFFakI7O1VBQUEsQUFBSyxRQUFRLEVBQUUsa0JBQWtCLE1BQUEsQUFBSyxNQUZyQixBQUVqQixBQUFhLEFBQStCO1dBQzdDOzs7Ozs2QkF3QlE7bUJBQUE7O1VBQUEsQUFFQyxPQUFTLEtBRlYsQUFFZSxNQUZmLEFBRUMsQUFFUjs7VUFBSSxrQkFBSixBQUVBOztVQUFJLEtBQUEsQUFBSyxNQUFULEFBQWUsWUFBWSxBQUV6Qjs7MEJBQWEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixJQUFJLGdCQUFRLEFBQzdDO2lDQUVHLGNBQUQsc0JBQUEsQUFBTTs7d0JBQU47MEJBQUEsQUFFRTtBQUZGO0FBQUEsV0FBQSxrQkFFRyxjQUFELHNCQUFBLEFBQU07O3dCQUFOOzBCQUFBLEFBQ0U7QUFERjtBQUFBLDZCQUNHLGNBQUQsc0JBQUEsQUFBTTs7d0JBQU47MEJBQUEsQUFBYztBQUFkO0FBQUEsa0JBREYsQUFDRSxBQUFtQixBQUNuQix3QkFBQSxBQUFDLHlDQUFPLFdBQVIsQUFBbUIsQUFDZjtvQkFBUSxPQURaLEFBQ2lCLEFBQ2I7a0JBRkosQUFFVTs7d0JBRlY7MEJBTk4sQUFFRSxBQUVFLEFBRUUsQUFRUDtBQVJPOztBQVBSLEFBQWEsQUFpQmQsU0FqQmM7QUFGZixhQW1CTyxBQUNMO21EQUFhLEFBQUMsc0JBQUQsQUFBTTs7c0JBQU47d0JBQWIsQUFBYSxBQUVkO0FBRmM7QUFBQSxTQUFBO0FBSWY7OzZCQUVFLEFBQUMsd0NBQU0sTUFBTSxLQUFBLEFBQUssTUFBbEIsQUFBd0IsWUFBWSxTQUFTLEtBQUEsQUFBSyxNQUFsRCxBQUF3RDtvQkFBeEQ7c0JBQUEsQUFFRTtBQUZGO09BQUEsa0JBRUcsY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQTtBQUFBO0FBQUEsU0FGRixBQUVFLEFBQ0EsZ0NBQUMsY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBLEFBRUU7QUFGRjtBQUFBLHlCQUVFLEFBQUMsdUNBQUssUUFBTjtvQkFBQTtzQkFBQSxBQUVHO0FBRkg7U0FSUixBQUVFLEFBR0UsQUFDRSxBQUVFLEFBU047Ozs7O0FBNUV3QixBLEFBK0U5Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJWb3RpbmdMaXN0TW9kYWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0RhbmllbC9EZXNrdG9wL3BsYXlncm91bmQyIn0=
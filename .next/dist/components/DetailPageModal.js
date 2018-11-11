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

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _SessionMockup = require('./SessionMockup');

var _BacklogDetailModal = require('./lanes/BacklogDetailModal');

var _BacklogDetailModal2 = _interopRequireDefault(_BacklogDetailModal);

var _NotStartedDetailModal = require('./lanes/NotStartedDetailModal');

var _NotStartedDetailModal2 = _interopRequireDefault(_NotStartedDetailModal);

var _InProgressDetailModal = require('./lanes/InProgressDetailModal');

var _InProgressDetailModal2 = _interopRequireDefault(_InProgressDetailModal);

var _InReviewDetailModal = require('./lanes/InReviewDetailModal');

var _InReviewDetailModal2 = _interopRequireDefault(_InReviewDetailModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Daniel/Desktop/playground/components/DetailPageModal.js';


var DetailPageModal = function (_Component) {
  (0, _inherits3.default)(DetailPageModal, _Component);

  function DetailPageModal(props) {
    (0, _classCallCheck3.default)(this, DetailPageModal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DetailPageModal.__proto__ || (0, _getPrototypeOf2.default)(DetailPageModal)).call(this, props));

    _this.giveVote = function (cardId, userId, point) {
      _axios2.default.post('https://snowball-api-backend.herokuapp.com/cards/' + cardId + '/rate', {
        userId: userId,
        point: point
      });
    };

    _this.onUpVote = function () {
      alert('onUpVote');
      _this.giveVote(_this.props.selectedCard.cardId, 'user0001', 1);
    };

    _this.onDownVote = function () {
      alert('onDownVote');
      _this.giveVote(_this.props.selectedCard.cardId, 'user0001', 0);
    };

    _this.state = {

      comment: '',
      selectedCard: _this.props.selectedCard

    };

    return _this;
  }

  (0, _createClass3.default)(DetailPageModal, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_BacklogDetailModal2.default, {
        openDetail: this.props.openDetail,
        closeDetail: this.props.closeDetail,
        selectedCard: this.props.selectedCard,
        onUpdatedCard: this.props.onUpdatedCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), _react2.default.createElement(_NotStartedDetailModal2.default, {
        openDetail: this.props.openDetail,
        closeDetail: this.props.closeDetail,
        selectedCard: this.props.selectedCard,
        onUpdatedCard: this.props.onUpdatedCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), _react2.default.createElement(_InProgressDetailModal2.default, {
        openDetail: this.props.openDetail,
        closeDetail: this.props.closeDetail,
        selectedCard: this.props.selectedCard,
        onUpdatedCard: this.props.onUpdatedCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), _react2.default.createElement(_InReviewDetailModal2.default, {
        openDetail: this.props.openDetail,
        closeDetail: this.props.closeDetail,
        selectedCard: this.props.selectedCard,
        onUpdatedCard: this.props.onUpdatedCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }));
    }
  }]);

  return DetailPageModal;
}(_react.Component);

;

exports.default = DetailPageModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRGV0YWlsUGFnZU1vZGFsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiSGVhZGVyIiwiSWNvbiIsIklucHV0IiwiTGlzdCIsIkltYWdlIiwiTW9kYWwiLCJUZXh0QXJlYSIsIklucHV0Rm9ybWF0IiwiRm9ybSIsImF4aW9zIiwicG9zdCIsIlNlc3Npb25Sb2xlIiwiVXNlcklkIiwiQmFja2xvZ0RldGFpbE1vZGFsIiwiTm90U3RhcnRlZERldGFpbE1vZGFsIiwiSW5Qcm9ncmVzc0RldGFpbE1vZGFsIiwiSW5SZXZpZXdEZXRhaWxNb2RhbCIsIkRldGFpbFBhZ2VNb2RhbCIsInByb3BzIiwiZ2l2ZVZvdGUiLCJjYXJkSWQiLCJ1c2VySWQiLCJwb2ludCIsIm9uVXBWb3RlIiwiYWxlcnQiLCJzZWxlY3RlZENhcmQiLCJvbkRvd25Wb3RlIiwic3RhdGUiLCJjb21tZW50Iiwib3BlbkRldGFpbCIsImNsb3NlRGV0YWlsIiwib25VcGRhdGVkQ2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFTLEFBQVEsQUFBUSxBQUFNLEFBQU8sQUFBTSxBQUFPLEFBQU8sQUFBVSxBQUFhOztBQUNqRixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUSxBQUFhLEFBQWE7O0FBQ2xDLEFBQU8sQUFBd0I7Ozs7QUFDL0IsQUFBTyxBQUEyQjs7OztBQUNsQyxBQUFPLEFBQTJCOzs7O0FBQ2xDLEFBQU8sQUFBeUI7Ozs7Ozs7OztJQUUxQixBOzJDQUVKOzsyQkFBQSxBQUFZLE9BQU87d0NBQUE7O3dKQUFBLEFBQ1g7O1VBRFcsQUFZbkIsV0FBVyxVQUFBLEFBQUMsUUFBRCxBQUFTLFFBQVQsQUFBaUIsT0FBVSxBQUNwQztzQkFBQSxBQUFNLDJEQUFOLEFBQStEO2dCQUFlLEFBQ3BFLEFBQ1I7ZUFGRixBQUE4RSxBQUVyRSxBQUVWO0FBSitFLEFBQzVFO0FBZGU7O1VBQUEsQUFtQm5CLFdBQVcsWUFBTSxBQUNmO1lBQUEsQUFBTSxBQUNOO1lBQUEsQUFBSyxTQUFTLE1BQUEsQUFBSyxNQUFMLEFBQVcsYUFBekIsQUFBc0MsUUFBdEMsQUFBOEMsWUFBOUMsQUFBMEQsQUFFM0Q7QUF2QmtCOztVQUFBLEFBd0JuQixhQUFhLFlBQU0sQUFDakI7WUFBQSxBQUFNLEFBQ047WUFBQSxBQUFLLFNBQVMsTUFBQSxBQUFLLE1BQUwsQUFBVyxhQUF6QixBQUFzQyxRQUF0QyxBQUE4QyxZQUE5QyxBQUEwRCxBQUMzRDtBQTNCa0IsQUFHakI7O1VBQUEsQUFBSzs7ZUFBUSxBQUVGLEFBQ1Q7b0JBQWMsTUFBQSxBQUFLLE1BTkosQUFHakIsQUFBYSxBQUdjOztBQUhkLEFBRVg7O1dBS0g7Ozs7OzZCQW9CUSxBQUdQOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNBO0FBREE7QUFBQSxPQUFBLGtCQUNBLEFBQUM7b0JBQ2UsS0FBQSxBQUFLLE1BRHJCLEFBQzJCLEFBQ3ZCO3FCQUFhLEtBQUEsQUFBSyxNQUZ0QixBQUU0QixBQUN4QjtzQkFBYyxLQUFBLEFBQUssTUFIdkIsQUFHNkIsQUFDekI7dUJBQWUsS0FBQSxBQUFLLE1BSnhCLEFBSThCOztvQkFKOUI7c0JBREEsQUFDQSxBQU1BO0FBTkE7QUFDSSwwQkFLSixBQUFDO29CQUNlLEtBQUEsQUFBSyxNQURyQixBQUMyQixBQUN2QjtxQkFBYSxLQUFBLEFBQUssTUFGdEIsQUFFNEIsQUFDeEI7c0JBQWMsS0FBQSxBQUFLLE1BSHZCLEFBRzZCLEFBQ3pCO3VCQUFlLEtBQUEsQUFBSyxNQUp4QixBQUk4Qjs7b0JBSjlCO3NCQVBBLEFBT0EsQUFNQTtBQU5BO0FBQ0ksMEJBS0osQUFBQztvQkFDZSxLQUFBLEFBQUssTUFEckIsQUFDMkIsQUFDdkI7cUJBQWEsS0FBQSxBQUFLLE1BRnRCLEFBRTRCLEFBQ3hCO3NCQUFjLEtBQUEsQUFBSyxNQUh2QixBQUc2QixBQUN6Qjt1QkFBZSxLQUFBLEFBQUssTUFKeEIsQUFJOEI7O29CQUo5QjtzQkFiQSxBQWFBLEFBTUE7QUFOQTtBQUNJLDBCQUtKLEFBQUM7b0JBQ2UsS0FBQSxBQUFLLE1BRHJCLEFBQzJCLEFBQ3ZCO3FCQUFhLEtBQUEsQUFBSyxNQUZ0QixBQUU0QixBQUN4QjtzQkFBYyxLQUFBLEFBQUssTUFIdkIsQUFHNkIsQUFDekI7dUJBQWUsS0FBQSxBQUFLLE1BSnhCLEFBSThCOztvQkFKOUI7c0JBcEJGLEFBQ0UsQUFtQkEsQUFZSDtBQVpHO0FBQ0k7Ozs7O0FBeERvQixBOztBQW9FN0IsQUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJEZXRhaWxQYWdlTW9kYWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0RhbmllbC9EZXNrdG9wL3BsYXlncm91bmQifQ==
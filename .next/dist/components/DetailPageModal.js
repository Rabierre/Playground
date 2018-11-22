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

var _BacklogDetailModal = require('./lanes/BacklogDetailModal');

var _BacklogDetailModal2 = _interopRequireDefault(_BacklogDetailModal);

var _NotStartedDetailModal = require('./lanes/NotStartedDetailModal');

var _NotStartedDetailModal2 = _interopRequireDefault(_NotStartedDetailModal);

var _InProgressDetailModal = require('./lanes/InProgressDetailModal');

var _InProgressDetailModal2 = _interopRequireDefault(_InProgressDetailModal);

var _InReviewDetailModal = require('./lanes/InReviewDetailModal');

var _InReviewDetailModal2 = _interopRequireDefault(_InReviewDetailModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jihyeseo/Sources/Playground/components/DetailPageModal.js';


var DetailPageModal = function (_Component) {
  (0, _inherits3.default)(DetailPageModal, _Component);

  function DetailPageModal(props) {
    (0, _classCallCheck3.default)(this, DetailPageModal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DetailPageModal.__proto__ || (0, _getPrototypeOf2.default)(DetailPageModal)).call(this, props));

    _this.giveVote = function (cardId, userId, point) {

      _axios2.default.post('https://snowball-api-backend.herokuapp.com/cards/' + cardId + '/rate', {
        userId: ls.get('User').id,
        point: point
      }).then(function (response) {

        if (response.status == 200) {

          console.log('goood');
        }
        console.log(response);
      });
    };

    _this.onUpVote = function () {
      alert('onUpVote');
      _this.giveVote(_this.props.selectedCard.cardId, ls.get('User').id, 3);
    };

    _this.onDownVote = function () {
      alert('onDownVote');
      _this.giveVote(_this.props.selectedCard.cardId, ls.get('User').id, -1);
    };

    _this.onChangeTitleHandler = function (event) {
      console.log('onChangeTitleHandler');
      _this.props.selectedCard.title = event.target.value;

      _this.props.onSelectedCardChange(_this.props.selectedCard);
    };

    _this.onChangeDescriptionHandler = function (event) {

      _this.props.selectedCard.description = event.target.value;
      _this.props.onSelectedCardChange(_this.props.selectedCard);
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
          lineNumber: 67
        }
      }, _react2.default.createElement(_BacklogDetailModal2.default, {
        openDetail: this.props.openDetail,
        closeDetail: this.props.closeDetail,
        selectedCard: this.props.selectedCard,
        onUpdatedCard: this.props.onUpdatedCard,

        onChangeTitleHandler: this.onChangeTitleHandler,
        onChangeDescriptionHandler: this.onChangeDescriptionHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), _react2.default.createElement(_NotStartedDetailModal2.default, {
        openDetail: this.props.openDetail,
        closeDetail: this.props.closeDetail,
        selectedCard: this.props.selectedCard,
        onUpdatedCard: this.props.onUpdatedCard,
        onChangeTitleHandler: this.onChangeTitleHandler,
        onChangeDescriptionHandler: this.onChangeDescriptionHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), _react2.default.createElement(_InProgressDetailModal2.default, {
        openDetail: this.props.openDetail,
        closeDetail: this.props.closeDetail,
        selectedCard: this.props.selectedCard,
        onUpdatedCard: this.props.onUpdatedCard,
        onChangeTitleHandler: this.onChangeTitleHandler,
        onChangeDescriptionHandler: this.onChangeDescriptionHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), _react2.default.createElement(_InReviewDetailModal2.default, {
        onUpVote: this.onUpVote,
        onDownVote: this.onDownVote,
        openDetail: this.props.openDetail,
        closeDetail: this.props.closeDetail,
        selectedCard: this.props.selectedCard,
        onUpdatedCard: this.props.onUpdatedCard,
        onChangeTitleHandler: this.onChangeTitleHandler,
        onChangeDescriptionHandler: this.onChangeDescriptionHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }));
    }
  }]);

  return DetailPageModal;
}(_react.Component);

;

exports.default = DetailPageModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRGV0YWlsUGFnZU1vZGFsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiSGVhZGVyIiwiSWNvbiIsIklucHV0IiwiTGlzdCIsIkltYWdlIiwiTW9kYWwiLCJUZXh0QXJlYSIsIklucHV0Rm9ybWF0IiwiRm9ybSIsImF4aW9zIiwicG9zdCIsIkJhY2tsb2dEZXRhaWxNb2RhbCIsIk5vdFN0YXJ0ZWREZXRhaWxNb2RhbCIsIkluUHJvZ3Jlc3NEZXRhaWxNb2RhbCIsIkluUmV2aWV3RGV0YWlsTW9kYWwiLCJEZXRhaWxQYWdlTW9kYWwiLCJwcm9wcyIsImdpdmVWb3RlIiwiY2FyZElkIiwidXNlcklkIiwicG9pbnQiLCJscyIsImdldCIsImlkIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsIm9uVXBWb3RlIiwiYWxlcnQiLCJzZWxlY3RlZENhcmQiLCJvbkRvd25Wb3RlIiwib25DaGFuZ2VUaXRsZUhhbmRsZXIiLCJldmVudCIsInRpdGxlIiwidGFyZ2V0IiwidmFsdWUiLCJvblNlbGVjdGVkQ2FyZENoYW5nZSIsIm9uQ2hhbmdlRGVzY3JpcHRpb25IYW5kbGVyIiwiZGVzY3JpcHRpb24iLCJzdGF0ZSIsImNvbW1lbnQiLCJvcGVuRGV0YWlsIiwiY2xvc2VEZXRhaWwiLCJvblVwZGF0ZWRDYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVMsQUFBUSxBQUFRLEFBQU0sQUFBTyxBQUFNLEFBQU8sQUFBTyxBQUFVLEFBQWE7O0FBQ2pGLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQXdCOzs7O0FBQy9CLEFBQU8sQUFBMkI7Ozs7QUFDbEMsQUFBTyxBQUEyQjs7OztBQUNsQyxBQUFPLEFBQXlCOzs7Ozs7Ozs7SSxBQUUxQjsyQ0FFSjs7MkJBQUEsQUFBWSxPQUFPO3dDQUFBOzt3SkFBQSxBQUNYOztVQURXLEFBWW5CLFdBQVcsVUFBQSxBQUFDLFFBQUQsQUFBUyxRQUFULEFBQWlCLE9BQVUsQUFFcEM7O3NCQUFBLEFBQU0sMkRBQU4sQUFBK0Q7Z0JBQ3JELEdBQUEsQUFBRyxJQUFILEFBQU8sUUFENkQsQUFDckQsQUFDdkI7ZUFGRixBQUE4RSxBQUVyRTtBQUZxRSxBQUM1RSxTQURGLEFBR0csS0FBSyxVQUFBLEFBQVUsVUFBVSxBQUUxQjs7WUFBSSxTQUFBLEFBQVMsVUFBYixBQUF1QixLQUFLLEFBRTFCOztrQkFBQSxBQUFRLElBQVIsQUFBWSxBQUViO0FBQ0Q7Z0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDYjtBQVhELEFBYUQ7QUEzQmtCOztVQUFBLEFBNkJuQixXQUFXLFlBQU0sQUFDZjtZQUFBLEFBQU0sQUFDTjtZQUFBLEFBQUssU0FBUyxNQUFBLEFBQUssTUFBTCxBQUFXLGFBQXpCLEFBQXNDLFFBQVEsR0FBQSxBQUFHLElBQUgsQUFBTyxRQUFyRCxBQUE2RCxJQUE3RCxBQUFpRSxBQUVsRTtBQWpDa0I7O1VBQUEsQUFrQ25CLGFBQWEsWUFBTSxBQUNqQjtZQUFBLEFBQU0sQUFDTjtZQUFBLEFBQUssU0FBUyxNQUFBLEFBQUssTUFBTCxBQUFXLGFBQXpCLEFBQXNDLFFBQVEsR0FBQSxBQUFHLElBQUgsQUFBTyxRQUFyRCxBQUE2RCxJQUFJLENBQWpFLEFBQWtFLEFBQ25FO0FBckNrQjs7VUFBQSxBQXVDbkIsdUJBQXVCLFVBQUEsQUFBQyxPQUFVLEFBQ2hDO2NBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtZQUFBLEFBQUssTUFBTCxBQUFXLGFBQVgsQUFBd0IsUUFBUSxNQUFBLEFBQU0sT0FBdEMsQUFBNkMsQUFFN0M7O1lBQUEsQUFBSyxNQUFMLEFBQVcscUJBQXFCLE1BQUEsQUFBSyxNQUFyQyxBQUEyQyxBQUM1QztBQTVDa0I7O1VBQUEsQUE2Q25CLDZCQUE2QixVQUFBLEFBQUMsT0FBVSxBQUV0Qzs7WUFBQSxBQUFLLE1BQUwsQUFBVyxhQUFYLEFBQXdCLGNBQWMsTUFBQSxBQUFNLE9BQTVDLEFBQW1ELEFBQ25EO1lBQUEsQUFBSyxNQUFMLEFBQVcscUJBQXFCLE1BQUEsQUFBSyxNQUFyQyxBQUEyQyxBQUU1QztBQWxEa0IsQUFHakI7O1VBQUEsQUFBSzs7ZUFBUSxBQUVGLEFBQ1Q7b0JBQWMsTUFBQSxBQUFLLE1BTkosQUFHakIsQUFBYSxBQUdjOztBQUhkLEFBRVg7O1dBS0g7Ozs7OzZCQTBDUSxBQUdQOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNBO0FBREE7QUFBQSxPQUFBLGtCQUNBLEFBQUM7b0JBQ2UsS0FBQSxBQUFLLE1BRHJCLEFBQzJCLEFBQ3ZCO3FCQUFhLEtBQUEsQUFBSyxNQUZ0QixBQUU0QixBQUN4QjtzQkFBYyxLQUFBLEFBQUssTUFIdkIsQUFHNkIsQUFDekI7dUJBQWUsS0FBQSxBQUFLLE1BSnhCLEFBSThCLEFBRTFCOzs4QkFBc0IsS0FOMUIsQUFNK0IsQUFDM0I7b0NBQTRCLEtBUGhDLEFBT3FDOztvQkFQckM7c0JBREEsQUFDQSxBQVNBO0FBVEE7QUFDSSwwQkFRSixBQUFDO29CQUNlLEtBQUEsQUFBSyxNQURyQixBQUMyQixBQUN2QjtxQkFBYSxLQUFBLEFBQUssTUFGdEIsQUFFNEIsQUFDeEI7c0JBQWMsS0FBQSxBQUFLLE1BSHZCLEFBRzZCLEFBQ3pCO3VCQUFlLEtBQUEsQUFBSyxNQUp4QixBQUk4QixBQUMxQjs4QkFBc0IsS0FMMUIsQUFLK0IsQUFDM0I7b0NBQTRCLEtBTmhDLEFBTXFDOztvQkFOckM7c0JBVkEsQUFVQSxBQVFBO0FBUkE7QUFDSSwwQkFPSixBQUFDO29CQUNlLEtBQUEsQUFBSyxNQURyQixBQUMyQixBQUN2QjtxQkFBYSxLQUFBLEFBQUssTUFGdEIsQUFFNEIsQUFDeEI7c0JBQWMsS0FBQSxBQUFLLE1BSHZCLEFBRzZCLEFBQ3pCO3VCQUFlLEtBQUEsQUFBSyxNQUp4QixBQUk4QixBQUMxQjs4QkFBc0IsS0FMMUIsQUFLK0IsQUFDM0I7b0NBQTRCLEtBTmhDLEFBTXFDOztvQkFOckM7c0JBbEJBLEFBa0JBLEFBUUE7QUFSQTtBQUNJLDBCQU9KLEFBQUM7a0JBQ2EsS0FEZCxBQUNtQixBQUNmO29CQUFZLEtBRmhCLEFBRXFCLEFBQ2pCO29CQUFZLEtBQUEsQUFBSyxNQUhyQixBQUcyQixBQUN2QjtxQkFBYSxLQUFBLEFBQUssTUFKdEIsQUFJNEIsQUFDeEI7c0JBQWMsS0FBQSxBQUFLLE1BTHZCLEFBSzZCLEFBQ3pCO3VCQUFlLEtBQUEsQUFBSyxNQU54QixBQU04QixBQUMxQjs4QkFBc0IsS0FQMUIsQUFPK0IsQUFDM0I7b0NBQTRCLEtBUmhDLEFBUXFDOztvQkFSckM7c0JBM0JGLEFBQ0UsQUEwQkEsQUFnQkg7QUFoQkc7QUFDSTs7Ozs7QUFyRm9CLEE7O0FBcUc3QixBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IkRldGFpbFBhZ2VNb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamloeWVzZW8vU291cmNlcy9QbGF5Z3JvdW5kIn0=
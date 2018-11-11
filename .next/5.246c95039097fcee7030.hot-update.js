webpackHotUpdate(5,{

/***/ 1437:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactTrello = __webpack_require__(598);

var _reactTrello2 = _interopRequireDefault(_reactTrello);

var _semanticUiReact = __webpack_require__(437);

var _reactCountdownNow = __webpack_require__(1438);

var _reactCountdownNow2 = _interopRequireDefault(_reactCountdownNow);

var _axios = __webpack_require__(465);

var _axios2 = _interopRequireDefault(_axios);

var _reactDropzoneS3Uploader = __webpack_require__(579);

var _reactDropzoneS3Uploader2 = _interopRequireDefault(_reactDropzoneS3Uploader);

var _project = __webpack_require__(581);

var _project2 = _interopRequireDefault(_project);

var _web = __webpack_require__(507);

var _web2 = _interopRequireDefault(_web);

var _FileUpload = __webpack_require__(580);

var _FileUpload2 = _interopRequireDefault(_FileUpload);

var _ContributeForm = __webpack_require__(826);

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _Layout = __webpack_require__(759);

var _Layout2 = _interopRequireDefault(_Layout);

var _DetailPageModal = __webpack_require__(1439);

var _DetailPageModal2 = _interopRequireDefault(_DetailPageModal);

var _SessionMockup = __webpack_require__(597);

var _Timer = __webpack_require__(1444);

var _Timer2 = _interopRequireDefault(_Timer);

var _CountTimer = __webpack_require__(1445);

var _CountTimer2 = _interopRequireDefault(_CountTimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Daniel/Desktop/playground/components/TodoBoard.js';
// import {Card, Grid, Button} from 'semantic-ui-react';


var CONFIG = {
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  withCredentials: true,
  credentials: 'same-origin'
};

var TotoBoard = function (_Component) {
  (0, _inherits3.default)(TotoBoard, _Component);

  function TotoBoard(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, TotoBoard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TotoBoard.__proto__ || (0, _getPrototypeOf2.default)(TotoBoard)).call(this, props));

    _this.setEventBus = function (handle) {

      _this.setState({ eventBus: handle });
    };

    _this.showDetail = function (dimmer) {
      return function (cardId, metadata, laneId) {

        console.log(metadata);
        metadata['laneId'] = laneId;
        metadata['cardId'] = cardId;
        _this.setState({ selectedCard: metadata });
        _this.setState({ dimmer: dimmer, openDetail: laneId });
      };
    };

    _this.closeDetail = function () {
      return _this.setState({ openDetail: false });
    };

    _this.updateCard = function (targetLaneId, cardId, updatedCard) {

      _this.state.eventBus.publish({ type: 'REMOVE_CARD', laneId: targetLaneId, cardId: cardId });
      _this.state.eventBus.publish({ type: 'ADD_CARD', laneId: targetLaneId, card: updatedCard });
    };

    _this.undo = function (cardId, sourceLaneId, targetLaneId) {
      return _this.state.eventBus.publish({ type: 'MOVE_CARD', fromLaneId: targetLaneId, toLaneId: sourceLaneId, cardId: cardId, index: 0 });
    };

    _this.showStaking = function (size) {
      return function () {
        return _this.setState({ size: size, openStaking: true });
      };
    };

    _this.closeStaking = function () {
      return _this.setState({ openStaking: false });
    };

    _this.countDown = function () {

      var count = _this.state.count;
      count -= 1;

      _this.setState({ count: count });
    };

    _this.onCardAddHandler = function (card, laneId) {

      var self = _this;

      console.log(card);

      var updatedCard = card;

      updatedCard['metadata'] = { 'title': card['title'], 'description': card['description'], 'comments': [] };
      updatedCard['laneId'] = laneId;
      updatedCard['state'] = laneId;
      updatedCard['label'] = '1';
      updatedCard['point'] = 1;
      updatedCard['comments'] = [];

      _this.setState({ isLoading: true });

      _this.updateCard('BACKLOG', card.id, updatedCard);

      _axios2.default.post('https://snowball-api-backend.herokuapp.com/projects/project_XwPp9xaz/card', {
        userId: _SessionMockup.UserId,
        title: card['title'],
        description: card['description']
      }).then(function (response) {

        if (response.status == 200) {

          self.setState({ isLoading: false });
        }
      });
    };

    _this.onAssign = function (card) {

      var self = _this;

      _this.setState({ isLoading: true });

      _axios2.default.post('https://snowball-api-backend.herokuapp.com/cards/' + card.id + '/assign', {
        userId: _SessionMockup.UserId,
        staking: 10
      }).then(function (response) {

        if (response.status == 200) {
          card['assigneeId'] = _SessionMockup.UserId;

          self.updateCard('IN_PROGRESS', card.id, card);
        }
      }).catch(function (error) {

        console.log(error);
      }).then(function () {
        self.setState({ isLoading: false });
      });
    };

    _this.onDragEnd = function (cardId, sourceLaneId, targetLaneId, position, cardDetails) {
      var self = _this;
      _this.setState({ selectedCard: cardDetails });

      var cid = cardDetails.id;

      console.log(cardId, sourceLaneId, targetLaneId, position, cardDetails);

      if (sourceLaneId == 'BACKLOG' && targetLaneId == 'NOT_STARTED' && _SessionMockup.SessionRole == 'admin') {

        if (cardDetails.title == '' | cardDetails.description == '' | cardDetails.label == '') {

          alert('모든 내용을 채워야 합니다.');
          _this.undo(cardId, sourceLaneId, targetLaneId);
        }

        _this.setState({ isLoading: true });
        _axios2.default.post('https://snowball-api-backend.herokuapp.com/cards/' + cid + '/reset', {
          userId: _SessionMockup.UserId,
          point: parseInt(cardDetails.label)
        }).then(function (response) {

          if (response.status == 200) {

            self.setState({ isLoading: false });
          }
        });
      } else if (sourceLaneId == 'NOT_STARTED' && targetLaneId == 'IN_PROGRESS') {

        _this.setState({ openStaking: true });
      } else if (sourceLaneId == 'IN_PROGRESS' && targetLaneId == 'IN_REVIEW' && cardDetails.assigneeId) {

        _this.setState({ isLoading: true });
        _axios2.default.post('https://snowball-api-backend.herokuapp.com/cards/' + cid + '/submit', {
          userId: _SessionMockup.UserId
        }).then(function (response) {

          if (response.status == 200) {

            self.setState({ isLoading: false });
          }
        });
      } else if (sourceLaneId == targetLaneId) {} else {

        _this.undo(cardId, sourceLaneId, targetLaneId);
      }
    };

    _this.onUpdatedCard = function (updatedCard) {
      console.log('aws');
      console.log(updatedCard);
      _this.setState({ selectedCard: updatedCard });
      _this.updateCard(updatedCard['laneId'], updatedCard['cardId'], updatedCard);
    };

    _this.Completionist = function () {
      return _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, 'You are good to go!');
    };

    _this.renderer = function (_ref) {
      var hours = _ref.hours,
          minutes = _ref.minutes,
          seconds = _ref.seconds,
          completed = _ref.completed;

      if (completed) {
        // Render a completed state
        return _react2.default.createElement(_this2.Completionist, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239
          }
        });
      } else {
        // Render a countdown
        return _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          }
        }, hours, ':', minutes, ':', seconds);
      }
    };

    _this.onCompletion = function (card) {
      if (card) {
        _this.state.eventBus.publish({ type: 'MOVE_CARD', fromLaneId: 'IN_PROGRESS', toLaneId: 'NOT_STARTED', cardId: card.id, index: 0 });
      }
    };

    _this.onVotingList = function () {

      _this.state.boardData.lanes.map(function (lane) {

        if (lane.id == 'IN_REVIEW') {

          if (lane.cards.length > 0) {
            _this.setState({ isLoading: true });
          }
        }
      });
    };

    _this.state = {
      backlogTickets: null,
      openDetail: '',
      openStaking: false,
      eventBus: null,
      selectedCard: '',
      isSelectedCardStaked: false,
      boardData: _this.props.boardData,
      count: 10,
      remainingMinutes: 0,
      remainingSeconds: 0,
      isLoading: false

    };

    console.log(_this.state.boardData);

    return _this;
  }

  (0, _createClass3.default)(TotoBoard, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      {/*this.state.boardData.lanes.map(lane => {
           if (lane.id == 'IN_REVIEW') {
             if (lane.cards.length > 0) {
              this.setState({isLoading: true});
            }
          }
           this.setState({'openDetail': 'IN_REVIEW'});
         })*/}
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var countCards = void 0;

      this.state.boardData.lanes.map(function (lane) {

        if (lane.id == 'IN_PROGRESS') {

          countCards = lane.cards.map(function (card) {

            return _react2.default.createElement(_CountTimer2.default, { seconds: card.ttl, onCompletion: _this3.onCompletion, selectedCard: card, __source: {
                fileName: _jsxFileName,
                lineNumber: 278
              }
            });
          });
        }
      });

      var _state = this.state,
          openDetail = _state.openDetail,
          dimmer = _state.dimmer;
      var _state2 = this.state,
          openStaking = _state2.openStaking,
          size = _state2.size;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }, countCards, _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.state.isLoading, inverted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        }
      }, _react2.default.createElement(_semanticUiReact.Loader, { inverted: true, content: 'Loading', __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        }
      })), _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      }, _SessionMockup.SessionRole, ' - ', _SessionMockup.UserId), _react2.default.createElement(_reactTrello2.default, { draggable: true,
        editable: true,
        onCardAdd: this.onCardAddHandler,
        eventBusHandle: this.setEventBus,
        laneDraggable: false,
        style: { backgroundColor: 'lightgray' },
        onCardClick: this.showDetail('inverted'),
        handleDragEnd: this.onDragEnd,
        data: this.state.boardData, __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        }
      }), _react2.default.createElement(_DetailPageModal2.default, {
        openDetail: this.state.openDetail,
        closeDetail: this.closeDetail,
        selectedCard: this.state.selectedCard,
        onUpdatedCard: this.onUpdatedCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        }
      }), _react2.default.createElement(_semanticUiReact.Modal, { size: 'mini', open: openStaking, onClose: this.closeStaking, __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      }, 'Stake your tokens! '), _react2.default.createElement(_semanticUiReact.Modal.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        }
      }, _react2.default.createElement(_ContributeForm2.default, {
        address: '0x3aafeFFc0aC78dC62512780fd9f191d19f8196B1',
        selectedCard: this.state.selectedCard,
        onClose: this.closeStaking,
        onStaking: function onStaking(isSelectedCardStaked) {
          return _this3.setState({ isSelectedCardStaked: isSelectedCardStaked });
        },
        onAssign: this.onAssign,

        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        }
      }))));
    }
  }]);

  return TotoBoard;
}(_react.Component);

exports.default = TotoBoard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVG9kb0JvYXJkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQm9hcmQiLCJDb250YWluZXIiLCJHcmlkIiwiRGltbWVyIiwiTG9hZGVyIiwiU2VnbWVudCIsIkJ1dHRvbiIsIkNhcmQiLCJJbWFnZSIsIlRhYiIsIk1vZGFsIiwiSGVhZGVyIiwiVGV4dEFyZWEiLCJJbnB1dEZvcm1hdCIsIkZvcm0iLCJDb3VudGRvd24iLCJheGlvcyIsIkRyb3B6b25lUzNVcGxvYWRlciIsIlByb2plY3QiLCJ3ZWIzIiwiRmlsZVVwbG9hZCIsIkNvbnRyaWJ1dGVGb3JtIiwiTGF5b3V0IiwiRGV0YWlsUGFnZU1vZGFsIiwiU2Vzc2lvblJvbGUiLCJVc2VySWQiLCJUaW1lciIsIkNvdW50VGltZXIiLCJDT05GSUciLCJoZWFkZXJzIiwid2l0aENyZWRlbnRpYWxzIiwiY3JlZGVudGlhbHMiLCJUb3RvQm9hcmQiLCJwcm9wcyIsInNldEV2ZW50QnVzIiwiaGFuZGxlIiwic2V0U3RhdGUiLCJldmVudEJ1cyIsInNob3dEZXRhaWwiLCJjYXJkSWQiLCJtZXRhZGF0YSIsImxhbmVJZCIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RlZENhcmQiLCJkaW1tZXIiLCJvcGVuRGV0YWlsIiwiY2xvc2VEZXRhaWwiLCJ1cGRhdGVDYXJkIiwidGFyZ2V0TGFuZUlkIiwidXBkYXRlZENhcmQiLCJzdGF0ZSIsInB1Ymxpc2giLCJ0eXBlIiwiY2FyZCIsInVuZG8iLCJzb3VyY2VMYW5lSWQiLCJmcm9tTGFuZUlkIiwidG9MYW5lSWQiLCJpbmRleCIsInNob3dTdGFraW5nIiwic2l6ZSIsIm9wZW5TdGFraW5nIiwiY2xvc2VTdGFraW5nIiwiY291bnREb3duIiwiY291bnQiLCJvbkNhcmRBZGRIYW5kbGVyIiwic2VsZiIsImlzTG9hZGluZyIsImlkIiwicG9zdCIsInVzZXJJZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJvbkFzc2lnbiIsInN0YWtpbmciLCJjYXRjaCIsImVycm9yIiwib25EcmFnRW5kIiwicG9zaXRpb24iLCJjYXJkRGV0YWlscyIsImNpZCIsImxhYmVsIiwiYWxlcnQiLCJwb2ludCIsInBhcnNlSW50IiwiYXNzaWduZWVJZCIsIm9uVXBkYXRlZENhcmQiLCJDb21wbGV0aW9uaXN0IiwicmVuZGVyZXIiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiY29tcGxldGVkIiwib25Db21wbGV0aW9uIiwib25Wb3RpbmdMaXN0IiwiYm9hcmREYXRhIiwibGFuZXMiLCJtYXAiLCJsYW5lIiwiY2FyZHMiLCJsZW5ndGgiLCJiYWNrbG9nVGlja2V0cyIsImlzU2VsZWN0ZWRDYXJkU3Rha2VkIiwicmVtYWluaW5nTWludXRlcyIsInJlbWFpbmluZ1NlY29uZHMiLCJjb3VudENhcmRzIiwidHRsIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU87Ozs7QUFFUCxBQUFRLEFBQVUsQUFBTSxBQUFRLEFBQVEsQUFBUyxBQUFRLEFBQU0sQUFBTyxBQUFLLEFBQU8sQUFBUSxBQUFXLEFBQWE7O0FBRWxILEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUdQLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFFakIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQXFCOzs7O0FBQzVCLEFBQVEsQUFBYSxBQUFhOztBQUNsQyxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFnQjs7Ozs7OztBQWpCdkI7OztBQW1CQSxJQUFNOzttQ0FBUyxBQUNKLEFBQ3dCLEFBRWpDO0FBSFMsQUFDUDttQkFGVyxBQUlJLEFBQ2pCO2VBTEYsQUFBZSxBQUtBO0FBTEEsQUFDYjs7SUFPSSxBO3FDQUdKOztxQkFBQSxBQUFZLE9B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QmEsZ0JBcEJiLEFBb0JhO29CQUNVLEtBckJ2QixBQXFCNEI7VUFyQjVCLEFBcUJDLHNCQXJCRCxBQXFCQztVQXJCRCxBQXFCYyxlQXJCZCxBQXFCYyxBQUdyQjs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFFRztBQUZIO0FBQUEsT0FBQSxFQUFBLEFBSUUsNEJBQUEsQUFBQyx5Q0FBTyxRQUFRLEtBQUEsQUFBSyxNQUFyQixBQUEyQixXQUFXLFVBQXRDO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHlDQUFPLFVBQVIsTUFBaUIsU0FBakIsQUFBeUI7b0JBQXpCO3NCQUxKLEFBSUUsQUFDRSxBQUdGO0FBSEU7MkJBR0YsY0FBQTs7b0JBQUE7c0JBQUEsQUFBSztBQUFMO0FBQUEscUNBUkYsQUFRRSxBQUFxQixBQUVyQiwrQ0FBQSxBQUFDLHVDQUFNLFdBQVAsQUFDTTtrQkFETixBQUVNO21CQUFXLEtBRmpCLEFBRXNCLEFBQ2hCO3dCQUFnQixLQUh0QixBQUcyQixBQUNyQjt1QkFKTixBQUlxQixBQUNmO2VBQU8sRUFBQyxpQkFMZCxBQUthLEFBQWtCLEFBQ3pCO3FCQUFhLEtBQUEsQUFBSyxXQU54QixBQU1tQixBQUFnQixBQUM3Qjt1QkFBZSxLQVByQixBQU8wQixBQUNwQjtjQUFNLEtBQUEsQUFBSyxNQVJqQixBQVF1QjtvQkFSdkI7c0JBVkYsQUFVRSxBQVVBO0FBVkE7MEJBVUEsQUFBQztvQkFDZSxLQUFBLEFBQUssTUFEckIsQUFDMkIsQUFDdkI7cUJBQWEsS0FGakIsQUFFc0IsQUFDbEI7c0JBQWMsS0FBQSxBQUFLLE1BSHZCLEFBRzZCLEFBQ3pCO3VCQUFlLEtBSm5CLEFBSXdCOztvQkFKeEI7c0JBcEJGLEFBb0JFLEFBUUE7QUFSQTtBQUNJLDBCQU9KLEFBQUMsd0NBQU0sTUFBUCxBQUFZLFFBQU8sTUFBbkIsQUFBeUIsYUFBYSxTQUFTLEtBQS9DLEFBQW9EO29CQUFwRDtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esd0NBQUMsY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDO2lCQUFELEFBQ1ksQUFDUjtzQkFBYyxLQUFBLEFBQUssTUFGdkIsQUFFNkIsQUFDekI7aUJBQVMsS0FIYixBQUdrQixBQUNkO21CQUFXLHlDQUFBO2lCQUF3QixPQUFBLEFBQUssU0FBUyxFQUFDLHNCQUF2QyxBQUF3QixBQUFjO0FBSnJELEFBS0k7a0JBQVUsS0FMZCxBQUttQjs7O29CQUxuQjtzQkFoQ1IsQUFDRSxBQTRCRSxBQUVFLEFBQ0UsQUFhVDtBQWJTO0FBQ0k7Ozs7O0FBdlNRLEEsQUF1VHhCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlRvZG9Cb2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRGFuaWVsL0Rlc2t0b3AvcGxheWdyb3VuZCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/Daniel/Desktop/playground/components/TodoBoard.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Daniel/Desktop/playground/components/TodoBoard.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4yNDZjOTUwMzkwOTdmY2VlNzAzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub2RvQm9hcmQuanM/Y2NiZWY1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb2FyZCBmcm9tICdyZWFjdC10cmVsbG8nXG4vLyBpbXBvcnQge0NhcmQsIEdyaWQsIEJ1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHtDb250YWluZXIsR3JpZCwgRGltbWVyLCBMb2FkZXIsIFNlZ21lbnQsIEJ1dHRvbiwgQ2FyZCwgSW1hZ2UsIFRhYiwgTW9kYWwsIEhlYWRlciwgVGV4dEFyZWEsICBJbnB1dEZvcm1hdCwgRm9ybSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuaW1wb3J0IENvdW50ZG93biBmcm9tICdyZWFjdC1jb3VudGRvd24tbm93JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgRHJvcHpvbmVTM1VwbG9hZGVyIGZyb20gJ3JlYWN0LWRyb3B6b25lLXMzLXVwbG9hZGVyJztcblxuXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuLi9ldGhlcmV1bS9wcm9qZWN0JztcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xuXG5pbXBvcnQgRmlsZVVwbG9hZCBmcm9tICcuL0ZpbGVVcGxvYWQnO1xuaW1wb3J0IENvbnRyaWJ1dGVGb3JtIGZyb20gJy4vQ29udHJpYnV0ZUZvcm0nO1xuaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dCc7XG5pbXBvcnQgRGV0YWlsUGFnZU1vZGFsIGZyb20gJy4vRGV0YWlsUGFnZU1vZGFsJ1xuaW1wb3J0IHtTZXNzaW9uUm9sZSwgVXNlcklkIH1mcm9tICcuL1Nlc3Npb25Nb2NrdXAnXG5pbXBvcnQgVGltZXIgZnJvbSAnLi9UaW1lcic7XG5pbXBvcnQgQ291bnRUaW1lciBmcm9tICcuL0NvdW50VGltZXInXG5cbmNvbnN0IENPTkZJRyA9IHtcbiAgaGVhZGVyczoge1xuICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKidcbiAgfSxcbiAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbn07XG5cbmNsYXNzIFRvdG9Cb2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG5cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcdGJhY2tsb2dUaWNrZXRzOiBudWxsLFxuICAgICAgICBvcGVuRGV0YWlsOiAnJyxcbiAgICAgICAgb3BlblN0YWtpbmc6IGZhbHNlLFxuICAgICAgICBldmVudEJ1czogbnVsbCxcbiAgICAgICAgc2VsZWN0ZWRDYXJkOiAnJyxcbiAgICAgICAgaXNTZWxlY3RlZENhcmRTdGFrZWQ6IGZhbHNlLFxuICAgICAgICBib2FyZERhdGE6IHRoaXMucHJvcHMuYm9hcmREYXRhLFxuICAgICAgICBjb3VudDogMTAsXG4gICAgICAgIHJlbWFpbmluZ01pbnV0ZXM6IDAsXG4gICAgICAgIHJlbWFpbmluZ1NlY29uZHM6IDAsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2VcblxuXHRcdH07XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmJvYXJkRGF0YSk7XG5cblxuXG5cdH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgey8qdGhpcy5zdGF0ZS5ib2FyZERhdGEubGFuZXMubWFwKGxhbmUgPT4ge1xuXG4gICAgICBpZiAobGFuZS5pZCA9PSAnSU5fUkVWSUVXJykge1xuXG4gICAgICAgIGlmIChsYW5lLmNhcmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0xvYWRpbmc6IHRydWV9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHsnb3BlbkRldGFpbCc6ICdJTl9SRVZJRVcnfSk7XG4gICAgfSkqL31cbiAgfVxuXG4gIHNldEV2ZW50QnVzID0gKGhhbmRsZSkgPT4ge1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtldmVudEJ1czogaGFuZGxlfSk7XG4gIH1cblxuICBzaG93RGV0YWlsID0gZGltbWVyID0+IChjYXJkSWQsIG1ldGFkYXRhLCBsYW5lSWQpID0+IHtcblxuICAgIGNvbnNvbGUubG9nKG1ldGFkYXRhKTtcbiAgICBtZXRhZGF0YVsnbGFuZUlkJ10gPSBsYW5lSWQ7XG4gICAgbWV0YWRhdGFbJ2NhcmRJZCddID0gY2FyZElkO1xuICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkQ2FyZDogbWV0YWRhdGF9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGltbWVyLCBvcGVuRGV0YWlsOiBsYW5lSWQgfSk7XG5cbiAgfVxuXG4gIGNsb3NlRGV0YWlsID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW5EZXRhaWw6IGZhbHNlIH0pXG5cbiAgdXBkYXRlQ2FyZCA9ICh0YXJnZXRMYW5lSWQsIGNhcmRJZCwgdXBkYXRlZENhcmQpID0+IHtcblxuICAgIHRoaXMuc3RhdGUuZXZlbnRCdXMucHVibGlzaCh7dHlwZTogJ1JFTU9WRV9DQVJEJywgbGFuZUlkOiB0YXJnZXRMYW5lSWQsIGNhcmRJZDogY2FyZElkfSk7XG4gICAgdGhpcy5zdGF0ZS5ldmVudEJ1cy5wdWJsaXNoKHt0eXBlOiAnQUREX0NBUkQnLCBsYW5lSWQ6IHRhcmdldExhbmVJZCwgY2FyZDogdXBkYXRlZENhcmR9KTtcblxuICB9XG4gIHVuZG8gPSAoY2FyZElkLCBzb3VyY2VMYW5lSWQsIHRhcmdldExhbmVJZCkgPT4gdGhpcy5zdGF0ZS5ldmVudEJ1cy5wdWJsaXNoKHt0eXBlOiAnTU9WRV9DQVJEJywgZnJvbUxhbmVJZDogdGFyZ2V0TGFuZUlkLCB0b0xhbmVJZDogc291cmNlTGFuZUlkLCBjYXJkSWQ6IGNhcmRJZCwgaW5kZXg6IDB9KVxuICBzaG93U3Rha2luZyA9IHNpemUgPT4gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNpemUsIG9wZW5TdGFraW5nOiB0cnVlIH0pO1xuICBjbG9zZVN0YWtpbmcgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlblN0YWtpbmc6IGZhbHNlIH0pO1xuXG5cbiAgY291bnREb3duID0gKCkgPT4ge1xuXG4gICAgbGV0IGNvdW50ID0gdGhpcy5zdGF0ZS5jb3VudDtcbiAgICBjb3VudCAtPSAxO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y291bnR9KTtcbiAgfVxuXG4gIG9uQ2FyZEFkZEhhbmRsZXIgPSAoY2FyZCwgbGFuZUlkKSA9PiB7XG5cbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGNvbnNvbGUubG9nKGNhcmQpO1xuXG4gICAgY29uc3QgdXBkYXRlZENhcmQgPSBjYXJkO1xuXG4gICAgdXBkYXRlZENhcmRbJ21ldGFkYXRhJ10gPSB7J3RpdGxlJzogY2FyZFsndGl0bGUnXSwgJ2Rlc2NyaXB0aW9uJzogY2FyZFsnZGVzY3JpcHRpb24nXSwgJ2NvbW1lbnRzJzogW119O1xuICAgIHVwZGF0ZWRDYXJkWydsYW5lSWQnXSA9IGxhbmVJZDtcbiAgICB1cGRhdGVkQ2FyZFsnc3RhdGUnXSA9IGxhbmVJZDtcbiAgICB1cGRhdGVkQ2FyZFsnbGFiZWwnXSA9ICcxJztcbiAgICB1cGRhdGVkQ2FyZFsncG9pbnQnXSA9IDE7XG4gICAgdXBkYXRlZENhcmRbJ2NvbW1lbnRzJ10gPSBbXTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe2lzTG9hZGluZzogdHJ1ZX0pO1xuXG4gICAgdGhpcy51cGRhdGVDYXJkKCdCQUNLTE9HJywgY2FyZC5pZCwgdXBkYXRlZENhcmQpO1xuXG4gICAgYXhpb3MucG9zdChgaHR0cHM6Ly9zbm93YmFsbC1hcGktYmFja2VuZC5oZXJva3VhcHAuY29tL3Byb2plY3RzL3Byb2plY3RfWHdQcDl4YXovY2FyZGAsIHtcbiAgICAgIHVzZXJJZDogVXNlcklkLFxuICAgICAgdGl0bGU6IGNhcmRbJ3RpdGxlJ10sXG4gICAgICBkZXNjcmlwdGlvbjogY2FyZFsnZGVzY3JpcHRpb24nXVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XG5cbiAgICAgICAgICBzZWxmLnNldFN0YXRlKHtpc0xvYWRpbmc6IGZhbHNlfSk7XG4gICAgICB9XG5cbiAgICB9KVxuXG4gIH1cblxuICBvbkFzc2lnbiA9IChjYXJkKSA9PiB7XG5cbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuc2V0U3RhdGUoe2lzTG9hZGluZzogdHJ1ZX0pO1xuXG4gICAgYXhpb3MucG9zdChgaHR0cHM6Ly9zbm93YmFsbC1hcGktYmFja2VuZC5oZXJva3VhcHAuY29tL2NhcmRzLyR7Y2FyZC5pZH0vYXNzaWduYCwge1xuICAgICAgdXNlcklkOiBVc2VySWQsXG4gICAgICBzdGFraW5nOiAxMFxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgIGNhcmRbJ2Fzc2lnbmVlSWQnXSA9IFVzZXJJZDtcblxuICAgICAgICBzZWxmLnVwZGF0ZUNhcmQoJ0lOX1BST0dSRVNTJywgY2FyZC5pZCwgY2FyZCk7XG4gICAgICB9XG5cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtpc0xvYWRpbmc6IGZhbHNlfSk7XG4gIH0pO1xuXG4gIH1cblxuICBvbkRyYWdFbmQgPSAoY2FyZElkLCBzb3VyY2VMYW5lSWQsIHRhcmdldExhbmVJZCwgcG9zaXRpb24sIGNhcmREZXRhaWxzKSA9PiB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRDYXJkOiBjYXJkRGV0YWlsc30pO1xuXG4gICAgY29uc3QgY2lkID0gY2FyZERldGFpbHMuaWQ7XG5cbiAgICBjb25zb2xlLmxvZyhjYXJkSWQsIHNvdXJjZUxhbmVJZCwgdGFyZ2V0TGFuZUlkLCBwb3NpdGlvbiwgY2FyZERldGFpbHMpO1xuXG4gICAgaWYgKHNvdXJjZUxhbmVJZCA9PSAnQkFDS0xPRycgJiYgdGFyZ2V0TGFuZUlkID09ICdOT1RfU1RBUlRFRCcgJiYgU2Vzc2lvblJvbGUgPT0gJ2FkbWluJykge1xuXG5cbiAgICAgIGlmIChjYXJkRGV0YWlscy50aXRsZSA9PSAnJyB8IGNhcmREZXRhaWxzLmRlc2NyaXB0aW9uID09ICcnIHwgY2FyZERldGFpbHMubGFiZWwgPT0gJycpIHtcblxuICAgICAgICBhbGVydCgn66qo65OgIOuCtOyaqeydhCDssYTsm4zslbwg7ZWp64uI64ukLicpO1xuICAgICAgICB0aGlzLnVuZG8oY2FyZElkLCBzb3VyY2VMYW5lSWQsIHRhcmdldExhbmVJZCk7XG5cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2FkaW5nOiB0cnVlfSk7XG4gICAgICBheGlvcy5wb3N0KGBodHRwczovL3Nub3diYWxsLWFwaS1iYWNrZW5kLmhlcm9rdWFwcC5jb20vY2FyZHMvJHtjaWR9L3Jlc2V0YCwge1xuICAgICAgICB1c2VySWQ6IFVzZXJJZCxcbiAgICAgICAgcG9pbnQ6IHBhcnNlSW50KGNhcmREZXRhaWxzLmxhYmVsKVxuICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xuXG4gICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtpc0xvYWRpbmc6IGZhbHNlfSk7XG4gICAgICAgIH1cblxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoc291cmNlTGFuZUlkID09ICdOT1RfU1RBUlRFRCcgJiYgdGFyZ2V0TGFuZUlkID09ICdJTl9QUk9HUkVTUycpIHtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlblN0YWtpbmc6IHRydWUgfSk7XG5cbiAgICB9IGVsc2UgaWYgKHNvdXJjZUxhbmVJZCA9PSAnSU5fUFJPR1JFU1MnICYmIHRhcmdldExhbmVJZCA9PSAnSU5fUkVWSUVXJyAmJiBjYXJkRGV0YWlscy5hc3NpZ25lZUlkKSB7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTG9hZGluZzogdHJ1ZX0pO1xuICAgICAgYXhpb3MucG9zdChgaHR0cHM6Ly9zbm93YmFsbC1hcGktYmFja2VuZC5oZXJva3VhcHAuY29tL2NhcmRzLyR7Y2lkfS9zdWJtaXRgLCB7XG4gICAgICAgIHVzZXJJZDogVXNlcklkXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XG5cbiAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe2lzTG9hZGluZzogZmFsc2V9KTtcbiAgICAgICAgfVxuXG4gICAgICB9KVxuXG4gICAgfSBlbHNlIGlmIChzb3VyY2VMYW5lSWQgPT0gdGFyZ2V0TGFuZUlkKSB7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLnVuZG8oY2FyZElkLCBzb3VyY2VMYW5lSWQsIHRhcmdldExhbmVJZCk7XG4gICAgfVxuXG4gIH1cblxuICBvblVwZGF0ZWRDYXJkID0gKHVwZGF0ZWRDYXJkKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2F3cycpO1xuICAgIGNvbnNvbGUubG9nKHVwZGF0ZWRDYXJkKVxuICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkQ2FyZDogdXBkYXRlZENhcmR9KTtcbiAgICB0aGlzLnVwZGF0ZUNhcmQodXBkYXRlZENhcmRbJ2xhbmVJZCddLCB1cGRhdGVkQ2FyZFsnY2FyZElkJ10sIHVwZGF0ZWRDYXJkKTtcblxuICB9XG5cbiAgQ29tcGxldGlvbmlzdCA9ICgpID0+IDxzcGFuPllvdSBhcmUgZ29vZCB0byBnbyE8L3NwYW4+O1xuXG4gIHJlbmRlcmVyID0gKHsgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIGNvbXBsZXRlZCB9KSA9PiB7XG4gIGlmIChjb21wbGV0ZWQpIHtcbiAgICAvLyBSZW5kZXIgYSBjb21wbGV0ZWQgc3RhdGVcbiAgICAgIHJldHVybiA8dGhpcy5Db21wbGV0aW9uaXN0IC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZW5kZXIgYSBjb3VudGRvd25cbiAgICAgIHJldHVybiA8c3Bhbj57aG91cnN9OnttaW51dGVzfTp7c2Vjb25kc308L3NwYW4+O1xuICAgIH1cbiAgfTtcblxuICBvbkNvbXBsZXRpb24gPSAoY2FyZCkgPT4ge1xuICAgIGlmIChjYXJkKSB7XG4gICAgICB0aGlzLnN0YXRlLmV2ZW50QnVzLnB1Ymxpc2goe3R5cGU6ICdNT1ZFX0NBUkQnLCBmcm9tTGFuZUlkOiAnSU5fUFJPR1JFU1MnLCB0b0xhbmVJZDogJ05PVF9TVEFSVEVEJywgY2FyZElkOiBjYXJkLmlkLCBpbmRleDogMH0pO1xuICAgIH1cblxuICB9XG5cbiAgb25Wb3RpbmdMaXN0ID0gKCkgPT4ge1xuXG4gICAgdGhpcy5zdGF0ZS5ib2FyZERhdGEubGFuZXMubWFwKGxhbmUgPT4ge1xuXG4gICAgICBpZiAobGFuZS5pZCA9PSAnSU5fUkVWSUVXJykge1xuXG4gICAgICAgIGlmIChsYW5lLmNhcmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0xvYWRpbmc6IHRydWV9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSlcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IGNvdW50Q2FyZHM7XG5cbiAgICB0aGlzLnN0YXRlLmJvYXJkRGF0YS5sYW5lcy5tYXAobGFuZSA9PiB7XG5cbiAgICAgIGlmIChsYW5lLmlkID09ICdJTl9QUk9HUkVTUycpIHtcblxuICAgICAgICBjb3VudENhcmRzID0gbGFuZS5jYXJkcy5tYXAoY2FyZCA9PiB7XG5cbiAgICAgICAgICByZXR1cm4gPENvdW50VGltZXIgc2Vjb25kcz17Y2FyZC50dGx9IG9uQ29tcGxldGlvbj17dGhpcy5vbkNvbXBsZXRpb259IHNlbGVjdGVkQ2FyZD17Y2FyZH0vPjtcblxuICAgICAgICB9KVxuXG4gICAgICB9XG5cbiAgICB9KVxuXG5cblxuICAgIGNvbnN0IHsgb3BlbkRldGFpbCwgZGltbWVyIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBvcGVuU3Rha2luZywgc2l6ZSB9ID0gdGhpcy5zdGF0ZVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cblxuICAgICAgICB7Y291bnRDYXJkc31cblxuICAgICAgICA8RGltbWVyIGFjdGl2ZT17dGhpcy5zdGF0ZS5pc0xvYWRpbmd9IGludmVydGVkPlxuICAgICAgICAgIDxMb2FkZXIgaW52ZXJ0ZWQgY29udGVudD0nTG9hZGluZycgLz5cbiAgICAgICAgPC9EaW1tZXI+XG5cbiAgICAgICAgPGgxPntTZXNzaW9uUm9sZX0gLSB7VXNlcklkfTwvaDE+XG5cbiAgICAgICAgPEJvYXJkIGRyYWdnYWJsZVxuICAgICAgICAgICAgICBlZGl0YWJsZVxuICAgICAgICAgICAgICBvbkNhcmRBZGQ9e3RoaXMub25DYXJkQWRkSGFuZGxlcn1cbiAgICAgICAgICAgICAgZXZlbnRCdXNIYW5kbGU9e3RoaXMuc2V0RXZlbnRCdXN9XG4gICAgICAgICAgICAgIGxhbmVEcmFnZ2FibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ2xpZ2h0Z3JheSd9fVxuICAgICAgICAgICAgICBvbkNhcmRDbGljaz17dGhpcy5zaG93RGV0YWlsKCdpbnZlcnRlZCcpfVxuICAgICAgICAgICAgICBoYW5kbGVEcmFnRW5kPXt0aGlzLm9uRHJhZ0VuZH1cbiAgICAgICAgICAgICAgZGF0YT17dGhpcy5zdGF0ZS5ib2FyZERhdGF9IC8+XG5cbiAgICAgICAgPERldGFpbFBhZ2VNb2RhbFxuICAgICAgICAgICAgb3BlbkRldGFpbD17dGhpcy5zdGF0ZS5vcGVuRGV0YWlsfVxuICAgICAgICAgICAgY2xvc2VEZXRhaWw9e3RoaXMuY2xvc2VEZXRhaWx9XG4gICAgICAgICAgICBzZWxlY3RlZENhcmQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDYXJkfVxuICAgICAgICAgICAgb25VcGRhdGVkQ2FyZD17dGhpcy5vblVwZGF0ZWRDYXJkfVxuICAgICAgICAgICAgLz5cblxuXG4gICAgICAgIDxNb2RhbCBzaXplPSdtaW5pJyBvcGVuPXtvcGVuU3Rha2luZ30gb25DbG9zZT17dGhpcy5jbG9zZVN0YWtpbmd9PlxuICAgICAgICAgIDxNb2RhbC5IZWFkZXI+U3Rha2UgeW91ciB0b2tlbnMhIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgIDxNb2RhbC5Db250ZW50PlxuICAgICAgICAgICAgPENvbnRyaWJ1dGVGb3JtXG4gICAgICAgICAgICAgICAgYWRkcmVzcz0nMHgzYWFmZUZGYzBhQzc4ZEM2MjUxMjc4MGZkOWYxOTFkMTlmODE5NkIxJ1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2FyZD17dGhpcy5zdGF0ZS5zZWxlY3RlZENhcmR9XG4gICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5jbG9zZVN0YWtpbmd9XG4gICAgICAgICAgICAgICAgb25TdGFraW5nPXtpc1NlbGVjdGVkQ2FyZFN0YWtlZCA9PiB0aGlzLnNldFN0YXRlKHtpc1NlbGVjdGVkQ2FyZFN0YWtlZH0pfVxuICAgICAgICAgICAgICAgIG9uQXNzaWduPXt0aGlzLm9uQXNzaWdufVxuXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTW9kYWwuQ29udGVudD5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvdG9Cb2FyZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvVG9kb0JvYXJkLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBbEJBO0FBQ0E7QUFDQTtBQWlCQTs7QUFJQTtBQUZBO0FBR0E7QUFBQTtBQUpBO0FBQ0E7O0FBU0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBbUNBO0FBQ0E7QUFDQTtBQXhDQTtBQUNBO0FBMENBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQTNDQTtBQUNBO0FBb0RBO0FBQUE7QUFyREE7QUFDQTtBQXNEQTtBQUNBO0FBQ0E7QUFDQTtBQTFEQTtBQUNBO0FBNERBO0FBQUE7QUE3REE7QUFDQTtBQTZEQTtBQUFBO0FBQUE7QUFBQTtBQTlEQTtBQUNBO0FBOERBO0FBQUE7QUEvREE7QUFDQTtBQWlFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUF2RUE7QUFDQTtBQXlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUExR0E7QUFDQTtBQTJHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBREE7QUFHQTtBQVhBO0FBQ0E7QUFZQTtBQWJBO0FBZ0JBO0FBR0E7QUFySUE7QUFDQTtBQXNJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUF2QkE7QUFDQTtBQXdCQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQWRBO0FBQ0E7QUFpQkE7QUFHQTtBQS9MQTtBQUNBO0FBZ01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyTUE7QUFDQTtBQXdNQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBek1BO0FBQ0E7QUEwTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRkE7QUFLQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFuTkE7QUFDQTtBQW9OQTtBQUNBO0FBQ0E7QUFHQTtBQTFOQTtBQUNBO0FBMk5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUF0T0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBZkE7QUFDQTtBQWFBO0FBQ0E7QUFHQTs7Ozs7QUFHQTtBQVVBOzs7Ozs7O0FBQ0E7Ozs7QUF1TUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQUVBO0FBWkE7QUFDQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUdBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFWQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7QUFRQTtBQVJBO0FBQ0E7QUFPQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBTkE7QUFhQTtBQWJBO0FBQ0E7Ozs7Ozs7QUFnQkE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
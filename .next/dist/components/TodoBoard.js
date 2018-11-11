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

var _reactTrello = require('react-trello');

var _reactTrello2 = _interopRequireDefault(_reactTrello);

var _semanticUiReact = require('semantic-ui-react');

var _reactCountdownNow = require('react-countdown-now');

var _reactCountdownNow2 = _interopRequireDefault(_reactCountdownNow);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactDropzoneS3Uploader = require('react-dropzone-s3-uploader');

var _reactDropzoneS3Uploader2 = _interopRequireDefault(_reactDropzoneS3Uploader);

var _project = require('../ethereum/project');

var _project2 = _interopRequireDefault(_project);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _FileUpload = require('./FileUpload');

var _FileUpload2 = _interopRequireDefault(_FileUpload);

var _ContributeForm = require('./ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _Layout = require('./Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _DetailPageModal = require('./DetailPageModal');

var _DetailPageModal2 = _interopRequireDefault(_DetailPageModal);

var _SessionMockup = require('./SessionMockup');

var _Timer = require('./Timer');

var _Timer2 = _interopRequireDefault(_Timer);

var _CountTimer = require('./CountTimer');

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
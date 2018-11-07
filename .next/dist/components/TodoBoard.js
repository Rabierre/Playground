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
    (0, _classCallCheck3.default)(this, TotoBoard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TotoBoard.__proto__ || (0, _getPrototypeOf2.default)(TotoBoard)).call(this, props));

    _this.setEventBus = function (handle) {

      _this.setState({ eventBus: handle });
    };

    _this.showDetail = function (dimmer) {
      return function (cardId, metadata, laneId) {

        console.log('hoi------------');
        console.log(metadata);

        _this.setState({ selectedCard: metadata });
        _this.setState({ dimmer: dimmer, openDetail: true });
        console.log(cardId, metadata, laneId);
        console.log(metadata);
        console.log('------------');
        console.log(_this.state.boardData);
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

    _this.onCardAddHandler = function (card, laneId) {

      console.log(card);

      var updatedCard = card;

      updatedCard['metadata'] = { 'title': card['title'], 'description': card['description'] };
      updatedCard['laneId'] = laneId;
      updatedCard['state'] = laneId;
      updatedCard['label'] = '1';
      updatedCard['point'] = 1;
      updatedCard['comments'] = [];

      _this.state.eventBus.publish({ type: 'ADD_CARD', laneId: laneId, card: updatedCard });
      console.log(updatedCard);
    };

    _this.onAssign = function (card) {

      _axios2.default.post('https://snowball-api-backend.herokuapp.com/cards/' + card.id + '/assign', {
        userId: _SessionMockup.UserId,
        staking: 10
      });
      card['assigneeId'] = _SessionMockup.UserId;
      console.log(card.id);
      _this.updateCard('IN_PROGRESS', card.id, card);
    };

    _this.onDragEnd = function (cardId, sourceLaneId, targetLaneId, position, cardDetails) {

      _this.setState({ selectedCard: cardDetails });

      var cid = cardDetails.id;

      console.log(cardId, sourceLaneId, targetLaneId, position, cardDetails);

      if (sourceLaneId == 'BACKLOG' && targetLaneId == 'NOT_STARTED' && _SessionMockup.SessionRole == 'admin') {

        _axios2.default.post('https://snowball-api-backend.herokuapp.com/cards/' + cid + '/reset', {
          userId: _SessionMockup.UserId,
          point: 10
        });
      } else if (sourceLaneId == 'NOT_STARTED' && targetLaneId == 'IN_PROGRESS') {

        _this.setState({ openStaking: true });
      } else if (sourceLaneId == 'IN_PROGRESS' && targetLaneId == 'IN_REVIEW' && cardDetails.assigneeId) {
        console.log('good job!');

        _axios2.default.post('https://snowball-api-backend.herokuapp.com/cards/' + cid + '/submit', {
          userId: _SessionMockup.UserId
        });
      } else if (sourceLaneId == targetLaneId) {} else {

        _this.undo(cardId, sourceLaneId, targetLaneId);
      }
    };

    _this.state = {
      backlogTickets: null,
      openDetail: false,
      openStaking: false,
      eventBus: null,
      selectedCard: '',
      isSelectedCardStaked: false,
      boardData: _this.props.boardData

    };
    console.log(_this.state.boardData);

    return _this;
  }

  (0, _createClass3.default)(TotoBoard, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          openDetail = _state.openDetail,
          dimmer = _state.dimmer;
      var _state2 = this.state,
          openStaking = _state2.openStaking,
          size = _state2.size;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
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
          lineNumber: 155
        }
      }), _react2.default.createElement(_DetailPageModal2.default, { openDetail: this.state.openDetail, closeDetail: this.closeDetail, selectedCard: this.state.selectedCard, __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }), _react2.default.createElement(_semanticUiReact.Modal, { size: 'mini', open: openStaking, onClose: this.closeStaking, __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, 'Stake your tokens! '), _react2.default.createElement(_semanticUiReact.Modal.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, _react2.default.createElement(_ContributeForm2.default, {
        address: '0x3aafeFFc0aC78dC62512780fd9f191d19f8196B1',
        selectedCard: this.state.selectedCard,

        onClose: this.closeStaking,

        onStaking: function onStaking(isSelectedCardStaked) {
          return _this2.setState({ isSelectedCardStaked: isSelectedCardStaked });
        },
        onAssign: this.onAssign,

        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }))));
    }
  }]);

  return TotoBoard;
}(_react.Component);

exports.default = TotoBoard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVG9kb0JvYXJkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQm9hcmQiLCJDb250YWluZXIiLCJHcmlkIiwiU2VnbWVudCIsIkJ1dHRvbiIsIkNhcmQiLCJJbWFnZSIsIlRhYiIsIk1vZGFsIiwiSGVhZGVyIiwiVGV4dEFyZWEiLCJJbnB1dEZvcm1hdCIsIkZvcm0iLCJheGlvcyIsIkRyb3B6b25lUzNVcGxvYWRlciIsIlByb2plY3QiLCJ3ZWIzIiwiRmlsZVVwbG9hZCIsIkNvbnRyaWJ1dGVGb3JtIiwiTGF5b3V0IiwiRGV0YWlsUGFnZU1vZGFsIiwiU2Vzc2lvblJvbGUiLCJVc2VySWQiLCJDT05GSUciLCJoZWFkZXJzIiwid2l0aENyZWRlbnRpYWxzIiwiY3JlZGVudGlhbHMiLCJUb3RvQm9hcmQiLCJwcm9wcyIsInNldEV2ZW50QnVzIiwiaGFuZGxlIiwic2V0U3RhdGUiLCJldmVudEJ1cyIsInNob3dEZXRhaWwiLCJjYXJkSWQiLCJtZXRhZGF0YSIsImxhbmVJZCIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RlZENhcmQiLCJkaW1tZXIiLCJvcGVuRGV0YWlsIiwic3RhdGUiLCJib2FyZERhdGEiLCJjbG9zZURldGFpbCIsInVwZGF0ZUNhcmQiLCJ0YXJnZXRMYW5lSWQiLCJ1cGRhdGVkQ2FyZCIsInB1Ymxpc2giLCJ0eXBlIiwiY2FyZCIsInVuZG8iLCJzb3VyY2VMYW5lSWQiLCJmcm9tTGFuZUlkIiwidG9MYW5lSWQiLCJpbmRleCIsInNob3dTdGFraW5nIiwic2l6ZSIsIm9wZW5TdGFraW5nIiwiY2xvc2VTdGFraW5nIiwib25DYXJkQWRkSGFuZGxlciIsIm9uQXNzaWduIiwicG9zdCIsImlkIiwidXNlcklkIiwic3Rha2luZyIsIm9uRHJhZ0VuZCIsInBvc2l0aW9uIiwiY2FyZERldGFpbHMiLCJjaWQiLCJwb2ludCIsImFzc2lnbmVlSWQiLCJiYWNrbG9nVGlja2V0cyIsImlzU2VsZWN0ZWRDYXJkU3Rha2Vk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QUFFc0IsQUFDaEI7d0JBQWdCLEtBSHRCLEFBRzJCLEFBQ3JCO3VCQUpOLEFBSXFCLEFBQ2Y7ZUFBTyxFQUFDLGlCQUxkLEFBS2EsQUFBa0IsQUFDekI7cUJBQWEsS0FBQSxBQUFLLFdBTnhCLEFBTW1CLEFBQWdCLEFBQzdCO3VCQUFlLEtBUHJCLEFBTzBCLEFBQ3BCO2NBQU0sS0FBQSxBQUFLLE1BUmpCLEFBUXVCO29CQVJ2QjtzQkFIRixBQUdFLEFBVUE7QUFWQTswQkFVQSxBQUFDLDJDQUFnQixZQUFZLEtBQUEsQUFBSyxNQUFsQyxBQUF3QyxZQUFZLGFBQWEsS0FBakUsQUFBc0UsYUFBYSxjQUFjLEtBQUEsQUFBSyxNQUF0RyxBQUE0RztvQkFBNUc7c0JBYkYsQUFhRSxBQUdBO0FBSEE7MEJBR0EsQUFBQyx3Q0FBTSxNQUFQLEFBQVksUUFBTyxNQUFuQixBQUF5QixhQUFhLFNBQVMsS0FBL0MsQUFBb0Q7b0JBQXBEO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSx3Q0FBQyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7aUJBQUQsQUFDWSxBQUNSO3NCQUFjLEtBQUEsQUFBSyxNQUZ2QixBQUU2QixBQUV6Qjs7aUJBQVMsS0FKYixBQUlrQixBQUVkOzttQkFBVyx5Q0FBQTtpQkFBd0IsT0FBQSxBQUFLLFNBQVMsRUFBQyxzQkFBdkMsQUFBd0IsQUFBYztBQU5yRCxBQU9JO2tCQUFVLEtBUGQsQUFPbUI7OztvQkFQbkI7c0JBcEJSLEFBQ0UsQUFnQkUsQUFFRSxBQUNFLEFBZVQ7QUFmUztBQUNJOzs7OztBQWhKUSxBLEFBa0t4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJUb2RvQm9hcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0RhbmllbC9EZXNrdG9wL3BsYXlncm91bmQifQ==
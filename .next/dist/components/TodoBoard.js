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

var _Timer = require('./Timer');

var _Timer2 = _interopRequireDefault(_Timer);

var _CountTimer = require('./CountTimer');

var _CountTimer2 = _interopRequireDefault(_CountTimer);

var _VotingListModal = require('./VotingListModal');

var _VotingListModal2 = _interopRequireDefault(_VotingListModal);

var _localStorage = require('local-storage');

var _localStorage2 = _interopRequireDefault(_localStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Daniel/Desktop/playground2/components/TodoBoard.js';
// import {Card, Grid, Button} from 'semantic-ui-react';


var TotoBoard = function (_Component) {
  (0, _inherits3.default)(TotoBoard, _Component);

  function TotoBoard(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, TotoBoard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TotoBoard.__proto__ || (0, _getPrototypeOf2.default)(TotoBoard)).call(this, props));

    _this.onUserSelectHandler = function (event, data) {

      console.log(data.value);
      _localStorage2.default.set('User', data.value);
      window.location.reload();
    };

    _this.onVotingList = function () {

      var nVoteNeeded = 0;

      var votingCards = _this.state.votingList;

      votingCards.map(function (card) {

        if (!card.voted) {
          nVoteNeeded++;
        }
      });

      if (nVoteNeeded == 0) {

        _this.setState({ votingDone: true });
      } else {
        _this.setState({ openVoting: true });
      }
      console.log("nVoteNeeded: " + nVoteNeeded);
    };

    _this.setEventBus = function (handle) {

      _this.setState({ eventBus: handle });
    };

    _this.onDataChangeHandler = function (newData) {

      console.log('data changed');
      console.log(newData);
      _this.setState({ boardData: newData });
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
      var self = _this;
      console.log('closedetail');
      console.log(_this.state.selectedCard);

      if (_this.state.selectedCard.laneId != ('IN_REVIEW' || 'IN_COMPLETE')) {

        _this.setState({ isLoading: true });

        var card = _this.state.selectedCard;

        _axios2.default.post('https://snowball-api-backend.herokuapp.com/cards/' + card.cardId + '/update', {
          userId: _localStorage2.default.get('User').id,
          title: card['title'],
          description: card['description']

        }).then(function (response) {

          console.log(response);

          if (response.status == 200) {

            self.updateCard(card.laneId, card.cardId, response.data);
            self.setState({ isLoading: false });
            self.setState({ openDetail: false });

            {/*self.state.boardData.lanes[]*/}
            {/*this.sta response.data*/}
          }
        });
      } else {
        _this.setState({ openDetail: false });
      }
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

      _this.setState({ openStaking: false });
    };

    _this.countDown = function () {

      var count = _this.state.count;
      count -= 1;

      _this.setState({ count: count });
    };

    _this.onCardAddHandler = function (card, laneId) {

      var self = _this;
      console.log('onCardAddHandler');
      console.log(card);
      console.log(card['label']);

      var updatedCard = card;

      updatedCard['metadata'] = { 'title': card['title'], 'description': card['description'], 'comments': [] };
      updatedCard['laneId'] = laneId;
      updatedCard['state'] = laneId;
      updatedCard['label'] = card['label'];
      updatedCard['point'] = parseInt(card['label']);
      updatedCard['comments'] = [];

      _this.setState({ isLoading: true });

      _this.updateCard('BACKLOG', card.id, updatedCard);

      _axios2.default.post('https://snowball-api-backend.herokuapp.com/projects/project_XwPp9xaz/card', {
        userId: _localStorage2.default.get('User').id,
        title: card['title'],
        description: card['description']

      }).then(function (response) {

        if (response.status == 200) {

          self.setState({ isLoading: false });
        }
      });
    };

    _this.onCardDeleteHandler = function (cardId, laneId) {
      var self = _this;

      _this.setState({ isLoading: true });
      _axios2.default.post('https://snowball-api-backend.herokuapp.com/cards/' + cardId + '/archive', {
        userId: _localStorage2.default.get('User').id

      }).then(function (response) {

        if (response.status == 200) {

          self.setState({ isLoading: false });
        }
      });
    };

    _this.onAssign = function (card, stake) {

      var self = _this;

      _this.setState({ isLoading: true });

      console.log(stake);

      _axios2.default.post('https://snowball-api-backend.herokuapp.com/cards/' + card.id + '/assign', {
        userId: _localStorage2.default.get('User').id,
        staking: stake
      }).then(function (response) {

        if (response.status == 200) {
          card['assigneeId'] = _localStorage2.default.get('User').id;

          self.updateCard('IN_PROGRESS', card.id, card);
        }
      }).catch(function (error) {

        console.log(error);
      }).then(function () {
        self.onCoundownHandler();
        self.setState({ isLoading: false });
      });
    };

    _this.onDragEnd = function (cardId, sourceLaneId, targetLaneId, position, cardDetails) {
      var self = _this;
      _this.setState({ selectedCard: cardDetails });

      var cid = cardDetails.id;

      console.log(cardId, sourceLaneId, targetLaneId, position, cardDetails);

      if (sourceLaneId == 'BACKLOG' && targetLaneId == 'NOT_STARTED' && _localStorage2.default.get('User').role == 'TPM' | _localStorage2.default.get('User').role == 'su') {

        if (cardDetails.title != '' && cardDetails.description != '') {

          _this.setState({ isLoading: true });
          _axios2.default.post('https://snowball-api-backend.herokuapp.com/cards/' + cid + '/ready', {
            userId: _localStorage2.default.get('User').id,
            point: 5
          }).then(function (response) {

            if (response.status == 200) {

              self.setState({ isLoading: false });
            }
          });
        } else {
          alert('모든 내용을 채워야 합니다.');
          _this.undo(cardId, sourceLaneId, targetLaneId);
        }
      } else if (sourceLaneId == 'NOT_STARTED' && targetLaneId == 'IN_PROGRESS') {

        _this.setState({ openStaking: true });
      } else if (sourceLaneId == 'IN_PROGRESS' && targetLaneId == 'IN_REVIEW' && cardDetails.assigneeId) {

        _this.setState({ isLoading: true });
        _axios2.default.post('https://snowball-api-backend.herokuapp.com/cards/' + cid + '/submit', {
          userId: _localStorage2.default.get('User').id
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
          lineNumber: 360
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
            lineNumber: 365
          }
        });
      } else {
        // Render a countdown
        return _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 368
          }
        }, hours, ':', minutes, ':', seconds);
      }
    };

    _this.onCompletion = function (card) {
      if (card) {
        _this.state.eventBus.publish({ type: 'MOVE_CARD', fromLaneId: 'IN_PROGRESS', toLaneId: 'NOT_STARTED', cardId: card.id, index: 0 });
      }
    };

    _this.onCloseVotingList = function () {

      var self = _this;

      _axios2.default.post('https://snowball-api-backend.herokuapp.com/projects/project_XwPp9xaz/vote-list', {
        userId: _localStorage2.default.get('User').id

      }).then(function (response) {

        if (response.data.length == 0) {
          self.setState({ openVoting: false });
        } else {
          alert('Please finish voting!');
        }
      });
    };

    _this.onCoundownHandler = function () {

      var self = _this;

      _this.setState({ isLoading: true });

      _axios2.default.get('http://snowball-api-backend.herokuapp.com/projects/project_XwPp9xaz/cards-by-state?state=IN_PROGRESS').then(function (response) {

        if (response.status == 200) {

          console.log(response.data);

          var countCards = response.data.map(function (card) {

            return _react2.default.createElement(_CountTimer2.default, { seconds: card.ttl, onCompletion: self.onCompletion, selectedCard: card, __source: {
                fileName: _jsxFileName,
                lineNumber: 414
              }
            });
          });

          self.setState({ countdown: countCards });
          self.setState({ isLoading: false });
        }
      });
    };

    _this.state = {
      backlogTickets: null,
      openDetail: '',
      openStaking: false,
      openVoting: false,
      eventBus: null,
      selectedCard: '',
      isSelectedCardStaked: false,
      boardData: _this.props.boardData,
      count: 10,
      remainingMinutes: 0,
      remainingSeconds: 0,
      isLoading: false,
      votingDone: true,
      votingList: null,
      countdown: null

    };

    console.log(_this.state.boardData);

    return _this;
  }

  (0, _createClass3.default)(TotoBoard, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.onCoundownHandler();

      var self = this;

      console.log('TodoBoard componentDidMount');
      console.log("Currently " + _localStorage2.default.get('User').id + " " + _localStorage2.default.get('User').role);

      _axios2.default.post('https://snowball-api-backend.herokuapp.com/projects/project_XwPp9xaz/vote-list', {
        userId: _localStorage2.default.get('User').id

      }).then(function (response) {

        if (response.data.length > 0) {

          console.log(response.data);
          self.setState({ votingDone: false });
          self.setState({ votingList: response.data });
          self.onVotingList();
          {/*self.setState({isLoading: true});*/}
        }
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          openDetail = _state.openDetail,
          dimmer = _state.dimmer;
      var _state2 = this.state,
          openStaking = _state2.openStaking,
          size = _state2.size;

      var userList = [{ key: 'member', value: { id: 'user0000', role: 'member' }, text: 'member' }, { key: 'TPM', value: { id: 'user1111', role: 'TPM' }, text: 'TPM' }, { key: 'SU', value: { id: 'user2222', role: 'su' }, text: 'su' }];

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        }
      }, _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: _localStorage2.default.get('User').role, search: true, selection: true, options: userList, onChange: this.onUserSelectHandler, __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        }
      }), _react2.default.createElement(_VotingListModal2.default, {
        votingDone: this.state.votingDone,
        openVoting: this.state.openVoting,
        votingList: this.state.votingList,
        onCloseVotingList: this.onCloseVotingList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        }
      }, this.state.countdown), this.onVotingList, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463
        }
      }, _localStorage2.default.get('User').id, ' [', _localStorage2.default.get('User').role, ']'), _react2.default.createElement(_reactTrello2.default, { draggable: true,
        editable: true,
        onCardAdd: this.onCardAddHandler,
        eventBusHandle: this.setEventBus,
        laneDraggable: false,
        style: { backgroundColor: 'lightgray' },
        onCardClick: this.showDetail('inverted'),
        onCardDelete: this.onCardDeleteHandler,

        handleDragEnd: this.onDragEnd,
        data: this.state.boardData, __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        }
      }), _react2.default.createElement(_DetailPageModal2.default, {
        onSelectedCardChange: function onSelectedCardChange(updatedCard) {
          _this3.setState({ selectedCard: updatedCard });
        },
        openDetail: this.state.openDetail,
        closeDetail: this.closeDetail,
        selectedCard: this.state.selectedCard,
        onUpdatedCard: this.onUpdatedCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478
        }
      }), _react2.default.createElement(_semanticUiReact.Modal, { size: 'mini', open: openStaking, onClose: this.closeStaking, __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        }
      }, 'Stake your tokens! '), _react2.default.createElement(_semanticUiReact.Modal.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        }
      }, _react2.default.createElement(_ContributeForm2.default, {
        address: '0x3aafeFFc0aC78dC62512780fd9f191d19f8196B1',
        selectedCard: this.state.selectedCard,
        onClose: this.closeStaking,
        onSelectedCardChange: function onSelectedCardChange(updatedCard) {
          _this3.setState({ selectedCard: updatedCard });
        },
        onStaking: function onStaking(isSelectedCardStaked) {
          return _this3.setState({ isSelectedCardStaked: isSelectedCardStaked });
        },
        onAssign: this.onAssign,

        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        }
      }))));
    }
  }]);

  return TotoBoard;
}(_react.Component);

exports.default = TotoBoard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVG9kb0JvYXJkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQm9hcmQiLCJDb250YWluZXIiLCJHcmlkIiwiRGltbWVyIiwiTG9hZGVyIiwiU2VnbWVudCIsIkJ1dHRvbiIsIkNhcmQiLCJJbWFnZSIsIlRhYiIsIk1vZGFsIiwiSGVhZGVyIiwiVGV4dEFyZWEiLCJJbnB1dEZvcm1hdCIsIkZvcm0iLCJEcm9wZG93biIsIkNvdW50ZG93biIsImF4aW9zIiwiRHJvcHpvbmVTM1VwbG9hZGVyIiwiUHJvamVjdCIsIndlYjMiLCJGaWxlVXBsb2FkIiwiQ29udHJpYnV0ZUZvcm0iLCJMYXlvdXQiLCJEZXRhaWxQYWdlTW9kYWwiLCJUaW1lciIsIkNvdW50VGltZXIiLCJWb3RpbmdMaXN0TW9kYWwiLCJscyIsIlRvdG9Cb2FyZCIsInByb3BzIiwib25Vc2VyU2VsZWN0SGFuZGxlciIsImV2ZW50IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsInNldCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwib25Wb3RpbmdMaXN0IiwiblZvdGVOZWVkZWQiLCJ2b3RpbmdDYXJkcyIsInN0YXRlIiwidm90aW5nTGlzdCIsIm1hcCIsImNhcmQiLCJ2b3RlZCIsInNldFN0YXRlIiwidm90aW5nRG9uZSIsIm9wZW5Wb3RpbmciLCJzZXRFdmVudEJ1cyIsImhhbmRsZSIsImV2ZW50QnVzIiwib25EYXRhQ2hhbmdlSGFuZGxlciIsIm5ld0RhdGEiLCJib2FyZERhdGEiLCJzaG93RGV0YWlsIiwiY2FyZElkIiwibWV0YWRhdGEiLCJsYW5lSWQiLCJzZWxlY3RlZENhcmQiLCJkaW1tZXIiLCJvcGVuRGV0YWlsIiwiY2xvc2VEZXRhaWwiLCJzZWxmIiwiaXNMb2FkaW5nIiwicG9zdCIsInVzZXJJZCIsImdldCIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsInVwZGF0ZUNhcmQiLCJ0YXJnZXRMYW5lSWQiLCJ1cGRhdGVkQ2FyZCIsInB1Ymxpc2giLCJ0eXBlIiwidW5kbyIsInNvdXJjZUxhbmVJZCIsImZyb21MYW5lSWQiLCJ0b0xhbmVJZCIsImluZGV4Iiwic2hvd1N0YWtpbmciLCJzaXplIiwib3BlblN0YWtpbmciLCJjbG9zZVN0YWtpbmciLCJjb3VudERvd24iLCJjb3VudCIsIm9uQ2FyZEFkZEhhbmRsZXIiLCJwYXJzZUludCIsIm9uQ2FyZERlbGV0ZUhhbmRsZXIiLCJvbkFzc2lnbiIsInN0YWtlIiwic3Rha2luZyIsImNhdGNoIiwiZXJyb3IiLCJvbkNvdW5kb3duSGFuZGxlciIsIm9uRHJhZ0VuZCIsInBvc2l0aW9uIiwiY2FyZERldGFpbHMiLCJjaWQiLCJyb2xlIiwicG9pbnQiLCJhbGVydCIsImFzc2lnbmVlSWQiLCJvblVwZGF0ZWRDYXJkIiwiQ29tcGxldGlvbmlzdCIsInJlbmRlcmVyIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImNvbXBsZXRlZCIsIm9uQ29tcGxldGlvbiIsIm9uQ2xvc2VWb3RpbmdMaXN0IiwibGVuZ3RoIiwiY291bnRDYXJkcyIsInR0bCIsImNvdW50ZG93biIsImJhY2tsb2dUaWNrZXRzIiwiaXNTZWxlY3RlZENhcmRTdGFrZWQiLCJyZW1haW5pbmdNaW51dGVzIiwicmVtYWluaW5nU2Vjb25kcyIsInVzZXJMaXN0Iiwia2V5IiwidGV4dCIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPOzs7O0FBRVAsQUFBUSxBQUFVLEFBQU0sQUFBUSxBQUFRLEFBQVMsQUFBUSxBQUFNLEFBQU8sQUFBSyxBQUFPLEFBQVEsQUFBVyxBQUFhLEFBQU07O0FBRXhILEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUdQLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFFakIsQUFBTyxBQUFnQjs7OztBQUN2QixB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QUFhLFNBQVMsS0FBL0MsQUFBb0Q7b0JBQXBEO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSx3Q0FBQyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7aUJBQUQsQUFDWSxBQUNSO3NCQUFjLEtBQUEsQUFBSyxNQUZ2QixBQUU2QixBQUN6QjtpQkFBUyxLQUhiLEFBR2tCLEFBQ2Q7OEJBQXNCLDJDQUFlLEFBQUM7aUJBQUEsQUFBSyxTQUFTLEVBQUMsY0FBZixBQUFjLEFBQWUsQUFBYztBQUpyRixBQUtJO21CQUFXLHlDQUFBO2lCQUF3QixPQUFBLEFBQUssU0FBUyxFQUFDLHNCQUF2QyxBQUF3QixBQUFjO0FBTHJELEFBTUk7a0JBQVUsS0FOZCxBQU1tQjs7O29CQU5uQjtzQkEvQ1IsQUFDRSxBQTJDRSxBQUVFLEFBQ0UsQUFjVDtBQWRTO0FBQ0k7Ozs7O0FBbmRRLEEsQUFvZXhCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlRvZG9Cb2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRGFuaWVsL0Rlc2t0b3AvcGxheWdyb3VuZDIifQ==
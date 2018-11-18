webpackHotUpdate(5,{

/***/ 1442:
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

var _reactTrello = __webpack_require__(602);

var _reactTrello2 = _interopRequireDefault(_reactTrello);

var _semanticUiReact = __webpack_require__(419);

var _reactCountdownNow = __webpack_require__(1443);

var _reactCountdownNow2 = _interopRequireDefault(_reactCountdownNow);

var _axios = __webpack_require__(434);

var _axios2 = _interopRequireDefault(_axios);

var _reactDropzoneS3Uploader = __webpack_require__(584);

var _reactDropzoneS3Uploader2 = _interopRequireDefault(_reactDropzoneS3Uploader);

var _project = __webpack_require__(586);

var _project2 = _interopRequireDefault(_project);

var _web = __webpack_require__(508);

var _web2 = _interopRequireDefault(_web);

var _FileUpload = __webpack_require__(585);

var _FileUpload2 = _interopRequireDefault(_FileUpload);

var _ContributeForm = __webpack_require__(829);

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _Layout = __webpack_require__(763);

var _Layout2 = _interopRequireDefault(_Layout);

var _DetailPageModal = __webpack_require__(1444);

var _DetailPageModal2 = _interopRequireDefault(_DetailPageModal);

var _Timer = __webpack_require__(1457);

var _Timer2 = _interopRequireDefault(_Timer);

var _CountTimer = __webpack_require__(1458);

var _CountTimer2 = _interopRequireDefault(_CountTimer);

var _VotingListModal = __webpack_require__(1459);

var _VotingListModal2 = _interopRequireDefault(_VotingListModal);

var _localStorage = __webpack_require__(582);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVG9kb0JvYXJkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQm9hcmQiLCJDb250YWluZXIiLCJHcmlkIiwiRGltbWVyIiwiTG9hZGVyIiwiU2VnbWVudCIsIkJ1dHRvbiIsIkNhcmQiLCJJbWFnZSIsIlRhYiIsIk1vZGFsIiwiSGVhZGVyIiwiVGV4dEFyZWEiLCJJbnB1dEZvcm1hdCIsIkZvcm0iLCJEcm9wZG93biIsIkNvdW50ZG93biIsImF4aW9zIiwiRHJvcHpvbmVTM1VwbG9hZGVyIiwiUHJvamVjdCIsIndlYjMiLCJGaWxlVXBsb2FkIiwiQ29udHJpYnV0ZUZvcm0iLCJMYXlvdXQiLCJEZXRhaWxQYWdlTW9kYWwiLCJUaW1lciIsIkNvdW50VGltZXIiLCJWb3RpbmdMaXN0TW9kYWwiLCJscyIsIlRvdG9Cb2FyZCIsInByb3BzIiwib25Vc2VyU2VsZWN0SGFuZGxlciIsImV2ZW50IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsInNldCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwib25Wb3RpbmdMaXN0IiwiblZvdGVOZWVkZWQiLCJ2b3RpbmdDYXJkcyIsInN0YXRlIiwidm90aW5nTGlzdCIsIm1hcCIsImNhcmQiLCJ2b3RlZCIsInNldFN0YXRlIiwidm90aW5nRG9uZSIsIm9wZW5Wb3RpbmciLCJzZXRFdmVudEJ1cyIsImhhbmRsZSIsImV2ZW50QnVzIiwib25EYXRhQ2hhbmdlSGFuZGxlciIsIm5ld0RhdGEiLCJib2FyZERhdGEiLCJzaG93RGV0YWlsIiwiY2FyZElkIiwibWV0YWRhdGEiLCJsYW5lSWQiLCJzZWxlY3RlZENhcmQiLCJkaW1tZXIiLCJvcGVuRGV0YWlsIiwiY2xvc2VEZXRhaWwiLCJzZWxmIiwiaXNMb2FkaW5nIiwicG9zdCIsInVzZXJJZCIsImdldCIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsInVwZGF0ZUNhcmQiLCJ0YXJnZXRMYW5lSWQiLCJ1cGRhdGVkQ2FyZCIsInB1Ymxpc2giLCJ0eXBlIiwidW5kbyIsInNvdXJjZUxhbmVJZCIsImZyb21MYW5lSWQiLCJ0b0xhbmVJZCIsImluZGV4Iiwic2hvd1N0YWtpbmciLCJzaXplIiwib3BlblN0YWtpbmciLCJjbG9zZVN0YWtpbmciLCJjb3VudERvd24iLCJjb3VudCIsIm9uQ2FyZEFkZEhhbmRsZXIiLCJwYXJzZUludCIsIm9uQ2FyZERlbGV0ZUhhbmRsZXIiLCJvbkFzc2lnbiIsInN0YWtlIiwic3Rha2luZyIsImNhdGNoIiwiZXJyb3IiLCJvbkNvdW5kb3duSGFuZGxlciIsIm9uRHJhZ0VuZCIsInBvc2l0aW9uIiwiY2FyZERldGFpbHMiLCJjaWQiLCJyb2xlIiwicG9pbnQiLCJhbGVydCIsImFzc2lnbmVlSWQiLCJvblVwZGF0ZWRDYXJkIiwiQ29tcGxldGlvbmlzdCIsInJlbmRlcmVyIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImNvbXBsZXRlZCIsIm9uQ29tcGxldGlvbiIsIm9uQ2xvc2VWb3RpbmdMaXN0IiwibGVuZ3RoIiwiY291bnRDYXJkcyIsInR0bCIsImNvdW50ZG93biIsImJhY2tsb2dUaWNrZXRzIiwiaXNTZWxlY3RlZENhcmRTdGFrZWQiLCJyZW1haW5pbmdNaW51dGVzIiwicmVtYWluaW5nU2Vjb25kcyIsInVzZXJMaXN0Iiwia2V5IiwidGV4dCIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPOzs7O0FBRVAsQUFBUSxBQUFVLEFBQU0sQUFBUSxBQUFRLEFBQVMsQUFBUSxBQUFNLEFBQU8sQUFBSyxBQUFPLEFBQVEsQUFBVyxBQUFhLEFBQU07O0FBRXhILEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUdQLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFFakIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQXFCOzs7O0FBRTVCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBcUI7Ozs7QUFDNUIsQUFBTzs7Ozs7OztBQW5CUDs7O0lBcUJNLEE7cUNBR0o7O3FCQUFBLEFBQVksT0FBTztpQkFBQTs7d0NBQUE7OzRJQUFBLEFBRWI7O1VBRmEsQUEyRG5CLHNCQUFzQixVQUFBLEFBQUMsT0FBRCxBQUFRLE1BQVMsQUFFckM7O2NBQUEsQUFBUSxJQUFJLEtBQVosQUFBaUIsQUFDakI7NkJBQUEsQUFBRyxJQUFILEFBQU8sUUFBUSxLQUFmLEFBQW9CLEFBQ3BCO2FBQUEsQUFBTyxTQUFQLEFBQWdCLEFBRWpCO0FBakVrQjs7VUFBQSxBQW1FbkIsZUFBZSxZQUFNLEFBRW5COztVQUFJLGNBQUosQUFBa0IsQUFFbEI7O1VBQU0sY0FBYyxNQUFBLEFBQUssTUFBekIsQUFBK0IsQUFFL0I7O2tCQUFBLEFBQVksSUFBSSxnQkFBUSxBQUV0Qjs7WUFBSSxDQUFDLEtBQUwsQUFBVSxPQUFPLEFBQ2Y7QUFDRDtBQUVGO0FBTkQsQUFRQTs7VUFBSSxlQUFKLEFBQW1CLEdBQUcsQUFHcEI7O2NBQUEsQUFBSyxTQUFTLEVBQUMsWUFBZixBQUFjLEFBQWEsQUFFNUI7QUFMRCxhQUtPLEFBQ0w7Y0FBQSxBQUFLLFNBQVMsRUFBQyxZQUFmLEFBQWMsQUFBYSxBQUM1QjtBQUNEO2NBQUEsQUFBUSxJQUFJLGtCQUFaLEFBQThCLEFBRS9CO0FBM0ZrQjs7VUFBQSxBQTZGbkIsY0FBYyxVQUFBLEFBQUMsUUFBVyxBQUV0Qjs7WUFBQSxBQUFLLFNBQVMsRUFBQyxVQUFmLEFBQWMsQUFBVyxBQUM1QjtBQWhHa0I7O1VBQUEsQUFrR25CLHNCQUFzQixVQUFBLEFBQUMsU0FBVyxBQUVoQzs7Y0FBQSxBQUFRLElBQVIsQUFBWSxBQUNaO2NBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtZQUFBLEFBQUssU0FBUyxFQUFDLFdBQWYsQUFBYyxBQUFZLEFBRTNCO0FBeEdrQjs7VUFBQSxBQTBHbkIsYUFBYSxrQkFBQTthQUFVLFVBQUEsQUFBQyxRQUFELEFBQVMsVUFBVCxBQUFtQixRQUFXLEFBRW5EOztnQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO2lCQUFBLEFBQVMsWUFBVCxBQUFxQixBQUNyQjtpQkFBQSxBQUFTLFlBQVQsQUFBcUIsQUFDckI7Y0FBQSxBQUFLLFNBQVMsRUFBQyxjQUFmLEFBQWMsQUFBZSxBQUM3QjtjQUFBLEFBQUssU0FBUyxFQUFFLFFBQUYsUUFBVSxZQUF4QixBQUFjLEFBQXNCLEFBRXJDO0FBUlk7QUExR007O1VBQUEsQUFvSG5CLGNBQWMsWUFBTSxBQUNsQjtVQUFNLE9BQU4sQUFDQTtjQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7Y0FBQSxBQUFRLElBQUksTUFBQSxBQUFLLE1BQWpCLEFBQXVCLEFBR3ZCOztVQUFJLE1BQUEsQUFBSyxNQUFMLEFBQVcsYUFBWCxBQUF3QixXQUFXLGVBQXZDLEFBQUksQUFBa0QsZ0JBQWdCLEFBRXBFOztjQUFBLEFBQUssU0FBUyxFQUFDLFdBQWYsQUFBYyxBQUFZLEFBRTFCOztZQUFNLE9BQU8sTUFBQSxBQUFLLE1BQWxCLEFBQXdCLEFBRXhCOzt3QkFBQSxBQUFNLDJEQUF5RCxLQUEvRCxBQUFvRTtrQkFDMUQsdUJBQUEsQUFBRyxJQUFILEFBQU8sUUFEb0UsQUFDNUQsQUFDdkI7aUJBQU8sS0FGNEUsQUFFNUUsQUFBSyxBQUNaO3VCQUFhLEtBSGYsQUFBcUYsQUFHdEUsQUFBSzs7QUFIaUUsQUFDbkYsV0FERixBQUtHLEtBQUssVUFBQSxBQUFVLFVBQVUsQUFFMUI7O2tCQUFBLEFBQVEsSUFBUixBQUFZLEFBRVo7O2NBQUksU0FBQSxBQUFTLFVBQWIsQUFBdUIsS0FBSyxBQUV4Qjs7aUJBQUEsQUFBSyxXQUFXLEtBQWhCLEFBQXFCLFFBQVEsS0FBN0IsQUFBa0MsUUFBUSxTQUExQyxBQUFtRCxBQUNuRDtpQkFBQSxBQUFLLFNBQVMsRUFBQyxXQUFmLEFBQWMsQUFBWSxBQUMxQjtpQkFBQSxBQUFLLFNBQVMsRUFBRSxZQUFoQixBQUFjLEFBQWMsQUFFNUI7O2FBQUMsQUFBaUMsZ0NBQ2xDO2FBQUMsQUFBMkIsMEJBQy9CO0FBRUY7QUFuQkQsQUFxQkQ7QUEzQkQsYUEyQk8sQUFDTDtjQUFBLEFBQUssU0FBUyxFQUFFLFlBQWhCLEFBQWMsQUFBYyxBQUM3QjtBQUlGO0FBM0prQjs7VUFBQSxBQTZKbkIsYUFBYSxVQUFBLEFBQUMsY0FBRCxBQUFlLFFBQWYsQUFBdUIsYUFBZ0IsQUFFbEQ7O1lBQUEsQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixRQUFRLEVBQUMsTUFBRCxBQUFPLGVBQWUsUUFBdEIsQUFBOEIsY0FBYyxRQUF4RSxBQUE0QixBQUFvRCxBQUNoRjtZQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsUUFBUSxFQUFDLE1BQUQsQUFBTyxZQUFZLFFBQW5CLEFBQTJCLGNBQWMsTUFBckUsQUFBNEIsQUFBK0MsQUFFNUU7QUFsS2tCOztVQUFBLEFBbUtuQixPQUFPLFVBQUEsQUFBQyxRQUFELEFBQVMsY0FBVCxBQUF1QixjQUF2QjthQUF3QyxNQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsUUFBUSxFQUFDLE1BQUQsQUFBTyxhQUFhLFlBQXBCLEFBQWdDLGNBQWMsVUFBOUMsQUFBd0QsY0FBYyxRQUF0RSxBQUE4RSxRQUFRLE9BQTFKLEFBQXdDLEFBQTRCLEFBQTZGO0FBbktySjs7VUFBQSxBQW9LbkIsY0FBYyxnQkFBQTthQUFRLFlBQUE7ZUFBTSxNQUFBLEFBQUssU0FBUyxFQUFFLE1BQUYsTUFBUSxhQUE1QixBQUFNLEFBQWMsQUFBcUI7QUFBakQ7QUFwS0s7O1VBQUEsQUFxS25CLGVBQWUsWUFBTSxBQUVuQjs7WUFBQSxBQUFLLFNBQVMsRUFBRSxhQUFoQixBQUFjLEFBQWUsQUFFOUI7QUF6S2tCOztVQUFBLEFBNEtuQixZQUFZLFlBQU0sQUFFaEI7O1VBQUksUUFBUSxNQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDdkI7ZUFBQSxBQUFTLEFBRVQ7O1lBQUEsQUFBSyxTQUFTLEVBQUMsT0FBZixBQUFjLEFBQ2Y7QUFsTGtCOztVQUFBLEFBb0xuQixtQkFBbUIsVUFBQSxBQUFDLE1BQUQsQUFBTyxRQUFXLEFBRW5DOztVQUFNLE9BQU4sQUFDQTtjQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7Y0FBQSxBQUFRLElBQVIsQUFBWSxBQUNaO2NBQUEsQUFBUSxJQUFJLEtBQVosQUFBWSxBQUFLLEFBRWpCOztVQUFNLGNBQU4sQUFBb0IsQUFFcEI7O2tCQUFBLEFBQVksY0FBYyxFQUFDLFNBQVMsS0FBVixBQUFVLEFBQUssVUFBVSxlQUFlLEtBQXhDLEFBQXdDLEFBQUssZ0JBQWdCLFlBQXZGLEFBQTBCLEFBQXlFLEFBQ25HO2tCQUFBLEFBQVksWUFBWixBQUF3QixBQUN4QjtrQkFBQSxBQUFZLFdBQVosQUFBdUIsQUFDdkI7a0JBQUEsQUFBWSxXQUFXLEtBQXZCLEFBQXVCLEFBQUssQUFDNUI7a0JBQUEsQUFBWSxXQUFXLFNBQVMsS0FBaEMsQUFBdUIsQUFBUyxBQUFLLEFBQ3JDO2tCQUFBLEFBQVksY0FBWixBQUEwQixBQUUxQjs7WUFBQSxBQUFLLFNBQVMsRUFBQyxXQUFmLEFBQWMsQUFBWSxBQUUxQjs7WUFBQSxBQUFLLFdBQUwsQUFBZ0IsV0FBVyxLQUEzQixBQUFnQyxJQUFoQyxBQUFvQyxBQUVwQzs7c0JBQUEsQUFBTTtnQkFDSSx1QkFBQSxBQUFHLElBQUgsQUFBTyxRQUR1RSxBQUMvRCxBQUN2QjtlQUFPLEtBRitFLEFBRS9FLEFBQUssQUFDWjtxQkFBYSxLQUhmLEFBQXdGLEFBR3pFLEFBQUs7O0FBSG9FLEFBQ3RGLFNBREYsQUFLRyxLQUFLLFVBQUEsQUFBVSxVQUFVLEFBRTFCOztZQUFJLFNBQUEsQUFBUyxVQUFiLEFBQXVCLEtBQUssQUFFeEI7O2VBQUEsQUFBSyxTQUFTLEVBQUMsV0FBZixBQUFjLEFBQVksQUFDN0I7QUFFRjtBQVpELEFBY0Q7QUF0TmtCOztVQUFBLEFBd05uQixzQkFBc0IsVUFBQSxBQUFDLFFBQUQsQUFBUyxRQUFXLEFBQ3hDO1VBQU0sT0FBTixBQUVBOztZQUFBLEFBQUssU0FBUyxFQUFDLFdBQWYsQUFBYyxBQUFZLEFBQzFCO3NCQUFBLEFBQU0sMkRBQU4sQUFBK0Q7Z0JBQ3JELHVCQUFBLEFBQUcsSUFBSCxBQUFPLFFBRGpCLEFBQWlGLEFBQ3hEOztBQUR3RCxBQUMvRSxTQURGLEFBR0csS0FBSyxVQUFBLEFBQVUsVUFBVSxBQUUxQjs7WUFBSSxTQUFBLEFBQVMsVUFBYixBQUF1QixLQUFLLEFBRXhCOztlQUFBLEFBQUssU0FBUyxFQUFDLFdBQWYsQUFBYyxBQUFZLEFBQzdCO0FBRUY7QUFWRCxBQVlEO0FBeE9rQjs7VUFBQSxBQTBPbkIsV0FBVyxVQUFBLEFBQUMsTUFBRCxBQUFPLE9BQVUsQUFFMUI7O1VBQU0sT0FBTixBQUVBOztZQUFBLEFBQUssU0FBUyxFQUFDLFdBQWYsQUFBYyxBQUFZLEFBRTFCOztjQUFBLEFBQVEsSUFBUixBQUFZLEFBRVo7O3NCQUFBLEFBQU0sMkRBQXlELEtBQS9ELEFBQW9FO2dCQUMxRCx1QkFBQSxBQUFHLElBQUgsQUFBTyxRQURnRSxBQUN4RCxBQUN2QjtpQkFGRixBQUFpRixBQUV0RTtBQUZzRSxBQUMvRSxTQURGLEFBR0csS0FBSyxVQUFBLEFBQVUsVUFBVSxBQUUxQjs7WUFBSSxTQUFBLEFBQVMsVUFBYixBQUF1QixLQUFLLEFBQzFCO2VBQUEsQUFBSyxnQkFBZ0IsdUJBQUEsQUFBRyxJQUFILEFBQU8sUUFBNUIsQUFBb0MsQUFFcEM7O2VBQUEsQUFBSyxXQUFMLEFBQWdCLGVBQWUsS0FBL0IsQUFBb0MsSUFBcEMsQUFBd0MsQUFDekM7QUFFRjtBQVhELFNBQUEsQUFXRyxNQUFNLFVBQUEsQUFBVSxPQUFPLEFBRXhCOztnQkFBQSxBQUFRLElBQVIsQUFBWSxBQUViO0FBZkQsU0FBQSxBQWVHLEtBQUssWUFBWSxBQUNsQjthQUFBLEFBQUssQUFDTDthQUFBLEFBQUssU0FBUyxFQUFDLFdBQWYsQUFBYyxBQUFZLEFBQzdCO0FBbEJDLEFBb0JEO0FBdFFrQjs7VUFBQSxBQXdRbkIsWUFBWSxVQUFBLEFBQUMsUUFBRCxBQUFTLGNBQVQsQUFBdUIsY0FBdkIsQUFBcUMsVUFBckMsQUFBK0MsYUFBZ0IsQUFDekU7VUFBTSxPQUFOLEFBQ0E7WUFBQSxBQUFLLFNBQVMsRUFBQyxjQUFmLEFBQWMsQUFBZSxBQUU3Qjs7VUFBTSxNQUFNLFlBQVosQUFBd0IsQUFFeEI7O2NBQUEsQUFBUSxJQUFSLEFBQVksUUFBWixBQUFvQixjQUFwQixBQUFrQyxjQUFsQyxBQUFnRCxVQUFoRCxBQUEwRCxBQUUxRDs7VUFBSSxnQkFBQSxBQUFnQixhQUFhLGdCQUE3QixBQUE2QyxpQkFBa0IsdUJBQUEsQUFBRyxJQUFILEFBQU8sUUFBUCxBQUFlLFFBQWYsQUFBdUIsUUFBUSx1QkFBQSxBQUFHLElBQUgsQUFBTyxRQUFQLEFBQWUsUUFBakgsQUFBeUgsTUFBTyxBQUc5SDs7WUFBSSxZQUFBLEFBQVksU0FBWixBQUFxQixNQUFNLFlBQUEsQUFBWSxlQUEzQyxBQUEwRCxJQUFJLEFBRTVEOztnQkFBQSxBQUFLLFNBQVMsRUFBQyxXQUFmLEFBQWMsQUFBWSxBQUMxQjswQkFBQSxBQUFNLDJEQUFOLEFBQStEO29CQUNyRCx1QkFBQSxBQUFHLElBQUgsQUFBTyxRQUQyRCxBQUNuRCxBQUN2QjttQkFGRixBQUE0RSxBQUVuRTtBQUZtRSxBQUMxRSxhQURGLEFBR0csS0FBSyxVQUFBLEFBQVUsVUFBVSxBQUUxQjs7Z0JBQUksU0FBQSxBQUFTLFVBQWIsQUFBdUIsS0FBSyxBQUV4Qjs7bUJBQUEsQUFBSyxTQUFTLEVBQUMsV0FBZixBQUFjLEFBQVksQUFDN0I7QUFFRjtBQVZELEFBWUQ7QUFmRCxlQWVPLEFBQ0w7Z0JBQUEsQUFBTSxBQUNOO2dCQUFBLEFBQUssS0FBTCxBQUFVLFFBQVYsQUFBa0IsY0FBbEIsQUFBZ0MsQUFDakM7QUFJRjtBQXpCRCxpQkF5QlcsZ0JBQUEsQUFBZ0IsaUJBQWlCLGdCQUFyQyxBQUFxRCxlQUFlLEFBRXpFOztjQUFBLEFBQUssU0FBUyxFQUFDLGFBQWYsQUFBYyxBQUFjLEFBRTdCO0FBSk0sT0FBQSxVQUlJLGdCQUFBLEFBQWdCLGlCQUFpQixnQkFBakMsQUFBaUQsZUFBZSxZQUFwRSxBQUFnRixZQUFZLEFBRWpHOztjQUFBLEFBQUssU0FBUyxFQUFDLFdBQWYsQUFBYyxBQUFZLEFBQzFCO3dCQUFBLEFBQU0sMkRBQU4sQUFBK0Q7a0JBQ3JELHVCQUFBLEFBQUcsSUFBSCxBQUFPLFFBRGpCLEFBQTZFLEFBQ3BEO0FBRG9ELEFBQzNFLFdBREYsQUFFRyxLQUFLLFVBQUEsQUFBVSxVQUFVLEFBRTFCOztjQUFJLFNBQUEsQUFBUyxVQUFiLEFBQXVCLEtBQUssQUFFeEI7O2lCQUFBLEFBQUssU0FBUyxFQUFDLFdBQWYsQUFBYyxBQUFZLEFBQzdCO0FBRUY7QUFURCxBQVdEO0FBZE0sT0FBQSxNQWNBLElBQUksZ0JBQUosQUFBb0IsY0FBYyxBQUV4QyxDQUZNLE9BRUEsQUFFTDs7Y0FBQSxBQUFLLEtBQUwsQUFBVSxRQUFWLEFBQWtCLGNBQWxCLEFBQWdDLEFBQ2pDO0FBRUY7QUFsVWtCOztVQUFBLEFBb1VuQixnQkFBZ0IsVUFBQSxBQUFDLGFBQWdCLEFBQy9CO2NBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtjQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7WUFBQSxBQUFLLFNBQVMsRUFBQyxjQUFmLEFBQWMsQUFBZSxBQUM3QjtZQUFBLEFBQUssV0FBVyxZQUFoQixBQUFnQixBQUFZLFdBQVcsWUFBdkMsQUFBdUMsQUFBWSxXQUFuRCxBQUE4RCxBQUUvRDtBQTFVa0I7O1VBQUEsQUE2VW5CLGdCQUFnQixZQUFBOzZCQUFNLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxPQUFBLEVBQU4sQUFBTTtBQTdVSDs7VUFBQSxBQStVbkIsV0FBVyxnQkFBNEM7VUFBekMsQUFBeUMsYUFBekMsQUFBeUM7VUFBbEMsQUFBa0MsZUFBbEMsQUFBa0M7VUFBekIsQUFBeUIsZUFBekIsQUFBeUI7VUFBaEIsQUFBZ0IsaUJBQWhCLEFBQWdCLEFBQ3ZEOztVQUFBLEFBQUksV0FBVyxBQUNiO0FBQ0U7b0RBQU8sQUFBTTs7c0JBQU47d0JBQVAsQUFBTyxBQUNSO0FBRFE7QUFBQSxTQUFBO0FBRlgsYUFHUyxBQUNMO0FBQ0E7K0JBQU8sY0FBQTs7c0JBQUE7d0JBQUEsQUFBTztBQUFQO0FBQUEsU0FBQSxFQUFBLE9BQWUsS0FBZixTQUF5QixLQUFoQyxBQUFPLEFBQ1I7QUFDRjtBQXZWa0I7O1VBQUEsQUF5Vm5CLGVBQWUsVUFBQSxBQUFDLE1BQVMsQUFDdkI7VUFBQSxBQUFJLE1BQU0sQUFDUjtjQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsUUFBUSxFQUFDLE1BQUQsQUFBTyxhQUFhLFlBQXBCLEFBQWdDLGVBQWUsVUFBL0MsQUFBeUQsZUFBZSxRQUFRLEtBQWhGLEFBQXFGLElBQUksT0FBckgsQUFBNEIsQUFBZ0csQUFDN0g7QUFFRjtBQTlWa0I7O1VBQUEsQUFnV25CLG9CQUFvQixZQUFNLEFBRXhCOztVQUFNLE9BQU4sQUFFQTs7c0JBQUEsQUFBTTtnQkFDSSx1QkFBQSxBQUFHLElBQUgsQUFBTyxRQURqQixBQUE2RixBQUNwRTs7QUFEb0UsQUFDM0YsU0FERixBQUdHLEtBQUssVUFBQSxBQUFVLFVBQVUsQUFFMUI7O1lBQUksU0FBQSxBQUFTLEtBQVQsQUFBYyxVQUFsQixBQUE0QixHQUFHLEFBQzdCO2VBQUEsQUFBSyxTQUFTLEVBQUMsWUFBZixBQUFjLEFBQWEsQUFDNUI7QUFGRCxlQUVPLEFBQ0w7Z0JBQUEsQUFBTSxBQUNQO0FBQ0Y7QUFWRCxBQWFEO0FBalhrQjs7VUFBQSxBQW1YbkIsb0JBQW9CLFlBQU0sQUFFeEI7O1VBQU0sT0FBTixBQUVBOztZQUFBLEFBQUssU0FBUyxFQUFDLFdBQWYsQUFBYyxBQUFZLEFBRTFCOztzQkFBQSxBQUFNLElBQU4sQUFBVSx3R0FBVixBQUNNLEtBQUssVUFBQSxBQUFTLFVBQVMsQUFHdEI7O1lBQUksU0FBQSxBQUFTLFVBQWIsQUFBdUIsS0FBSyxBQUUxQjs7a0JBQUEsQUFBUSxJQUFJLFNBQVosQUFBcUIsQUFFckI7O2NBQU0sc0JBQWEsQUFBUyxLQUFULEFBQWMsSUFBSSxnQkFBUSxBQUUzQzs7bUNBQU8sQUFBQyxzQ0FBVyxTQUFTLEtBQXJCLEFBQTBCLEtBQUssY0FBYyxLQUE3QyxBQUFrRCxjQUFjLGNBQWhFLEFBQThFOzBCQUE5RTs0QkFBUCxBQUFPLEFBRVI7QUFGUTthQUFBO0FBRlQsQUFBbUIsQUFNbkIsV0FObUI7O2VBTW5CLEFBQUssU0FBUyxFQUFDLFdBQWYsQUFBYyxBQUFZLEFBQzFCO2VBQUEsQUFBSyxTQUFTLEVBQUMsV0FBZixBQUFjLEFBQVksQUFDNUI7QUFFRjtBQWxCTCxBQW9CRDtBQTdZa0IsQUFHbkI7O1VBQUEsQUFBSztzQkFBUSxBQUNLLEFBQ1o7a0JBRk8sQUFFSyxBQUNaO21CQUhPLEFBR00sQUFDYjtrQkFKTyxBQUlLLEFBQ1o7Z0JBTE8sQUFLRyxBQUNWO29CQU5PLEFBTU8sQUFDZDs0QkFQTyxBQU9lLEFBQ3RCO2lCQUFXLE1BQUEsQUFBSyxNQVJULEFBUWUsQUFDdEI7YUFUTyxBQVNBLEFBQ1A7d0JBVk8sQUFVVyxBQUNsQjt3QkFYTyxBQVdXLEFBQ2xCO2lCQVpPLEFBWUksQUFDWDtrQkFiTyxBQWFLLEFBQ1o7a0JBZE8sQUFjSyxBQUNaO2lCQWZOLEFBQWEsQUFlSSxBQUlmOztBQW5CVyxBQUNYOztZQWtCQSxBQUFRLElBQUksTUFBQSxBQUFLLE1BdEJBLEFBc0JqQixBQUF1Qjs7V0FJekI7Ozs7O3dDQUVvQixBQUNsQjtXQUFBLEFBQUssQUFFTDs7VUFBTSxPQUFOLEFBQWEsQUFFYjs7Y0FBQSxBQUFRLElBQVIsQUFBWSxBQUNaO2NBQUEsQUFBUSxJQUFJLGVBQWUsdUJBQUEsQUFBRyxJQUFILEFBQU8sUUFBdEIsQUFBOEIsS0FBOUIsQUFBbUMsTUFBTSx1QkFBQSxBQUFHLElBQUgsQUFBTyxRQUE1RCxBQUFvRSxBQUVwRTs7c0JBQUEsQUFBTTtnQkFDSSx1QkFBQSxBQUFHLElBQUgsQUFBTyxRQURqQixBQUE2RixBQUNwRTs7QUFEb0UsQUFDM0YsU0FERixBQUdHLEtBQUssVUFBQSxBQUFVLFVBQVUsQUFFMUI7O1lBQUksU0FBQSxBQUFTLEtBQVQsQUFBYyxTQUFsQixBQUEyQixHQUFHLEFBRTVCOztrQkFBQSxBQUFRLElBQUksU0FBWixBQUFxQixBQUNyQjtlQUFBLEFBQUssU0FBUyxFQUFDLFlBQWYsQUFBYyxBQUFhLEFBQzNCO2VBQUEsQUFBSyxTQUFTLEVBQUMsWUFBWSxTQUEzQixBQUFjLEFBQXNCLEFBQ3BDO2VBQUEsQUFBSyxBQUNMO1dBQUMsQUFBc0MscUNBQ3hDO0FBQ0Y7QUFiRCxBQWlCRDs7Ozt5Q0FFb0IsQUFFcEI7Ozs2QkF1VlE7bUJBQUE7O21CQUt3QixLQUx4QixBQUs2QjtVQUw3QixBQUtDLG9CQUxELEFBS0M7VUFMRCxBQUthLGdCQUxiLEFBS2E7b0JBQ1UsS0FOdkIsQUFNNEI7VUFONUIsQUFNQyxzQkFORCxBQU1DO1VBTkQsQUFNYyxlQU5kLEFBTWMsQUFFckI7O1VBQU0sV0FBVyxDQUNYLEVBQUMsS0FBRCxBQUFLLFVBQVUsT0FBTyxFQUFDLElBQUQsQUFBSyxZQUFZLE1BQXZDLEFBQXNCLEFBQXVCLFlBQVcsTUFEN0MsQUFDWCxBQUE2RCxZQUM3RCxFQUFDLEtBQUQsQUFBSyxPQUFPLE9BQU8sRUFBQyxJQUFELEFBQUssWUFBWSxNQUFwQyxBQUFtQixBQUF1QixTQUFRLE1BRnZDLEFBRVgsQUFBdUQsU0FDdkQsRUFBQyxLQUFELEFBQUssTUFBTSxPQUFPLEVBQUMsSUFBRCxBQUFLLFlBQVksTUFBbkMsQUFBa0IsQUFBdUIsUUFBTyxNQUh0RCxBQUFpQixBQUdYLEFBQXFELEFBSzNEOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUVFO0FBRkY7QUFBQSxPQUFBLGtCQUVFLEFBQUMsMkNBQVMsYUFBYSx1QkFBQSxBQUFHLElBQUgsQUFBTyxRQUE5QixBQUFzQyxNQUFNLFFBQTVDLE1BQW1ELFdBQW5ELE1BQTZELFNBQTdELEFBQXNFLFVBQVUsVUFBVSxLQUExRixBQUErRjtvQkFBL0Y7c0JBRkYsQUFFRSxBQUNBO0FBREE7MEJBQ0EsQUFBQztvQkFDZSxLQUFBLEFBQUssTUFEckIsQUFDMkIsQUFDdkI7b0JBQVksS0FBQSxBQUFLLE1BRnJCLEFBRTJCLEFBQ3ZCO29CQUFZLEtBQUEsQUFBSyxNQUhyQixBQUcyQixBQUN2QjsyQkFBbUIsS0FKdkIsQUFJNEI7O29CQUo1QjtzQkFIRixBQUdFLEFBTUE7QUFOQTtBQUNJLDBCQUtKLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0M7QUFERDtBQUFBLGNBQ0MsQUFBSyxNQVZSLEFBU0UsQUFDWSxBQUVYLGlCQVpILEFBWVEsQUFPTiw4QkFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxnQ0FBSyxBQUFHLElBQUgsQUFBTyxRQUFaLEFBQW9CLElBQU0sNkJBQUEsQUFBRyxJQUFILEFBQU8sUUFBakMsQUFBeUMsTUFuQjNDLEFBbUJFLEFBR0Esc0JBQUEsQUFBQyx1Q0FBTSxXQUFQLEFBQ007a0JBRE4sQUFFTTttQkFBVyxLQUZqQixBQUVzQixBQUNoQjt3QkFBZ0IsS0FIdEIsQUFHMkIsQUFDckI7dUJBSk4sQUFJcUIsQUFDZjtlQUFPLEVBQUMsaUJBTGQsQUFLYSxBQUFrQixBQUN6QjtxQkFBYSxLQUFBLEFBQUssV0FOeEIsQUFNbUIsQUFBZ0IsQUFDN0I7c0JBQWMsS0FQcEIsQUFPeUIsQUFFbkI7O3VCQUFlLEtBVHJCLEFBUzBCLEFBQ3BCO2NBQU0sS0FBQSxBQUFLLE1BVmpCLEFBVXVCO29CQVZ2QjtzQkF0QkYsQUFzQkUsQUFZQTtBQVpBOzBCQVlBLEFBQUM7OEJBQ3lCLDJDQUFlLEFBQUM7aUJBQUEsQUFBSyxTQUFTLEVBQUMsY0FBZixBQUFjLEFBQWUsQUFBYztBQURyRixBQUVJO29CQUFZLEtBQUEsQUFBSyxNQUZyQixBQUUyQixBQUN2QjtxQkFBYSxLQUhqQixBQUdzQixBQUNsQjtzQkFBYyxLQUFBLEFBQUssTUFKdkIsQUFJNkIsQUFDekI7dUJBQWUsS0FMbkIsQUFLd0I7O29CQUx4QjtzQkFsQ0YsQUFrQ0UsQUFTQTtBQVRBO0FBQ0ksMEJBUUosQUFBQyx3Q0FBTSxNQUFQLEFBQVksUUFBTyxNQUFuQixBQUF5QixhQUFhLFNBQVMsS0FBL0MsQUFBb0Q7b0JBQXBEO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSx3Q0FBQyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7aUJBQUQsQUFDWSxBQUNSO3NCQUFjLEtBQUEsQUFBSyxNQUZ2QixBQUU2QixBQUN6QjtpQkFBUyxLQUhiLEFBR2tCLEFBQ2Q7OEJBQXNCLDJDQUFlLEFBQUM7aUJBQUEsQUFBSyxTQUFTLEVBQUMsY0FBZixBQUFjLEFBQWUsQUFBYztBQUpyRixBQUtJO21CQUFXLHlDQUFBO2lCQUF3QixPQUFBLEFBQUssU0FBUyxFQUFDLHNCQUF2QyxBQUF3QixBQUFjO0FBTHJELEFBTUk7a0JBQVUsS0FOZCxBQU1tQjs7O29CQU5uQjtzQkEvQ1IsQUFDRSxBQTJDRSxBQUVFLEFBQ0UsQUFjVDtBQWRTO0FBQ0k7Ozs7O0FBbmRRLEEsQUFvZXhCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlRvZG9Cb2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRGFuaWVsL0Rlc2t0b3AvcGxheWdyb3VuZDIifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/Daniel/Desktop/playground2/components/TodoBoard.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Daniel/Desktop/playground2/components/TodoBoard.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5mNTliNjFmZmNhOThjZjVkMTAyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub2RvQm9hcmQuanM/MzYwNWJhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb2FyZCBmcm9tICdyZWFjdC10cmVsbG8nXG4vLyBpbXBvcnQge0NhcmQsIEdyaWQsIEJ1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHtDb250YWluZXIsR3JpZCwgRGltbWVyLCBMb2FkZXIsIFNlZ21lbnQsIEJ1dHRvbiwgQ2FyZCwgSW1hZ2UsIFRhYiwgTW9kYWwsIEhlYWRlciwgVGV4dEFyZWEsICBJbnB1dEZvcm1hdCwgRm9ybSwgRHJvcGRvd259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuaW1wb3J0IENvdW50ZG93biBmcm9tICdyZWFjdC1jb3VudGRvd24tbm93JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgRHJvcHpvbmVTM1VwbG9hZGVyIGZyb20gJ3JlYWN0LWRyb3B6b25lLXMzLXVwbG9hZGVyJztcblxuXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuLi9ldGhlcmV1bS9wcm9qZWN0JztcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xuXG5pbXBvcnQgRmlsZVVwbG9hZCBmcm9tICcuL0ZpbGVVcGxvYWQnO1xuaW1wb3J0IENvbnRyaWJ1dGVGb3JtIGZyb20gJy4vQ29udHJpYnV0ZUZvcm0nO1xuaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dCc7XG5pbXBvcnQgRGV0YWlsUGFnZU1vZGFsIGZyb20gJy4vRGV0YWlsUGFnZU1vZGFsJztcblxuaW1wb3J0IFRpbWVyIGZyb20gJy4vVGltZXInO1xuaW1wb3J0IENvdW50VGltZXIgZnJvbSAnLi9Db3VudFRpbWVyJ1xuaW1wb3J0IFZvdGluZ0xpc3RNb2RhbCBmcm9tICcuL1ZvdGluZ0xpc3RNb2RhbCc7XG5pbXBvcnQgbHMgZnJvbSAnbG9jYWwtc3RvcmFnZSdcblxuY2xhc3MgVG90b0JvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdFx0YmFja2xvZ1RpY2tldHM6IG51bGwsXG4gICAgICAgIG9wZW5EZXRhaWw6ICcnLFxuICAgICAgICBvcGVuU3Rha2luZzogZmFsc2UsXG4gICAgICAgIG9wZW5Wb3Rpbmc6IGZhbHNlLFxuICAgICAgICBldmVudEJ1czogbnVsbCxcbiAgICAgICAgc2VsZWN0ZWRDYXJkOiAnJyxcbiAgICAgICAgaXNTZWxlY3RlZENhcmRTdGFrZWQ6IGZhbHNlLFxuICAgICAgICBib2FyZERhdGE6IHRoaXMucHJvcHMuYm9hcmREYXRhLFxuICAgICAgICBjb3VudDogMTAsXG4gICAgICAgIHJlbWFpbmluZ01pbnV0ZXM6IDAsXG4gICAgICAgIHJlbWFpbmluZ1NlY29uZHM6IDAsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgIHZvdGluZ0RvbmU6IHRydWUsXG4gICAgICAgIHZvdGluZ0xpc3Q6IG51bGwsXG4gICAgICAgIGNvdW50ZG93bjogbnVsbFxuXG5cdFx0fTtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYm9hcmREYXRhKTtcblxuXG5cblx0fVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMub25Db3VuZG93bkhhbmRsZXIoKTtcblxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgY29uc29sZS5sb2coJ1RvZG9Cb2FyZCBjb21wb25lbnREaWRNb3VudCcpO1xuICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudGx5IFwiICsgbHMuZ2V0KCdVc2VyJykuaWQgKyBcIiBcIiArIGxzLmdldCgnVXNlcicpLnJvbGUpO1xuXG4gICAgYXhpb3MucG9zdChgaHR0cHM6Ly9zbm93YmFsbC1hcGktYmFja2VuZC5oZXJva3VhcHAuY29tL3Byb2plY3RzL3Byb2plY3RfWHdQcDl4YXovdm90ZS1saXN0YCwge1xuICAgICAgdXNlcklkOiBscy5nZXQoJ1VzZXInKS5pZFxuXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoID4gMCkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBzZWxmLnNldFN0YXRlKHt2b3RpbmdEb25lOiBmYWxzZX0pO1xuICAgICAgICBzZWxmLnNldFN0YXRlKHt2b3RpbmdMaXN0OiByZXNwb25zZS5kYXRhfSk7XG4gICAgICAgIHNlbGYub25Wb3RpbmdMaXN0KCk7XG4gICAgICAgIHsvKnNlbGYuc2V0U3RhdGUoe2lzTG9hZGluZzogdHJ1ZX0pOyovfVxuICAgICAgfVxuICAgIH0pO1xuXG5cblxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuXG4gIH1cblxuICBvblVzZXJTZWxlY3RIYW5kbGVyID0gKGV2ZW50LCBkYXRhKSA9PiB7XG5cbiAgICBjb25zb2xlLmxvZyhkYXRhLnZhbHVlKTtcbiAgICBscy5zZXQoJ1VzZXInLCBkYXRhLnZhbHVlKTtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cbiAgfVxuXG4gIG9uVm90aW5nTGlzdCA9ICgpID0+IHtcblxuICAgIGxldCBuVm90ZU5lZWRlZCA9IDA7XG5cbiAgICBjb25zdCB2b3RpbmdDYXJkcyA9IHRoaXMuc3RhdGUudm90aW5nTGlzdFxuXG4gICAgdm90aW5nQ2FyZHMubWFwKGNhcmQgPT4ge1xuXG4gICAgICBpZiAoIWNhcmQudm90ZWQpIHtcbiAgICAgICAgblZvdGVOZWVkZWQrKztcbiAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgaWYgKG5Wb3RlTmVlZGVkID09IDApIHtcblxuXG4gICAgICB0aGlzLnNldFN0YXRlKHt2b3RpbmdEb25lOiB0cnVlfSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlblZvdGluZzogdHJ1ZX0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIm5Wb3RlTmVlZGVkOiBcIiArIG5Wb3RlTmVlZGVkKTtcblxuICB9XG5cbiAgc2V0RXZlbnRCdXMgPSAoaGFuZGxlKSA9PiB7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe2V2ZW50QnVzOiBoYW5kbGV9KTtcbiAgfVxuXG4gIG9uRGF0YUNoYW5nZUhhbmRsZXIgPSAobmV3RGF0YSkgPT57XG5cbiAgICBjb25zb2xlLmxvZygnZGF0YSBjaGFuZ2VkJyk7XG4gICAgY29uc29sZS5sb2cobmV3RGF0YSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Ym9hcmREYXRhOiBuZXdEYXRhfSlcblxuICB9XG5cbiAgc2hvd0RldGFpbCA9IGRpbW1lciA9PiAoY2FyZElkLCBtZXRhZGF0YSwgbGFuZUlkKSA9PiB7XG5cbiAgICBjb25zb2xlLmxvZyhtZXRhZGF0YSk7XG4gICAgbWV0YWRhdGFbJ2xhbmVJZCddID0gbGFuZUlkO1xuICAgIG1ldGFkYXRhWydjYXJkSWQnXSA9IGNhcmRJZDtcbiAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZENhcmQ6IG1ldGFkYXRhfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRpbW1lciwgb3BlbkRldGFpbDogbGFuZUlkIH0pO1xuXG4gIH1cblxuICBjbG9zZURldGFpbCA9ICgpID0+IHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zb2xlLmxvZygnY2xvc2VkZXRhaWwnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNlbGVjdGVkQ2FyZCk7XG5cblxuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkQ2FyZC5sYW5lSWQgIT0gKCdJTl9SRVZJRVcnIHx8ICdJTl9DT01QTEVURScpKSB7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTG9hZGluZzogdHJ1ZX0pO1xuXG4gICAgICBjb25zdCBjYXJkID0gdGhpcy5zdGF0ZS5zZWxlY3RlZENhcmQ7XG5cbiAgICAgIGF4aW9zLnBvc3QoYGh0dHBzOi8vc25vd2JhbGwtYXBpLWJhY2tlbmQuaGVyb2t1YXBwLmNvbS9jYXJkcy8ke2NhcmQuY2FyZElkfS91cGRhdGVgLCB7XG4gICAgICAgIHVzZXJJZDogbHMuZ2V0KCdVc2VyJykuaWQsXG4gICAgICAgIHRpdGxlOiBjYXJkWyd0aXRsZSddLFxuICAgICAgICBkZXNjcmlwdGlvbjogY2FyZFsnZGVzY3JpcHRpb24nXVxuXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xuXG4gICAgICAgICAgICBzZWxmLnVwZGF0ZUNhcmQoY2FyZC5sYW5lSWQsIGNhcmQuY2FyZElkLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe2lzTG9hZGluZzogZmFsc2V9KTtcbiAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoeyBvcGVuRGV0YWlsOiBmYWxzZSB9KVxuXG4gICAgICAgICAgICB7LypzZWxmLnN0YXRlLmJvYXJkRGF0YS5sYW5lc1tdKi99XG4gICAgICAgICAgICB7Lyp0aGlzLnN0YSByZXNwb25zZS5kYXRhKi99XG4gICAgICAgIH1cblxuICAgICAgfSlcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbkRldGFpbDogZmFsc2UgfSlcbiAgICB9XG5cblxuXG4gIH1cblxuICB1cGRhdGVDYXJkID0gKHRhcmdldExhbmVJZCwgY2FyZElkLCB1cGRhdGVkQ2FyZCkgPT4ge1xuXG4gICAgdGhpcy5zdGF0ZS5ldmVudEJ1cy5wdWJsaXNoKHt0eXBlOiAnUkVNT1ZFX0NBUkQnLCBsYW5lSWQ6IHRhcmdldExhbmVJZCwgY2FyZElkOiBjYXJkSWR9KTtcbiAgICB0aGlzLnN0YXRlLmV2ZW50QnVzLnB1Ymxpc2goe3R5cGU6ICdBRERfQ0FSRCcsIGxhbmVJZDogdGFyZ2V0TGFuZUlkLCBjYXJkOiB1cGRhdGVkQ2FyZH0pO1xuXG4gIH1cbiAgdW5kbyA9IChjYXJkSWQsIHNvdXJjZUxhbmVJZCwgdGFyZ2V0TGFuZUlkKSA9PiB0aGlzLnN0YXRlLmV2ZW50QnVzLnB1Ymxpc2goe3R5cGU6ICdNT1ZFX0NBUkQnLCBmcm9tTGFuZUlkOiB0YXJnZXRMYW5lSWQsIHRvTGFuZUlkOiBzb3VyY2VMYW5lSWQsIGNhcmRJZDogY2FyZElkLCBpbmRleDogMH0pXG4gIHNob3dTdGFraW5nID0gc2l6ZSA9PiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2l6ZSwgb3BlblN0YWtpbmc6IHRydWUgfSk7XG4gIGNsb3NlU3Rha2luZyA9ICgpID0+IHtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuU3Rha2luZzogZmFsc2UgfSk7XG5cbiAgfVxuXG5cbiAgY291bnREb3duID0gKCkgPT4ge1xuXG4gICAgbGV0IGNvdW50ID0gdGhpcy5zdGF0ZS5jb3VudDtcbiAgICBjb3VudCAtPSAxO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y291bnR9KTtcbiAgfVxuXG4gIG9uQ2FyZEFkZEhhbmRsZXIgPSAoY2FyZCwgbGFuZUlkKSA9PiB7XG5cbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zb2xlLmxvZygnb25DYXJkQWRkSGFuZGxlcicpO1xuICAgIGNvbnNvbGUubG9nKGNhcmQpO1xuICAgIGNvbnNvbGUubG9nKGNhcmRbJ2xhYmVsJ10pO1xuXG4gICAgY29uc3QgdXBkYXRlZENhcmQgPSBjYXJkO1xuXG4gICAgdXBkYXRlZENhcmRbJ21ldGFkYXRhJ10gPSB7J3RpdGxlJzogY2FyZFsndGl0bGUnXSwgJ2Rlc2NyaXB0aW9uJzogY2FyZFsnZGVzY3JpcHRpb24nXSwgJ2NvbW1lbnRzJzogW119O1xuICAgIHVwZGF0ZWRDYXJkWydsYW5lSWQnXSA9IGxhbmVJZDtcbiAgICB1cGRhdGVkQ2FyZFsnc3RhdGUnXSA9IGxhbmVJZDtcbiAgICB1cGRhdGVkQ2FyZFsnbGFiZWwnXSA9IGNhcmRbJ2xhYmVsJ107XG4gICAgdXBkYXRlZENhcmRbJ3BvaW50J10gPSBwYXJzZUludChjYXJkWydsYWJlbCddKTtcbiAgICB1cGRhdGVkQ2FyZFsnY29tbWVudHMnXSA9IFtdO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2FkaW5nOiB0cnVlfSk7XG5cbiAgICB0aGlzLnVwZGF0ZUNhcmQoJ0JBQ0tMT0cnLCBjYXJkLmlkLCB1cGRhdGVkQ2FyZCk7XG5cbiAgICBheGlvcy5wb3N0KGBodHRwczovL3Nub3diYWxsLWFwaS1iYWNrZW5kLmhlcm9rdWFwcC5jb20vcHJvamVjdHMvcHJvamVjdF9Yd1BwOXhhei9jYXJkYCwge1xuICAgICAgdXNlcklkOiBscy5nZXQoJ1VzZXInKS5pZCxcbiAgICAgIHRpdGxlOiBjYXJkWyd0aXRsZSddLFxuICAgICAgZGVzY3JpcHRpb246IGNhcmRbJ2Rlc2NyaXB0aW9uJ11cblxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XG5cbiAgICAgICAgICBzZWxmLnNldFN0YXRlKHtpc0xvYWRpbmc6IGZhbHNlfSk7XG4gICAgICB9XG5cbiAgICB9KVxuXG4gIH1cblxuICBvbkNhcmREZWxldGVIYW5kbGVyID0gKGNhcmRJZCwgbGFuZUlkKSA9PiB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtpc0xvYWRpbmc6IHRydWV9KTtcbiAgICBheGlvcy5wb3N0KGBodHRwczovL3Nub3diYWxsLWFwaS1iYWNrZW5kLmhlcm9rdWFwcC5jb20vY2FyZHMvJHtjYXJkSWR9L2FyY2hpdmVgLCB7XG4gICAgICB1c2VySWQ6IGxzLmdldCgnVXNlcicpLmlkLFxuXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcblxuICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe2lzTG9hZGluZzogZmFsc2V9KTtcbiAgICAgIH1cblxuICAgIH0pXG5cbiAgfVxuXG4gIG9uQXNzaWduID0gKGNhcmQsIHN0YWtlKSA9PiB7XG5cbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuc2V0U3RhdGUoe2lzTG9hZGluZzogdHJ1ZX0pO1xuXG4gICAgY29uc29sZS5sb2coc3Rha2UpO1xuXG4gICAgYXhpb3MucG9zdChgaHR0cHM6Ly9zbm93YmFsbC1hcGktYmFja2VuZC5oZXJva3VhcHAuY29tL2NhcmRzLyR7Y2FyZC5pZH0vYXNzaWduYCwge1xuICAgICAgdXNlcklkOiBscy5nZXQoJ1VzZXInKS5pZCxcbiAgICAgIHN0YWtpbmc6IHN0YWtlXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgY2FyZFsnYXNzaWduZWVJZCddID0gbHMuZ2V0KCdVc2VyJykuaWQ7XG5cbiAgICAgICAgc2VsZi51cGRhdGVDYXJkKCdJTl9QUk9HUkVTUycsIGNhcmQuaWQsIGNhcmQpO1xuICAgICAgfVxuXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5vbkNvdW5kb3duSGFuZGxlcigpO1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7aXNMb2FkaW5nOiBmYWxzZX0pO1xuICB9KTtcblxuICB9XG5cbiAgb25EcmFnRW5kID0gKGNhcmRJZCwgc291cmNlTGFuZUlkLCB0YXJnZXRMYW5lSWQsIHBvc2l0aW9uLCBjYXJkRGV0YWlscykgPT4ge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkQ2FyZDogY2FyZERldGFpbHN9KTtcblxuICAgIGNvbnN0IGNpZCA9IGNhcmREZXRhaWxzLmlkO1xuXG4gICAgY29uc29sZS5sb2coY2FyZElkLCBzb3VyY2VMYW5lSWQsIHRhcmdldExhbmVJZCwgcG9zaXRpb24sIGNhcmREZXRhaWxzKTtcblxuICAgIGlmIChzb3VyY2VMYW5lSWQgPT0gJ0JBQ0tMT0cnICYmIHRhcmdldExhbmVJZCA9PSAnTk9UX1NUQVJURUQnICYmIChscy5nZXQoJ1VzZXInKS5yb2xlID09ICdUUE0nIHwgbHMuZ2V0KCdVc2VyJykucm9sZSA9PSAnc3UnKSkge1xuXG5cbiAgICAgIGlmIChjYXJkRGV0YWlscy50aXRsZSAhPSAnJyAmJiBjYXJkRGV0YWlscy5kZXNjcmlwdGlvbiAhPSAnJykge1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTG9hZGluZzogdHJ1ZX0pO1xuICAgICAgICBheGlvcy5wb3N0KGBodHRwczovL3Nub3diYWxsLWFwaS1iYWNrZW5kLmhlcm9rdWFwcC5jb20vY2FyZHMvJHtjaWR9L3JlYWR5YCwge1xuICAgICAgICAgIHVzZXJJZDogbHMuZ2V0KCdVc2VyJykuaWQsXG4gICAgICAgICAgcG9pbnQ6IDVcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XG5cbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7aXNMb2FkaW5nOiBmYWxzZX0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydCgn66qo65OgIOuCtOyaqeydhCDssYTsm4zslbwg7ZWp64uI64ukLicpO1xuICAgICAgICB0aGlzLnVuZG8oY2FyZElkLCBzb3VyY2VMYW5lSWQsIHRhcmdldExhbmVJZCk7XG4gICAgICB9XG5cblxuXG4gICAgfSBlbHNlIGlmIChzb3VyY2VMYW5lSWQgPT0gJ05PVF9TVEFSVEVEJyAmJiB0YXJnZXRMYW5lSWQgPT0gJ0lOX1BST0dSRVNTJykge1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuU3Rha2luZzogdHJ1ZSB9KTtcblxuICAgIH0gZWxzZSBpZiAoc291cmNlTGFuZUlkID09ICdJTl9QUk9HUkVTUycgJiYgdGFyZ2V0TGFuZUlkID09ICdJTl9SRVZJRVcnICYmIGNhcmREZXRhaWxzLmFzc2lnbmVlSWQpIHtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2FkaW5nOiB0cnVlfSk7XG4gICAgICBheGlvcy5wb3N0KGBodHRwczovL3Nub3diYWxsLWFwaS1iYWNrZW5kLmhlcm9rdWFwcC5jb20vY2FyZHMvJHtjaWR9L3N1Ym1pdGAsIHtcbiAgICAgICAgdXNlcklkOiBscy5nZXQoJ1VzZXInKS5pZFxuICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xuXG4gICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtpc0xvYWRpbmc6IGZhbHNlfSk7XG4gICAgICAgIH1cblxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoc291cmNlTGFuZUlkID09IHRhcmdldExhbmVJZCkge1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy51bmRvKGNhcmRJZCwgc291cmNlTGFuZUlkLCB0YXJnZXRMYW5lSWQpO1xuICAgIH1cblxuICB9XG5cbiAgb25VcGRhdGVkQ2FyZCA9ICh1cGRhdGVkQ2FyZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdhd3MnKTtcbiAgICBjb25zb2xlLmxvZyh1cGRhdGVkQ2FyZClcbiAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZENhcmQ6IHVwZGF0ZWRDYXJkfSk7XG4gICAgdGhpcy51cGRhdGVDYXJkKHVwZGF0ZWRDYXJkWydsYW5lSWQnXSwgdXBkYXRlZENhcmRbJ2NhcmRJZCddLCB1cGRhdGVkQ2FyZCk7XG5cbiAgfVxuXG5cbiAgQ29tcGxldGlvbmlzdCA9ICgpID0+IDxzcGFuPllvdSBhcmUgZ29vZCB0byBnbyE8L3NwYW4+O1xuXG4gIHJlbmRlcmVyID0gKHsgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIGNvbXBsZXRlZCB9KSA9PiB7XG4gIGlmIChjb21wbGV0ZWQpIHtcbiAgICAvLyBSZW5kZXIgYSBjb21wbGV0ZWQgc3RhdGVcbiAgICAgIHJldHVybiA8dGhpcy5Db21wbGV0aW9uaXN0IC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZW5kZXIgYSBjb3VudGRvd25cbiAgICAgIHJldHVybiA8c3Bhbj57aG91cnN9OnttaW51dGVzfTp7c2Vjb25kc308L3NwYW4+O1xuICAgIH1cbiAgfTtcblxuICBvbkNvbXBsZXRpb24gPSAoY2FyZCkgPT4ge1xuICAgIGlmIChjYXJkKSB7XG4gICAgICB0aGlzLnN0YXRlLmV2ZW50QnVzLnB1Ymxpc2goe3R5cGU6ICdNT1ZFX0NBUkQnLCBmcm9tTGFuZUlkOiAnSU5fUFJPR1JFU1MnLCB0b0xhbmVJZDogJ05PVF9TVEFSVEVEJywgY2FyZElkOiBjYXJkLmlkLCBpbmRleDogMH0pO1xuICAgIH1cblxuICB9XG5cbiAgb25DbG9zZVZvdGluZ0xpc3QgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGF4aW9zLnBvc3QoYGh0dHBzOi8vc25vd2JhbGwtYXBpLWJhY2tlbmQuaGVyb2t1YXBwLmNvbS9wcm9qZWN0cy9wcm9qZWN0X1h3UHA5eGF6L3ZvdGUtbGlzdGAsIHtcbiAgICAgIHVzZXJJZDogbHMuZ2V0KCdVc2VyJykuaWRcblxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHNlbGYuc2V0U3RhdGUoe29wZW5Wb3Rpbmc6IGZhbHNlfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydCgnUGxlYXNlIGZpbmlzaCB2b3RpbmchJyk7XG4gICAgICB9XG4gICAgfSk7XG5cblxuICB9XG5cbiAgb25Db3VuZG93bkhhbmRsZXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuc2V0U3RhdGUoe2lzTG9hZGluZzogdHJ1ZX0pO1xuXG4gICAgYXhpb3MuZ2V0KCdodHRwOi8vc25vd2JhbGwtYXBpLWJhY2tlbmQuaGVyb2t1YXBwLmNvbS9wcm9qZWN0cy9wcm9qZWN0X1h3UHA5eGF6L2NhcmRzLWJ5LXN0YXRlP3N0YXRlPUlOX1BST0dSRVNTJylcbiAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcblxuXG4gICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XG5cbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcblxuICAgICAgICAgICAgIGNvbnN0IGNvdW50Q2FyZHMgPSByZXNwb25zZS5kYXRhLm1hcChjYXJkID0+IHtcblxuICAgICAgICAgICAgICAgcmV0dXJuIDxDb3VudFRpbWVyIHNlY29uZHM9e2NhcmQudHRsfSBvbkNvbXBsZXRpb249e3NlbGYub25Db21wbGV0aW9ufSBzZWxlY3RlZENhcmQ9e2NhcmR9Lz47XG5cbiAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7Y291bnRkb3duOiBjb3VudENhcmRzfSk7XG4gICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7aXNMb2FkaW5nOiBmYWxzZX0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICB9XG5cblxuICByZW5kZXIoKSB7XG5cblxuXG5cbiAgICBjb25zdCB7IG9wZW5EZXRhaWwsIGRpbW1lciB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgb3BlblN0YWtpbmcsIHNpemUgfSA9IHRoaXMuc3RhdGVcblxuICAgIGNvbnN0IHVzZXJMaXN0ID0gW1xuICAgICAgICAgIHtrZXk6J21lbWJlcicsIHZhbHVlOiB7aWQ6ICd1c2VyMDAwMCcsIHJvbGU6ICdtZW1iZXInfSwgdGV4dDonbWVtYmVyJ30sXG4gICAgICAgICAge2tleTonVFBNJywgdmFsdWU6IHtpZDogJ3VzZXIxMTExJywgcm9sZTogJ1RQTSd9LCB0ZXh0OidUUE0nfSxcbiAgICAgICAgICB7a2V5OidTVScsIHZhbHVlOiB7aWQ6ICd1c2VyMjIyMicsIHJvbGU6ICdzdSd9LCB0ZXh0OidzdSd9XG4gICAgXVxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuXG4gICAgICAgIDxEcm9wZG93biBwbGFjZWhvbGRlcj17bHMuZ2V0KCdVc2VyJykucm9sZX0gc2VhcmNoIHNlbGVjdGlvbiBvcHRpb25zPXt1c2VyTGlzdH0gb25DaGFuZ2U9e3RoaXMub25Vc2VyU2VsZWN0SGFuZGxlcn0gLz5cbiAgICAgICAgPFZvdGluZ0xpc3RNb2RhbFxuICAgICAgICAgICAgdm90aW5nRG9uZT17dGhpcy5zdGF0ZS52b3RpbmdEb25lfVxuICAgICAgICAgICAgb3BlblZvdGluZz17dGhpcy5zdGF0ZS5vcGVuVm90aW5nfVxuICAgICAgICAgICAgdm90aW5nTGlzdD17dGhpcy5zdGF0ZS52b3RpbmdMaXN0fVxuICAgICAgICAgICAgb25DbG9zZVZvdGluZ0xpc3Q9e3RoaXMub25DbG9zZVZvdGluZ0xpc3R9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5zdGF0ZS5jb3VudGRvd259XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5vblZvdGluZ0xpc3R9XG5cblxuICAgICAgICAgICAgICAgIHsvKjxEaW1tZXIgYWN0aXZlPXt0aGlzLnN0YXRlLmlzTG9hZGluZ30gaW52ZXJ0ZWQ+XG4gICAgICAgICAgICAgICAgICA8TG9hZGVyIGludmVydGVkIGNvbnRlbnQ9J0xvYWRpbmcnIC8+XG4gICAgICAgICAgICAgICAgPC9EaW1tZXI+Ki99XG5cbiAgICAgICAgPGgxPntscy5nZXQoJ1VzZXInKS5pZH0gW3tscy5nZXQoJ1VzZXInKS5yb2xlfV08L2gxPlxuXG5cbiAgICAgICAgPEJvYXJkIGRyYWdnYWJsZVxuICAgICAgICAgICAgICBlZGl0YWJsZVxuICAgICAgICAgICAgICBvbkNhcmRBZGQ9e3RoaXMub25DYXJkQWRkSGFuZGxlcn1cbiAgICAgICAgICAgICAgZXZlbnRCdXNIYW5kbGU9e3RoaXMuc2V0RXZlbnRCdXN9XG4gICAgICAgICAgICAgIGxhbmVEcmFnZ2FibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ2xpZ2h0Z3JheSd9fVxuICAgICAgICAgICAgICBvbkNhcmRDbGljaz17dGhpcy5zaG93RGV0YWlsKCdpbnZlcnRlZCcpfVxuICAgICAgICAgICAgICBvbkNhcmREZWxldGU9e3RoaXMub25DYXJkRGVsZXRlSGFuZGxlcn1cblxuICAgICAgICAgICAgICBoYW5kbGVEcmFnRW5kPXt0aGlzLm9uRHJhZ0VuZH1cbiAgICAgICAgICAgICAgZGF0YT17dGhpcy5zdGF0ZS5ib2FyZERhdGF9IC8+XG5cbiAgICAgICAgPERldGFpbFBhZ2VNb2RhbFxuICAgICAgICAgICAgb25TZWxlY3RlZENhcmRDaGFuZ2U9e3VwZGF0ZWRDYXJkID0+IHt0aGlzLnNldFN0YXRlKHtzZWxlY3RlZENhcmQ6IHVwZGF0ZWRDYXJkfSl9fVxuICAgICAgICAgICAgb3BlbkRldGFpbD17dGhpcy5zdGF0ZS5vcGVuRGV0YWlsfVxuICAgICAgICAgICAgY2xvc2VEZXRhaWw9e3RoaXMuY2xvc2VEZXRhaWx9XG4gICAgICAgICAgICBzZWxlY3RlZENhcmQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDYXJkfVxuICAgICAgICAgICAgb25VcGRhdGVkQ2FyZD17dGhpcy5vblVwZGF0ZWRDYXJkfVxuICAgICAgICAgICAgLz5cblxuXG4gICAgICAgIDxNb2RhbCBzaXplPSdtaW5pJyBvcGVuPXtvcGVuU3Rha2luZ30gb25DbG9zZT17dGhpcy5jbG9zZVN0YWtpbmd9PlxuICAgICAgICAgIDxNb2RhbC5IZWFkZXI+U3Rha2UgeW91ciB0b2tlbnMhIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgIDxNb2RhbC5Db250ZW50PlxuICAgICAgICAgICAgPENvbnRyaWJ1dGVGb3JtXG4gICAgICAgICAgICAgICAgYWRkcmVzcz0nMHgzYWFmZUZGYzBhQzc4ZEM2MjUxMjc4MGZkOWYxOTFkMTlmODE5NkIxJ1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2FyZD17dGhpcy5zdGF0ZS5zZWxlY3RlZENhcmR9XG4gICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5jbG9zZVN0YWtpbmd9XG4gICAgICAgICAgICAgICAgb25TZWxlY3RlZENhcmRDaGFuZ2U9e3VwZGF0ZWRDYXJkID0+IHt0aGlzLnNldFN0YXRlKHtzZWxlY3RlZENhcmQ6IHVwZGF0ZWRDYXJkfSl9fVxuICAgICAgICAgICAgICAgIG9uU3Rha2luZz17aXNTZWxlY3RlZENhcmRTdGFrZWQgPT4gdGhpcy5zZXRTdGF0ZSh7aXNTZWxlY3RlZENhcmRTdGFrZWR9KX1cbiAgICAgICAgICAgICAgICBvbkFzc2lnbj17dGhpcy5vbkFzc2lnbn1cblxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3RvQm9hcmQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1RvZG9Cb2FyZC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBcEJBO0FBQ0E7QUFDQTs7QUFzQkE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBd0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEvREE7QUFDQTtBQWtFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUhBO0FBTUE7QUFFQTtBQUFBO0FBekZBO0FBQ0E7QUE0RkE7QUFDQTtBQUNBO0FBL0ZBO0FBQ0E7QUFpR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRHQTtBQUNBO0FBeUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQTFHQTtBQUNBO0FBbUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQTNCQTtBQTRCQTtBQUtBO0FBM0pBO0FBQ0E7QUE0SkE7QUFDQTtBQUNBO0FBQ0E7QUFoS0E7QUFDQTtBQWtLQTtBQUFBO0FBbktBO0FBQ0E7QUFtS0E7QUFBQTtBQUFBO0FBQUE7QUFwS0E7QUFDQTtBQW9LQTtBQUNBO0FBQ0E7QUF2S0E7QUFDQTtBQTJLQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFqTEE7QUFDQTtBQW1MQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBdE5BO0FBQ0E7QUF1TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQXhPQTtBQUNBO0FBeU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVhBO0FBQ0E7QUFZQTtBQWJBO0FBaUJBO0FBQUE7QUFHQTtBQXRRQTtBQUNBO0FBdVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFmQTtBQWlCQTtBQUFBO0FBS0E7QUF6QkE7QUFDQTtBQTBCQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQWRBO0FBQ0E7QUFpQkE7QUFHQTtBQWxVQTtBQUNBO0FBbVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4VUE7QUFDQTtBQTRVQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBN1VBO0FBQ0E7QUE4VUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRkE7QUFLQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUF2VkE7QUFDQTtBQXdWQTtBQUNBO0FBQ0E7QUFHQTtBQTlWQTtBQUNBO0FBK1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFHQTtBQWpYQTtBQUNBO0FBa1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUVBO0FBMVlBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBbkJBO0FBQ0E7QUFpQkE7QUFDQTtBQUdBOzs7OztBQUdBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUlBOzs7O0FBSUE7OztBQXVWQTtBQUFBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFRQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7QUFNQTtBQU5BO0FBQ0E7O0FBS0E7QUFDQTtBQURBO0FBQUE7O0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFaQTtBQVlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBTEE7QUFTQTtBQVRBO0FBQ0E7QUFRQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBUEE7QUFjQTtBQWRBO0FBQ0E7Ozs7Ozs7QUFpQkE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
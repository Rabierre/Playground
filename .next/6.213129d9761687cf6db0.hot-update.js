webpackHotUpdate(6,{

/***/ 1438:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactTrello = __webpack_require__(1230);

var _reactTrello2 = _interopRequireDefault(_reactTrello);

var _semanticUiReact = __webpack_require__(482);

var _axios = __webpack_require__(1206);

var _axios2 = _interopRequireDefault(_axios);

var _reactDropzoneS3Uploader = __webpack_require__(1227);

var _reactDropzoneS3Uploader2 = _interopRequireDefault(_reactDropzoneS3Uploader);

var _project = __webpack_require__(1229);

var _project2 = _interopRequireDefault(_project);

var _web = __webpack_require__(991);

var _web2 = _interopRequireDefault(_web);

var _FileUpload = __webpack_require__(1228);

var _FileUpload2 = _interopRequireDefault(_FileUpload);

var _ContributeForm = __webpack_require__(1266);

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _Layout = __webpack_require__(1158);

var _Layout2 = _interopRequireDefault(_Layout);

var _DetailPageModal = __webpack_require__(1439);

var _DetailPageModal2 = _interopRequireDefault(_DetailPageModal);

var _SessionMockup = __webpack_require__(1443);

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
      return function () {
        return _this.setState({ dimmer: dimmer, openDetail: true });
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
      selectedCard: null,
      isSelectedCardStaked: false
    };

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
          lineNumber: 126
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, _SessionMockup.SessionRole, ' - ', _SessionMockup.UserId), _react2.default.createElement(_reactTrello2.default, { draggable: true,
        eventBusHandle: this.setEventBus,
        laneDraggable: false,
        onCardClick: this.showDetail('inverted'),
        handleDragEnd: this.onDragEnd,
        data: this.props.boardData, __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }), _react2.default.createElement(_DetailPageModal2.default, { openDetail: this.state.openDetail, closeDetail: this.closeDetail, __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }), _react2.default.createElement(_semanticUiReact.Modal, { size: 'mini', open: openStaking, onClose: this.closeStaking, __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, 'Stake your tokens! '), _react2.default.createElement(_semanticUiReact.Modal.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
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
          lineNumber: 142
        }
      }))));
    }
  }]);

  return TotoBoard;
}(_react.Component);

exports.default = TotoBoard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVG9kb0JvYXJkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQm9hcmQiLCJDb250YWluZXIiLCJHcmlkIiwiU2VnbWVudCIsIkJ1dHRvbiIsIkNhcmQiLCJJbWFnZSIsIlRhYiIsIk1vZGFsIiwiSGVhZGVyIiwiVGV4dEFyZWEiLCJJbnB1dEZvcm1hdCIsIkZvcm0iLCJheGlvcyIsIkRyb3B6b25lUzNVcGxvYWRlciIsIlByb2plY3QiLCJ3ZWIzIiwiRmlsZVVwbG9hZCIsIkNvbnRyaWJ1dGVGb3JtIiwiTGF5b3V0IiwiRGV0YWlsUGFnZU1vZGFsIiwiU2Vzc2lvblJvbGUiLCJVc2VySWQiLCJDT05GSUciLCJoZWFkZXJzIiwid2l0aENyZWRlbnRpYWxzIiwiY3JlZGVudGlhbHMiLCJUb3RvQm9hcmQiLCJwcm9wcyIsInNldEV2ZW50QnVzIiwiaGFuZGxlIiwic2V0U3RhdGUiLCJldmVudEJ1cyIsInNob3dEZXRhaWwiLCJkaW1tZXIiLCJvcGVuRGV0YWlsIiwiY2xvc2VEZXRhaWwiLCJ1cGRhdGVDYXJkIiwidGFyZ2V0TGFuZUlkIiwiY2FyZElkIiwidXBkYXRlZENhcmQiLCJzdGF0ZSIsInB1Ymxpc2giLCJ0eXBlIiwibGFuZUlkIiwiY2FyZCIsInVuZG8iLCJzb3VyY2VMYW5lSWQiLCJmcm9tTGFuZUlkIiwidG9MYW5lSWQiLCJpbmRleCIsInNob3dTdGFraW5nIiwic2l6ZSIsIm9wZW5TdGFraW5nIiwiY2xvc2VTdGFraW5nIiwib25Bc3NpZ24iLCJwb3N0IiwiaWQiLCJ1c2VySWQiLCJzdGFraW5nIiwiY29uc29sZSIsImxvZyIsIm9uRHJhZ0VuZCIsInBvc2l0aW9uIiwiY2FyZERldGFpbHMiLCJzZWxlY3RlZENhcmQiLCJjaWQiLCJwb2ludCIsImFzc2lnbmVlSWQiLCJiYWNrbG9nVGlja2V0cyIsImlzU2VsZWN0ZWRDYXJkU3Rha2VkIiwiYm9hcmREYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7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Q0FBQSxBQUFDLHVDQUFNLFdBQVAsQUFDTTt3QkFBZ0IsS0FEdEIsQUFDMkIsQUFDckI7dUJBRk4sQUFFcUIsQUFDZjtxQkFBYSxLQUFBLEFBQUssV0FIeEIsQUFHbUIsQUFBZ0IsQUFDN0I7dUJBQWUsS0FKckIsQUFJMEIsQUFDcEI7Y0FBTSxLQUFBLEFBQUssTUFMakIsQUFLdUI7b0JBTHZCO3NCQUZGLEFBRUUsQUFRQTtBQVJBOzBCQVFBLEFBQUMsMkNBQWdCLFlBQVksS0FBQSxBQUFLLE1BQWxDLEFBQXdDLFlBQVksYUFBYSxLQUFqRSxBQUFzRTtvQkFBdEU7c0JBVkYsQUFVRSxBQUdBO0FBSEE7MEJBR0EsQUFBQyx3Q0FBTSxNQUFQLEFBQVksUUFBTyxNQUFuQixBQUF5QixhQUFhLFNBQVMsS0FBL0MsQUFBb0Q7b0JBQXBEO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSx3Q0FBQyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7aUJBQUQsQUFDWSxBQUNSO3NCQUFjLEtBQUEsQUFBSyxNQUZ2QixBQUU2QixBQUN6QjtpQkFBUyxLQUhiLEFBR2tCLEFBQ2Q7bUJBQVcseUNBQUE7aUJBQXdCLE9BQUEsQUFBSyxTQUFTLEVBQUMsc0JBQXZDLEFBQXdCLEFBQWM7QUFKckQsQUFLSTtrQkFBVSxLQUxkLEFBS21COzs7b0JBTG5CO3NCQWpCUixBQUNFLEFBYUUsQUFFRSxBQUNFLEFBYVQ7QUFiUztBQUNJOzs7OztBQW5IUSxBLEFBbUl4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJUb2RvQm9hcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0RhbmllbC9EZXNrdG9wL3BsYXlncm91bmQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/Daniel/Desktop/playground/components/TodoBoard.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Daniel/Desktop/playground/components/TodoBoard.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4yMTMxMjlkOTc2MTY4N2NmNmRiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub2RvQm9hcmQuanM/ZWE4Y2UzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb2FyZCBmcm9tICdyZWFjdC10cmVsbG8nXG4vLyBpbXBvcnQge0NhcmQsIEdyaWQsIEJ1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHtDb250YWluZXIsR3JpZCwgU2VnbWVudCwgQnV0dG9uLCBDYXJkLCBJbWFnZSwgVGFiLCBNb2RhbCwgSGVhZGVyLCBUZXh0QXJlYSwgIElucHV0Rm9ybWF0LCBGb3JtIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgRHJvcHpvbmVTM1VwbG9hZGVyIGZyb20gJ3JlYWN0LWRyb3B6b25lLXMzLXVwbG9hZGVyJztcblxuXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuLi9ldGhlcmV1bS9wcm9qZWN0JztcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xuXG5pbXBvcnQgRmlsZVVwbG9hZCBmcm9tICcuL0ZpbGVVcGxvYWQnO1xuaW1wb3J0IENvbnRyaWJ1dGVGb3JtIGZyb20gJy4vQ29udHJpYnV0ZUZvcm0nO1xuaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dCc7XG5pbXBvcnQgRGV0YWlsUGFnZU1vZGFsIGZyb20gJy4vRGV0YWlsUGFnZU1vZGFsJ1xuaW1wb3J0IHtTZXNzaW9uUm9sZSwgVXNlcklkIH1mcm9tICcuL1Nlc3Npb25Nb2NrdXAnXG5cbmNvbnN0IENPTkZJRyA9IHtcbiAgaGVhZGVyczoge1xuICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKidcbiAgfSxcbiAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbn07XG5cbmNsYXNzIFRvdG9Cb2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG5cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0XHRiYWNrbG9nVGlja2V0czogbnVsbCxcbiAgICAgICAgb3BlbkRldGFpbDogZmFsc2UsXG4gICAgICAgIG9wZW5TdGFraW5nOiBmYWxzZSxcbiAgICAgICAgZXZlbnRCdXM6IG51bGwsXG4gICAgICAgIHNlbGVjdGVkQ2FyZDogbnVsbCxcbiAgICAgICAgaXNTZWxlY3RlZENhcmRTdGFrZWQ6IGZhbHNlXG5cdFx0fTtcblxuXHR9XG5cblxuICBzZXRFdmVudEJ1cyA9IChoYW5kbGUpID0+IHtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXZlbnRCdXM6IGhhbmRsZX0pO1xuICB9XG5cbiAgc2hvd0RldGFpbCA9IGRpbW1lciA9PiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZGltbWVyLCBvcGVuRGV0YWlsOiB0cnVlIH0pXG5cbiAgY2xvc2VEZXRhaWwgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbkRldGFpbDogZmFsc2UgfSlcblxuICB1cGRhdGVDYXJkID0gKHRhcmdldExhbmVJZCwgY2FyZElkLCB1cGRhdGVkQ2FyZCkgPT4ge1xuXG4gICAgdGhpcy5zdGF0ZS5ldmVudEJ1cy5wdWJsaXNoKHt0eXBlOiAnUkVNT1ZFX0NBUkQnLCBsYW5lSWQ6IHRhcmdldExhbmVJZCwgY2FyZElkOiBjYXJkSWR9KTtcbiAgICB0aGlzLnN0YXRlLmV2ZW50QnVzLnB1Ymxpc2goe3R5cGU6ICdBRERfQ0FSRCcsIGxhbmVJZDogdGFyZ2V0TGFuZUlkLCBjYXJkOiB1cGRhdGVkQ2FyZH0pO1xuXG4gIH1cbiAgdW5kbyA9IChjYXJkSWQsIHNvdXJjZUxhbmVJZCwgdGFyZ2V0TGFuZUlkKSA9PiB0aGlzLnN0YXRlLmV2ZW50QnVzLnB1Ymxpc2goe3R5cGU6ICdNT1ZFX0NBUkQnLCBmcm9tTGFuZUlkOiB0YXJnZXRMYW5lSWQsIHRvTGFuZUlkOiBzb3VyY2VMYW5lSWQsIGNhcmRJZDogY2FyZElkLCBpbmRleDogMH0pXG4gIHNob3dTdGFraW5nID0gc2l6ZSA9PiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2l6ZSwgb3BlblN0YWtpbmc6IHRydWUgfSk7XG4gIGNsb3NlU3Rha2luZyA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuU3Rha2luZzogZmFsc2UgfSk7XG5cbiAgb25Bc3NpZ24gPSAoY2FyZCkgPT4ge1xuXG5cblxuICAgICAgICAgIGF4aW9zLnBvc3QoYGh0dHBzOi8vc25vd2JhbGwtYXBpLWJhY2tlbmQuaGVyb2t1YXBwLmNvbS9jYXJkcy8ke2NhcmQuaWR9L2Fzc2lnbmAsIHtcbiAgICAgICAgICAgIHVzZXJJZDogVXNlcklkLFxuICAgICAgICAgICAgc3Rha2luZzogMTBcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjYXJkWydhc3NpZ25lZUlkJ10gPSBVc2VySWQ7XG4gICAgICAgICAgY29uc29sZS5sb2coY2FyZC5pZCk7XG4gICAgICAgICAgdGhpcy51cGRhdGVDYXJkKCdJTl9QUk9HUkVTUycsIGNhcmQuaWQsIGNhcmQpO1xuICB9XG5cblxuXG4gIG9uRHJhZ0VuZCA9IChjYXJkSWQsIHNvdXJjZUxhbmVJZCwgdGFyZ2V0TGFuZUlkLCBwb3NpdGlvbiwgY2FyZERldGFpbHMpID0+IHtcblxuICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkQ2FyZDogY2FyZERldGFpbHN9KTtcblxuICAgIGNvbnN0IGNpZCA9IGNhcmREZXRhaWxzLmlkO1xuXG4gICAgY29uc29sZS5sb2coY2FyZElkLCBzb3VyY2VMYW5lSWQsIHRhcmdldExhbmVJZCwgcG9zaXRpb24sIGNhcmREZXRhaWxzKTtcblxuICAgIGlmIChzb3VyY2VMYW5lSWQgPT0gJ0JBQ0tMT0cnICYmIHRhcmdldExhbmVJZCA9PSAnTk9UX1NUQVJURUQnICYmIFNlc3Npb25Sb2xlID09ICdhZG1pbicpIHtcblxuICAgICAgYXhpb3MucG9zdChgaHR0cHM6Ly9zbm93YmFsbC1hcGktYmFja2VuZC5oZXJva3VhcHAuY29tL2NhcmRzLyR7Y2lkfS9yZXNldGAsIHtcbiAgICAgICAgdXNlcklkOiBVc2VySWQsXG4gICAgICAgIHBvaW50OiAxMFxuICAgICAgfSk7XG5cbiAgICB9IGVsc2UgaWYgKHNvdXJjZUxhbmVJZCA9PSAnTk9UX1NUQVJURUQnICYmIHRhcmdldExhbmVJZCA9PSAnSU5fUFJPR1JFU1MnKSB7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5TdGFraW5nOiB0cnVlIH0pO1xuXG4gICAgfSBlbHNlIGlmIChzb3VyY2VMYW5lSWQgPT0gJ0lOX1BST0dSRVNTJyAmJiB0YXJnZXRMYW5lSWQgPT0gJ0lOX1JFVklFVycgJiYgY2FyZERldGFpbHMuYXNzaWduZWVJZCkge1xuICAgICAgY29uc29sZS5sb2coJ2dvb2Qgam9iIScpO1xuXG4gICAgICBheGlvcy5wb3N0KGBodHRwczovL3Nub3diYWxsLWFwaS1iYWNrZW5kLmhlcm9rdWFwcC5jb20vY2FyZHMvJHtjaWR9L3N1Ym1pdGAsIHtcbiAgICAgICAgdXNlcklkOiBVc2VySWRcbiAgICAgIH0pO1xuXG4gICAgfSBlbHNlIGlmIChzb3VyY2VMYW5lSWQgPT0gdGFyZ2V0TGFuZUlkKSB7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLnVuZG8oY2FyZElkLCBzb3VyY2VMYW5lSWQsIHRhcmdldExhbmVJZCk7XG5cbiAgICB9XG5cblxuXG4gIH1cblxuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IHsgb3BlbkRldGFpbCwgZGltbWVyIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBvcGVuU3Rha2luZywgc2l6ZSB9ID0gdGhpcy5zdGF0ZVxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+e1Nlc3Npb25Sb2xlfSAtIHtVc2VySWR9PC9oMT5cbiAgICAgICAgPEJvYXJkIGRyYWdnYWJsZVxuICAgICAgICAgICAgICBldmVudEJ1c0hhbmRsZT17dGhpcy5zZXRFdmVudEJ1c31cbiAgICAgICAgICAgICAgbGFuZURyYWdnYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgIG9uQ2FyZENsaWNrPXt0aGlzLnNob3dEZXRhaWwoJ2ludmVydGVkJyl9XG4gICAgICAgICAgICAgIGhhbmRsZURyYWdFbmQ9e3RoaXMub25EcmFnRW5kfVxuICAgICAgICAgICAgICBkYXRhPXt0aGlzLnByb3BzLmJvYXJkRGF0YX0gLz5cblxuXG4gICAgICAgIDxEZXRhaWxQYWdlTW9kYWwgb3BlbkRldGFpbD17dGhpcy5zdGF0ZS5vcGVuRGV0YWlsfSBjbG9zZURldGFpbD17dGhpcy5jbG9zZURldGFpbH0vPlxuXG5cbiAgICAgICAgPE1vZGFsIHNpemU9J21pbmknIG9wZW49e29wZW5TdGFraW5nfSBvbkNsb3NlPXt0aGlzLmNsb3NlU3Rha2luZ30+XG4gICAgICAgICAgPE1vZGFsLkhlYWRlcj5TdGFrZSB5b3VyIHRva2VucyEgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgICAgPE1vZGFsLkNvbnRlbnQ+XG4gICAgICAgICAgICA8Q29udHJpYnV0ZUZvcm1cbiAgICAgICAgICAgICAgICBhZGRyZXNzPScweDNhYWZlRkZjMGFDNzhkQzYyNTEyNzgwZmQ5ZjE5MWQxOWY4MTk2QjEnXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXJkPXt0aGlzLnN0YXRlLnNlbGVjdGVkQ2FyZH1cbiAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLmNsb3NlU3Rha2luZ31cbiAgICAgICAgICAgICAgICBvblN0YWtpbmc9e2lzU2VsZWN0ZWRDYXJkU3Rha2VkID0+IHRoaXMuc2V0U3RhdGUoe2lzU2VsZWN0ZWRDYXJkU3Rha2VkfSl9XG4gICAgICAgICAgICAgICAgb25Bc3NpZ249e3RoaXMub25Bc3NpZ259XG5cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG90b0JvYXJkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Ub2RvQm9hcmQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7QUFoQkE7QUFDQTtBQUNBO0FBZUE7O0FBSUE7QUFGQTtBQUdBO0FBQUE7QUFKQTtBQUNBOztBQVNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBaEJBO0FBQ0E7QUFrQkE7QUFBQTtBQUFBO0FBQUE7QUFuQkE7QUFDQTtBQW9CQTtBQUFBO0FBckJBO0FBQ0E7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUExQkE7QUFDQTtBQTRCQTtBQUFBO0FBN0JBO0FBQ0E7QUE2QkE7QUFBQTtBQUFBO0FBQUE7QUE5QkE7QUFDQTtBQThCQTtBQUFBO0FBL0JBO0FBQ0E7QUFnQ0E7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUhBO0FBSUE7QUFBQTtBQUNBO0FBM0NBO0FBQ0E7QUErQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFKQTtBQUhBO0FBQ0E7QUFRQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBSUE7QUFIQTtBQUpBO0FBQ0E7QUFVQTtBQU1BO0FBbEZBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUxBO0FBQ0E7QUFPQTs7Ozs7QUE0RUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBUkE7QUFRQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQU5BO0FBYUE7QUFiQTtBQUNBOzs7Ozs7O0FBZ0JBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
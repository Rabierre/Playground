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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _TicketList = require('../components/TicketList');

var _TicketList2 = _interopRequireDefault(_TicketList);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactDropzoneS3Uploader = require('react-dropzone-s3-uploader');

var _reactDropzoneS3Uploader2 = _interopRequireDefault(_reactDropzoneS3Uploader);

var _FileUpload = require('../components/FileUpload');

var _FileUpload2 = _interopRequireDefault(_FileUpload);

var _project = require('../ethereum/project');

var _project2 = _interopRequireDefault(_project);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Daniel/Desktop/playground/pages/board.js?entry';
// import {Card, Grid, Button} from 'semantic-ui-react';


var ToBoBoard = function (_Component) {
  (0, _inherits3.default)(ToBoBoard, _Component);

  function ToBoBoard(props) {
    (0, _classCallCheck3.default)(this, ToBoBoard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ToBoBoard.__proto__ || (0, _getPrototypeOf2.default)(ToBoBoard)).call(this, props));

    _this.showDetail = function (dimmer) {
      return function () {
        return _this.setState({ dimmer: dimmer, openDetail: true });
      };
    };

    _this.showStaking = function (size) {
      return function () {
        _this.setState({ size: size, openStaking: true });
      };
    };

    _this.closeDetail = function () {
      return _this.setState({ openDetail: false });
    };

    _this.closeStaking = function () {
      return _this.setState({ openStaking: false });
    };

    _this.closeDetail = function () {
      return _this.setState({ openDetail: false });
    };

    _this.closeStaking = function () {
      return _this.setState({ openStaking: false });
    };

    _this.registerStaking = function (cardId, sourceLaneId, targetLaneId, position, cardDetails) {
      if (targetLaneId == 'inProgress') {

        _this.setState({ openStaking: true });
      }

      console.log(cardId, sourceLaneId, targetLaneId, position, cardDetails);
    };

    _this.state = {
      backlogTickets: null,
      openDetail: false,
      openStaking: false
    };

    _axios2.default.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {

      // const posts = response.data.map(post => {
      //   // console.log(post);
      //   return <div> {post.title} </div>;
      // })

      _this.setState({ backlogTickets: response.data });
    });

    return _this;
  }

  (0, _createClass3.default)(ToBoBoard, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          openDetail = _state.openDetail,
          dimmer = _state.dimmer;
      var _state2 = this.state,
          openStaking = _state2.openStaking,
          size = _state2.size;

      var data = {
        lanes: [{
          id: 'backlog',
          title: 'Backlog',
          label: '2/2',

          cardColor: '#E08521',
          cards: [{ id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', dueOn: 'due now' }, { id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } }]
        }, {
          id: 'getStarted',
          title: 'Get Started',
          label: '0/0',
          cards: []
        }, {
          id: 'inProgress',
          title: 'In Progress',
          label: '0/0',
          cards: []
        }, {
          id: 'inReview',
          title: 'In Review',
          label: '0/0',
          cards: []
        }, {
          id: 'completed',
          title: 'Completed',
          label: '0/0',
          cards: []
        }]
      };

      var panes = [{ menuItem: 'To-to items', render: function render() {
          return _react2.default.createElement(_semanticUiReact.Tab.Pane, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 108
            }
          }, _react2.default.createElement(_reactTrello2.default, { draggable: true,
            laneDraggable: false,
            onCardClick: _this2.showDetail('inverted'),
            handleDragEnd: _this2.registerStaking,
            data: data, __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            }
          }));
        } }, { menuItem: 'Homework', render: function render() {
          return _react2.default.createElement(_semanticUiReact.Tab.Pane, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116
            }
          }, 'Homework');
        } }, { menuItem: 'Submissions', render: function render() {
          return _react2.default.createElement(_semanticUiReact.Tab.Pane, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 117
            }
          }, 'Submission');
        } }];

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement(_semanticUiReact.Tab, { menu: { fluid: true, vertical: true, tabular: true }, panes: panes, __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }), _react2.default.createElement(_semanticUiReact.Modal, { dimmer: dimmer, open: openDetail, onClose: this.closeDetail, __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, 'Profile Picture'), _react2.default.createElement(_semanticUiReact.Modal.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, _react2.default.createElement(_semanticUiReact.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, 'Description'), _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.TextArea, placeholder: 'Add a more detailed description...', __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }), _react2.default.createElement(_semanticUiReact.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, 'Jupyter Notebook'), _react2.default.createElement(_semanticUiReact.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, ' Show Notebook '), _react2.default.createElement('iframe', { style: { width: '100%' }, src: 'https://s3-us-west-1.amazonaws.com/kaj011/prediction.html', scrolling: 'yes', __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }), _react2.default.createElement(_FileUpload2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }), _react2.default.createElement(_semanticUiReact.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, 'Add Comment'), _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.TextArea, placeholder: 'Write a comment...', __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }))))), _react2.default.createElement(_semanticUiReact.Button, { onClick: this.showStaking('mini'), __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, 'Mini'), _react2.default.createElement(_semanticUiReact.Modal, { size: 'mini', open: openStaking, onClose: this.closeStaking, __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, 'Stake your tokens! '), _react2.default.createElement(_semanticUiReact.Modal.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: '0x3aafeFFc0aC78dC62512780fd9f191d19f8196B1', __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }))));
    }
  }]);

  return ToBoBoard;
}(_react.Component);

exports.default = ToBoBoard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JvYXJkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQm9hcmQiLCJDb250YWluZXIiLCJHcmlkIiwiU2VnbWVudCIsIkJ1dHRvbiIsIkNhcmQiLCJJbWFnZSIsIlRhYiIsIk1vZGFsIiwiSGVhZGVyIiwiVGV4dEFyZWEiLCJJbnB1dEZvcm1hdCIsIkZvcm0iLCJMYXlvdXQiLCJUaWNrZXRMaXN0IiwiYXhpb3MiLCJEcm9wem9uZVMzVXBsb2FkZXIiLCJGaWxlVXBsb2FkIiwiUHJvamVjdCIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIlRvQm9Cb2FyZCIsInByb3BzIiwic2hvd0RldGFpbCIsInNldFN0YXRlIiwiZGltbWVyIiwib3BlbkRldGFpbCIsInNob3dTdGFraW5nIiwic2l6ZSIsIm9wZW5TdGFraW5nIiwiY2xvc2VEZXRhaWwiLCJjbG9zZVN0YWtpbmciLCJyZWdpc3RlclN0YWtpbmciLCJjYXJkSWQiLCJzb3VyY2VMYW5lSWQiLCJ0YXJnZXRMYW5lSWQiLCJwb3NpdGlvbiIsImNhcmREZXRhaWxzIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwiYmFja2xvZ1RpY2tldHMiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwibGFuZXMiLCJpZCIsInRpdGxlIiwibGFiZWwiLCJjYXJkQ29sb3IiLCJjYXJkcyIsImRlc2NyaXB0aW9uIiwiZHVlT24iLCJtZXRhZGF0YSIsInNoYSIsInBhbmVzIiwibWVudUl0ZW0iLCJyZW5kZXIiLCJmbHVpZCIsInZlcnRpY2FsIiwidGFidWxhciIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU87Ozs7QUFFUCxBQUFRLEFBQVUsQUFBTSxBQUFTLEFBQVEsQUFBTSxBQUFPLEFBQUssQUFBTyxBQUFRLEFBQVcsQUFBYTs7QUFDbEcsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZ0I7Ozs7QUFD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QSxTQUhGLEFBR0UsQUFDQSxvQ0FBQyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBLEFBRUU7QUFGRjtBQUFBLHlCQUVHLGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNFLDhDQUFBLEFBQUMsc0JBQUQsQUFBTSxTQUFOLEFBQVksQUFBUyxvQ0FBVSxhQUEvQixBQUEyQztvQkFBM0M7c0JBRkosQUFFSSxBQUNGO0FBREU7MEJBQ0YsQUFBQzs7b0JBQUQ7c0JBQUE7QUFBQTtBQUFBLFNBSEYsQUFHRSxBQUNBLHFDQUFBLEFBQUM7O29CQUFEO3NCQUFBO0FBQUE7QUFBQSxTQUpGLEFBSUUsQUFDQSw4REFBUSxPQUFPLEVBQUMsT0FBaEIsQUFBZSxBQUFRLFVBQVMsS0FBaEMsQUFBb0MsNkRBQTZELFdBQWpHLEFBQTJHO29CQUEzRztzQkFMRixBQUtFLEFBQ0U7QUFERjswQkFDRSxBQUFDOztvQkFBRDtzQkFOSixBQU1JLEFBWUY7QUFaRTtBQUFBLDBCQVlGLEFBQUM7O29CQUFEO3NCQUFBO0FBQUE7QUFBQSxTQWxCRixBQWtCRSxBQUNFLDhDQUFBLEFBQUMsc0JBQUQsQUFBTSxTQUFOLEFBQVksQUFBUyxvQ0FBVSxhQUEvQixBQUEyQztvQkFBM0M7c0JBN0JaLEFBR0UsQUFJRSxBQUVFLEFBQ0UsQUFtQkksQUFTVjtBQVRVOzhCQVNWLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssWUFBdEIsQUFBaUIsQUFBaUI7b0JBQWxDO3NCQUFBO0FBQUE7U0F0Q0YsQUFzQ0UsQUFDQSx5QkFBQSxBQUFDLHdDQUFNLE1BQVAsQUFBWSxRQUFPLE1BQW5CLEFBQXlCLGFBQWEsU0FBUyxLQUEvQyxBQUFvRDtvQkFBcEQ7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHdDQUFDLGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQywwQ0FBZSxTQUFoQixBQUF3QjtvQkFBeEI7c0JBNUNSLEFBRUUsQUF1Q0UsQUFFRSxBQUNFLEFBTVQ7QUFOUzs7Ozs7O0FBckpZLEEsQUErSnhCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImJvYXJkLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9EYW5pZWwvRGVza3RvcC9wbGF5Z3JvdW5kIn0=
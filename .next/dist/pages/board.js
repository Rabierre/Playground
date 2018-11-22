'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _TodoBoard = require('../components/TodoBoard');

var _TodoBoard2 = _interopRequireDefault(_TodoBoard);

var _localStorage = require('local-storage');

var _localStorage2 = _interopRequireDefault(_localStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jihyeseo/Sources/Playground/pages/board.js?entry';


var ProjectBoard = function (_Component) {
  (0, _inherits3.default)(ProjectBoard, _Component);

  function ProjectBoard() {
    (0, _classCallCheck3.default)(this, ProjectBoard);

    return (0, _possibleConstructorReturn3.default)(this, (ProjectBoard.__proto__ || (0, _getPrototypeOf2.default)(ProjectBoard)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProjectBoard, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_TodoBoard2.default, { boardData: this.props.data, onBoardUpdate: function onBoardUpdate(newBoardData) {
          return _this2.setState({ data: newBoardData });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var rawData, dic, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:

                this.state = {
                  backlogTickets: null,
                  openDetail: false,
                  openStaking: false
                };

                _localStorage2.default.set('User', { id: 'user0000', role: 'member' });

                _context.next = 4;
                return _axios2.default.get('https://snowball-api-backend.herokuapp.com/projects/project_XwPp9xaz/cards');

              case 4:
                rawData = _context.sent;
                dic = { 'BACKLOG': [], 'NOT_STARTED': [], 'IN_PROGRESS': [], 'IN_REVIEW': [], 'IN_COMPLETE': [] };

                rawData.data.map(function (card) {
                  return dic[card.state].push(card);
                });

                data = {
                  lanes: [{
                    id: 'BACKLOG',
                    title: 'BACKLOG',
                    cards: dic['BACKLOG']
                  }, {
                    id: 'NOT_STARTED',
                    title: 'NOT_STARTED',
                    cards: dic['NOT_STARTED']
                  }, {
                    id: 'IN_PROGRESS',
                    title: 'IN PROGRESS',
                    cards: dic['IN_PROGRESS']
                  }, {
                    id: 'IN_REVIEW',
                    title: 'IN REVIEW',
                    cards: dic['IN_REVIEW']
                  }, {
                    id: 'IN_COMPLETE',
                    title: 'IN COMPLETE',
                    cards: dic['IN_COMPLETE']
                  }]
                };
                return _context.abrupt('return', { data: data });

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ProjectBoard;
}(_react.Component);

exports.default = ProjectBoard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JvYXJkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQm9hcmQiLCJDb250YWluZXIiLCJHcmlkIiwiU2VnbWVudCIsIkJ1dHRvbiIsIkNhcmQiLCJJbWFnZSIsIlRhYiIsIk1vZGFsIiwiSGVhZGVyIiwiVGV4dEFyZWEiLCJJbnB1dEZvcm1hdCIsIkZvcm0iLCJMYXlvdXQiLCJheGlvcyIsIkRyb3B6b25lUzNVcGxvYWRlciIsIkZpbGVVcGxvYWQiLCJQcm9qZWN0Iiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiVG90b0JvYXJkIiwibHMiLCJQcm9qZWN0Qm9hcmQiLCJwcm9wcyIsImRhdGEiLCJuZXdCb2FyZERhdGEiLCJzZXRTdGF0ZSIsInN0YXRlIiwiYmFja2xvZ1RpY2tldHMiLCJvcGVuRGV0YWlsIiwib3BlblN0YWtpbmciLCJzZXQiLCJpZCIsInJvbGUiLCJnZXQiLCJyYXdEYXRhIiwiZGljIiwibWFwIiwiY2FyZCIsInB1c2giLCJsYW5lcyIsInRpdGxlIiwiY2FyZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPOzs7O0FBQ1AsQUFBUSxBQUFVLEFBQU0sQUFBUyxBQUFRLEFBQU0sQUFBTyxBQUFLLEFBQU8sQUFBUSxBQUFXLEFBQWE7O0FBQ2xHLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPOzs7Ozs7Ozs7SSxBQUVEOzs7Ozs7Ozs7Ozs2QkF1REs7bUJBRVA7OzZCQUVFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyxxQ0FBVSxXQUFXLEtBQUEsQUFBSyxNQUEzQixBQUFpQyxNQUFNLGVBQWUsdUJBQUEsQUFBQyxjQUFEO2lCQUFrQixPQUFBLEFBQUssU0FBUyxFQUFDLE1BQWpDLEFBQWtCLEFBQWMsQUFBTztBQUE3RjtvQkFBQTtzQkFISixBQUVFLEFBQ0UsQUFHTDtBQUhLOzs7Ozs7Ozs7OzttQkF2REo7O3FCQUFBLEFBQUs7a0NBQVEsQUFDTyxBQUNoQjs4QkFGUyxBQUVHLEFBQ1o7K0JBSEosQUFBYSxBQUdJLEFBR2pCO0FBTmEsQUFDVDs7dUNBS0osQUFBRyxJQUFILEFBQU8sUUFBUSxFQUFDLElBQUQsQUFBSyxZQUFZLE1BQWhDLEFBQWUsQUFBdUI7Ozt1QkFHaEIsZ0JBQUEsQUFBTSxJQUFOLEFBQVUsQTs7bUJBQTFCO0EsbUNBRUY7QSxzQkFBTSxFQUFDLFdBQUQsQUFBVyxJQUFJLGVBQWYsQUFBOEIsSUFBSSxlQUFsQyxBQUFpRCxJQUFJLGFBQXJELEFBQWtFLElBQUksZSxBQUF0RSxBQUFvRixBQUU5Rjs7d0JBQUEsQUFBUSxLQUFSLEFBQWEsSUFBSSxnQkFBQTt5QkFBUSxJQUFJLEtBQUosQUFBUyxPQUFULEFBQWdCLEtBQXhCLEFBQVEsQUFBcUI7QUFBOUMsQUFFTTs7QTs7d0JBRUYsQUFDTSxBQUNKOzJCQUZGLEFBRVMsQUFDUDsyQkFBTyxJQUpKLEFBQ0wsQUFHUyxBQUFJO0FBSGIsQUFDRSxtQkFGRzt3QkFNTCxBQUNNLEFBQ0o7MkJBRkYsQUFFUyxBQUNQOzJCQUFPLElBVEosQUFNTCxBQUdTLEFBQUk7QUFIYixBQUNFO3dCQUlGLEFBQ00sQUFDSjsyQkFGRixBQUVTLEFBQ1A7MkJBQU8sSUFkSixBQVdMLEFBR1MsQUFBSTtBQUhiLEFBQ0U7d0JBSUYsQUFDTSxBQUNKOzJCQUZGLEFBRVMsQUFDUDsyQkFBTyxJQW5CSixBQWdCTCxBQUdTLEFBQUk7QUFIYixBQUNFO3dCQUlGLEFBQ00sQUFDSjsyQkFGRixBQUVTLEFBQ1A7MkJBQU8sSSxBQXpCQSxBQUNKLEFBcUJMLEFBR1MsQUFBSTtBQUhiLEFBQ0U7QUF2Qk8sQUFDWDtpREE2QkssRUFBQyxNQUFELEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFsRGdCLEEsQUFtRTNCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImJvYXJkLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qaWh5ZXNlby9Tb3VyY2VzL1BsYXlncm91bmQifQ==
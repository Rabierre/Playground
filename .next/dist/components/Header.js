'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Daniel/Desktop/playground/components/Header.js';

exports.default = function () {

  return _react2.default.createElement(_semanticUiReact.Menu, { fixed: 'top', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('b', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'PlayGround.ds'))), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement(_semanticUiReact.Dropdown, { text: 'My Projects', pointing: true, className: 'link item', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement(_semanticUiReact.Dropdown.Menu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement(_routes.Link, { route: '/board', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement(_semanticUiReact.Dropdown.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, 'DS Bootcamp - Theory')), _react2.default.createElement(_routes.Link, { route: 'https://www.notion.so/almightydatasciencebootcamp/d3056b212814446ca2d293fe96a27c08?v=a927618e78e14aed8336d7e8f885b2b1', __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement(_semanticUiReact.Dropdown.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, 'DS Bootcamp - Practice')))), _react2.default.createElement(_routes.Link, { route: '/projects/new', __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, ' My Wallet '))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTWVudSIsIkRyb3Bkb3duIiwiTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFNOztBQUNkLEFBQVEsQUFBVyxBQUVuQjs7Ozs7O2tCQUFlLFlBQU0sQUFFbkI7O3lCQUVFLEFBQUMsdUNBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBRUU7QUFGRjtHQUFBLGtCQUVFLEFBQUMsOEJBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO2dCQUFiO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FKTixBQUVFLEFBQ0UsQUFDRSxBQU1KLG9DQUFDLGNBQUQsc0JBQUEsQUFBTSxRQUFLLFVBQVgsQUFBb0I7Z0JBQXBCO2tCQUFBLEFBQ0E7QUFEQTtxQkFDQSxBQUFDLDJDQUFTLE1BQVYsQUFBZSxlQUFjLFVBQTdCLE1BQXNDLFdBQXRDLEFBQWdEO2dCQUFoRDtrQkFBQSxBQUNFO0FBREY7cUJBQ0csY0FBRCwwQkFBQSxBQUFVOztnQkFBVjtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtnQkFBWjtrQkFBQSxBQUNFO0FBREY7cUJBQ0csY0FBRCwwQkFBQSxBQUFVOztnQkFBVjtrQkFBQTtBQUFBO0FBQUEsS0FGSixBQUNFLEFBQ0UsQUFFRiwwQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtnQkFBWjtrQkFBQSxBQUNFO0FBREY7cUJBQ0csY0FBRCwwQkFBQSxBQUFVOztnQkFBVjtrQkFBQTtBQUFBO0FBQUEsS0FQTixBQUNBLEFBQ0UsQUFJRSxBQUNFLEFBVUosOENBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7Z0JBQVo7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWE7Z0JBQWI7a0JBQUE7QUFBQTtLQTlCUixBQUVFLEFBVUUsQUFpQkUsQUFDRSxBQVVUO0FBMUNEIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRGFuaWVsL0Rlc2t0b3AvcGxheWdyb3VuZCJ9
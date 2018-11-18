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

var _routes = require('../routes');

var _localStorage = require('local-storage');

var _localStorage2 = _interopRequireDefault(_localStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Daniel/Desktop/playground2/components/Header.js';

var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);

    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(_semanticUiReact.Menu, { fixed: 'top', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('a', { className: 'item', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('b', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'PlayGround.ds'))), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement(_semanticUiReact.Dropdown, { text: 'My Projects', pointing: true, className: 'link item', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement(_semanticUiReact.Dropdown.Menu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_routes.Link, { route: '/board', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_semanticUiReact.Dropdown.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, 'DS Bootcamp - Theory')), _react2.default.createElement(_routes.Link, { route: 'https://www.notion.so/almightydatasciencebootcamp/d3056b212814446ca2d293fe96a27c08?v=a927618e78e14aed8336d7e8f885b2b1', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_semanticUiReact.Dropdown.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, 'DS Bootcamp - Practice')))), _react2.default.createElement(_routes.Link, { route: '/projects/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement('a', { className: 'item', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, ' My Wallet '))));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTWVudSIsIkRyb3Bkb3duIiwiTGluayIsImxzIiwiSGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBTTs7QUFDZCxBQUFRLEFBQVc7O0FBQ25CLEFBQU87Ozs7Ozs7O0ksQUFFRDs7Ozs7Ozs7Ozs7NkJBSUssQUFLUDs7NkJBRUUsQUFBQyx1Q0FBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFFRTtBQUZGO09BQUEsa0JBRUUsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWE7b0JBQWI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUpOLEFBRUUsQUFDRSxBQUNFLEFBTUosb0NBQUMsY0FBRCxzQkFBQSxBQUFNLFFBQUssVUFBWCxBQUFvQjtvQkFBcEI7c0JBQUEsQUFFQTtBQUZBO3lCQUVBLEFBQUMsMkNBQVMsTUFBVixBQUFlLGVBQWMsVUFBN0IsTUFBc0MsV0FBdEMsQUFBZ0Q7b0JBQWhEO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELDBCQUFBLEFBQVU7O29CQUFWO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELDBCQUFBLEFBQVU7O29CQUFWO3NCQUFBO0FBQUE7QUFBQSxTQUZKLEFBQ0UsQUFDRSxBQUVGLDBDQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELDBCQUFBLEFBQVU7O29CQUFWO3NCQUFBO0FBQUE7QUFBQSxTQVJOLEFBRUEsQUFDRSxBQUlFLEFBQ0UsQUFVSiw4Q0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYTtvQkFBYjtzQkFBQTtBQUFBO1NBL0JSLEFBRUUsQUFVRSxBQWtCRSxBQUNFLEFBU1Q7Ozs7O0FBakRrQixBLEFBcURyQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0RhbmllbC9EZXNrdG9wL3BsYXlncm91bmQyIn0=
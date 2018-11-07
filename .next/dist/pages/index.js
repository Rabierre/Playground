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

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Daniel/Desktop/playground/pages/index.js?entry';

var ProjectIndex = function (_Component) {
  (0, _inherits3.default)(ProjectIndex, _Component);

  function ProjectIndex() {
    (0, _classCallCheck3.default)(this, ProjectIndex);

    return (0, _possibleConstructorReturn3.default)(this, (ProjectIndex.__proto__ || (0, _getPrototypeOf2.default)(ProjectIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProjectIndex, [{
    key: 'renderProjects',
    value: function renderProjects() {

      var items = this.props.projects.map(function (address) {

        return _react2.default.createElement(_semanticUiReact.Card, {
          image: 'https://bair.berkeley.edu/images/berkeley_1.jpg',
          header: _react2.default.createElement(_routes.Link, { route: '/projects/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          }, 'Get Started!')),
          meta: 'Friend',
          description: 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        });
      });

      return items;
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Open Projects '), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(_routes.Link, { route: '/projects/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Create Project',
        icon: 'add',
        secondary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      })))), _react2.default.createElement(_semanticUiReact.Card.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, this.renderProjects())));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var projects;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedProjects().call();

              case 2:
                projects = _context.sent;
                return _context.abrupt('return', { projects: projects });

              case 4:
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

  return ProjectIndex;
}(_react.Component);

exports.default = ProjectIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJJbWFnZSIsIkljb24iLCJmYWN0b3J5IiwiTGF5b3V0IiwiTGluayIsIlByb2plY3RJbmRleCIsIml0ZW1zIiwicHJvcHMiLCJwcm9qZWN0cyIsIm1hcCIsImFkZHJlc3MiLCJyZW5kZXJQcm9qZWN0cyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZFByb2plY3RzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBTSxBQUFNLEFBQVEsQUFBTzs7QUFDbkMsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFRLEFBQVc7Ozs7OztJLEFBRWI7Ozs7Ozs7Ozs7O3FDQVVhLEFBRWY7O1VBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksbUJBQVcsQUFFL0M7OytCQUVFLEFBQUM7aUJBQUQsQUFDTSxBQUNOO2tDQUNJLEFBQUMsOEJBQUssc0JBQU4sQUFBMEI7d0JBQTFCOzBCQUFBLEFBRUU7QUFGRjtXQUFBLGtCQUVFLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxhQUxOLEFBR0ksQUFFRSxBQUdOO2dCQVJBLEFBUUssQUFDTDt1QkFUQSxBQVNhOztzQkFUYjt3QkFGRixBQUVFLEFBY0g7QUFkRztBQUNBLFNBREE7QUFKSixBQUFjLEFBb0JkLE9BcEJjOzthQW9CZCxBQUFPLEFBRVI7Ozs7NkJBRVEsQUFFUDs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUVFO0FBRkY7QUFBQSx5QkFFRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGRixBQUVFLEFBQ0EsbUNBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0EsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7aUJBQUQsQUFDVSxBQUNSO2lCQUZGLEFBRVUsQUFDUjtjQUhGLEFBR08sQUFDTDttQkFKRjs7b0JBQUE7c0JBTk4sQUFHRSxBQUNBLEFBQ0UsQUFDRSxBQWNKO0FBZEk7QUFDRSw2QkFhTCxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0s7QUFETDtBQUFBLGNBdEJOLEFBQ0UsQUFDRSxBQW9CRSxBQUNLLEFBQUssQUFNakI7Ozs7Ozs7Ozs7Ozt1QkEvRHdCLGtCQUFBLEFBQVEsUUFBUixBQUFnQixzQkFBaEIsQSxBQUFzQzs7bUJBQXZEO0E7aURBRUMsRUFBQyxVQUFELEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFOZ0IsQSxBQXVFM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL0RhbmllbC9EZXNrdG9wL3BsYXlncm91bmQifQ==
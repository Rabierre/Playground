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

var _jsxFileName = '/Users/Daniel/Desktop/playground2/pages/index.js?entry';

var ProjectIndex = function (_Component) {
  (0, _inherits3.default)(ProjectIndex, _Component);

  function ProjectIndex() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ProjectIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ProjectIndex.__proto__ || (0, _getPrototypeOf2.default)(ProjectIndex)).call.apply(_ref, [this].concat(args))), _this), _this.onSignIn = function (googleUser) {
      // Useful data for your client-side scripts:
      var profile = googleUser.getBasicProfile();
      console.log("ID: " + profile.getId()); // Don't send this directly to your server!
      console.log('Full Name: ' + profile.getName());
      console.log('Given Name: ' + profile.getGivenName());
      console.log('Family Name: ' + profile.getFamilyName());
      console.log("Image URL: " + profile.getImageUrl());
      console.log("Email: " + profile.getEmail());

      // The ID token you need to pass to your backend:
      var id_token = googleUser.getAuthResponse().id_token;
      console.log("ID Token: " + id_token);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
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
          lineNumber: 62
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'Open Projects '), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_routes.Link, { route: '/projects/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Create Project',
        icon: 'add',
        secondary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })))), _react2.default.createElement(_semanticUiReact.Card.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, this.renderProjects())));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
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
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ProjectIndex;
}(_react.Component);

exports.default = ProjectIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJJbWFnZSIsIkljb24iLCJmYWN0b3J5IiwiTGF5b3V0IiwiTGluayIsIlByb2plY3RJbmRleCIsIm9uU2lnbkluIiwiZ29vZ2xlVXNlciIsInByb2ZpbGUiLCJnZXRCYXNpY1Byb2ZpbGUiLCJjb25zb2xlIiwibG9nIiwiZ2V0SWQiLCJnZXROYW1lIiwiZ2V0R2l2ZW5OYW1lIiwiZ2V0RmFtaWx5TmFtZSIsImdldEltYWdlVXJsIiwiZ2V0RW1haWwiLCJpZF90b2tlbiIsImdldEF1dGhSZXNwb25zZSIsIml0ZW1zIiwicHJvcHMiLCJwcm9qZWN0cyIsIm1hcCIsImFkZHJlc3MiLCJyZW5kZXJQcm9qZWN0cyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZFByb2plY3RzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBTSxBQUFNLEFBQVEsQUFBTzs7QUFDbkMsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFRLEFBQVc7Ozs7OztJLEFBRWI7Ozs7Ozs7Ozs7Ozs7O3dOLEFBb0NKLFdBQVcsVUFBQSxBQUFDO0FBRVY7VUFBTSxVQUFVLFdBQWhCLEFBQWdCLEFBQVcsQUFDM0I7Y0FBQSxBQUFRLElBQUksU0FBUyxRQUhJLEFBR3pCLEFBQXFCLEFBQVEsU0FISixBQUN6QixDQUV1QyxBQUN2QztjQUFBLEFBQVEsSUFBSSxnQkFBZ0IsUUFBNUIsQUFBNEIsQUFBUSxBQUNwQztjQUFBLEFBQVEsSUFBSSxpQkFBaUIsUUFBN0IsQUFBNkIsQUFBUSxBQUNyQztjQUFBLEFBQVEsSUFBSSxrQkFBa0IsUUFBOUIsQUFBOEIsQUFBUSxBQUN0QztjQUFBLEFBQVEsSUFBSSxnQkFBZ0IsUUFBNUIsQUFBNEIsQUFBUSxBQUNwQztjQUFBLEFBQVEsSUFBSSxZQUFZLFFBQXhCLEFBQXdCLEFBQVEsQUFFaEM7O0FBQ0E7VUFBTSxXQUFXLFdBQUEsQUFBVyxrQkFBNUIsQUFBOEMsQUFDOUM7Y0FBQSxBQUFRLElBQUksZUFBWixBQUEyQixBQUM1QjtBOzs7OztxQ0F2Q2dCLEFBRWY7O1VBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksbUJBQVcsQUFFL0M7OytCQUVFLEFBQUM7aUJBQUQsQUFDTSxBQUNOO2tDQUNJLEFBQUMsOEJBQUssc0JBQU4sQUFBMEI7d0JBQTFCOzBCQUFBLEFBRUU7QUFGRjtXQUFBLGtCQUVFLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxhQUxOLEFBR0ksQUFFRSxBQUdOO2dCQVJBLEFBUUssQUFDTDt1QkFUQSxBQVNhOztzQkFUYjt3QkFGRixBQUVFLEFBY0g7QUFkRztBQUNBLFNBREE7QUFKSixBQUFjLEFBb0JkLE9BcEJjOzthQW9CZCxBQUFPLEFBRVI7Ozs7NkJBaUJRLEFBRVA7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBRUU7QUFGRjtBQUFBLE9BQUEsa0JBRUUsY0FBQTs7b0JBQUE7c0JBQUEsQUFHRTtBQUhGO0FBQUEseUJBR0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSEYsQUFHRSxBQUNBLG1DQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLHlCQUNBLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDO2lCQUFELEFBQ1UsQUFDUjtpQkFGRixBQUVVLEFBQ1I7Y0FIRixBQUdPLEFBQ0w7bUJBSkY7O29CQUFBO3NCQVBOLEFBSUUsQUFDQSxBQUNFLEFBQ0UsQUFjSjtBQWRJO0FBQ0UsNkJBYUwsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNLO0FBREw7QUFBQSxjQXhCTixBQUNFLEFBRUUsQUFxQkUsQUFDSyxBQUFLLEFBTWpCOzs7Ozs7Ozs7Ozs7dUJBaEZ3QixrQkFBQSxBQUFRLFFBQVIsQUFBZ0Isc0JBQWhCLEFBQXNDLEE7O21CQUF2RDtBO2lEQUVDLEVBQUMsVUFBRCxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTmdCLEEsQUF3RjNCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9EYW5pZWwvRGVza3RvcC9wbGF5Z3JvdW5kMiJ9
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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _project = require('../../ethereum/project');

var _project2 = _interopRequireDefault(_project);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Daniel/Desktop/playground/pages/projects/show.js?entry';

// import factory from '../../ethereum/factory';
var Placeholder = function Placeholder() {
  return _react2.default.createElement(_semanticUiReact.Image, { src: 'https://bair.berkeley.edu/images/berkeley_1.jpg', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  });
};

var ProjectShow = function (_Component) {
  (0, _inherits3.default)(ProjectShow, _Component);

  function ProjectShow() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ProjectShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ProjectShow.__proto__ || (0, _getPrototypeOf2.default)(ProjectShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = { open: false }, _this.handleContextRef = function (contextRef) {
      return _this.setState({ contextRef: contextRef });
    }, _this.show = function (dimmer) {
      return function () {
        return _this.setState({ dimmer: dimmer, open: true });
      };
    }, _this.close = function () {
      return _this.setState({ open: false });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ProjectShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          minimumContribution = _props.minimumContribution,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount;

      var items = [{
        header: manager,
        meta: 'Address of Manager',
        description: 'The manager created this campaign',
        style: { overflowWrap: 'break-word' }
      }, {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description: 'You must pay for it!',
        style: { overflowWrap: 'break-word' }
      }, {
        header: requestsCount,
        meta: 'Minimum Contribution (wei)',
        description: 'Minimum Contribution (wei)',
        style: { overflowWrap: 'break-word' }
      }, {
        header: approversCount,
        meta: 'The counts of approvers',
        description: 'The counts of approvers',
        style: { overflowWrap: 'break-word' }
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description: 'You must pay for it!',
        style: { overflowWrap: 'break-word' }
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var contextRef = this.state.contextRef;

      var panes = [{ menuItem: "Description", render: function render() {
          return _react2.default.createElement(_semanticUiReact.Tab.Pane, { attached: false, __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            }
          }, _react2.default.createElement('h1', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            }
          }, ' What you will learn '), _react2.default.createElement(_semanticUiReact.Grid, { columns: 'two', divided: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            }
          }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 102
            }
          }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 103
            }
          }, 'Learn how Deep Learning REALLY works (not just some diagrams and magical black box code)'), _react2.default.createElement(_semanticUiReact.Grid.Column, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            }
          }, 'Learn how a neural network is built from basic building blocks (the neuron)')), _react2.default.createElement(_semanticUiReact.Grid.Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 111
            }
          }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            }
          }, 'Code a neural network from scratch in Python and numpy'), _react2.default.createElement(_semanticUiReact.Grid.Column, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 115
            }
          }, 'Code a neural network using Google  TensorFlow')), _react2.default.createElement(_semanticUiReact.Grid.Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120
            }
          }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 121
            }
          }, 'Describe different types of neural networks and the different types of problems they are used for'), _react2.default.createElement(_semanticUiReact.Grid.Column, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 124
            }
          }, 'Describe different types of neural networks and the different types of problems they are used for'))), _react2.default.createElement('h1', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 131
            }
          }, ' Requirements '), _react2.default.createElement(_semanticUiReact.List, { as: 'ul', __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            }
          }, _react2.default.createElement(_semanticUiReact.List.Item, { as: 'li', __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            }
          }, 'How to take partial derivatives and log-likelihoods (ex. finding the maximum likelihood estimations for a die)'), _react2.default.createElement(_semanticUiReact.List.Item, { as: 'li', __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            }
          }, 'Install Numpy and Python (approx. latest version of Numpy as of Jan 2016)'), _react2.default.createElement(_semanticUiReact.List.Item, { as: 'li', __source: {
              fileName: _jsxFileName,
              lineNumber: 139
            }
          }, 'Dont worry about installing TensorFlow, we will do that in the lectures.'), _react2.default.createElement(_semanticUiReact.List.Item, { as: 'li', __source: {
              fileName: _jsxFileName,
              lineNumber: 142
            }
          }, 'Being familiar with the content of my logistic regression course (cross-entropy cost, gradient descent, neurons, XOR, donut) will give you the proper context for this course')), _react2.default.createElement('h1', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 148
            }
          }, ' Who is the target audience? '), 'Students interested in machine learning - you will get all the tidbits you need to do well in a neural networks course Professionals who want to use neural networks in their machine learning and data science pipeline. Be able to apply more powerful models, and know its drawbacks. People who already know how to take partial derivatives and log-likelihoods. Since we cover this in more detail in my logistic regression class, it is not covered quite as thoroughly here. People who already know how to code in Python and Numpy. You will need some familiarity because we go through it quite fast. Don\'t worry, it\'s not that hard.');
        } }, { menuItem: 'Curriculum', render: function render() {
          return _react2.default.createElement(_semanticUiReact.Tab.Pane, { attached: false, __source: {
              fileName: _jsxFileName,
              lineNumber: 157
            }
          }, 'Curriculum');
        } }, { menuItem: 'Enrollment', render: function render() {
          return _react2.default.createElement(_semanticUiReact.Tab.Pane, { attached: false, __source: {
              fileName: _jsxFileName,
              lineNumber: 163
            }
          }, _react2.default.createElement(_semanticUiReact.Grid, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 164
            }
          }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
              fileName: _jsxFileName,
              lineNumber: 165
            }
          }, _this2.renderCards(), _react2.default.createElement(_routes.Link, { route: '/projects/' + _this2.props.address + '/requests', __source: {
              fileName: _jsxFileName,
              lineNumber: 167
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 168
            }
          }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 169
            }
          }, ' View Requests ')))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
              fileName: _jsxFileName,
              lineNumber: 173
            }
          }, _react2.default.createElement(_ContributeForm2.default, { address: _this2.props.address, __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            }
          }))));
        } }, { menuItem: 'Application', render: function render() {
          return _react2.default.createElement(_semanticUiReact.Tab.Pane, { attached: false, __source: {
              fileName: _jsxFileName,
              lineNumber: 181
            }
          }, 'Tab 3 Content');
        } }];

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, _react2.default.createElement(_semanticUiReact.Container, { text: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, 'Data Science: Deep Learning in Python'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, 'The MOST in-depth look at neural network theory, and how to code one with pure Python and Tensorflow'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, 'Created by Lazy Programmer Inc. Last updated 10/2018'))), _react2.default.createElement('div', { style: { marginTop: '50px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, _react2.default.createElement(_semanticUiReact.Container, { text: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, _react2.default.createElement(_semanticUiReact.Tab, { menu: { secondary: true, pointing: true }, panes: panes, __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, project, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                project = (0, _project2.default)(address);
                _context.next = 4;
                return project.methods.getSummary().call();

              case 4:
                summary = _context.sent;

                console.log(summary);

                return _context.abrupt('return', {
                  address: address,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]

                });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ProjectShow;
}(_react.Component);

exports.default = ProjectShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3RzL3Nob3cuanMiXSwibmFtZXMiOlsiXyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkNvbnRhaW5lciIsIkxpc3QiLCJUYWIiLCJHcmlkIiwiQnV0dG9uIiwiSW1hZ2UiLCJNb2RhbCIsIkhlYWRlciIsIlJhaWwiLCJTZWdtZW50IiwiU3RpY2t5IiwiTGF5b3V0IiwiUHJvamVjdCIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkxpbmsiLCJQbGFjZWhvbGRlciIsIlByb2plY3RTaG93Iiwic3RhdGUiLCJvcGVuIiwiaGFuZGxlQ29udGV4dFJlZiIsInNldFN0YXRlIiwiY29udGV4dFJlZiIsInNob3ciLCJkaW1tZXIiLCJjbG9zZSIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInBhbmVzIiwibWVudUl0ZW0iLCJyZW5kZXIiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJtYXJnaW5Ub3AiLCJzZWNvbmRhcnkiLCJwb2ludGluZyIsInF1ZXJ5IiwicHJvamVjdCIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBTzs7OztBQUNQLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBTSxBQUFXLEFBQU0sQUFBSyxBQUFNLEFBQVEsQUFBTyxBQUFPLEFBQVEsQUFBTSxBQUFTOztBQUN2RixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQVEsQUFB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REY7eUJBQ0UsQUFBQyxzQ0FBSSxNQUFNLEVBQUUsV0FBRixBQUFhLE1BQU0sVUFBOUIsQUFBVyxBQUE2QixRQUFRLE9BQWhELEFBQXVEO29CQUF2RDtzQkFoQk4sQUFDRSxBQVlBLEFBRUUsQUFDRSxBQUtQO0FBTE87Ozs7Ozs0R0F6THFCLEE7Ozs7O21CQUVyQjtBLDBCQUFVLE1BQUEsQUFBTSxNLEFBQU0sQUFDdEI7QSwwQkFBVSx1QkFBQSxBQUFRLEE7O3VCQUNGLFFBQUEsQUFBUSxRQUFSLEFBQWdCLGFBQWhCLEEsQUFBNkI7O21CQUE3QztBLG1DQUVOOzt3QkFBQSxBQUFRLElBQVIsQUFBWTs7OzJCQUVMLEFBQ00sQUFDVDt1Q0FBcUIsUUFGbEIsQUFFa0IsQUFBUSxBQUM3QjsyQkFBUyxRQUhOLEFBR00sQUFBUSxBQUNqQjtpQ0FBZSxRQUpaLEFBSVksQUFBUSxBQUN2QjtrQ0FBZ0IsUUFMYixBQUthLEFBQVEsQUFDeEI7MkJBQVMsUUFBQSxBQUFRLEEsQUFOZDs7QUFBQSxBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWGtCLEEsQUFxTTFCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL0RhbmllbC9EZXNrdG9wL3BsYXlncm91bmQifQ==
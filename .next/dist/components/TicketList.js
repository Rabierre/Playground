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

var _Layout = require('./Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Ticket = require('./Ticket');

var _Ticket2 = _interopRequireDefault(_Ticket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Daniel/Desktop/playground/components/TicketList.js';
// import {Card, Grid, Button} from 'semantic-ui-react';


var TicketList = function (_Component) {
  (0, _inherits3.default)(TicketList, _Component);

  function TicketList(props) {
    (0, _classCallCheck3.default)(this, TicketList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TicketList.__proto__ || (0, _getPrototypeOf2.default)(TicketList)).call(this, props));

    _this.retrieveTicket = function () {
      var tickets = _this.props.tickets;
      if (tickets) {
        console.log(tickets);
        return tickets.map(function (ticket) {

          return _react2.default.createElement(_Ticket2.default, { key: ticket.id, data: ticket, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          });
        });
      }
    };

    return _this;
  }

  (0, _createClass3.default)(TicketList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, this.props.listName)), _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, this.retrieveTicket()));
    }
  }]);

  return TicketList;
}(_react.Component);

;
exports.default = TicketList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGlja2V0TGlzdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxpc3QiLCJDb250YWluZXIiLCJHcmlkIiwiQnV0dG9uIiwiQ2FyZCIsIkxheW91dCIsIlRpY2tldCIsIlRpY2tldExpc3QiLCJwcm9wcyIsInJldHJpZXZlVGlja2V0IiwidGlja2V0cyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJ0aWNrZXQiLCJpZCIsImxpc3ROYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUVmLEFBQVEsQUFBTSxBQUFVLEFBQU0sQUFBUTs7QUFDdEMsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7Ozs7OztBQUhuQjs7O0ksQUFLTTtzQ0FFSjs7c0JBQUEsQUFBWSxPQUFPO3dDQUFBOzs4SUFBQSxBQUNYOztVQURXLEFBS25CLGlCQUFpQixZQUFNLEFBQ3JCO1VBQU0sVUFBVSxNQUFBLEFBQUssTUFBckIsQUFBMkIsQUFDM0I7VUFBQSxBQUFJLFNBQVMsQUFDWDtnQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO3VCQUFPLEFBQVEsSUFBSSxrQkFBVSxBQUUzQjs7aUNBQU8sQUFBQyxrQ0FBTyxLQUFLLE9BQWIsQUFBb0IsSUFBSSxNQUF4QixBQUE4Qjt3QkFBOUI7MEJBQVAsQUFBTyxBQUVSO0FBRlE7V0FBQTtBQUZULEFBQU8sQUFNUixTQU5RO0FBWVY7QUFyQmtCOztXQUdsQjs7Ozs7NkJBb0JRLEFBQ1A7NkJBRUUsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFBYztBQUFkO0FBQUEsY0FBYyxBQUFLLE1BRnZCLEFBQ0UsQUFDRSxBQUF5QixBQUUzQiw0QkFBQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBRUs7QUFGTDtBQUFBLGNBTkosQUFFRSxBQUlFLEFBRUssQUFBSyxBQU1mOzs7OztBLEFBeENzQjs7QUEwQ3hCLEFBQ0Q7a0JBQUEsQUFBZSIsImZpbGUiOiJUaWNrZXRMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9EYW5pZWwvRGVza3RvcC9wbGF5Z3JvdW5kIn0=
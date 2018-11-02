'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('./Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _DetailPage = require('./DetailPage');

var _DetailPage2 = _interopRequireDefault(_DetailPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Daniel/Desktop/playground/components/Ticket.js';
// import {Card, Grid, Button} from 'semantic-ui-react';

exports.default = function (props) {

  return _react2.default.createElement(_semanticUiReact.Card, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_semanticUiReact.Card.Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_semanticUiReact.Card.Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, props.data.title), _react2.default.createElement(_semanticUiReact.Card.Meta, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, 'Friends of Elliot'), _react2.default.createElement(_semanticUiReact.Card.Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, props.data.body), _react2.default.createElement(_DetailPage2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  })));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGlja2V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29udGFpbmVyIiwiR3JpZCIsIlNlZ21lbnQiLCJCdXR0b24iLCJDYXJkIiwiSW1hZ2UiLCJMYXlvdXQiLCJEZXRhaWxQYWdlIiwicHJvcHMiLCJkYXRhIiwidGl0bGUiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFFZixBQUFRLEFBQVUsQUFBTSxBQUFTLEFBQVEsQUFBTTs7QUFDL0MsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZ0IsQUFFdkI7Ozs7Ozs7QUFMQTs7a0JBS2UsVUFBQSxBQUFDLE9BQVUsQUFFeEI7O3lCQUVFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0csY0FBRCxzQkFBQSxBQUFNOztnQkFBTjtrQkFBQSxBQUVFO0FBRkY7QUFBQSxxQkFFRyxjQUFELHNCQUFBLEFBQU07O2dCQUFOO2tCQUFBLEFBQWM7QUFBZDtBQUFBLFdBQWMsQUFBTSxLQUZ0QixBQUVFLEFBQXlCLEFBQ3pCLHdCQUFDLGNBQUQsc0JBQUEsQUFBTTs7Z0JBQU47a0JBQUE7QUFBQTtBQUFBLEtBSEYsQUFHRSxBQUNBLHNDQUFDLGNBQUQsc0JBQUEsQUFBTTs7Z0JBQU47a0JBQUEsQUFDRztBQURIO0FBQUEsV0FDRyxBQUFNLEtBTFgsQUFJRSxBQUNjLEFBRWQsdUJBQUEsQUFBQzs7Z0JBQUQ7a0JBVk4sQUFFRSxBQUNFLEFBT0UsQUFpQlA7QUFqQk87QUFBQTtBQVpSIiwiZmlsZSI6IlRpY2tldC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRGFuaWVsL0Rlc2t0b3AvcGxheWdyb3VuZCJ9
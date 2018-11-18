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

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Daniel/Desktop/playground2/components/FileUpload.js';


var FileUpload = function (_Component) {
  (0, _inherits3.default)(FileUpload, _Component);

  function FileUpload() {
    (0, _classCallCheck3.default)(this, FileUpload);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FileUpload.__proto__ || (0, _getPrototypeOf2.default)(FileUpload)).call(this));

    _this.submitFile = function (event) {
      event.preventDefault();
      var formData = new FormData();
      formData.append('file', _this.state.file[0]);
      _axios2.default.post('/test-upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        // handle your response;
      }).catch(function (error) {
        // handle your error
      });
    };

    _this.handleFileUpload = function (event) {
      _this.setState({ file: event.target.files });
    };

    _this.state = {
      file: null
    };
    return _this;
  }

  (0, _createClass3.default)(FileUpload, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('form', { onSubmit: this.submitFile, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('input', { label: 'upload file', type: 'file', onChange: this.handleFileUpload, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement('button', { type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'Send'));
    }
  }]);

  return FileUpload;
}(_react.Component);

exports.default = FileUpload;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRmlsZVVwbG9hZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImF4aW9zIiwiRmlsZVVwbG9hZCIsInN1Ym1pdEZpbGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInN0YXRlIiwiZmlsZSIsInBvc3QiLCJoZWFkZXJzIiwidGhlbiIsImNhdGNoIiwiaGFuZGxlRmlsZVVwbG9hZCIsInNldFN0YXRlIiwidGFyZ2V0IiwiZmlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7Ozs7OztJLEFBRUQ7c0NBQ0o7O3dCQUFlO3dDQUFBOzt3SUFBQTs7VUFBQSxBQU9mLGFBQWEsVUFBQSxBQUFDLE9BQVUsQUFDdEI7WUFBQSxBQUFNLEFBQ047VUFBTSxXQUFXLElBQWpCLEFBQWlCLEFBQUksQUFDckI7ZUFBQSxBQUFTLE9BQVQsQUFBZ0IsUUFBUSxNQUFBLEFBQUssTUFBTCxBQUFXLEtBQW5DLEFBQXdCLEFBQWdCLEFBQ3hDO3NCQUFBLEFBQU0scUJBQU4sQUFBMkI7OzBCQUEzQixBQUFxQyxBQUMxQixBQUNTO0FBRFQsQUFDUDtBQUZpQyxBQUNuQyxTQURGLEFBSUcsS0FBSyxvQkFBWSxBQUNsQjtBQUNEO0FBTkQsU0FBQSxBQU1HLE1BQU0saUJBQVMsQUFDaEI7QUFDRDtBQVJELEFBU0Q7QUFwQmM7O1VBQUEsQUFzQmYsbUJBQW1CLFVBQUEsQUFBQyxPQUFVLEFBQzVCO1lBQUEsQUFBSyxTQUFTLEVBQUMsTUFBTSxNQUFBLEFBQU0sT0FBM0IsQUFBYyxBQUFvQixBQUNuQztBQXhCYyxBQUViOztVQUFBLEFBQUs7WUFGUSxBQUViLEFBQWEsQUFDTDtBQURLLEFBQ1g7V0FFSDs7Ozs7NkJBcUJTLEFBQ1I7NkJBQ0UsY0FBQSxVQUFNLFVBQVUsS0FBaEIsQUFBcUI7b0JBQXJCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLDJDQUNTLE9BQVAsQUFBYSxlQUFjLE1BQTNCLEFBQWdDLFFBQU8sVUFBVSxLQUFqRCxBQUFzRDtvQkFBdEQ7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsY0FBQSxZQUFRLE1BQVIsQUFBYTtvQkFBYjtzQkFBQTtBQUFBO1NBSEosQUFDRSxBQUVFLEFBR0w7Ozs7O0FBbENzQixBLEFBcUN6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJGaWxlVXBsb2FkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9EYW5pZWwvRGVza3RvcC9wbGF5Z3JvdW5kMiJ9
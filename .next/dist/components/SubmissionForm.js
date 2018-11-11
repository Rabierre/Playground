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

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _SessionMockup = require('./SessionMockup');

var _reactDropzoneS3Uploader = require('react-dropzone-s3-uploader');

var _reactDropzoneS3Uploader2 = _interopRequireDefault(_reactDropzoneS3Uploader);

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _FileUpload = require('./FileUpload');

var _FileUpload2 = _interopRequireDefault(_FileUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Daniel/Desktop/playground/components/SubmissionForm.js';


var SubmissionForm = function (_Component) {
  (0, _inherits3.default)(SubmissionForm, _Component);

  function SubmissionForm(props) {
    (0, _classCallCheck3.default)(this, SubmissionForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SubmissionForm.__proto__ || (0, _getPrototypeOf2.default)(SubmissionForm)).call(this, props));

    _this.state = {};

    return _this;
  }

  (0, _createClass3.default)(SubmissionForm, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, ' Show Notebook '), _react2.default.createElement('iframe', { style: { width: '100%' }, src: 'https://s3-us-west-1.amazonaws.com/kaj011/prediction.html', scrolling: 'yes', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement(_FileUpload2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }));
    }
  }]);

  return SubmissionForm;
}(_react.Component);

;

exports.default = SubmissionForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3VibWlzc2lvbkZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDb250YWluZXIiLCJTdGlja3kiLCJCdXR0b24iLCJJbnB1dCIsIkxpc3QiLCJJbWFnZSIsIkZvcm0iLCJIZWFkZXIiLCJIZWFkIiwiYXhpb3MiLCJwb3N0IiwiU2Vzc2lvblJvbGUiLCJVc2VySWQiLCJEcm9wem9uZVMzVXBsb2FkZXIiLCJEcm9wem9uZSIsIkZpbGVVcGxvYWQiLCJTdWJtaXNzaW9uRm9ybSIsInByb3BzIiwic3RhdGUiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQVcsQUFBUSxBQUFRLEFBQU8sQUFBTSxBQUFPOztBQUN2RCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQU8sQUFBUzs7OztBQUNoQixBQUFRLEFBQWEsQUFBYTs7QUFDbEMsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWdCOzs7Ozs7Ozs7SSxBQUVqQjswQ0FFSjs7MEJBQUEsQUFBWSxPQUFPO3dDQUFBOztzSkFBQSxBQUNYLEFBRU47O1VBQUEsQUFBSyxRQUhZLEFBR2pCLEFBQWE7O1dBSWQ7Ozs7OzZCQUVRLEFBRVA7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBRUU7QUFGRjtBQUFBLE9BQUEsa0JBRUUsQUFBQzs7b0JBQUQ7c0JBQUE7QUFBQTtBQUFBLFNBRkYsQUFFRSxBQUVBLDhEQUFRLE9BQU8sRUFBQyxPQUFoQixBQUFlLEFBQVEsVUFBUyxLQUFoQyxBQUFvQyw2REFBNkQsV0FBakcsQUFBMkc7b0JBQTNHO3NCQUpGLEFBSUUsQUFDRTtBQURGOzBCQUNFLEFBQUM7O29CQUFEO3NCQU5OLEFBQ0UsQUFLSSxBQU1QO0FBTk87QUFBQTs7Ozs7QUFuQm1CLEE7O0FBMkI1QixBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IlN1Ym1pc3Npb25Gb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9EYW5pZWwvRGVza3RvcC9wbGF5Z3JvdW5kIn0=
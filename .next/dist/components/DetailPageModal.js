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

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactDropzoneS3Uploader = require('react-dropzone-s3-uploader');

var _reactDropzoneS3Uploader2 = _interopRequireDefault(_reactDropzoneS3Uploader);

var _FileUpload = require('./FileUpload');

var _FileUpload2 = _interopRequireDefault(_FileUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Daniel/Desktop/playground/components/DetailPageModal.js';


var DetailPageModal = function (_Component) {
  (0, _inherits3.default)(DetailPageModal, _Component);

  function DetailPageModal(props) {
    (0, _classCallCheck3.default)(this, DetailPageModal);

    return (0, _possibleConstructorReturn3.default)(this, (DetailPageModal.__proto__ || (0, _getPrototypeOf2.default)(DetailPageModal)).call(this, props));
  }

  (0, _createClass3.default)(DetailPageModal, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(_semanticUiReact.Modal, { open: this.props.openDetail, onClose: this.props.closeDetail, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, 'Profile Picture'), _react2.default.createElement(_semanticUiReact.Modal.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_semanticUiReact.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, 'Description'), _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.TextArea, placeholder: 'Add a more detailed description...', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement(_semanticUiReact.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, 'Jupyter Notebook'), _react2.default.createElement(_semanticUiReact.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, ' Show Notebook '), _react2.default.createElement('iframe', { style: { width: '100%' }, src: 'https://s3-us-west-1.amazonaws.com/kaj011/prediction.html', scrolling: 'yes', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement(_FileUpload2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement(_semanticUiReact.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, 'Add Comment'), _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.TextArea, placeholder: 'Write a comment...', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      })))));
    }
  }]);

  return DetailPageModal;
}(_react.Component);

;

exports.default = DetailPageModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRGV0YWlsUGFnZU1vZGFsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiSGVhZGVyIiwiSWNvbiIsIkltYWdlIiwiTW9kYWwiLCJUZXh0QXJlYSIsIklucHV0Rm9ybWF0IiwiRm9ybSIsIkRyb3B6b25lIiwiYXhpb3MiLCJwb3N0IiwiRHJvcHpvbmVTM1VwbG9hZGVyIiwiRmlsZVVwbG9hZCIsIkRldGFpbFBhZ2VNb2RhbCIsInByb3BzIiwib3BlbkRldGFpbCIsImNsb3NlRGV0YWlsIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUyxBQUFRLEFBQVEsQUFBTSxBQUFPLEFBQU8sQUFBVSxBQUFhOztBQUNwRSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWdCOzs7Ozs7Ozs7SSxBQUdqQjsyQ0FFSjs7MkJBQUEsQUFBWSxPQUFPO3dDQUFBOzttSkFBQSxBQUNYLEFBQ1A7Ozs7OzZCQUVRLEFBRVA7OzZCQUNFLEFBQUMsd0NBQU0sTUFBTSxLQUFBLEFBQUssTUFBbEIsQUFBd0IsWUFBWSxTQUFTLEtBQUEsQUFBSyxNQUFsRCxBQUF3RDtvQkFBeEQ7c0JBQUEsQUFHRTtBQUhGO09BQUEsa0JBR0csY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQTtBQUFBO0FBQUEsU0FIRixBQUdFLEFBQ0Esb0NBQUMsY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQSxBQUVFO0FBRkY7QUFBQSx5QkFFRyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7O29CQUFEO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDRSw4Q0FBQSxBQUFDLHNCQUFELEFBQU0sU0FBTixBQUFZLEFBQVMsb0NBQVUsYUFBL0IsQUFBMkM7b0JBQTNDO3NCQUZKLEFBRUksQUFDRjtBQURFOzBCQUNGLEFBQUM7O29CQUFEO3NCQUFBO0FBQUE7QUFBQSxTQUhGLEFBR0UsQUFDQSxxQ0FBQSxBQUFDOztvQkFBRDtzQkFBQTtBQUFBO0FBQUEsU0FKRixBQUlFLEFBQ0EsOERBQVEsT0FBTyxFQUFDLE9BQWhCLEFBQWUsQUFBUSxVQUFTLEtBQWhDLEFBQW9DLDZEQUE2RCxXQUFqRyxBQUEyRztvQkFBM0c7c0JBTEYsQUFLRSxBQUNFO0FBREY7MEJBQ0UsQUFBQzs7b0JBQUQ7c0JBTkosQUFNSSxBQUVGO0FBRkU7QUFBQSwwQkFFRixBQUFDOztvQkFBRDtzQkFBQTtBQUFBO0FBQUEsU0FSRixBQVFFLEFBQ0UsOENBQUEsQUFBQyxzQkFBRCxBQUFNLFNBQU4sQUFBWSxBQUFTLG9DQUFVLGFBQS9CLEFBQTJDO29CQUEzQztzQkFqQlosQUFDRSxBQUlFLEFBRUUsQUFDRSxBQVNJLEFBUWI7QUFSYTs7Ozs7O0FBekJjLEE7O0FBa0M3QixBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IkRldGFpbFBhZ2VNb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRGFuaWVsL0Rlc2t0b3AvcGxheWdyb3VuZCJ9
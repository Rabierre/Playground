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

var _jsxFileName = '/Users/Daniel/Desktop/playground/components/DetailPage.js';


var DetailPage = function (_Component) {
  (0, _inherits3.default)(DetailPage, _Component);

  function DetailPage(props) {
    (0, _classCallCheck3.default)(this, DetailPage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DetailPage.__proto__ || (0, _getPrototypeOf2.default)(DetailPage)).call(this, props));

    _this.state = {
      s3Url: 'https://kaj011.amazonaws.com',
      uploadOptions: {
        server: 'http://localhost:3000'
        // ,
        // signingUrlQueryParams: {uploadType: 'avatar'}
      }
    };

    _this.handleFinishedUpload = function (info) {
      console.log('File uploaded with filename', info.filename);
      console.log('Access it on s3 at', info.fileUrl);
    };

    _this.show = function (dimmer) {
      return function () {
        return _this.setState({ dimmer: dimmer, open: true });
      };
    };

    return _this;
  }

  // const s3Url = 'https://kaj011.s3.amazonaws.com'

  // onDrop = (acceptedFiles, rejectedFiles) => {
  //   console.log('onDrop');
  //   console.log(acceptedFiles[0]);
  //
  //   const file = acceptedFiles[0];
  //
  //   // this.fileUpload(acceptedFiles)
  //   // .then((response) => {
  //   //   console.log(response.data);
  //   // });
  //
  //   this.fileUpload(file, endpoint)
  //   .then((response) => {
  //     console.log(response.data);
  //   });


  //
  // acceptedFiles.map(file => {
  //   axios({
  //      url: endpoint,
  //      method: 'post',
  //      data: {
  //        file,
  //        name: 'test',
  //      },
  //    })
  //     .then(response => {
  //       console.log(response.data)
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data);
  //     });
  //   });
  // // });

  // }
  // fileUpload(file, endpoint){
  //   const url = endpoint;
  //   const formData = new FormData();
  //   formData.append('file',file)
  //   const config = {
  //       headers: {
  //           // "X-Requested-With": "XMLHttpRequest",
  //           'Access-Control-Allow-Origin': '*'
  //       }
  //   }
  //   return post(url, formData,config)
  // }


  (0, _createClass3.default)(DetailPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_semanticUiReact.Modal, { dimmer: dimmer, open: open, onClose: this.close, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, 'hi'), _react2.default.createElement(_semanticUiReact.Modal.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, 'Profile Picture'), _react2.default.createElement(_semanticUiReact.Modal.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement(_semanticUiReact.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, 'Description'), _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.TextArea, placeholder: 'Add a more detailed description...', __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), _react2.default.createElement(_semanticUiReact.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, 'Jupyter Notebook'), _react2.default.createElement(_semanticUiReact.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, ' Show Notebook '), _react2.default.createElement('iframe', { style: { width: '100%' }, src: 'https://s3-us-west-1.amazonaws.com/kaj011/prediction.html', scrolling: 'yes', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), _react2.default.createElement(_FileUpload2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), _react2.default.createElement(_semanticUiReact.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, 'Add Comment'), _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.TextArea, placeholder: 'Write a comment...', __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      })))));
    }
  }]);

  return DetailPage;
}(_react.Component);

;

exports.default = DetailPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRGV0YWlsUGFnZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkhlYWRlciIsIkljb24iLCJJbWFnZSIsIk1vZGFsIiwiVGV4dEFyZWEiLCJJbnB1dEZvcm1hdCIsIkZvcm0iLCJEcm9wem9uZSIsImF4aW9zIiwicG9zdCIsIkRyb3B6b25lUzNVcGxvYWRlciIsIkZpbGVVcGxvYWQiLCJEZXRhaWxQYWdlIiwicHJvcHMiLCJzdGF0ZSIsInMzVXJsIiwidXBsb2FkT3B0aW9ucyIsInNlcnZlciIsImhhbmRsZUZpbmlzaGVkVXBsb2FkIiwiY29uc29sZSIsImxvZyIsImluZm8iLCJmaWxlbmFtZSIsImZpbGVVcmwiLCJzaG93Iiwic2V0U3RhdGUiLCJkaW1tZXIiLCJvcGVuIiwiY2xvc2UiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFTLEFBQVEsQUFBUSxBQUFNLEFBQU8sQUFBTyxBQUFVLEFBQWE7O0FBQ3BFLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJLEFBR2pCO3NDQUVKOztzQkFBQSxBQUFZLE9BQU87d0NBQUE7OzhJQUFBLEFBQ1g7O1VBRFcsQUFLbkI7YUFBUSxBQUNDLEFBQ1A7O2dCQUNVLEFBQ1I7QUFDQTtBQVZlLEFBS1gsQUFFUztBQUFBLEFBQ2I7QUFISSxBQUNOOztVQU5pQixBQWNuQix1QkFBdUIsZ0JBQVEsQUFDN0I7Y0FBQSxBQUFRLElBQVIsQUFBWSwrQkFBK0IsS0FBM0MsQUFBZ0QsQUFDaEQ7Y0FBQSxBQUFRLElBQVIsQUFBWSxzQkFBc0IsS0FBbEMsQUFBdUMsQUFFeEM7QUFsQmtCOztVQUFBLEFBeUVyQixPQUFPLGtCQUFBO2FBQVUsWUFBQTtlQUFNLE1BQUEsQUFBSyxTQUFTLEVBQUUsUUFBRixRQUFVLE1BQTlCLEFBQU0sQUFBYyxBQUFnQjtBQUE5QztBQXpFYzs7V0FHbEI7QUFpQkQ7O0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdFOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUY7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7NkJBSVMsQUFDUDs2QkFDRSxBQUFDLHdDQUFNLFFBQVAsQUFBZSxRQUFRLE1BQXZCLEFBQTZCLE1BQU0sU0FBUyxLQUE1QyxBQUFpRDtvQkFBakQ7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUVBLHVCQUFDLGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUE7QUFBQTtBQUFBLFNBSEYsQUFHRSxBQUNBLG9DQUFDLGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUEsQUFFRTtBQUZGO0FBQUEseUJBRUcsY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDOztvQkFBRDtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0UsOENBQUEsQUFBQyxzQkFBRCxBQUFNLFNBQU4sQUFBWSxBQUFTLG9DQUFVLGFBQS9CLEFBQTJDO29CQUEzQztzQkFGSixBQUVJLEFBQ0Y7QUFERTswQkFDRixBQUFDOztvQkFBRDtzQkFBQTtBQUFBO0FBQUEsU0FIRixBQUdFLEFBQ0EscUNBQUEsQUFBQzs7b0JBQUQ7c0JBQUE7QUFBQTtBQUFBLFNBSkYsQUFJRSxBQUNBLDhEQUFRLE9BQU8sRUFBQyxPQUFoQixBQUFlLEFBQVEsVUFBUyxLQUFoQyxBQUFvQyw2REFBNkQsV0FBakcsQUFBMkc7b0JBQTNHO3NCQUxGLEFBS0UsQUFDRTtBQURGOzBCQUNFLEFBQUM7O29CQUFEO3NCQU5KLEFBTUksQUFZRjtBQVpFO0FBQUEsMEJBWUYsQUFBQzs7b0JBQUQ7c0JBQUE7QUFBQTtBQUFBLFNBbEJGLEFBa0JFLEFBQ0UsOENBQUEsQUFBQyxzQkFBRCxBQUFNLFNBQU4sQUFBWSxBQUFTLG9DQUFVLGFBQS9CLEFBQTJDO29CQUEzQztzQkEzQlosQUFDRSxBQUlFLEFBRUUsQUFDRSxBQW1CSSxBQVliO0FBWmE7Ozs7OztBLEFBeEdTOztBQXFIeEIsQUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJEZXRhaWxQYWdlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9EYW5pZWwvRGVza3RvcC9wbGF5Z3JvdW5kIn0=
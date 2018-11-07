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
      }, _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, { style: { fontSize: '20px', fontWeight: 'bold' }, control: _semanticUiReact.TextArea, value: this.props.selectedCard.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      })), _react2.default.createElement(_semanticUiReact.Modal.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.TextArea, placeholder: 'Add a more detailed description...', value: this.props.selectedCard.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, ' Show Notebook '), _react2.default.createElement('iframe', { style: { width: '100%' }, src: 'https://s3-us-west-1.amazonaws.com/kaj011/prediction.html', scrolling: 'yes', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement(_FileUpload2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      })), _react2.default.createElement(_semanticUiReact.List, { celled: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_semanticUiReact.Image, { avatar: true, src: 'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement(_semanticUiReact.List.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_semanticUiReact.List.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'Snickerdoodle'), 'An excellent companion')), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_semanticUiReact.Image, { avatar: true, src: '/images/avatar/small/daniel.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement(_semanticUiReact.List.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_semanticUiReact.List.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'Poodle'), 'A poodle, its pretty basic')), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_semanticUiReact.Image, { avatar: true, src: '/images/avatar/small/daniel.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), _react2.default.createElement(_semanticUiReact.List.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.List.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'Paulo'), 'Hes also a dog'))), _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { fluid: true, placeholder: 'Add a comment...', __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, ' test '))))));
    }
  }]);

  return DetailPageModal;
}(_react.Component);

;

exports.default = DetailPageModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRGV0YWlsUGFnZU1vZGFsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiSGVhZGVyIiwiSWNvbiIsIklucHV0IiwiTGlzdCIsIkltYWdlIiwiTW9kYWwiLCJUZXh0QXJlYSIsIklucHV0Rm9ybWF0IiwiRm9ybSIsIkRyb3B6b25lIiwiYXhpb3MiLCJwb3N0IiwiRHJvcHpvbmVTM1VwbG9hZGVyIiwiRmlsZVVwbG9hZCIsIkRldGFpbFBhZ2VNb2RhbCIsInByb3BzIiwib3BlbkRldGFpbCIsImNsb3NlRGV0YWlsIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Iiwic2VsZWN0ZWRDYXJkIiwidGl0bGUiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFTLEFBQVEsQUFBUSxBQUFNLEFBQU8sQUFBTSxBQUFPLEFBQU8sQUFBVSxBQUFhOztBQUNqRixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWdCOzs7Ozs7Ozs7SUFHakIsQTsyQ0FFSjs7MkJBQUEsQUFBWSxPQUFPO3dDQUFBOzttSkFBQSxBQUNYLEFBQ1A7Ozs7OzZCQUVRLEFBRVA7OzZCQUNFLEFBQUMsd0NBQU0sTUFBTSxLQUFBLEFBQUssTUFBbEIsQUFBd0IsWUFBWSxTQUFTLEtBQUEsQUFBSyxNQUFsRCxBQUF3RDtvQkFBeEQ7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsdUNBQ0UsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBTyxFQUFDLFVBQUQsQUFBVyxRQUFRLFlBQXRDLEFBQW1CLEFBQStCLFVBQWxELEFBQTJELEFBQVMsb0NBQVUsT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQWhHLEFBQTZHO29CQUE3RztzQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFOzJCQUVELGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNDO0FBREQ7QUFBQSx1Q0FDQyxBQUFDLHNCQUFELEFBQU0sU0FBTixBQUFZLEFBQVMsb0NBQVUsYUFBL0IsQUFBMkMsc0NBQXFDLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFsRyxBQUErRztvQkFBL0c7c0JBREQsQUFDQyxBQUNDO0FBREQ7MEJBQ0MsQUFBQzs7b0JBQUQ7c0JBQUE7QUFBQTtBQUFBLFNBRkYsQUFFRSxBQUNBLDhEQUFRLE9BQU8sRUFBQyxPQUFoQixBQUFlLEFBQVEsVUFBUyxLQUFoQyxBQUFvQyw2REFBNkQsV0FBakcsQUFBMkc7b0JBQTNHO3NCQUhGLEFBR0UsQUFDRTtBQURGOzBCQUNFLEFBQUM7O29CQUFEO3NCQUxOLEFBQ0UsQUFJSSxBQUtKO0FBTEk7QUFBQSwyQkFLSixBQUFDLHVDQUFLLFFBQU47b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx3Q0FBTSxRQUFQLE1BQWMsS0FBZCxBQUFrQjtvQkFBbEI7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0MsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0Usa0JBSk4sQUFDRSxBQUVFLEFBS0YsNENBQUMsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHdDQUFNLFFBQVAsTUFBYyxLQUFkLEFBQWtCO29CQUFsQjtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxXQVhOLEFBUUUsQUFFRSxBQUtGLGdEQUFDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx3Q0FBTSxRQUFQLE1BQWMsS0FBZCxBQUFrQjtvQkFBbEI7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0MsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsVUE1QlIsQUFVRSxBQWVFLEFBRUUsQUFNSixxQ0FBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNBO0FBREE7QUFBQSx5QkFDQSxBQUFDLHdDQUFNLE9BQVAsTUFBYSxhQUFiLEFBQXlCO29CQUF6QjtzQkFEQSxBQUNBLEFBQ0E7QUFEQTswQkFDQSxBQUFDOztvQkFBRDtzQkFBQTtBQUFBO0FBQUEsU0ExQ1YsQUFDRSxBQUlFLEFBQ0UsQUFpQ0UsQUFDRSxBQUVBLEFBWVg7Ozs7O0FBOUQyQixBOztBQStEN0IsQUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJEZXRhaWxQYWdlTW9kYWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0RhbmllbC9EZXNrdG9wL3BsYXlncm91bmQifQ==
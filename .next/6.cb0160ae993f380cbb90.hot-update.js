webpackHotUpdate(6,{

/***/ 1459:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(484);

var _CommentList = __webpack_require__(1212);

var _CommentList2 = _interopRequireDefault(_CommentList);

var _Submissions = __webpack_require__(1213);

var _Submissions2 = _interopRequireDefault(_Submissions);

var _SubmissionForm = __webpack_require__(1214);

var _SubmissionForm2 = _interopRequireDefault(_SubmissionForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Daniel/Desktop/playground2/components/lanes/InProgressDetailModal.js';


var InProgressDetailModal = function (_Component) {
  (0, _inherits3.default)(InProgressDetailModal, _Component);

  function InProgressDetailModal(props) {
    (0, _classCallCheck3.default)(this, InProgressDetailModal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InProgressDetailModal.__proto__ || (0, _getPrototypeOf2.default)(InProgressDetailModal)).call(this, props));

    _this.state = {

      comment: '',
      selectedCard: _this.props.selectedCard

    };

    return _this;
  }

  (0, _createClass3.default)(InProgressDetailModal, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_semanticUiReact.Modal, { open: this.props.openDetail == 'IN_PROGRESS', onClose: this.props.closeDetail, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, { readOnly: true, onChange: this.props.onChangeTitleHandler, style: { fontSize: '20px', fontWeight: 'bold' }, control: _semanticUiReact.TextArea, value: this.props.selectedCard.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, { onChange: this.props.onChangeDescriptionHandler, control: _semanticUiReact.TextArea, placeholder: 'Add a more detailed description...', value: this.props.selectedCard.description, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })), _react2.default.createElement(_semanticUiReact.Modal.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement(_SubmissionForm2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react2.default.createElement(_Submissions2.default, { selectedCard: this.props.selectedCard, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react2.default.createElement(_CommentList2.default, { selectedCard: this.props.selectedCard, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      })))));
    }
  }]);

  return InProgressDetailModal;
}(_react.Component);

exports.default = InProgressDetailModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGFuZXMvSW5Qcm9ncmVzc0RldGFpbE1vZGFsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiSGVhZGVyIiwiSWNvbiIsIklucHV0IiwiTGlzdCIsIkltYWdlIiwiTW9kYWwiLCJUZXh0QXJlYSIsIklucHV0Rm9ybWF0IiwiRm9ybSIsIkNvbW1lbnRMaXN0IiwiU3VibWlzc2lvbnMiLCJTdWJtaXNzaW9uRm9ybSIsIkluUHJvZ3Jlc3NEZXRhaWxNb2RhbCIsInByb3BzIiwic3RhdGUiLCJjb21tZW50Iiwic2VsZWN0ZWRDYXJkIiwib3BlbkRldGFpbCIsImNsb3NlRGV0YWlsIiwib25DaGFuZ2VUaXRsZUhhbmRsZXIiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0aXRsZSIsIm9uQ2hhbmdlRGVzY3JpcHRpb25IYW5kbGVyIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUyxBQUFRLEFBQVEsQUFBTSxBQUFPLEFBQU0sQUFBTyxBQUFPLEFBQVUsQUFBYTs7QUFDakYsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBb0I7Ozs7Ozs7OztJQUVyQixBO2lEQUVKOztpQ0FBQSxBQUFZLE9BQU87d0NBQUE7O29LQUFBLEFBQ1gsQUFFTjs7VUFBQSxBQUFLOztlQUFRLEFBRUYsQUFDVDtvQkFBYyxNQUFBLEFBQUssTUFOSixBQUdqQixBQUFhLEFBR2M7O0FBSGQsQUFFWDs7V0FLSDs7Ozs7NkJBRVEsQUFFUDs7NkJBQ0ksY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDLHdDQUFNLE1BQU0sS0FBQSxBQUFLLE1BQUwsQUFBVyxjQUF4QixBQUFzQyxlQUFlLFNBQVMsS0FBQSxBQUFLLE1BQW5FLEFBQXlFO29CQUF6RTtzQkFBQSxBQUNBO0FBREE7eUJBQ0EsQUFBQzs7b0JBQUQ7c0JBQUEsQUFNRTtBQU5GO0FBQUEsdUNBTUUsQUFBQyxzQkFBRCxBQUFNLFNBQU0sVUFBWixNQUFxQixVQUFVLEtBQUEsQUFBSyxNQUFwQyxBQUEwQyxzQkFBc0IsT0FBTyxFQUFDLFVBQUQsQUFBVyxRQUFRLFlBQTFGLEFBQXVFLEFBQStCLFVBQXRHLEFBQStHLEFBQVMsb0NBQVUsT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQXBKLEFBQWlLO29CQUFqSztzQkFORixBQU1FLEFBQ0E7QUFEQTt3Q0FDQSxBQUFDLHNCQUFELEFBQU0sU0FBTSxVQUFVLEtBQUEsQUFBSyxNQUEzQixBQUFpQyw0QkFBakMsQUFBNkQsQUFBUyxvQ0FBVSxhQUFoRixBQUE0RixzQ0FBcUMsT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQW5KLEFBQWdLO29CQUFoSztzQkFSRixBQUNBLEFBT0UsQUFHRjtBQUhFOzJCQUdELGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDOztvQkFBRDtzQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUMsdUNBQVksY0FBYyxLQUFBLEFBQUssTUFBaEMsQUFBc0M7b0JBQXRDO3NCQUZGLEFBRUUsQUFDQTtBQURBOzBCQUNBLEFBQUMsdUNBQVksY0FBYyxLQUFBLEFBQUssTUFBaEMsQUFBc0M7b0JBQXRDO3NCQWpCVixBQUNJLEFBQ0UsQUFXQSxBQUNFLEFBR0UsQUFTWDtBQVRXOzs7Ozs7QUFqQ3NCLEEsQUFnRHBDOztrQkFBQSxBQUFlIiwiZmlsZSI6IkluUHJvZ3Jlc3NEZXRhaWxNb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRGFuaWVsL0Rlc2t0b3AvcGxheWdyb3VuZDIifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/Daniel/Desktop/playground2/components/lanes/InProgressDetailModal.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Daniel/Desktop/playground2/components/lanes/InProgressDetailModal.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5jYjAxNjBhZTk5M2YzODBjYmI5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYW5lcy9JblByb2dyZXNzRGV0YWlsTW9kYWwuanM/NThjYzE1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgSGVhZGVyLCBJY29uLCBJbnB1dCwgTGlzdCwgSW1hZ2UsIE1vZGFsLCBUZXh0QXJlYSwgSW5wdXRGb3JtYXQsIEZvcm0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBDb21tZW50TGlzdCBmcm9tICcuLi9Db21tZW50TGlzdCdcbmltcG9ydCBTdWJtaXNzaW9ucyBmcm9tICcuLi9TdWJtaXNzaW9ucydcbmltcG9ydCBTdWJtaXNzaW9uRm9ybSBmcm9tICcuLi9TdWJtaXNzaW9uRm9ybSdcblxuY2xhc3MgSW5Qcm9ncmVzc0RldGFpbE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgIGNvbW1lbnQ6ICcnLFxuICAgICAgc2VsZWN0ZWRDYXJkOiB0aGlzLnByb3BzLnNlbGVjdGVkQ2FyZFxuXG4gICAgfTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TW9kYWwgb3Blbj17dGhpcy5wcm9wcy5vcGVuRGV0YWlsID09ICdJTl9QUk9HUkVTUyd9IG9uQ2xvc2U9e3RoaXMucHJvcHMuY2xvc2VEZXRhaWx9PlxuICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgey8qPEJ1dHRvbi5Hcm91cCBzaXplPSdsYXJnZScgZmx1aWQ+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5vblVwVm90ZX0+VXAgdm90ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uLk9yIC8+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5vbkRvd25Wb3RlfT5Eb3duIHZvdGU8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPiovfVxuICAgICAgICAgICAgPEZvcm0uRmllbGQgcmVhZE9ubHkgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2VUaXRsZUhhbmRsZXJ9IHN0eWxlPXt7Zm9udFNpemU6ICcyMHB4JywgZm9udFdlaWdodDogJ2JvbGQnfX0gY29udHJvbD17VGV4dEFyZWF9IHZhbHVlPXt0aGlzLnByb3BzLnNlbGVjdGVkQ2FyZC50aXRsZX0gLz5cbiAgICAgICAgICAgIDxGb3JtLkZpZWxkIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlRGVzY3JpcHRpb25IYW5kbGVyfSBjb250cm9sPXtUZXh0QXJlYX0gcGxhY2Vob2xkZXI9J0FkZCBhIG1vcmUgZGV0YWlsZWQgZGVzY3JpcHRpb24uLi4nIHZhbHVlPXt0aGlzLnByb3BzLnNlbGVjdGVkQ2FyZC5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICA8L0Zvcm0+XG5cbiAgICAgICAgICA8TW9kYWwuQ29udGVudD5cbiAgICAgICAgICAgIDxNb2RhbC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgPFN1Ym1pc3Npb25Gb3JtIC8+XG4gICAgICAgICAgICAgIDxTdWJtaXNzaW9ucyBzZWxlY3RlZENhcmQ9e3RoaXMucHJvcHMuc2VsZWN0ZWRDYXJkfS8+XG4gICAgICAgICAgICAgIDxDb21tZW50TGlzdCBzZWxlY3RlZENhcmQ9e3RoaXMucHJvcHMuc2VsZWN0ZWRDYXJkfS8+XG5cbiAgICAgICAgICAgIDwvTW9kYWwuRGVzY3JpcHRpb24+XG4gICAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxuICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICApXG4gIH1cblxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSW5Qcm9ncmVzc0RldGFpbE1vZGFsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYW5lcy9JblByb2dyZXNzRGV0YWlsTW9kYWwuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7QUFJQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQU1BO0FBTkE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBU0E7QUFUQTs7Ozs7Ozs7QUFlQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
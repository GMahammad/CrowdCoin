"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Mehemmed\\Desktop\\Thesis\\CrowdCoin\\components\\Loading.js";


function Loading() {
  var styleCss = {
    'height': "100%",
    'width': "100%",
    'left': '0%',
    'top': "0%",
    'position': "absolute"
  };

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      load = _useState2[0],
      setLoad = _useState2[1];

  (0, _react.useEffect)(function () {
    setLoad(true);
    setTimeout(function () {
      setLoad(false);
    }, 1500);
  }, []);
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, load ? _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement(_semanticUiReact.Segment, { style: styleCss, __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement(_semanticUiReact.Dimmer, { active: true, inverted: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement(_semanticUiReact.Loader, { inverted: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Loading")))) : _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }));
}

exports.default = Loading;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExvYWRpbmcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNlZ21lbnQiLCJEaW1tZXIiLCJMb2FkZXIiLCJMb2FkaW5nIiwic3R5bGVDc3MiLCJsb2FkIiwic2V0TG9hZCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVMsQUFBVTs7OztBQUMxQixBQUFTLEFBQVMsQUFBUTs7Ozs7OztBQUUxQixTQUFBLEFBQVMsVUFBVSxBQUNqQjtNQUFNO2NBQVcsQUFDTCxBQUNWO2FBRmUsQUFFTixBQUNUO1lBSGUsQUFHTixBQUNUO1dBSmUsQUFJUixBQUNQO2dCQU5lLEFBQ2pCLEFBQWlCLEFBS0g7QUFMRyxBQUNmOztrQkFNc0IscUJBUlAsQUFRTyxBQUFTOzJEQVJoQjtNQUFBLEFBUVYsa0JBUlU7TUFBQSxBQVFKLHFCQUNiOzt3QkFBVSxZQUFNLEFBQ2Q7WUFBQSxBQUFRLEFBQ1I7ZUFBVyxZQUFNLEFBQ2Y7Y0FBQSxBQUFRLEFBQ1Q7QUFGRCxPQUFBLEFBRUcsQUFDSjtBQUxELEtBQUEsQUFLRyxBQUNIO3lCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0c7QUFESDtBQUFBLEdBQUEseUJBRUksY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDLDBDQUFRLE9BQVQsQUFBZ0I7Z0JBQWhCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLHlDQUFPLFFBQVIsTUFBZSxVQUFmO2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLHlDQUFPLFVBQVI7Z0JBQUE7a0JBQUE7QUFBQTtLQUpQLEFBQ0MsQUFDRSxBQUNFLEFBQ0U7O2dCQUtOO2tCQVhOLEFBQ0UsQUFVSSxBQUlQO0FBSk87QUFBQSxHQUFBO0FBTVI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTG9hZGluZy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9NZWhlbW1lZC9EZXNrdG9wL1RoZXNpcy9Dcm93ZENvaW4ifQ==
webpackHotUpdate_N_E("pages/user/profilo",{

/***/ "./pages/user/profilo.js":
/*!*******************************!*\
  !*** ./pages/user/profilo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/UserContext */ \"./contexts/UserContext.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/pages/user/profilo.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar Profilo = function Profilo() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_4__[\"UserContext\"]),\n      user = _useContext.user,\n      updateUser = _useContext.updateUser;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    firstName: '',\n    lastName: '',\n    email: '',\n    password: ''\n  }),\n      form = _useState[0],\n      setForm = _useState[1];\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {\n      var updatedUser;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              console.log(user.firstName);\n              console.log(form.firstName || user.firstName);\n\n              try {\n                updatedUser = {\n                  firstName: form.firstName || user.firstName,\n                  lastName: form.lastName || user.lastName,\n                  email: form.email || user.email\n                };\n                console.log(updatedUser, 'updatedUser');\n                updateUser(updatedUser);\n                window.location.reload();\n              } catch (err) {\n                console.log(err);\n              }\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, \"Profilo\"), __jsx(\"form\", {\n    onSubmit: handleSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    placeholder: user.firstName,\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        firstName: e.target.value\n      }));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    placeholder: user.lastName,\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        lastName: e.target.value\n      }));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"email\",\n    placeholder: user.email,\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        email: e.target.value\n      }));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"password\",\n    placeholder: \"*****\",\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        password: e.target.value\n      }));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, \"Aggiorna\")));\n};\n\n_s(Profilo, \"G1kSOfSGiqA4cfxBMul8vyHfv6w=\");\n\n_c = Profilo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profilo);\n\nvar _c;\n\n$RefreshReg$(_c, \"Profilo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9wcm9maWxvLmpzP2NhNDEiXSwibmFtZXMiOlsiUHJvZmlsbyIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInVzZXIiLCJ1cGRhdGVVc2VyIiwidXNlU3RhdGUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJmb3JtIiwic2V0Rm9ybSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVkVXNlciIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsb0JBQ1NDLHdEQUFVLENBQUNDLGlFQUFELENBRG5CO0FBQUEsTUFDWkMsSUFEWSxlQUNaQSxJQURZO0FBQUEsTUFDTkMsVUFETSxlQUNOQSxVQURNOztBQUFBLGtCQUdJQyxzREFBUSxDQUFDO0FBQy9CQyxhQUFTLEVBQUUsRUFEb0I7QUFFL0JDLFlBQVEsRUFBRSxFQUZxQjtBQUcvQkMsU0FBSyxFQUFFLEVBSHdCO0FBSS9CQyxZQUFRLEVBQUU7QUFKcUIsR0FBRCxDQUhaO0FBQUEsTUFHYkMsSUFIYTtBQUFBLE1BR1BDLE9BSE87O0FBV3BCLE1BQU1DLFlBQVk7QUFBQSxnTUFBRyxpQkFBTUMsQ0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJBLGVBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxxQkFBTyxDQUFDQyxHQUFSLENBQVliLElBQUksQ0FBQ0csU0FBakI7QUFDQVMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZTixJQUFJLENBQUNKLFNBQUwsSUFBa0JILElBQUksQ0FBQ0csU0FBbkM7O0FBQ0Esa0JBQUk7QUFDSVcsMkJBREosR0FDa0I7QUFDaEJYLDJCQUFTLEVBQUVJLElBQUksQ0FBQ0osU0FBTCxJQUFrQkgsSUFBSSxDQUFDRyxTQURsQjtBQUVoQkMsMEJBQVEsRUFBRUcsSUFBSSxDQUFDSCxRQUFMLElBQWlCSixJQUFJLENBQUNJLFFBRmhCO0FBR2hCQyx1QkFBSyxFQUFFRSxJQUFJLENBQUNGLEtBQUwsSUFBY0wsSUFBSSxDQUFDSztBQUhWLGlCQURsQjtBQU1GTyx1QkFBTyxDQUFDQyxHQUFSLENBQVlDLFdBQVosRUFBeUIsYUFBekI7QUFDQWIsMEJBQVUsQ0FBQ2EsV0FBRCxDQUFWO0FBQ0FDLHNCQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ0QsZUFURCxDQVNFLE9BQU9DLEdBQVAsRUFBWTtBQUNaTix1QkFBTyxDQUFDQyxHQUFSLENBQVlLLEdBQVo7QUFDRDs7QUFma0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWlQsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFrQkEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUU7QUFBTSxZQUFRLEVBQUVBLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGVBQVcsRUFBRVQsSUFBSSxDQUFDRyxTQUFyQztBQUFnRCxZQUFRLEVBQUUsa0JBQUNPLENBQUQ7QUFBQSxhQUFPRixPQUFPLGlDQUFNRCxJQUFOO0FBQVlKLGlCQUFTLEVBQUVPLENBQUMsQ0FBQ1MsTUFBRixDQUFTQztBQUFoQyxTQUFkO0FBQUEsS0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixlQUFXLEVBQUVwQixJQUFJLENBQUNJLFFBQXJDO0FBQStDLFlBQVEsRUFBRSxrQkFBQ00sQ0FBRDtBQUFBLGFBQU9GLE9BQU8saUNBQU1ELElBQU47QUFBWUgsZ0JBQVEsRUFBRU0sQ0FBQyxDQUFDUyxNQUFGLENBQVNDO0FBQS9CLFNBQWQ7QUFBQSxLQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFPLFFBQUksRUFBQyxPQUFaO0FBQW9CLGVBQVcsRUFBRXBCLElBQUksQ0FBQ0ssS0FBdEM7QUFBNkMsWUFBUSxFQUFFLGtCQUFDSyxDQUFEO0FBQUEsYUFBT0YsT0FBTyxpQ0FBTUQsSUFBTjtBQUFZRixhQUFLLEVBQUVLLENBQUMsQ0FBQ1MsTUFBRixDQUFTQztBQUE1QixTQUFkO0FBQUEsS0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBTyxRQUFJLEVBQUMsVUFBWjtBQUF1QixlQUFXLEVBQUMsT0FBbkM7QUFBMkMsWUFBUSxFQUFFLGtCQUFDVixDQUFEO0FBQUEsYUFBT0YsT0FBTyxpQ0FBTUQsSUFBTjtBQUFZRCxnQkFBUSxFQUFFSSxDQUFDLENBQUNTLE1BQUYsQ0FBU0M7QUFBL0IsU0FBZDtBQUFBLEtBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsQ0FGRixDQURGO0FBWUQsQ0F6Q0Q7O0dBQU12QixPOztLQUFBQSxPO0FBMENTQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3VzZXIvcHJvZmlsby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL1VzZXJDb250ZXh0J1xuXG5jb25zdCBQcm9maWxvID0gKCkgPT4ge1xuICBjb25zdCB7IHVzZXIsIHVwZGF0ZVVzZXIgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpXG5cbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xuICAgIGZpcnN0TmFtZTogJycsXG4gICAgbGFzdE5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gIH0pXG5cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zb2xlLmxvZyh1c2VyLmZpcnN0TmFtZSlcbiAgICBjb25zb2xlLmxvZyhmb3JtLmZpcnN0TmFtZSB8fCB1c2VyLmZpcnN0TmFtZSlcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXBkYXRlZFVzZXIgPSB7XG4gICAgICAgICAgZmlyc3ROYW1lOiBmb3JtLmZpcnN0TmFtZSB8fCB1c2VyLmZpcnN0TmFtZSxcbiAgICAgICAgICBsYXN0TmFtZTogZm9ybS5sYXN0TmFtZSB8fCB1c2VyLmxhc3ROYW1lLFxuICAgICAgICAgIGVtYWlsOiBmb3JtLmVtYWlsIHx8IHVzZXIuZW1haWwsXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyh1cGRhdGVkVXNlciwgJ3VwZGF0ZWRVc2VyJylcbiAgICAgIHVwZGF0ZVVzZXIodXBkYXRlZFVzZXIpXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+UHJvZmlsbzwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPXt1c2VyLmZpcnN0TmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgZmlyc3ROYW1lOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPXt1c2VyLmxhc3ROYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBsYXN0TmFtZTogZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdlbWFpbCcgcGxhY2Vob2xkZXI9e3VzZXIuZW1haWx9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgPGlucHV0IHR5cGU9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj0nKioqKionIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgPGJ1dHRvbj5BZ2dpb3JuYTwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBQcm9maWxvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user/profilo.js\n");

/***/ })

})
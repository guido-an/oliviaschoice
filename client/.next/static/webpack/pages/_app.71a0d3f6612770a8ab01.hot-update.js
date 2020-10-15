webpackHotUpdate_N_E("pages/_app",{

/***/ "./contexts/UserContext.js":
/*!*********************************!*\
  !*** ./contexts/UserContext.js ***!
  \*********************************/
/*! exports provided: UserContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContext\", function() { return UserContext; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/contexts/UserContext.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\nvar UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])();\nvar service = axios__WEBPACK_IMPORTED_MODULE_3___default.a.create({\n  baseURL: \"http://localhost:5000\",\n  withCredentials: true\n});\n\nvar UserContextProvider = function UserContextProvider(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({}),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var signup = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(user) {\n      var data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return service.post('/auth/signup', user);\n\n            case 2:\n              data = _context.sent;\n              return _context.abrupt(\"return\", data);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function signup(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var login = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(user) {\n      var data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return service.post('/auth/login', user);\n\n            case 2:\n              data = _context2.sent;\n              return _context2.abrupt(\"return\", data);\n\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function login(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var setAppUser = function setAppUser(user) {\n    return setUser(user);\n  };\n\n  var checkIfLoggedIn = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n      var _yield$service$get, data;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return service.get('/auth/loggedin');\n\n            case 2:\n              _yield$service$get = _context3.sent;\n              data = _yield$service$get.data;\n              return _context3.abrupt(\"return\", data.user);\n\n            case 5:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function checkIfLoggedIn() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var fetchUser = /*#__PURE__*/function () {\n    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.prev = 0;\n              _context4.next = 3;\n              return checkIfLoggedIn();\n\n            case 3:\n              res = _context4.sent;\n              setUser(res);\n              _context4.next = 10;\n              break;\n\n            case 7:\n              _context4.prev = 7;\n              _context4.t0 = _context4[\"catch\"](0);\n              setUser(null);\n\n            case 10:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4, null, [[0, 7]]);\n    }));\n\n    return function fetchUser() {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(UserContext.Provider, {\n    value: {\n      user: user,\n      signup: signup,\n      setAppUser: setAppUser,\n      checkIfLoggedIn: checkIfLoggedIn,\n      fetchUser: fetchUser\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, props.children);\n};\n\n_s(UserContextProvider, \"cCRtNmj6gRKVA5wOmLEmdl385z4=\");\n\n_c = UserContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserContextProvider);\n\nvar _c;\n\n$RefreshReg$(_c, \"UserContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvVXNlckNvbnRleHQuanM/ODFkMiJdLCJuYW1lcyI6WyJVc2VyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzZXJ2aWNlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsIndpdGhDcmVkZW50aWFscyIsIlVzZXJDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJzaWdudXAiLCJwb3N0IiwiZGF0YSIsImxvZ2luIiwic2V0QXBwVXNlciIsImNoZWNrSWZMb2dnZWRJbiIsImdldCIsImZldGNoVXNlciIsInJlcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsRUFBakM7QUFFUCxJQUFNQyxPQUFPLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUMzQkMsU0FBTyxFQUFFQyx1QkFEa0I7QUFFM0JDLGlCQUFlLEVBQUU7QUFGVSxDQUFiLENBQWhCOztBQUtBLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQUMsS0FBSyxFQUFJO0FBQUE7O0FBQUEsa0JBQ1hDLHNEQUFRLENBQUMsRUFBRCxDQURHO0FBQUEsTUFDNUJDLElBRDRCO0FBQUEsTUFDdEJDLE9BRHNCOztBQUduQyxNQUFNQyxNQUFNO0FBQUEsZ01BQUcsaUJBQU1GLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDTVQsT0FBTyxDQUFDWSxJQUFSLENBQWEsY0FBYixFQUE2QkgsSUFBN0IsQ0FETjs7QUFBQTtBQUNQSSxrQkFETztBQUFBLCtDQUVOQSxJQUZNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQU5GLE1BQU07QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUFLQSxNQUFNRyxLQUFLO0FBQUEsaU1BQUcsa0JBQU1MLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDT1QsT0FBTyxDQUFDWSxJQUFSLENBQWEsYUFBYixFQUE0QkgsSUFBNUIsQ0FEUDs7QUFBQTtBQUNOSSxrQkFETTtBQUFBLGdEQUVMQSxJQUZLOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQUxDLEtBQUs7QUFBQTtBQUFBO0FBQUEsS0FBWDs7QUFLQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBTixJQUFJO0FBQUEsV0FBSUMsT0FBTyxDQUFDRCxJQUFELENBQVg7QUFBQSxHQUF2Qjs7QUFFQSxNQUFNTyxlQUFlO0FBQUEsaU1BQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0NoQixPQUFPLENBQUNpQixHQUFSLENBQVksZ0JBQVosQ0FERDs7QUFBQTtBQUFBO0FBQ2RKLGtCQURjLHNCQUNkQSxJQURjO0FBQUEsZ0RBRWZBLElBQUksQ0FBQ0osSUFGVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFmTyxlQUFlO0FBQUE7QUFBQTtBQUFBLEtBQXJCOztBQUtBLE1BQU1FLFNBQVM7QUFBQSxpTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRUlGLGVBQWUsRUFGbkI7O0FBQUE7QUFFUkcsaUJBRlE7QUFHZFQscUJBQU8sQ0FBQ1MsR0FBRCxDQUFQO0FBSGM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFLZFQscUJBQU8sQ0FBQyxJQUFELENBQVA7O0FBTGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVFEsU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmOztBQVNBLFNBQ0UsTUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFBRVQsVUFBSSxFQUFKQSxJQUFGO0FBQVFFLFlBQU0sRUFBTkEsTUFBUjtBQUFnQkksZ0JBQVUsRUFBVkEsVUFBaEI7QUFBNEJDLHFCQUFlLEVBQWZBLGVBQTVCO0FBQTZDRSxlQUFTLEVBQVRBO0FBQTdDLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1gsS0FBSyxDQUFDYSxRQURULENBREY7QUFLRCxDQWxDRDs7R0FBTWQsbUI7O0tBQUFBLG1CO0FBb0NTQSxrRkFBZiIsImZpbGUiOiIuL2NvbnRleHRzL1VzZXJDb250ZXh0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5cbmNvbnN0IHNlcnZpY2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5BUFBfQVBJLFxuICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbn0pXG5cbmNvbnN0IFVzZXJDb250ZXh0UHJvdmlkZXIgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9KVxuXG4gIGNvbnN0IHNpZ251cCA9IGFzeW5jIHVzZXIgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzZXJ2aWNlLnBvc3QoJy9hdXRoL3NpZ251cCcsIHVzZXIpXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgdXNlciA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHNlcnZpY2UucG9zdCgnL2F1dGgvbG9naW4nLCB1c2VyKVxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICBjb25zdCBzZXRBcHBVc2VyID0gdXNlciA9PiBzZXRVc2VyKHVzZXIpXG5cbiAgY29uc3QgY2hlY2tJZkxvZ2dlZEluID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc2VydmljZS5nZXQoJy9hdXRoL2xvZ2dlZGluJylcbiAgICByZXR1cm4gZGF0YS51c2VyXG4gIH1cblxuICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNoZWNrSWZMb2dnZWRJbigpXG4gICAgICBzZXRVc2VyKHJlcylcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldFVzZXIobnVsbClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBzaWdudXAsIHNldEFwcFVzZXIsIGNoZWNrSWZMb2dnZWRJbiwgZmV0Y2hVc2VyIH19PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckNvbnRleHRQcm92aWRlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/UserContext.js\n");

/***/ })

})
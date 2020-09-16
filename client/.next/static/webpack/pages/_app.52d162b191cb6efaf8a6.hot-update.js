webpackHotUpdate_N_E("pages/_app",{

/***/ "./contexts/UserContext.js":
/*!*********************************!*\
  !*** ./contexts/UserContext.js ***!
  \*********************************/
/*! exports provided: UserContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContext\", function() { return UserContext; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/contexts/UserContext.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\nvar UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])();\nvar service = axios__WEBPACK_IMPORTED_MODULE_3___default.a.create({\n  baseURL: \"http://localhost:5000/\",\n  withCredentials: true\n});\n\nvar UserContextProvider = function UserContextProvider(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({}),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var signup = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(user) {\n      var data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return service.post('/auth/signup', user);\n\n            case 2:\n              data = _context.sent;\n              return _context.abrupt(\"return\", data);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function signup(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var setAppUser = function setAppUser(user) {\n    return setUser(user);\n  };\n\n  var checkIfLoggedIn = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n      var _yield$service$get, data;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return service.get('/auth/loggedin');\n\n            case 2:\n              _yield$service$get = _context2.sent;\n              data = _yield$service$get.data;\n              console.log(data, 'data');\n              return _context2.abrupt(\"return\", data.user);\n\n            case 6:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function checkIfLoggedIn() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var fetchUser = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.prev = 0;\n              _context3.next = 3;\n              return checkIfLoggedIn();\n\n            case 3:\n              res = _context3.sent;\n              setUser(res);\n              console.log(res, 'res');\n              _context3.next = 11;\n              break;\n\n            case 8:\n              _context3.prev = 8;\n              _context3.t0 = _context3[\"catch\"](0);\n              setUser(null);\n\n            case 11:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[0, 8]]);\n    }));\n\n    return function fetchUser() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(UserContext.Provider, {\n    value: {\n      user: user,\n      signup: signup,\n      setAppUser: setAppUser,\n      checkIfLoggedIn: checkIfLoggedIn,\n      fetchUser: fetchUser\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, props.children);\n};\n\n_s(UserContextProvider, \"cCRtNmj6gRKVA5wOmLEmdl385z4=\");\n\n_c = UserContextProvider;\n\nUserContextProvider.getInitialProps = /*#__PURE__*/function () {\n  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(ctx) {\n    var res, json;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.next = 2;\n            return fetch('https://api.github.com/repos/vercel/next.js');\n\n          case 2:\n            res = _context4.sent;\n            _context4.next = 5;\n            return res.json();\n\n          case 5:\n            json = _context4.sent;\n            console.log(json);\n            return _context4.abrupt(\"return\", {\n              stars: json.stargazers_count\n            });\n\n          case 8:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n\n  return function (_x2) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserContextProvider);\n\nvar _c;\n\n$RefreshReg$(_c, \"UserContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvVXNlckNvbnRleHQuanM/ODFkMiJdLCJuYW1lcyI6WyJVc2VyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzZXJ2aWNlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsIndpdGhDcmVkZW50aWFscyIsIlVzZXJDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJzaWdudXAiLCJwb3N0IiwiZGF0YSIsInNldEFwcFVzZXIiLCJjaGVja0lmTG9nZ2VkSW4iLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hVc2VyIiwicmVzIiwiY2hpbGRyZW4iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsImpzb24iLCJzdGFycyIsInN0YXJnYXplcnNfY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxXQUFXLGdCQUFHQywyREFBYSxFQUFqQztBQUVQLElBQU1DLE9BQU8sR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzNCQyxTQUFPLEVBQUVDLHdCQURrQjtBQUUzQkMsaUJBQWUsRUFBRTtBQUZVLENBQWIsQ0FBaEI7O0FBS0EsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFBQSxrQkFDWEMsc0RBQVEsQ0FBQyxFQUFELENBREc7QUFBQSxNQUM1QkMsSUFENEI7QUFBQSxNQUN0QkMsT0FEc0I7O0FBR25DLE1BQU1DLE1BQU07QUFBQSxnTUFBRyxpQkFBTUYsSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNNVCxPQUFPLENBQUNZLElBQVIsQ0FBYSxjQUFiLEVBQTZCSCxJQUE3QixDQUROOztBQUFBO0FBQ1BJLGtCQURPO0FBQUEsK0NBRU5BLElBRk07O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBTkYsTUFBTTtBQUFBO0FBQUE7QUFBQSxLQUFaOztBQUtBLE1BQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFMLElBQUk7QUFBQSxXQUFJQyxPQUFPLENBQUNELElBQUQsQ0FBWDtBQUFBLEdBQXZCOztBQUVBLE1BQU1NLGVBQWU7QUFBQSxpTUFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDQ2YsT0FBTyxDQUFDZ0IsR0FBUixDQUFZLGdCQUFaLENBREQ7O0FBQUE7QUFBQTtBQUNkSCxrQkFEYyxzQkFDZEEsSUFEYztBQUV0QkkscUJBQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFaLEVBQWtCLE1BQWxCO0FBRnNCLGdEQUdmQSxJQUFJLENBQUNKLElBSFU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZk0sZUFBZTtBQUFBO0FBQUE7QUFBQSxLQUFyQjs7QUFNQSxNQUFNSSxTQUFTO0FBQUEsaU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVJSixlQUFlLEVBRm5COztBQUFBO0FBRVJLLGlCQUZRO0FBR2RWLHFCQUFPLENBQUNVLEdBQUQsQ0FBUDtBQUNBSCxxQkFBTyxDQUFDQyxHQUFSLENBQVlFLEdBQVosRUFBaUIsS0FBakI7QUFKYztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU1kVixxQkFBTyxDQUFDLElBQUQsQ0FBUDs7QUFOYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFUUyxTQUFTO0FBQUE7QUFBQTtBQUFBLEtBQWY7O0FBVUEsU0FDRSxNQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFVixVQUFJLEVBQUpBLElBQUY7QUFBUUUsWUFBTSxFQUFOQSxNQUFSO0FBQWdCRyxnQkFBVSxFQUFWQSxVQUFoQjtBQUE0QkMscUJBQWUsRUFBZkEsZUFBNUI7QUFBNkNJLGVBQVMsRUFBVEE7QUFBN0MsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHWixLQUFLLENBQUNjLFFBRFQsQ0FERjtBQUtELENBL0JEOztHQUFNZixtQjs7S0FBQUEsbUI7O0FBaUNOQSxtQkFBbUIsQ0FBQ2dCLGVBQXBCO0FBQUEsK0xBQXNDLGtCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2xCQyxLQUFLLENBQUMsNkNBQUQsQ0FEYTs7QUFBQTtBQUM5QkosZUFEOEI7QUFBQTtBQUFBLG1CQUVqQkEsR0FBRyxDQUFDSyxJQUFKLEVBRmlCOztBQUFBO0FBRTlCQSxnQkFGOEI7QUFHcENSLG1CQUFPLENBQUNDLEdBQVIsQ0FBWU8sSUFBWjtBQUhvQyw4Q0FJN0I7QUFBRUMsbUJBQUssRUFBRUQsSUFBSSxDQUFDRTtBQUFkLGFBSjZCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXRDOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU9lckIsa0ZBQWYiLCJmaWxlIjoiLi9jb250ZXh0cy9Vc2VyQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5jb25zdCBzZXJ2aWNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuQVBQX0FQSSxcbiAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG59KVxuXG5jb25zdCBVc2VyQ29udGV4dFByb3ZpZGVyID0gcHJvcHMgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7fSlcblxuICBjb25zdCBzaWdudXAgPSBhc3luYyB1c2VyID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgc2VydmljZS5wb3N0KCcvYXV0aC9zaWdudXAnLCB1c2VyKVxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICBjb25zdCBzZXRBcHBVc2VyID0gdXNlciA9PiBzZXRVc2VyKHVzZXIpXG5cbiAgY29uc3QgY2hlY2tJZkxvZ2dlZEluID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc2VydmljZS5nZXQoJy9hdXRoL2xvZ2dlZGluJylcbiAgICBjb25zb2xlLmxvZyhkYXRhLCAnZGF0YScpXG4gICAgcmV0dXJuIGRhdGEudXNlclxuICB9XG5cbiAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBjaGVja0lmTG9nZ2VkSW4oKVxuICAgICAgc2V0VXNlcihyZXMpXG4gICAgICBjb25zb2xlLmxvZyhyZXMsICdyZXMnKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0VXNlcihudWxsKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIHNpZ251cCwgc2V0QXBwVXNlciwgY2hlY2tJZkxvZ2dlZEluLCBmZXRjaFVzZXIgfX0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5Vc2VyQ29udGV4dFByb3ZpZGVyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvdmVyY2VsL25leHQuanMnKVxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICBjb25zb2xlLmxvZyhqc29uKVxuICByZXR1cm4geyBzdGFyczoganNvbi5zdGFyZ2F6ZXJzX2NvdW50IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckNvbnRleHRQcm92aWRlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/UserContext.js\n");

/***/ })

})
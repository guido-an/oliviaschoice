webpackHotUpdate_N_E("pages/signup",{

/***/ "./contexts/UserContext.js":
/*!*********************************!*\
  !*** ./contexts/UserContext.js ***!
  \*********************************/
/*! exports provided: UserContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContext\", function() { return UserContext; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/contexts/UserContext.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\nvar UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])();\nvar service = axios__WEBPACK_IMPORTED_MODULE_3___default.a.create({\n  baseURL: \"http://localhost:5000/\",\n  withCredentials: true\n});\n\nvar UserContextProvider = function UserContextProvider(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({}),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var signup = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(user) {\n      var data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return service.post('/auth/signup', user);\n\n            case 2:\n              data = _context.sent;\n              return _context.abrupt(\"return\", data);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function signup(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var setAppUser = function setAppUser(user) {\n    return setUser(user);\n  };\n\n  var checkIfLoggedIn = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n      var _yield$service$get, data;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return service.get('/auth/loggedin');\n\n            case 2:\n              _yield$service$get = _context2.sent;\n              data = _yield$service$get.data;\n              return _context2.abrupt(\"return\", data.user);\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function checkIfLoggedIn() {\n      return _ref2.apply(this, arguments);\n    };\n  }(); // const fetchUser = async () => {\n  //   try {\n  //     const res = await checkIfLoggedIn()\n  //     setUser(res)\n  //   } catch (err) {\n  //     setUser(null)\n  //   }\n  // }\n\n\n  return __jsx(UserContext.Provider, {\n    value: {\n      user: user,\n      signup: signup,\n      setAppUser: setAppUser,\n      checkIfLoggedIn: checkIfLoggedIn,\n      fetchUser: fetchUser\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, props.children);\n};\n\n_s(UserContextProvider, \"cCRtNmj6gRKVA5wOmLEmdl385z4=\");\n\n_c = UserContextProvider;\n\nUserContextProvider.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(ctx) {\n    var res, json;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return fetch('https://api.github.com/repos/vercel/next.js');\n\n          case 2:\n            res = _context3.sent;\n            _context3.next = 5;\n            return res.json();\n\n          case 5:\n            json = _context3.sent;\n            console.log(json);\n            return _context3.abrupt(\"return\", {\n              stars: json.stargazers_count\n            });\n\n          case 8:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function (_x2) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserContextProvider);\n\nvar _c;\n\n$RefreshReg$(_c, \"UserContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvVXNlckNvbnRleHQuanM/ODFkMiJdLCJuYW1lcyI6WyJVc2VyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzZXJ2aWNlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsIndpdGhDcmVkZW50aWFscyIsIlVzZXJDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJzaWdudXAiLCJwb3N0IiwiZGF0YSIsInNldEFwcFVzZXIiLCJjaGVja0lmTG9nZ2VkSW4iLCJnZXQiLCJmZXRjaFVzZXIiLCJjaGlsZHJlbiIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImZldGNoIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJzdGFycyIsInN0YXJnYXplcnNfY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxXQUFXLGdCQUFHQywyREFBYSxFQUFqQztBQUVQLElBQU1DLE9BQU8sR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzNCQyxTQUFPLEVBQUVDLHdCQURrQjtBQUUzQkMsaUJBQWUsRUFBRTtBQUZVLENBQWIsQ0FBaEI7O0FBS0EsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFBQSxrQkFDWEMsc0RBQVEsQ0FBQyxFQUFELENBREc7QUFBQSxNQUM1QkMsSUFENEI7QUFBQSxNQUN0QkMsT0FEc0I7O0FBR25DLE1BQU1DLE1BQU07QUFBQSxnTUFBRyxpQkFBTUYsSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNNVCxPQUFPLENBQUNZLElBQVIsQ0FBYSxjQUFiLEVBQTZCSCxJQUE3QixDQUROOztBQUFBO0FBQ1BJLGtCQURPO0FBQUEsK0NBRU5BLElBRk07O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBTkYsTUFBTTtBQUFBO0FBQUE7QUFBQSxLQUFaOztBQUtBLE1BQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFMLElBQUk7QUFBQSxXQUFJQyxPQUFPLENBQUNELElBQUQsQ0FBWDtBQUFBLEdBQXZCOztBQUVBLE1BQU1NLGVBQWU7QUFBQSxpTUFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDQ2YsT0FBTyxDQUFDZ0IsR0FBUixDQUFZLGdCQUFaLENBREQ7O0FBQUE7QUFBQTtBQUNkSCxrQkFEYyxzQkFDZEEsSUFEYztBQUFBLGdEQUVmQSxJQUFJLENBQUNKLElBRlU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZk0sZUFBZTtBQUFBO0FBQUE7QUFBQSxLQUFyQixDQVZtQyxDQWVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUNFLE1BQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQUVOLFVBQUksRUFBSkEsSUFBRjtBQUFRRSxZQUFNLEVBQU5BLE1BQVI7QUFBZ0JHLGdCQUFVLEVBQVZBLFVBQWhCO0FBQTRCQyxxQkFBZSxFQUFmQSxlQUE1QjtBQUE2Q0UsZUFBUyxFQUFUQTtBQUE3QyxLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dWLEtBQUssQ0FBQ1csUUFEVCxDQURGO0FBS0QsQ0E3QkQ7O0dBQU1aLG1COztLQUFBQSxtQjs7QUErQk5BLG1CQUFtQixDQUFDYSxlQUFwQjtBQUFBLCtMQUFzQyxrQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNsQkMsS0FBSyxDQUFDLDZDQUFELENBRGE7O0FBQUE7QUFDOUJDLGVBRDhCO0FBQUE7QUFBQSxtQkFFakJBLEdBQUcsQ0FBQ0MsSUFBSixFQUZpQjs7QUFBQTtBQUU5QkEsZ0JBRjhCO0FBR3BDQyxtQkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFIb0MsOENBSTdCO0FBQUVHLG1CQUFLLEVBQUVILElBQUksQ0FBQ0k7QUFBZCxhQUo2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF0Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPZXJCLGtGQUFmIiwiZmlsZSI6Ii4vY29udGV4dHMvVXNlckNvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuY29uc3Qgc2VydmljZSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52LkFQUF9BUEksXG4gIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxufSlcblxuY29uc3QgVXNlckNvbnRleHRQcm92aWRlciA9IHByb3BzID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe30pXG5cbiAgY29uc3Qgc2lnbnVwID0gYXN5bmMgdXNlciA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHNlcnZpY2UucG9zdCgnL2F1dGgvc2lnbnVwJywgdXNlcilcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgY29uc3Qgc2V0QXBwVXNlciA9IHVzZXIgPT4gc2V0VXNlcih1c2VyKVxuXG4gIGNvbnN0IGNoZWNrSWZMb2dnZWRJbiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHNlcnZpY2UuZ2V0KCcvYXV0aC9sb2dnZWRpbicpXG4gICAgcmV0dXJuIGRhdGEudXNlclxuICB9XG5cbiAgLy8gY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAvLyAgIHRyeSB7XG4gIC8vICAgICBjb25zdCByZXMgPSBhd2FpdCBjaGVja0lmTG9nZ2VkSW4oKVxuICAvLyAgICAgc2V0VXNlcihyZXMpXG4gIC8vICAgfSBjYXRjaCAoZXJyKSB7XG4gIC8vICAgICBzZXRVc2VyKG51bGwpXG4gIC8vICAgfVxuICAvLyB9XG5cbiAgcmV0dXJuIChcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgc2lnbnVwLCBzZXRBcHBVc2VyLCBjaGVja0lmTG9nZ2VkSW4sIGZldGNoVXNlciB9fT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cblVzZXJDb250ZXh0UHJvdmlkZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy92ZXJjZWwvbmV4dC5qcycpXG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gIGNvbnNvbGUubG9nKGpzb24pXG4gIHJldHVybiB7IHN0YXJzOiBqc29uLnN0YXJnYXplcnNfY291bnQgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29udGV4dFByb3ZpZGVyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/UserContext.js\n");

/***/ })

})
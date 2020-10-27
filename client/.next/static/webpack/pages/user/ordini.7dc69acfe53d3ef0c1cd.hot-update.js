webpackHotUpdate_N_E("pages/user/ordini",{

/***/ "./pages/user/ordini.js":
/*!******************************!*\
  !*** ./pages/user/ordini.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/UserContext */ \"./contexts/UserContext.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/pages/user/ordini.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar Ordini = function Ordini() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_3__[\"UserContext\"]),\n      getOrders = _useContext.getOrders;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      orders = _useState[0],\n      setOrders = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    function getOrdersFromDB() {\n      return _getOrdersFromDB.apply(this, arguments);\n    }\n\n    function _getOrdersFromDB() {\n      _getOrdersFromDB = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var ordersFromDB;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return getOrders();\n\n              case 2:\n                ordersFromDB = _context.sent;\n                setOrders(ordersFromDB);\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _getOrdersFromDB.apply(this, arguments);\n    }\n\n    getOrdersFromDB();\n  }, []);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 8\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 12\n    }\n  }, \"Ordini\"), orders.map(function (order) {\n    return __jsx(\"div\", {\n      key: order._id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 23\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 20\n      }\n    }, __jsx(\"strong\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 23\n      }\n    }, \"ORDER\")), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 20\n      }\n    }, order._id), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 20\n      }\n    }, order.created_at));\n  }));\n};\n\n_s(Ordini, \"hBVZckN2S+bIWPnUZA3qj+Kx4z4=\");\n\n_c = Ordini;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ordini);\n\nvar _c;\n\n$RefreshReg$(_c, \"Ordini\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9vcmRpbmkuanM/MmRmYSJdLCJuYW1lcyI6WyJPcmRpbmkiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJnZXRPcmRlcnMiLCJ1c2VTdGF0ZSIsIm9yZGVycyIsInNldE9yZGVycyIsInVzZUVmZmVjdCIsImdldE9yZGVyc0Zyb21EQiIsIm9yZGVyc0Zyb21EQiIsIm1hcCIsIm9yZGVyIiwiX2lkIiwiY3JlYXRlZF9hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsb0JBQ0NDLHdEQUFVLENBQUNDLGlFQUFELENBRFg7QUFBQSxNQUNiQyxTQURhLGVBQ2JBLFNBRGE7O0FBQUEsa0JBRU9DLHNEQUFRLENBQUMsRUFBRCxDQUZmO0FBQUEsTUFFZEMsTUFGYztBQUFBLE1BRU5DLFNBRk07O0FBS3JCQyx5REFBUyxDQUFDLFlBQU07QUFBQSxhQUNHQyxlQURIO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDBNQUNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQzhCTCxTQUFTLEVBRHZDOztBQUFBO0FBQ1NNLDRCQURUO0FBRUdILHlCQUFTLENBQUNHLFlBQUQsQ0FBVDs7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURZO0FBQUE7QUFBQTs7QUFLWkQsbUJBQWU7QUFDbEIsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFHLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVLSCxNQUFNLENBQUNLLEdBQVAsQ0FBVyxVQUFBQyxLQUFLLEVBQUk7QUFDakIsV0FBTztBQUFLLFNBQUcsRUFBRUEsS0FBSyxDQUFDQyxHQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxDQURHLEVBRUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJRCxLQUFLLENBQUNDLEdBQVYsQ0FGRyxFQUdIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUQsS0FBSyxDQUFDRSxVQUFWLENBSEcsQ0FBUDtBQUtILEdBTkEsQ0FGTCxDQURKO0FBWUYsQ0F6QkQ7O0dBQU1iLE07O0tBQUFBLE07QUEyQlNBLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdXNlci9vcmRpbmkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9Vc2VyQ29udGV4dCdcblxuY29uc3QgT3JkaW5pID0gKCkgPT4ge1xuY29uc3QgeyBnZXRPcmRlcnMgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpXG5jb25zdCBbb3JkZXJzLCBzZXRPcmRlcnNdID0gdXNlU3RhdGUoW10pXG5cblxudXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRPcmRlcnNGcm9tREIoKXtcbiAgICAgICBjb25zdCBvcmRlcnNGcm9tREIgPSBhd2FpdCBnZXRPcmRlcnMoKVxuICAgICAgIHNldE9yZGVycyhvcmRlcnNGcm9tREIpXG4gICAgfVxuICAgIGdldE9yZGVyc0Zyb21EQigpXG59LCBbXSlcblxuICAgcmV0dXJuKFxuICAgICAgIDxkaXY+XG4gICAgICAgICAgIDxoMT5PcmRpbmk8L2gxPlxuICAgICAgICAgICB7b3JkZXJzLm1hcChvcmRlciA9PiB7XG4gICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e29yZGVyLl9pZH0+XG4gICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5PUkRFUjwvc3Ryb25nPjwvcD5cbiAgICAgICAgICAgICAgICAgICA8cD57b3JkZXIuX2lkfTwvcD5cbiAgICAgICAgICAgICAgICAgICA8cD57b3JkZXIuY3JlYXRlZF9hdH08L3A+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgfSl9XG4gICAgICAgPC9kaXY+XG4gICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGluaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user/ordini.js\n");

/***/ })

})
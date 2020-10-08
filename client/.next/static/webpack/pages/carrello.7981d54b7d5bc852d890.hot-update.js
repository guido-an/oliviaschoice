webpackHotUpdate_N_E("pages/carrello",{

/***/ "./pages/carrello.js":
/*!***************************!*\
  !*** ./pages/carrello.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/CartContext */ \"./contexts/CartContext.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/pages/carrello.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Carrello = function Carrello() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_1__[\"CartContext\"]),\n      updateCart = _useContext.updateCart,\n      productsInCart = _useContext.productsInCart,\n      setProductsInCart = _useContext.setProductsInCart;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      totalPrice = _useState[0],\n      setTotalPrice = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    productsInCart.forEach(function (product) {\n      document.getElementById(product._id).value = product.boughtQuantity;\n    });\n    calculateTotalPrice();\n  }, [productsInCart]);\n\n  var removeProduct = function removeProduct(product) {\n    var updateArray = productsInCart.filter(function (element) {\n      return element._id !== product._id;\n    });\n    setProductsInCart(updateArray);\n  };\n\n  var calculateTotalPrice = function calculateTotalPrice() {\n    setTotalPrice(0);\n    productsInCart.forEach(function (product) {\n      setTotalPrice(totalPrice += product.boughtQuantity * product.price);\n    });\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, \"Carrello\"), productsInCart && productsInCart.map(function (product) {\n    return __jsx(\"div\", {\n      key: product._id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 11\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 13\n      }\n    }, product.name), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 13\n      }\n    }, __jsx(\"strong\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 16\n      }\n    }, \"Prezzo: \"), \"\\u20AC \", product.price), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 13\n      }\n    }, __jsx(\"strong\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 16\n      }\n    }, \"Subtotale: \"), \"\\u20AC \", product.price * product.boughtQuantity), __jsx(\"input\", {\n      onChange: function onChange() {\n        return updateCart(product, document.getElementById(product._id).value);\n      },\n      type: \"number\",\n      id: product._id,\n      min: \"0\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 13\n      }\n    }), __jsx(\"button\", {\n      onClick: function onClick() {\n        return removeProduct(product);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 13\n      }\n    }, \"x\"));\n  }), __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, \"Total price: \", totalPrice));\n};\n\n_s(Carrello, \"WkxfDK09ouobCDbwPZ2yrmRkXKQ=\");\n\n_c = Carrello;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carrello);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carrello\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FycmVsbG8uanM/MjA3NSJdLCJuYW1lcyI6WyJDYXJyZWxsbyIsInVzZUNvbnRleHQiLCJDYXJ0Q29udGV4dCIsInVwZGF0ZUNhcnQiLCJwcm9kdWN0c0luQ2FydCIsInNldFByb2R1Y3RzSW5DYXJ0IiwidXNlU3RhdGUiLCJ0b3RhbFByaWNlIiwic2V0VG90YWxQcmljZSIsInVzZUVmZmVjdCIsImZvckVhY2giLCJwcm9kdWN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIl9pZCIsInZhbHVlIiwiYm91Z2h0UXVhbnRpdHkiLCJjYWxjdWxhdGVUb3RhbFByaWNlIiwicmVtb3ZlUHJvZHVjdCIsInVwZGF0ZUFycmF5IiwiZmlsdGVyIiwiZWxlbWVudCIsInByaWNlIiwibWFwIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLG9CQUNxQ0Msd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FEL0M7QUFBQSxNQUNiQyxVQURhLGVBQ2JBLFVBRGE7QUFBQSxNQUNEQyxjQURDLGVBQ0RBLGNBREM7QUFBQSxNQUNlQyxpQkFEZixlQUNlQSxpQkFEZjs7QUFBQSxrQkFFYUMsc0RBQVEsQ0FBQyxDQUFELENBRnJCO0FBQUEsTUFFaEJDLFVBRmdCO0FBQUEsTUFFSkMsYUFGSTs7QUFJckJDLHlEQUFTLENBQUMsWUFBTTtBQUNkTCxrQkFBYyxDQUFDTSxPQUFmLENBQXVCLFVBQUFDLE9BQU8sRUFBSTtBQUNoQ0MsY0FBUSxDQUFDQyxjQUFULENBQXdCRixPQUFPLENBQUNHLEdBQWhDLEVBQXFDQyxLQUFyQyxHQUE2Q0osT0FBTyxDQUFDSyxjQUFyRDtBQUNELEtBRkQ7QUFHQUMsdUJBQW1CO0FBQ3BCLEdBTFEsRUFLTixDQUFDYixjQUFELENBTE0sQ0FBVDs7QUFPQSxNQUFNYyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFQLE9BQU8sRUFBSTtBQUMvQixRQUFNUSxXQUFXLEdBQUdmLGNBQWMsQ0FBQ2dCLE1BQWYsQ0FBc0IsVUFBQUMsT0FBTyxFQUFJO0FBQ25ELGFBQU9BLE9BQU8sQ0FBQ1AsR0FBUixLQUFnQkgsT0FBTyxDQUFDRyxHQUEvQjtBQUNELEtBRm1CLENBQXBCO0FBR0FULHFCQUFpQixDQUFDYyxXQUFELENBQWpCO0FBQ0QsR0FMRDs7QUFPQSxNQUFNRixtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDaENULGlCQUFhLENBQUMsQ0FBRCxDQUFiO0FBQ0FKLGtCQUFjLENBQUNNLE9BQWYsQ0FBdUIsVUFBQUMsT0FBTyxFQUFJO0FBQ2hDSCxtQkFBYSxDQUFDRCxVQUFVLElBQUlJLE9BQU8sQ0FBQ0ssY0FBUixHQUF5QkwsT0FBTyxDQUFDVyxLQUFoRCxDQUFiO0FBQ0QsS0FGRDtBQUdELEdBTEQ7O0FBT0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVHbEIsY0FBYyxJQUFJQSxjQUFjLENBQUNtQixHQUFmLENBQW1CLFVBQUFaLE9BQU8sRUFBSTtBQUMvQyxXQUNFO0FBQUssU0FBRyxFQUFFQSxPQUFPLENBQUNHLEdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlILE9BQU8sQ0FBQ2EsSUFBWixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQUgsYUFBK0JiLE9BQU8sQ0FBQ1csS0FBdkMsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFILGFBQWtDWCxPQUFPLENBQUNXLEtBQVIsR0FBZ0JYLE9BQU8sQ0FBQ0ssY0FBMUQsQ0FIRixFQUlFO0FBQU8sY0FBUSxFQUFFO0FBQUEsZUFBTWIsVUFBVSxDQUFDUSxPQUFELEVBQVVDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkYsT0FBTyxDQUFDRyxHQUFoQyxFQUFxQ0MsS0FBL0MsQ0FBaEI7QUFBQSxPQUFqQjtBQUF3RixVQUFJLEVBQUMsUUFBN0Y7QUFBc0csUUFBRSxFQUFFSixPQUFPLENBQUNHLEdBQWxIO0FBQXVILFNBQUcsRUFBQyxHQUEzSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkYsRUFLRTtBQUFRLGFBQU8sRUFBRTtBQUFBLGVBQU1JLGFBQWEsQ0FBQ1AsT0FBRCxDQUFuQjtBQUFBLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FMRixDQURGO0FBVUQsR0FYa0IsQ0FGckIsRUFjRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFrQkosVUFBbEIsQ0FkRixDQURGO0FBbUJELENBNUNEOztHQUFNUCxROztLQUFBQSxRO0FBNkNTQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NhcnJlbGxvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FydENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DYXJ0Q29udGV4dCdcblxuY29uc3QgQ2FycmVsbG8gPSAoKSA9PiB7XG4gIGNvbnN0IHsgdXBkYXRlQ2FydCwgcHJvZHVjdHNJbkNhcnQsIHNldFByb2R1Y3RzSW5DYXJ0IH0gPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KVxuICBsZXQgW3RvdGFsUHJpY2UsIHNldFRvdGFsUHJpY2VdID0gdXNlU3RhdGUoMClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByb2R1Y3RzSW5DYXJ0LmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9kdWN0Ll9pZCkudmFsdWUgPSBwcm9kdWN0LmJvdWdodFF1YW50aXR5XG4gICAgfSlcbiAgICBjYWxjdWxhdGVUb3RhbFByaWNlKClcbiAgfSwgW3Byb2R1Y3RzSW5DYXJ0XSlcblxuICBjb25zdCByZW1vdmVQcm9kdWN0ID0gcHJvZHVjdCA9PiB7XG4gICAgY29uc3QgdXBkYXRlQXJyYXkgPSBwcm9kdWN0c0luQ2FydC5maWx0ZXIoZWxlbWVudCA9PiB7XG4gICAgICByZXR1cm4gZWxlbWVudC5faWQgIT09IHByb2R1Y3QuX2lkXG4gICAgfSlcbiAgICBzZXRQcm9kdWN0c0luQ2FydCh1cGRhdGVBcnJheSlcbiAgfVxuXG4gIGNvbnN0IGNhbGN1bGF0ZVRvdGFsUHJpY2UgPSAoKSA9PiB7XG4gICAgc2V0VG90YWxQcmljZSgwKVxuICAgIHByb2R1Y3RzSW5DYXJ0LmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgICBzZXRUb3RhbFByaWNlKHRvdGFsUHJpY2UgKz0gcHJvZHVjdC5ib3VnaHRRdWFudGl0eSAqIHByb2R1Y3QucHJpY2UpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5DYXJyZWxsbzwvaDE+XG4gICAgICB7cHJvZHVjdHNJbkNhcnQgJiYgcHJvZHVjdHNJbkNhcnQubWFwKHByb2R1Y3QgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0Ll9pZH0+XG4gICAgICAgICAgICA8cD57cHJvZHVjdC5uYW1lfTwvcD5cbiAgICAgICAgICAgIDxwPjxzdHJvbmc+UHJlenpvOiA8L3N0cm9uZz7igqwge3Byb2R1Y3QucHJpY2V9PC9wPlxuICAgICAgICAgICAgPHA+PHN0cm9uZz5TdWJ0b3RhbGU6IDwvc3Ryb25nPuKCrCB7cHJvZHVjdC5wcmljZSAqIHByb2R1Y3QuYm91Z2h0UXVhbnRpdHl9PC9wPlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoKSA9PiB1cGRhdGVDYXJ0KHByb2R1Y3QsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2R1Y3QuX2lkKS52YWx1ZSl9IHR5cGU9J251bWJlcicgaWQ9e3Byb2R1Y3QuX2lkfSBtaW49JzAnIC8+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJlbW92ZVByb2R1Y3QocHJvZHVjdCl9Png8L2J1dHRvbj5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICAgIDxoMj5Ub3RhbCBwcmljZToge3RvdGFsUHJpY2V9PC9oMj5cblxuICAgIDwvZGl2PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBDYXJyZWxsb1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/carrello.js\n");

/***/ })

})
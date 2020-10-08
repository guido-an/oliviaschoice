webpackHotUpdate_N_E("pages/prodotto/[id]",{

/***/ "./pages/prodotto/[id].js":
/*!********************************!*\
  !*** ./pages/prodotto/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/CartContext */ \"./contexts/CartContext.js\");\n/* harmony import */ var _contexts_ProductContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/ProductContext */ \"./contexts/ProductContext.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/pages/prodotto/[id].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar Product = function Product() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var id = router.query.id; // Destructuring our router object\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__[\"CartContext\"]),\n      addToCart = _useContext.addToCart,\n      productsInCart = _useContext.productsInCart,\n      test = _useContext.test;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_ProductContext__WEBPACK_IMPORTED_MODULE_5__[\"ProductContext\"]),\n      getSingleProduct = _useContext2.getSingleProduct,\n      singleProduct = _useContext2.singleProduct; // let [quantity, setQuantity] = useState(1)\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log('call effect');\n    document.getElementById('test').value = 1;\n\n    function fetchProduct() {\n      return _fetchProduct.apply(this, arguments);\n    }\n\n    function _fetchProduct() {\n      _fetchProduct = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return getSingleProduct(id);\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _fetchProduct.apply(this, arguments);\n    }\n\n    fetchProduct();\n  }, [id]); // const increaseQuantity = () => {\n  //   setQuantity(quantity++)\n  // }\n  //  const quantity = document.getElementById('test').value\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, \"Product page\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, singleProduct && singleProduct.name), __jsx(\"input\", {\n    id: \"test\",\n    type: \"number\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    onClick: function onClick() {\n      return addToCart(singleProduct, document.getElementById('test').value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, \"Add to cart\"));\n};\n\n_s(Product, \"2oGec2DnMgg4e7D9dN/C6z/gr9M=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\n\nvar _c;\n\n$RefreshReg$(_c, \"Product\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZG90dG8vLmpzP2ZjMmIiXSwibmFtZXMiOlsiUHJvZHVjdCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VDb250ZXh0IiwiQ2FydENvbnRleHQiLCJhZGRUb0NhcnQiLCJwcm9kdWN0c0luQ2FydCIsInRlc3QiLCJQcm9kdWN0Q29udGV4dCIsImdldFNpbmdsZVByb2R1Y3QiLCJzaW5nbGVQcm9kdWN0IiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImZldGNoUHJvZHVjdCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEb0IsTUFFWkMsRUFGWSxHQUVMRixNQUFNLENBQUNHLEtBRkYsQ0FFWkQsRUFGWSxFQUVTOztBQUZULG9CQUd3QkUsd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FIbEM7QUFBQSxNQUdaQyxTQUhZLGVBR1pBLFNBSFk7QUFBQSxNQUdEQyxjQUhDLGVBR0RBLGNBSEM7QUFBQSxNQUdlQyxJQUhmLGVBR2VBLElBSGY7O0FBQUEscUJBSXdCSix3REFBVSxDQUFDSyx1RUFBRCxDQUpsQztBQUFBLE1BSVpDLGdCQUpZLGdCQUlaQSxnQkFKWTtBQUFBLE1BSU1DLGFBSk4sZ0JBSU1BLGFBSk4sRUFNcEI7OztBQUdEQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBQyxZQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLEtBQWhDLEdBQXdDLENBQXhDOztBQUZjLGFBR0VDLFlBSEY7QUFBQTtBQUFBOztBQUFBO0FBQUEsdU1BR2I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ1FSLGdCQUFnQixDQUFDUixFQUFELENBRHhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSGE7QUFBQTtBQUFBOztBQU1iZ0IsZ0JBQVk7QUFDYixHQVBPLEVBT0wsQ0FBQ2hCLEVBQUQsQ0FQSyxDQUFULENBVHFCLENBa0JwQjtBQUNBO0FBRUE7QUFFQTs7QUFHRSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJUyxhQUFhLElBQUlBLGFBQWEsQ0FBQ1EsSUFBbkMsQ0FGRixFQUlFO0FBQU8sTUFBRSxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQU1FO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTWIsU0FBUyxDQUFDSyxhQUFELEVBQWdCSSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLEtBQWhELENBQWY7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GLENBREY7QUFVRCxDQXBDSDs7R0FBTWxCLE87VUFDV0UscUQ7OztLQURYRixPO0FBdUNTQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2RvdHRvL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhcnRDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvQ2FydENvbnRleHQnXG5pbXBvcnQgeyBQcm9kdWN0Q29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL1Byb2R1Y3RDb250ZXh0J1xuXG5jb25zdCBQcm9kdWN0ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5OyAvLyBEZXN0cnVjdHVyaW5nIG91ciByb3V0ZXIgb2JqZWN0XG4gIGNvbnN0IHsgYWRkVG9DYXJ0LCBwcm9kdWN0c0luQ2FydCwgdGVzdCB9ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dClcbiAgY29uc3QgeyBnZXRTaW5nbGVQcm9kdWN0LCBzaW5nbGVQcm9kdWN0IH0gPSB1c2VDb250ZXh0KFByb2R1Y3RDb250ZXh0KVxuXG4gIC8vIGxldCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKDEpXG4gXG5cbiB1c2VFZmZlY3QoKCkgPT4ge1xuICAgY29uc29sZS5sb2coJ2NhbGwgZWZmZWN0JylcbiAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXN0JykudmFsdWUgPSAxXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQcm9kdWN0ICgpIHtcbiAgICAgIGF3YWl0IGdldFNpbmdsZVByb2R1Y3QoaWQpXG4gICAgfVxuICAgIGZldGNoUHJvZHVjdCgpXG4gIH0sIFtpZF0pXG5cbiAgLy8gY29uc3QgaW5jcmVhc2VRdWFudGl0eSA9ICgpID0+IHtcbiAgLy8gICBzZXRRdWFudGl0eShxdWFudGl0eSsrKVxuXG4gIC8vIH1cbiAgICAgIFxuICAvLyAgY29uc3QgcXVhbnRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdCcpLnZhbHVlXG5cbiAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5Qcm9kdWN0IHBhZ2U8L2gxPlxuICAgICAgICA8cD57c2luZ2xlUHJvZHVjdCAmJiBzaW5nbGVQcm9kdWN0Lm5hbWV9PC9wPlxuICAgICAgICB7LyogPHA+e3F1YW50aXR5fTwvcD4gKi99XG4gICAgICAgIDxpbnB1dCBpZD1cInRlc3RcIiB0eXBlPVwibnVtYmVyXCI+PC9pbnB1dD5cbiAgICAgICAgXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYWRkVG9DYXJ0KHNpbmdsZVByb2R1Y3QsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXN0JykudmFsdWUpfT5BZGQgdG8gY2FydDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFxuICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/prodotto/[id].js\n");

/***/ })

})
webpackHotUpdate_N_E("pages/prodotto/[id]",{

/***/ "./pages/prodotto/[id].js":
/*!********************************!*\
  !*** ./pages/prodotto/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/CartContext */ \"./contexts/CartContext.js\");\n/* harmony import */ var _contexts_ProductContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/ProductContext */ \"./contexts/ProductContext.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/pages/prodotto/[id].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar Product = function Product() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var id = router.query.id; // Destructuring our router object\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__[\"CartContext\"]),\n      addToCart = _useContext.addToCart,\n      productsInCart = _useContext.productsInCart;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_ProductContext__WEBPACK_IMPORTED_MODULE_5__[\"ProductContext\"]),\n      getSingleProduct = _useContext2.getSingleProduct,\n      singleProduct = _useContext2.singleProduct;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      displayExceedMsg = _useState[0],\n      setDisplayExceedMsg = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    document.getElementById('quantity').value = 1;\n\n    function fetchProduct() {\n      return _fetchProduct.apply(this, arguments);\n    }\n\n    function _fetchProduct() {\n      _fetchProduct = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return getSingleProduct(id);\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _fetchProduct.apply(this, arguments);\n    }\n\n    fetchProduct();\n  }, [id]);\n\n  var exceedQuantity = function exceedQuantity(singleProduct) {\n    console.log('exced', document.getElementById('quantity').value, singleProduct);\n\n    if (document.getElementById('quantity').value > singleProduct.effectiveStock) {\n      document.getElementById('add-to-cart-btn').disabled;\n      setDisplayExceedMsg(true);\n    } else {\n      setDisplayExceedMsg(false);\n    }\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, \"Product page\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, singleProduct && singleProduct.name), __jsx(\"input\", {\n    onChange: function onChange() {\n      return exceedQuantity(singleProduct);\n    },\n    id: \"quantity\",\n    type: \"number\",\n    min: \"0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    id: \"add-to-cart-btn\",\n    onClick: function onClick() {\n      return addToCart(singleProduct, document.getElementById('quantity').value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, \"Add to cart\"), displayExceedMsg && __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 30\n    }\n  }, \"Sono rimaste \", singleProduct.effectiveStock, \" unit\\xE0 di questo prodotto\"));\n};\n\n_s(Product, \"nFIWlpxf0FOJqS+mU6+PdUtUXGo=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\n\nvar _c;\n\n$RefreshReg$(_c, \"Product\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZG90dG8vLmpzP2ZjMmIiXSwibmFtZXMiOlsiUHJvZHVjdCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VDb250ZXh0IiwiQ2FydENvbnRleHQiLCJhZGRUb0NhcnQiLCJwcm9kdWN0c0luQ2FydCIsIlByb2R1Y3RDb250ZXh0IiwiZ2V0U2luZ2xlUHJvZHVjdCIsInNpbmdsZVByb2R1Y3QiLCJ1c2VTdGF0ZSIsImRpc3BsYXlFeGNlZWRNc2ciLCJzZXREaXNwbGF5RXhjZWVkTXNnIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiZmV0Y2hQcm9kdWN0IiwiZXhjZWVkUXVhbnRpdHkiLCJjb25zb2xlIiwibG9nIiwiZWZmZWN0aXZlU3RvY2siLCJkaXNhYmxlZCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEb0IsTUFFWkMsRUFGWSxHQUVMRixNQUFNLENBQUNHLEtBRkYsQ0FFWkQsRUFGWSxFQUVTOztBQUZULG9CQUdrQkUsd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FINUI7QUFBQSxNQUdaQyxTQUhZLGVBR1pBLFNBSFk7QUFBQSxNQUdEQyxjQUhDLGVBR0RBLGNBSEM7O0FBQUEscUJBSXdCSCx3REFBVSxDQUFDSSx1RUFBRCxDQUpsQztBQUFBLE1BSVpDLGdCQUpZLGdCQUlaQSxnQkFKWTtBQUFBLE1BSU1DLGFBSk4sZ0JBSU1BLGFBSk47O0FBQUEsa0JBSzRCQyxzREFBUSxDQUFDLEtBQUQsQ0FMcEM7QUFBQSxNQUtiQyxnQkFMYTtBQUFBLE1BS0tDLG1CQUxMOztBQU9uQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsS0FBcEMsR0FBNEMsQ0FBNUM7O0FBRGMsYUFFRUMsWUFGRjtBQUFBO0FBQUE7O0FBQUE7QUFBQSx1TUFFYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDUVQsZ0JBQWdCLENBQUNQLEVBQUQsQ0FEeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FGYTtBQUFBO0FBQUE7O0FBS2JnQixnQkFBWTtBQUNiLEdBTk8sRUFNTCxDQUFDaEIsRUFBRCxDQU5LLENBQVQ7O0FBUUMsTUFBTWlCLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ1QsYUFBRCxFQUFtQjtBQUN4Q1UsV0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQk4sUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLEVBQW9DQyxLQUF6RCxFQUFnRVAsYUFBaEU7O0FBQ0EsUUFBR0ssUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLEVBQW9DQyxLQUFwQyxHQUE0Q1AsYUFBYSxDQUFDWSxjQUE3RCxFQUE0RTtBQUMxRVAsY0FBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixFQUEyQ08sUUFBM0M7QUFDQVYseUJBQW1CLENBQUMsSUFBRCxDQUFuQjtBQUNELEtBSEQsTUFHTztBQUNMQSx5QkFBbUIsQ0FBQyxLQUFELENBQW5CO0FBQ0Q7QUFDRixHQVJEOztBQVVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlILGFBQWEsSUFBSUEsYUFBYSxDQUFDYyxJQUFuQyxDQUZGLEVBR0U7QUFBTyxZQUFRLEVBQUU7QUFBQSxhQUFNTCxjQUFjLENBQUNULGFBQUQsQ0FBcEI7QUFBQSxLQUFqQjtBQUFzRCxNQUFFLEVBQUMsVUFBekQ7QUFBb0UsUUFBSSxFQUFDLFFBQXpFO0FBQWtGLE9BQUcsRUFBQyxHQUF0RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRTtBQUFRLE1BQUUsRUFBQyxpQkFBWDtBQUE2QixXQUFPLEVBQUU7QUFBQSxhQUFNSixTQUFTLENBQUNJLGFBQUQsRUFBZ0JLLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsS0FBcEQsQ0FBZjtBQUFBLEtBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsRUFLR0wsZ0JBQWdCLElBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBaUJGLGFBQWEsQ0FBQ1ksY0FBL0IsaUNBTHZCLENBREY7QUFTRCxDQWxDSDs7R0FBTXZCLE87VUFDV0UscUQ7OztLQURYRixPO0FBcUNTQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2RvdHRvL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhcnRDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvQ2FydENvbnRleHQnXG5pbXBvcnQgeyBQcm9kdWN0Q29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL1Byb2R1Y3RDb250ZXh0J1xuXG5jb25zdCBQcm9kdWN0ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5OyAvLyBEZXN0cnVjdHVyaW5nIG91ciByb3V0ZXIgb2JqZWN0XG4gIGNvbnN0IHsgYWRkVG9DYXJ0LCBwcm9kdWN0c0luQ2FydCB9ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dClcbiAgY29uc3QgeyBnZXRTaW5nbGVQcm9kdWN0LCBzaW5nbGVQcm9kdWN0IH0gPSB1c2VDb250ZXh0KFByb2R1Y3RDb250ZXh0KVxuICBjb25zdCBbZGlzcGxheUV4Y2VlZE1zZywgc2V0RGlzcGxheUV4Y2VlZE1zZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1YW50aXR5JykudmFsdWUgPSAxXG4gICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFByb2R1Y3QgKCkge1xuICAgICAgICBhd2FpdCBnZXRTaW5nbGVQcm9kdWN0KGlkKVxuICAgICAgfVxuICAgICAgZmV0Y2hQcm9kdWN0KClcbiAgICB9LCBbaWRdKVxuICAgXG4gICAgY29uc3QgZXhjZWVkUXVhbnRpdHkgPSAoc2luZ2xlUHJvZHVjdCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2V4Y2VkJywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1YW50aXR5JykudmFsdWUsIHNpbmdsZVByb2R1Y3QpXG4gICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVhbnRpdHknKS52YWx1ZSA+IHNpbmdsZVByb2R1Y3QuZWZmZWN0aXZlU3RvY2spe1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRvLWNhcnQtYnRuJykuZGlzYWJsZWRcbiAgICAgICAgc2V0RGlzcGxheUV4Y2VlZE1zZyh0cnVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RGlzcGxheUV4Y2VlZE1zZyhmYWxzZSlcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5Qcm9kdWN0IHBhZ2U8L2gxPlxuICAgICAgICA8cD57c2luZ2xlUHJvZHVjdCAmJiBzaW5nbGVQcm9kdWN0Lm5hbWV9PC9wPlxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eygpID0+IGV4Y2VlZFF1YW50aXR5KHNpbmdsZVByb2R1Y3QpfSBpZD1cInF1YW50aXR5XCIgdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIj48L2lucHV0PlxuICAgICAgICA8YnV0dG9uIGlkPVwiYWRkLXRvLWNhcnQtYnRuXCIgb25DbGljaz17KCkgPT4gYWRkVG9DYXJ0KHNpbmdsZVByb2R1Y3QsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWFudGl0eScpLnZhbHVlKX0+QWRkIHRvIGNhcnQ8L2J1dHRvbj5cbiAgICAgICAge2Rpc3BsYXlFeGNlZWRNc2cgJiYgPHA+U29ubyByaW1hc3RlIHtzaW5nbGVQcm9kdWN0LmVmZmVjdGl2ZVN0b2NrfSB1bml0w6AgZGkgcXVlc3RvIHByb2RvdHRvPC9wPn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/prodotto/[id].js\n");

/***/ })

})
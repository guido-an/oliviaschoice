webpackHotUpdate_N_E("pages/pagamento",{

/***/ "./pages/pagamento.js":
/*!****************************!*\
  !*** ./pages/pagamento.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/stripe-js */ \"./node_modules/@stripe/stripe-js/dist/stripe.esm.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ \"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_CheckoutForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CheckoutForm */ \"./components/CheckoutForm.js\");\n/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/CartContext */ \"./contexts/CartContext.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/pages/pagamento.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n // Make sure to call loadStripe outside of a component’s render to avoid\n// recreating the Stripe object on every render.\n// loadStripe is initialized with a fake API key.\n// Sign in to see examples pre-filled with your key.\n\nvar promise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__[\"loadStripe\"])(\"pk_test_lzaKIGxw3w0XwEjC0fDoAKm400a2bk4nzj\");\nvar service = axios__WEBPACK_IMPORTED_MODULE_5___default.a.create({\n  baseURL: \"http://localhost:5000\",\n  withCredentials: true\n});\n\nvar Pagamento = function Pagamento() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__[\"CartContext\"]),\n      productsInCart = _useContext.productsInCart,\n      shippingInfo = _useContext.shippingInfo,\n      totalPrice = _useContext.totalPrice,\n      calculateTotalPrice = _useContext.calculateTotalPrice;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    alert('create order');\n    calculateTotalPrice();\n  });\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, \"Pagamento: \", totalPrice), __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__[\"Elements\"], {\n    stripe: promise,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(_components_CheckoutForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(Pagamento, \"5A+9pqnt6QT+UU8cXELBRqpRAhc=\");\n\n_c = Pagamento;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagamento);\n\nvar _c;\n\n$RefreshReg$(_c, \"Pagamento\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFnYW1lbnRvLmpzPzk2OTgiXSwibmFtZXMiOlsicHJvbWlzZSIsImxvYWRTdHJpcGUiLCJwcm9jZXNzIiwic2VydmljZSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsIlBhZ2FtZW50byIsInVzZUNvbnRleHQiLCJDYXJ0Q29udGV4dCIsInByb2R1Y3RzSW5DYXJ0Iiwic2hpcHBpbmdJbmZvIiwidG90YWxQcmljZSIsImNhbGN1bGF0ZVRvdGFsUHJpY2UiLCJ1c2VFZmZlY3QiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHQyxvRUFBVSxDQUFDQyw0Q0FBRCxDQUExQjtBQUVBLElBQU1DLE9BQU8sR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzNCQyxTQUFPLEVBQUVKLHVCQURrQjtBQUUzQkssaUJBQWUsRUFBRTtBQUZVLENBQWIsQ0FBaEI7O0FBS0EsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLG9CQUNvREMsd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FEOUQ7QUFBQSxNQUNkQyxjQURjLGVBQ2RBLGNBRGM7QUFBQSxNQUNFQyxZQURGLGVBQ0VBLFlBREY7QUFBQSxNQUNnQkMsVUFEaEIsZUFDZ0JBLFVBRGhCO0FBQUEsTUFDNEJDLG1CQUQ1QixlQUM0QkEsbUJBRDVCOztBQUd0QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFNBQUssQ0FBQyxjQUFELENBQUw7QUFDQUYsdUJBQW1CO0FBQ3BCLEdBSFEsQ0FBVDtBQUtBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWdCRCxVQUFoQixDQURGLEVBRUUsTUFBQyxnRUFBRDtBQUFVLFVBQU0sRUFBRWIsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsQ0FERjtBQVFELENBaEJEOztHQUFNUSxTOztLQUFBQSxTO0FBaUJTQSx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3BhZ2FtZW50by5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tICdAc3RyaXBlL3N0cmlwZS1qcydcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnQHN0cmlwZS9yZWFjdC1zdHJpcGUtanMnXG5pbXBvcnQgQ2hlY2tvdXRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hlY2tvdXRGb3JtJ1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FydENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DYXJ0Q29udGV4dCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuLy8gTWFrZSBzdXJlIHRvIGNhbGwgbG9hZFN0cmlwZSBvdXRzaWRlIG9mIGEgY29tcG9uZW504oCZcyByZW5kZXIgdG8gYXZvaWRcbi8vIHJlY3JlYXRpbmcgdGhlIFN0cmlwZSBvYmplY3Qgb24gZXZlcnkgcmVuZGVyLlxuLy8gbG9hZFN0cmlwZSBpcyBpbml0aWFsaXplZCB3aXRoIGEgZmFrZSBBUEkga2V5LlxuLy8gU2lnbiBpbiB0byBzZWUgZXhhbXBsZXMgcHJlLWZpbGxlZCB3aXRoIHlvdXIga2V5LlxuY29uc3QgcHJvbWlzZSA9IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX1BLKVxuXG5jb25zdCBzZXJ2aWNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuQVBQX0FQSSxcbiAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG59KVxuXG5jb25zdCBQYWdhbWVudG8gPSAoKSA9PiB7XG4gIGNvbnN0IHsgcHJvZHVjdHNJbkNhcnQsIHNoaXBwaW5nSW5mbywgdG90YWxQcmljZSwgY2FsY3VsYXRlVG90YWxQcmljZSB9ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFsZXJ0KCdjcmVhdGUgb3JkZXInKVxuICAgIGNhbGN1bGF0ZVRvdGFsUHJpY2UoKVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5QYWdhbWVudG86IHt0b3RhbFByaWNlfTwvaDE+XG4gICAgICA8RWxlbWVudHMgc3RyaXBlPXtwcm9taXNlfT5cbiAgICAgICAgPENoZWNrb3V0Rm9ybSAvPlxuICAgICAgPC9FbGVtZW50cz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgUGFnYW1lbnRvXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/pagamento.js\n");

/***/ })

})
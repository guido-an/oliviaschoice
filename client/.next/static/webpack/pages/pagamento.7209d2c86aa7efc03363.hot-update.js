webpackHotUpdate_N_E("pages/pagamento",{

/***/ "./components/CheckoutForm.js":
/*!************************************!*\
  !*** ./components/CheckoutForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CheckoutForm; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/react-stripe-js */ \"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/components/CheckoutForm.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar service = axios__WEBPACK_IMPORTED_MODULE_4___default.a.create({\n  // to update the order\n  baseURL: \"http://localhost:5000\",\n  withCredentials: true\n});\nvar router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\nfunction CheckoutForm() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      succeeded = _useState[0],\n      setSucceeded = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      error = _useState2[0],\n      setError = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      processing = _useState3[0],\n      setProcessing = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      disabled = _useState4[0],\n      setDisabled = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      clientSecret = _useState5[0],\n      setClientSecret = _useState5[1];\n\n  var stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__[\"useStripe\"])();\n  var elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__[\"useElements\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var productsFromLocalStorage = JSON.parse(localStorage.getItem('productsInCart')); // Create PaymentIntent as soon as the page loads\n\n    window.fetch(\"http://localhost:5000\" + '/create-payment-intent', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        items: productsFromLocalStorage\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      setClientSecret(data.clientSecret);\n    });\n  }, []);\n  var cardStyle = {\n    style: {\n      base: {\n        color: '#32325d',\n        fontFamily: 'Arial, sans-serif',\n        fontSmoothing: 'antialiased',\n        fontSize: '16px',\n        '::placeholder': {\n          color: '#32325d'\n        }\n      },\n      invalid: {\n        color: '#fa755a',\n        iconColor: '#fa755a'\n      }\n    }\n  };\n\n  var handleChange = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              // Listen for changes in the CardElement\n              // and display any errors as the customer types their card details\n              setDisabled(event.empty);\n              setError(event.error ? event.error.message : '');\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleChange(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(ev) {\n      var payload, orderId;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              ev.preventDefault();\n              setProcessing(true);\n              _context2.next = 4;\n              return stripe.confirmCardPayment(clientSecret, {\n                receipt_email: 'test@gmail.com',\n                payment_method: {\n                  card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__[\"CardElement\"])\n                }\n              });\n\n            case 4:\n              payload = _context2.sent;\n\n              if (payload.error) {\n                setError(\"Payment failed \".concat(payload.error.message));\n                setProcessing(false);\n              } else {\n                setError(null);\n                setProcessing(false);\n                setSucceeded(true); // Our code\n\n                orderId = localStorage.getItem('orderId');\n                service.post('/update-order', {\n                  _id: orderId\n                });\n                localStorage.removeItem('productsInCart');\n                localStorage.removeItem('orderId');\n                window.location.reload();\n              } // end\n\n\n            case 6:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function handleSubmit(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(\"form\", {\n    id: \"payment-form\",\n    onSubmit: handleSubmit,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 5\n    }\n  }, __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__[\"CardElement\"], {\n    id: \"card-element\",\n    options: cardStyle,\n    onChange: handleChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }\n  }), __jsx(\"button\", {\n    disabled: processing || disabled || succeeded,\n    id: \"submit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    id: \"button-text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 9\n    }\n  }, processing ? __jsx(\"div\", {\n    className: \"spinner\",\n    id: \"spinner\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 13\n    }\n  }) : 'Pay')), error && __jsx(\"div\", {\n    className: \"card-error\",\n    role: \"alert\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 9\n    }\n  }, error), __jsx(\"p\", {\n    className: succeeded ? 'result-message' : 'result-message hidden',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }\n  }, \"Payment succeeded, see the result in your\", __jsx(\"a\", {\n    href: \"https://dashboard.stripe.com/test/payments\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 9\n    }\n  }, ' ', \"Stripe dashboard.\"), \" Refresh the page to pay again.\"));\n}\n\n_s(CheckoutForm, \"ldxvBX7QZH5+6XNpO6E4nXjWQL0=\", false, function () {\n  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__[\"useStripe\"], _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__[\"useElements\"]];\n});\n\n_c = CheckoutForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"CheckoutForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dEZvcm0uanM/MWUyZCJdLCJuYW1lcyI6WyJzZXJ2aWNlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsIndpdGhDcmVkZW50aWFscyIsInJvdXRlciIsInVzZVJvdXRlciIsIkNoZWNrb3V0Rm9ybSIsInVzZVN0YXRlIiwic3VjY2VlZGVkIiwic2V0U3VjY2VlZGVkIiwiZXJyb3IiLCJzZXRFcnJvciIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiZGlzYWJsZWQiLCJzZXREaXNhYmxlZCIsImNsaWVudFNlY3JldCIsInNldENsaWVudFNlY3JldCIsInN0cmlwZSIsInVzZVN0cmlwZSIsImVsZW1lbnRzIiwidXNlRWxlbWVudHMiLCJ1c2VFZmZlY3QiLCJwcm9kdWN0c0Zyb21Mb2NhbFN0b3JhZ2UiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwid2luZG93IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInN0cmluZ2lmeSIsIml0ZW1zIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY2FyZFN0eWxlIiwic3R5bGUiLCJiYXNlIiwiY29sb3IiLCJmb250RmFtaWx5IiwiZm9udFNtb290aGluZyIsImZvbnRTaXplIiwiaW52YWxpZCIsImljb25Db2xvciIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiZW1wdHkiLCJtZXNzYWdlIiwiaGFuZGxlU3VibWl0IiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsImNvbmZpcm1DYXJkUGF5bWVudCIsInJlY2VpcHRfZW1haWwiLCJwYXltZW50X21ldGhvZCIsImNhcmQiLCJnZXRFbGVtZW50IiwiQ2FyZEVsZW1lbnQiLCJwYXlsb2FkIiwib3JkZXJJZCIsInBvc3QiLCJfaWQiLCJyZW1vdmVJdGVtIiwibG9jYXRpb24iLCJyZWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFLQTtBQUVBO0FBR0EsSUFBTUEsT0FBTyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFBRTtBQUM3QkMsU0FBTyxFQUFFQyx1QkFEa0I7QUFFM0JDLGlCQUFlLEVBQUU7QUFGVSxDQUFiLENBQWhCO0FBS0EsSUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVlLFNBQVNDLFlBQVQsR0FBeUI7QUFBQTs7QUFBQSxrQkFDSkMsc0RBQVEsQ0FBQyxLQUFELENBREo7QUFBQSxNQUMvQkMsU0FEK0I7QUFBQSxNQUNwQkMsWUFEb0I7O0FBQUEsbUJBRVpGLHNEQUFRLENBQUMsSUFBRCxDQUZJO0FBQUEsTUFFL0JHLEtBRitCO0FBQUEsTUFFeEJDLFFBRndCOztBQUFBLG1CQUdGSixzREFBUSxDQUFDLEVBQUQsQ0FITjtBQUFBLE1BRy9CSyxVQUgrQjtBQUFBLE1BR25CQyxhQUhtQjs7QUFBQSxtQkFJTk4sc0RBQVEsQ0FBQyxJQUFELENBSkY7QUFBQSxNQUkvQk8sUUFKK0I7QUFBQSxNQUlyQkMsV0FKcUI7O0FBQUEsbUJBS0VSLHNEQUFRLENBQUMsRUFBRCxDQUxWO0FBQUEsTUFLL0JTLFlBTCtCO0FBQUEsTUFLakJDLGVBTGlCOztBQU10QyxNQUFNQyxNQUFNLEdBQUdDLHlFQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywyRUFBVyxFQUE1QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyx3QkFBd0IsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixnQkFBckIsQ0FBWCxDQUFqQyxDQURjLENBRWQ7O0FBQ0FDLFVBQU0sQ0FDSEMsS0FESCxDQUNTM0IsdUJBQUEsR0FBc0Isd0JBRC9CLEVBQ3lEO0FBQ3JENEIsWUFBTSxFQUFFLE1BRDZDO0FBRXJEQyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVCxPQUY0QztBQUtyREMsVUFBSSxFQUFFUixJQUFJLENBQUNTLFNBQUwsQ0FBZTtBQUFFQyxhQUFLLEVBQUVYO0FBQVQsT0FBZjtBQUwrQyxLQUR6RCxFQVFHWSxJQVJILENBUVEsVUFBQUMsR0FBRyxFQUFJO0FBQ1gsYUFBT0EsR0FBRyxDQUFDQyxJQUFKLEVBQVA7QUFDRCxLQVZILEVBV0dGLElBWEgsQ0FXUSxVQUFBRyxJQUFJLEVBQUk7QUFDWnJCLHFCQUFlLENBQUNxQixJQUFJLENBQUN0QixZQUFOLENBQWY7QUFDRCxLQWJIO0FBY0QsR0FqQlEsRUFpQk4sRUFqQk0sQ0FBVDtBQWtCQSxNQUFNdUIsU0FBUyxHQUFHO0FBQ2hCQyxTQUFLLEVBQUU7QUFDTEMsVUFBSSxFQUFFO0FBQ0pDLGFBQUssRUFBRSxTQURIO0FBRUpDLGtCQUFVLEVBQUUsbUJBRlI7QUFHSkMscUJBQWEsRUFBRSxhQUhYO0FBSUpDLGdCQUFRLEVBQUUsTUFKTjtBQUtKLHlCQUFpQjtBQUNmSCxlQUFLLEVBQUU7QUFEUTtBQUxiLE9BREQ7QUFVTEksYUFBTyxFQUFFO0FBQ1BKLGFBQUssRUFBRSxTQURBO0FBRVBLLGlCQUFTLEVBQUU7QUFGSjtBQVZKO0FBRFMsR0FBbEI7O0FBaUJBLE1BQU1DLFlBQVk7QUFBQSxnTUFBRyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CO0FBQ0E7QUFDQWxDLHlCQUFXLENBQUNrQyxLQUFLLENBQUNDLEtBQVAsQ0FBWDtBQUNBdkMsc0JBQVEsQ0FBQ3NDLEtBQUssQ0FBQ3ZDLEtBQU4sR0FBY3VDLEtBQUssQ0FBQ3ZDLEtBQU4sQ0FBWXlDLE9BQTFCLEdBQW9DLEVBQXJDLENBQVI7O0FBSm1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpILFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBTUEsTUFBTUksWUFBWTtBQUFBLGlNQUFHLGtCQUFNQyxFQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQkEsZ0JBQUUsQ0FBQ0MsY0FBSDtBQUNBekMsMkJBQWEsQ0FBQyxJQUFELENBQWI7QUFGbUI7QUFBQSxxQkFHR0ssTUFBTSxDQUFDcUMsa0JBQVAsQ0FBMEJ2QyxZQUExQixFQUF3QztBQUM1RHdDLDZCQUFhLEVBQUUsZ0JBRDZDO0FBRTVEQyw4QkFBYyxFQUFFO0FBQ2RDLHNCQUFJLEVBQUV0QyxRQUFRLENBQUN1QyxVQUFULENBQW9CQyxtRUFBcEI7QUFEUTtBQUY0QyxlQUF4QyxDQUhIOztBQUFBO0FBR2JDLHFCQUhhOztBQVNuQixrQkFBSUEsT0FBTyxDQUFDbkQsS0FBWixFQUFtQjtBQUNqQkMsd0JBQVEsMEJBQW1Ca0QsT0FBTyxDQUFDbkQsS0FBUixDQUFjeUMsT0FBakMsRUFBUjtBQUNBdEMsNkJBQWEsQ0FBQyxLQUFELENBQWI7QUFDRCxlQUhELE1BR087QUFDTEYsd0JBQVEsQ0FBQyxJQUFELENBQVI7QUFDQUUsNkJBQWEsQ0FBQyxLQUFELENBQWI7QUFDQUosNEJBQVksQ0FBQyxJQUFELENBQVosQ0FISyxDQUlMOztBQUNJcUQsdUJBTEMsR0FLU3BDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixTQUFyQixDQUxUO0FBTUw3Qix1QkFBTyxDQUFDaUUsSUFBUixDQUFhLGVBQWIsRUFBOEI7QUFDNUJDLHFCQUFHLEVBQUVGO0FBRHVCLGlCQUE5QjtBQUdBcEMsNEJBQVksQ0FBQ3VDLFVBQWIsQ0FBd0IsZ0JBQXhCO0FBQ0F2Qyw0QkFBWSxDQUFDdUMsVUFBYixDQUF3QixTQUF4QjtBQUNDckMsc0JBQU0sQ0FBQ3NDLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ0YsZUF4QmtCLENBeUJuQjs7O0FBekJtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaZixZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQTJCQSxTQUNFO0FBQU0sTUFBRSxFQUFDLGNBQVQ7QUFBd0IsWUFBUSxFQUFFQSxZQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUFhLE1BQUUsRUFBQyxjQUFoQjtBQUErQixXQUFPLEVBQUViLFNBQXhDO0FBQW1ELFlBQVEsRUFBRVMsWUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFDRSxZQUFRLEVBQUVwQyxVQUFVLElBQUlFLFFBQWQsSUFBMEJOLFNBRHRDO0FBRUUsTUFBRSxFQUFDLFFBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQU0sTUFBRSxFQUFDLGFBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSSxVQUFVLEdBQ1Q7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUF5QixNQUFFLEVBQUMsU0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURTLEdBR1QsS0FKSixDQUpGLENBRkYsRUFlR0YsS0FBSyxJQUNKO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBNEIsUUFBSSxFQUFDLE9BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsS0FESCxDQWhCSixFQXFCRTtBQUFHLGFBQVMsRUFBRUYsU0FBUyxHQUFHLGdCQUFILEdBQXNCLHVCQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQUVFO0FBQ0UsUUFBSSxFQUFDLDRDQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRyxHQUhILHNCQUZGLG9DQXJCRixDQURGO0FBaUNEOztHQTlHdUJGLFk7VUFNUGEsaUUsRUFDRUUsbUU7OztLQVBLZixZIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DaGVja291dEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBDYXJkRWxlbWVudCxcbiAgdXNlU3RyaXBlLFxuICB1c2VFbGVtZW50c1xufSBmcm9tICdAc3RyaXBlL3JlYWN0LXN0cmlwZS1qcydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cblxuY29uc3Qgc2VydmljZSA9IGF4aW9zLmNyZWF0ZSh7IC8vIHRvIHVwZGF0ZSB0aGUgb3JkZXJcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuQVBQX0FQSSxcbiAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG59KVxuXG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja291dEZvcm0gKCkge1xuICBjb25zdCBbc3VjY2VlZGVkLCBzZXRTdWNjZWVkZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3Byb2Nlc3NpbmcsIHNldFByb2Nlc3NpbmddID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtkaXNhYmxlZCwgc2V0RGlzYWJsZWRdID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW2NsaWVudFNlY3JldCwgc2V0Q2xpZW50U2VjcmV0XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKVxuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHByb2R1Y3RzRnJvbUxvY2FsU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2R1Y3RzSW5DYXJ0JykpXG4gICAgLy8gQ3JlYXRlIFBheW1lbnRJbnRlbnQgYXMgc29vbiBhcyB0aGUgcGFnZSBsb2Fkc1xuICAgIHdpbmRvd1xuICAgICAgLmZldGNoKHByb2Nlc3MuZW52LkFQUF9BUEkgKyAnL2NyZWF0ZS1wYXltZW50LWludGVudCcsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaXRlbXM6IHByb2R1Y3RzRnJvbUxvY2FsU3RvcmFnZSB9KVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICB9KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHNldENsaWVudFNlY3JldChkYXRhLmNsaWVudFNlY3JldClcbiAgICAgIH0pXG4gIH0sIFtdKVxuICBjb25zdCBjYXJkU3R5bGUgPSB7XG4gICAgc3R5bGU6IHtcbiAgICAgIGJhc2U6IHtcbiAgICAgICAgY29sb3I6ICcjMzIzMjVkJyxcbiAgICAgICAgZm9udEZhbWlseTogJ0FyaWFsLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgZm9udFNtb290aGluZzogJ2FudGlhbGlhc2VkJyxcbiAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgICAgJzo6cGxhY2Vob2xkZXInOiB7XG4gICAgICAgICAgY29sb3I6ICcjMzIzMjVkJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaW52YWxpZDoge1xuICAgICAgICBjb2xvcjogJyNmYTc1NWEnLFxuICAgICAgICBpY29uQ29sb3I6ICcjZmE3NTVhJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAvLyBMaXN0ZW4gZm9yIGNoYW5nZXMgaW4gdGhlIENhcmRFbGVtZW50XG4gICAgLy8gYW5kIGRpc3BsYXkgYW55IGVycm9ycyBhcyB0aGUgY3VzdG9tZXIgdHlwZXMgdGhlaXIgY2FyZCBkZXRhaWxzXG4gICAgc2V0RGlzYWJsZWQoZXZlbnQuZW1wdHkpXG4gICAgc2V0RXJyb3IoZXZlbnQuZXJyb3IgPyBldmVudC5lcnJvci5tZXNzYWdlIDogJycpXG4gIH1cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZXYgPT4ge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICBzZXRQcm9jZXNzaW5nKHRydWUpXG4gICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IHN0cmlwZS5jb25maXJtQ2FyZFBheW1lbnQoY2xpZW50U2VjcmV0LCB7XG4gICAgICByZWNlaXB0X2VtYWlsOiAndGVzdEBnbWFpbC5jb20nLFxuICAgICAgcGF5bWVudF9tZXRob2Q6IHtcbiAgICAgICAgY2FyZDogZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudClcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmIChwYXlsb2FkLmVycm9yKSB7XG4gICAgICBzZXRFcnJvcihgUGF5bWVudCBmYWlsZWQgJHtwYXlsb2FkLmVycm9yLm1lc3NhZ2V9YClcbiAgICAgIHNldFByb2Nlc3NpbmcoZmFsc2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEVycm9yKG51bGwpXG4gICAgICBzZXRQcm9jZXNzaW5nKGZhbHNlKVxuICAgICAgc2V0U3VjY2VlZGVkKHRydWUpXG4gICAgICAvLyBPdXIgY29kZVxuICAgICAgdmFyIG9yZGVySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb3JkZXJJZCcpXG4gICAgICBzZXJ2aWNlLnBvc3QoJy91cGRhdGUtb3JkZXInLCB7XG4gICAgICAgIF9pZDogb3JkZXJJZFxuICAgICAgfSlcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9kdWN0c0luQ2FydCcpIFxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ29yZGVySWQnKVxuICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cbiAgICAvLyBlbmRcbiAgfVxuICByZXR1cm4gKFxuICAgIDxmb3JtIGlkPSdwYXltZW50LWZvcm0nIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPENhcmRFbGVtZW50IGlkPSdjYXJkLWVsZW1lbnQnIG9wdGlvbnM9e2NhcmRTdHlsZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgIDxidXR0b25cbiAgICAgICAgZGlzYWJsZWQ9e3Byb2Nlc3NpbmcgfHwgZGlzYWJsZWQgfHwgc3VjY2VlZGVkfVxuICAgICAgICBpZD0nc3VibWl0J1xuICAgICAgPlxuICAgICAgICA8c3BhbiBpZD0nYnV0dG9uLXRleHQnPlxuICAgICAgICAgIHtwcm9jZXNzaW5nID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NwaW5uZXInIGlkPSdzcGlubmVyJyAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAnUGF5J1xuICAgICAgICAgICl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgey8qIFNob3cgYW55IGVycm9yIHRoYXQgaGFwcGVucyB3aGVuIHByb2Nlc3NpbmcgdGhlIHBheW1lbnQgKi99XG4gICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1lcnJvcicgcm9sZT0nYWxlcnQnPlxuICAgICAgICAgIHtlcnJvcn1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgey8qIFNob3cgYSBzdWNjZXNzIG1lc3NhZ2UgdXBvbiBjb21wbGV0aW9uICovfVxuICAgICAgPHAgY2xhc3NOYW1lPXtzdWNjZWVkZWQgPyAncmVzdWx0LW1lc3NhZ2UnIDogJ3Jlc3VsdC1tZXNzYWdlIGhpZGRlbid9PlxuICAgICAgICBQYXltZW50IHN1Y2NlZWRlZCwgc2VlIHRoZSByZXN1bHQgaW4geW91clxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZGFzaGJvYXJkLnN0cmlwZS5jb20vdGVzdC9wYXltZW50cydcbiAgICAgICAgPlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgU3RyaXBlIGRhc2hib2FyZC5cbiAgICAgICAgPC9hPiBSZWZyZXNoIHRoZSBwYWdlIHRvIHBheSBhZ2Fpbi5cbiAgICAgIDwvcD5cbiAgICA8L2Zvcm0+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CheckoutForm.js\n");

/***/ })

})
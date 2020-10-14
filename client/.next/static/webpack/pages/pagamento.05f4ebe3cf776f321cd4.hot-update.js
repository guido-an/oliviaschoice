webpackHotUpdate_N_E("pages/pagamento",{

/***/ "./components/CheckoutForm.js":
/*!************************************!*\
  !*** ./components/CheckoutForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CheckoutForm; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/react-stripe-js */ \"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/components/CheckoutForm.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n // import { CartContext } from '../contexts/CartContext'\n\nfunction CheckoutForm() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      succeeded = _useState[0],\n      setSucceeded = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      error = _useState2[0],\n      setError = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      processing = _useState3[0],\n      setProcessing = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      disabled = _useState4[0],\n      setDisabled = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      clientSecret = _useState5[0],\n      setClientSecret = _useState5[1];\n\n  var stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__[\"useStripe\"])();\n  var elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__[\"useElements\"])(); //   const { productsInCart } = useContext(CartContext)\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var productsFromLocalStorage = JSON.parse(localStorage.getItem('productsInCart')); // Create PaymentIntent as soon as the page loads\n\n    window.fetch(\"http://localhost:5000\" + '/create-payment-intent', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        items: productsFromLocalStorage\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      setClientSecret(data.clientSecret);\n    });\n  }, []);\n  var cardStyle = {\n    style: {\n      base: {\n        color: '#32325d',\n        fontFamily: 'Arial, sans-serif',\n        fontSmoothing: 'antialiased',\n        fontSize: '16px',\n        '::placeholder': {\n          color: '#32325d'\n        }\n      },\n      invalid: {\n        color: '#fa755a',\n        iconColor: '#fa755a'\n      }\n    }\n  };\n\n  var handleChange = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              // Listen for changes in the CardElement\n              // and display any errors as the customer types their card details\n              setDisabled(event.empty);\n              setError(event.error ? event.error.message : '');\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleChange(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(ev) {\n      var payload;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              ev.preventDefault();\n              setProcessing(true);\n              _context2.next = 4;\n              return stripe.confirmCardPayment(clientSecret, {\n                payment_method: {\n                  card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__[\"CardElement\"])\n                }\n              });\n\n            case 4:\n              payload = _context2.sent;\n\n              if (payload.error) {\n                setError(\"Payment failed \".concat(payload.error.message));\n                setProcessing(false);\n              } else {\n                setError(null);\n                setProcessing(false);\n                setSucceeded(true);\n              }\n\n            case 6:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function handleSubmit(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(\"form\", {\n    id: \"payment-form\",\n    onSubmit: handleSubmit,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 5\n    }\n  }, __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__[\"CardElement\"], {\n    id: \"card-element\",\n    options: cardStyle,\n    onChange: handleChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  }), __jsx(\"button\", {\n    disabled: processing || disabled || succeeded,\n    id: \"submit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    id: \"button-text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 9\n    }\n  }, processing ? __jsx(\"div\", {\n    className: \"spinner\",\n    id: \"spinner\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }\n  }) : 'Pay')), error && __jsx(\"div\", {\n    className: \"card-error\",\n    role: \"alert\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 9\n    }\n  }, error), __jsx(\"p\", {\n    className: succeeded ? 'result-message' : 'result-message hidden',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }\n  }, \"Payment succeeded, see the result in your\", __jsx(\"a\", {\n    href: \"https://dashboard.stripe.com/test/payments\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 9\n    }\n  }, ' ', \"Stripe dashboard.\"), \" Refresh the page to pay again.\"));\n}\n\n_s(CheckoutForm, \"ldxvBX7QZH5+6XNpO6E4nXjWQL0=\", false, function () {\n  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__[\"useStripe\"], _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__[\"useElements\"]];\n});\n\n_c = CheckoutForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"CheckoutForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dEZvcm0uanM/MWUyZCJdLCJuYW1lcyI6WyJDaGVja291dEZvcm0iLCJ1c2VTdGF0ZSIsInN1Y2NlZWRlZCIsInNldFN1Y2NlZWRlZCIsImVycm9yIiwic2V0RXJyb3IiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsImRpc2FibGVkIiwic2V0RGlzYWJsZWQiLCJjbGllbnRTZWNyZXQiLCJzZXRDbGllbnRTZWNyZXQiLCJzdHJpcGUiLCJ1c2VTdHJpcGUiLCJlbGVtZW50cyIsInVzZUVsZW1lbnRzIiwidXNlRWZmZWN0IiwicHJvZHVjdHNGcm9tTG9jYWxTdG9yYWdlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIndpbmRvdyIsImZldGNoIiwicHJvY2VzcyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5Iiwic3RyaW5naWZ5IiwiaXRlbXMiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjYXJkU3R5bGUiLCJzdHlsZSIsImJhc2UiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJmb250U21vb3RoaW5nIiwiZm9udFNpemUiLCJpbnZhbGlkIiwiaWNvbkNvbG9yIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJlbXB0eSIsIm1lc3NhZ2UiLCJoYW5kbGVTdWJtaXQiLCJldiIsInByZXZlbnREZWZhdWx0IiwiY29uZmlybUNhcmRQYXltZW50IiwicGF5bWVudF9tZXRob2QiLCJjYXJkIiwiZ2V0RWxlbWVudCIsIkNhcmRFbGVtZW50IiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQU9BOztBQUVlLFNBQVNBLFlBQVQsR0FBeUI7QUFBQTs7QUFBQSxrQkFDSkMsc0RBQVEsQ0FBQyxLQUFELENBREo7QUFBQSxNQUMvQkMsU0FEK0I7QUFBQSxNQUNwQkMsWUFEb0I7O0FBQUEsbUJBRVpGLHNEQUFRLENBQUMsSUFBRCxDQUZJO0FB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QUFBQTtBQUFBO0FBQUEsS0FHRyxHQUhILHNCQUZGLG9DQXJCRixDQURGO0FBaUNEOztHQXZHdUJGLFk7VUFNUGEsaUUsRUFDRUUsbUU7OztLQVBLZixZIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DaGVja291dEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBDYXJkRWxlbWVudCxcbiAgdXNlU3RyaXBlLFxuICB1c2VFbGVtZW50c1xufSBmcm9tICdAc3RyaXBlL3JlYWN0LXN0cmlwZS1qcydcblxuLy8gaW1wb3J0IHsgQ2FydENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DYXJ0Q29udGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tvdXRGb3JtICgpIHtcbiAgY29uc3QgW3N1Y2NlZWRlZCwgc2V0U3VjY2VlZGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtwcm9jZXNzaW5nLCBzZXRQcm9jZXNzaW5nXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtjbGllbnRTZWNyZXQsIHNldENsaWVudFNlY3JldF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3Qgc3RyaXBlID0gdXNlU3RyaXBlKClcbiAgY29uc3QgZWxlbWVudHMgPSB1c2VFbGVtZW50cygpXG5cbiAgLy8gICBjb25zdCB7IHByb2R1Y3RzSW5DYXJ0IH0gPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcHJvZHVjdHNGcm9tTG9jYWxTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZHVjdHNJbkNhcnQnKSlcblxuICAgIC8vIENyZWF0ZSBQYXltZW50SW50ZW50IGFzIHNvb24gYXMgdGhlIHBhZ2UgbG9hZHNcbiAgICB3aW5kb3dcbiAgICAgIC5mZXRjaChwcm9jZXNzLmVudi5BUFBfQVBJICsgJy9jcmVhdGUtcGF5bWVudC1pbnRlbnQnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1zOiBwcm9kdWN0c0Zyb21Mb2NhbFN0b3JhZ2UgfSlcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgfSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBzZXRDbGllbnRTZWNyZXQoZGF0YS5jbGllbnRTZWNyZXQpXG4gICAgICB9KVxuICB9LCBbXSlcbiAgY29uc3QgY2FyZFN0eWxlID0ge1xuICAgIHN0eWxlOiB7XG4gICAgICBiYXNlOiB7XG4gICAgICAgIGNvbG9yOiAnIzMyMzI1ZCcsXG4gICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCwgc2Fucy1zZXJpZicsXG4gICAgICAgIGZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG4gICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICc6OnBsYWNlaG9sZGVyJzoge1xuICAgICAgICAgIGNvbG9yOiAnIzMyMzI1ZCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGludmFsaWQ6IHtcbiAgICAgICAgY29sb3I6ICcjZmE3NTVhJyxcbiAgICAgICAgaWNvbkNvbG9yOiAnI2ZhNzU1YSdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgLy8gTGlzdGVuIGZvciBjaGFuZ2VzIGluIHRoZSBDYXJkRWxlbWVudFxuICAgIC8vIGFuZCBkaXNwbGF5IGFueSBlcnJvcnMgYXMgdGhlIGN1c3RvbWVyIHR5cGVzIHRoZWlyIGNhcmQgZGV0YWlsc1xuICAgIHNldERpc2FibGVkKGV2ZW50LmVtcHR5KVxuICAgIHNldEVycm9yKGV2ZW50LmVycm9yID8gZXZlbnQuZXJyb3IubWVzc2FnZSA6ICcnKVxuICB9XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGV2ID0+IHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0UHJvY2Vzc2luZyh0cnVlKVxuICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBzdHJpcGUuY29uZmlybUNhcmRQYXltZW50KGNsaWVudFNlY3JldCwge1xuICAgICAgcGF5bWVudF9tZXRob2Q6IHtcbiAgICAgICAgY2FyZDogZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudClcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmIChwYXlsb2FkLmVycm9yKSB7XG4gICAgICBzZXRFcnJvcihgUGF5bWVudCBmYWlsZWQgJHtwYXlsb2FkLmVycm9yLm1lc3NhZ2V9YClcbiAgICAgIHNldFByb2Nlc3NpbmcoZmFsc2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEVycm9yKG51bGwpXG4gICAgICBzZXRQcm9jZXNzaW5nKGZhbHNlKVxuICAgICAgc2V0U3VjY2VlZGVkKHRydWUpXG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPGZvcm0gaWQ9J3BheW1lbnQtZm9ybScgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8Q2FyZEVsZW1lbnQgaWQ9J2NhcmQtZWxlbWVudCcgb3B0aW9ucz17Y2FyZFN0eWxlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBkaXNhYmxlZD17cHJvY2Vzc2luZyB8fCBkaXNhYmxlZCB8fCBzdWNjZWVkZWR9XG4gICAgICAgIGlkPSdzdWJtaXQnXG4gICAgICA+XG4gICAgICAgIDxzcGFuIGlkPSdidXR0b24tdGV4dCc+XG4gICAgICAgICAge3Byb2Nlc3NpbmcgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3Bpbm5lcicgaWQ9J3NwaW5uZXInIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICdQYXknXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICB7LyogU2hvdyBhbnkgZXJyb3IgdGhhdCBoYXBwZW5zIHdoZW4gcHJvY2Vzc2luZyB0aGUgcGF5bWVudCAqL31cbiAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWVycm9yJyByb2xlPSdhbGVydCc+XG4gICAgICAgICAge2Vycm9yfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7LyogU2hvdyBhIHN1Y2Nlc3MgbWVzc2FnZSB1cG9uIGNvbXBsZXRpb24gKi99XG4gICAgICA8cCBjbGFzc05hbWU9e3N1Y2NlZWRlZCA/ICdyZXN1bHQtbWVzc2FnZScgOiAncmVzdWx0LW1lc3NhZ2UgaGlkZGVuJ30+XG4gICAgICAgIFBheW1lbnQgc3VjY2VlZGVkLCBzZWUgdGhlIHJlc3VsdCBpbiB5b3VyXG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj0naHR0cHM6Ly9kYXNoYm9hcmQuc3RyaXBlLmNvbS90ZXN0L3BheW1lbnRzJ1xuICAgICAgICA+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICBTdHJpcGUgZGFzaGJvYXJkLlxuICAgICAgICA8L2E+IFJlZnJlc2ggdGhlIHBhZ2UgdG8gcGF5IGFnYWluLlxuICAgICAgPC9wPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CheckoutForm.js\n");

/***/ })

})
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/pages/about.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst About = () => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 3,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }\n  }, \"About\"), __jsx(\"span\", {\n    class: \"hs-cta-wrapper\",\n    id: \"hs-cta-wrapper-3064d71e-3bfd-4b67-b471-1544ee790d2d\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    class: \"hs-cta-node hs-cta-3064d71e-3bfd-4b67-b471-1544ee790d2d\",\n    id: \"hs-cta-3064d71e-3bfd-4b67-b471-1544ee790d2d\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 93\n    }\n  }, __jsx(\"div\", {\n    id: \"hs-cta-ie-element\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 212\n    }\n  }), __jsx(\"a\", {\n    href: \"https://cta-redirect.hubspot.com/cta/redirect/8068265/3064d71e-3bfd-4b67-b471-1544ee790d2d\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 246\n    }\n  }, __jsx(\"img\", {\n    class: \"hs-cta-img\",\n    id: \"hs-cta-img-3064d71e-3bfd-4b67-b471-1544ee790d2d\",\n    style: \"border-width:0px;\",\n    src: \"https://no-cache.hubspot.com/cta/default/8068265/3064d71e-3bfd-4b67-b471-1544ee790d2d.png\",\n    alt: \"New call-to-action\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 348\n    }\n  }))), __jsx(\"script\", {\n    charset: \"utf-8\",\n    src: \"https://js.hscta.net/cta/current.js\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 585\n    }\n  }), __jsx(\"script\", {\n    type: \"text/javascript\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 660\n    }\n  }, \" hbspt.cta.load(8068265, '3064d71e-3bfd-4b67-b471-1544ee790d2d', \", \"); \")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcz8yNmVjIl0sIm5hbWVzIjpbIkFib3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTUEsS0FBSyxHQUFHLE1BQU07QUFDbEIsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUU7QUFBTSxTQUFLLEVBQUMsZ0JBQVo7QUFBNkIsTUFBRSxFQUFDLHFEQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNGO0FBQU0sU0FBSyxFQUFDLHlEQUFaO0FBQXNFLE1BQUUsRUFBQyw2Q0FBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1SDtBQUFLLE1BQUUsRUFBQyxtQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXZILEVBQXlKO0FBQUcsUUFBSSxFQUFDLDRGQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0c7QUFBSyxTQUFLLEVBQUMsWUFBWDtBQUF3QixNQUFFLEVBQUMsaURBQTNCO0FBQTZFLFNBQUssRUFBQyxtQkFBbkY7QUFBdUcsT0FBRyxFQUFDLDJGQUEzRztBQUF3TSxPQUFHLEVBQUMsb0JBQTVNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBdEcsQ0FBekosQ0FBdEYsRUFBa2tCO0FBQVEsV0FBTyxFQUFDLE9BQWhCO0FBQXdCLE9BQUcsRUFBQyxxQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFsa0IsRUFBNm9CO0FBQVEsUUFBSSxFQUFDLGlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0ZBQTdvQixDQUZGLENBREY7QUFNRCxDQVBEOztBQVFlQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Fib3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQWJvdXQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5BYm91dDwvaDE+XG4gICAgICA8c3BhbiBjbGFzcz1cImhzLWN0YS13cmFwcGVyXCIgaWQ9XCJocy1jdGEtd3JhcHBlci0zMDY0ZDcxZS0zYmZkLTRiNjctYjQ3MS0xNTQ0ZWU3OTBkMmRcIj48c3BhbiBjbGFzcz1cImhzLWN0YS1ub2RlIGhzLWN0YS0zMDY0ZDcxZS0zYmZkLTRiNjctYjQ3MS0xNTQ0ZWU3OTBkMmRcIiBpZD1cImhzLWN0YS0zMDY0ZDcxZS0zYmZkLTRiNjctYjQ3MS0xNTQ0ZWU3OTBkMmRcIj48ZGl2IGlkPVwiaHMtY3RhLWllLWVsZW1lbnRcIj48L2Rpdj48YSBocmVmPVwiaHR0cHM6Ly9jdGEtcmVkaXJlY3QuaHVic3BvdC5jb20vY3RhL3JlZGlyZWN0LzgwNjgyNjUvMzA2NGQ3MWUtM2JmZC00YjY3LWI0NzEtMTU0NGVlNzkwZDJkXCIgPjxpbWcgY2xhc3M9XCJocy1jdGEtaW1nXCIgaWQ9XCJocy1jdGEtaW1nLTMwNjRkNzFlLTNiZmQtNGI2Ny1iNDcxLTE1NDRlZTc5MGQyZFwiIHN0eWxlPVwiYm9yZGVyLXdpZHRoOjBweDtcIiBzcmM9XCJodHRwczovL25vLWNhY2hlLmh1YnNwb3QuY29tL2N0YS9kZWZhdWx0LzgwNjgyNjUvMzA2NGQ3MWUtM2JmZC00YjY3LWI0NzEtMTU0NGVlNzkwZDJkLnBuZ1wiICBhbHQ9XCJOZXcgY2FsbC10by1hY3Rpb25cIi8+PC9hPjwvc3Bhbj48c2NyaXB0IGNoYXJzZXQ9XCJ1dGYtOFwiIHNyYz1cImh0dHBzOi8vanMuaHNjdGEubmV0L2N0YS9jdXJyZW50LmpzXCI+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+IGhic3B0LmN0YS5sb2FkKDgwNjgyNjUsICczMDY0ZDcxZS0zYmZkLTRiNjctYjQ3MS0xNTQ0ZWU3OTBkMmQnLCB7fSk7IDwvc2NyaXB0Pjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQWJvdXRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });
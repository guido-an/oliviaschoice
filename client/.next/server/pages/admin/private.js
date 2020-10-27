module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/admin/private.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/admin/private.js":
/*!********************************!*\
  !*** ./pages/admin/private.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/pages/admin/private.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst service = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({\n  baseURL: \"http://localhost:5000\",\n  withCredentials: true\n});\n\nconst Private = () => {\n  const {\n    0: proceed,\n    1: setProceed\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    // Create an scoped async function in the hook\n    async function checkIfAdmin() {\n      try {\n        const res = await service.get('/admin/get-admin');\n\n        if (res.data.admin) {\n          setProceed(true);\n        } else {\n          router.push('/');\n        }\n      } catch (e) {\n        console.log(e);\n      }\n    } // Execute the created function directly\n\n\n    checkIfAdmin();\n  }, []);\n\n  if (!proceed) {\n    return __jsx(\"p\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 12\n      }\n    });\n  }\n\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, \"Private\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Private);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9wcml2YXRlLmpzP2YzNGIiXSwibmFtZXMiOlsic2VydmljZSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJ3aXRoQ3JlZGVudGlhbHMiLCJQcml2YXRlIiwicHJvY2VlZCIsInNldFByb2NlZWQiLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImNoZWNrSWZBZG1pbiIsInJlcyIsImdldCIsImRhdGEiLCJhZG1pbiIsInB1c2giLCJlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsT0FBTyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDM0JDLFNBQU8sRUFBRUMsdUJBRGtCO0FBRTNCQyxpQkFBZSxFQUFFO0FBRlUsQ0FBYixDQUFoQjs7QUFLQSxNQUFNQyxPQUFPLEdBQUcsTUFBTTtBQUNwQixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUMsS0FBRCxDQUF0QztBQUNBLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2Q7QUFDQSxtQkFBZUMsWUFBZixHQUErQjtBQUM3QixVQUFJO0FBQ0YsY0FBTUMsR0FBRyxHQUFHLE1BQU1kLE9BQU8sQ0FBQ2UsR0FBUixDQUFZLGtCQUFaLENBQWxCOztBQUNBLFlBQUlELEdBQUcsQ0FBQ0UsSUFBSixDQUFTQyxLQUFiLEVBQW9CO0FBQ2xCVCxvQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNELFNBRkQsTUFFTztBQUNMRSxnQkFBTSxDQUFDUSxJQUFQLENBQVksR0FBWjtBQUNEO0FBQ0YsT0FQRCxDQU9FLE9BQU9DLENBQVAsRUFBVTtBQUNWQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNEO0FBQ0YsS0FiYSxDQWNkOzs7QUFDQU4sZ0JBQVk7QUFDYixHQWhCUSxFQWdCTixFQWhCTSxDQUFUOztBQWtCQSxNQUFJLENBQUNOLE9BQUwsRUFBYztBQUNaLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0Q7O0FBRUQsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBREY7QUFLRCxDQS9CRDs7QUFpQ2VELHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYWRtaW4vcHJpdmF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3Qgc2VydmljZSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52LkFQUF9BUEksXG4gIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxufSlcblxuY29uc3QgUHJpdmF0ZSA9ICgpID0+IHtcbiAgY29uc3QgW3Byb2NlZWQsIHNldFByb2NlZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBDcmVhdGUgYW4gc2NvcGVkIGFzeW5jIGZ1bmN0aW9uIGluIHRoZSBob29rXG4gICAgYXN5bmMgZnVuY3Rpb24gY2hlY2tJZkFkbWluICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2UuZ2V0KCcvYWRtaW4vZ2V0LWFkbWluJylcbiAgICAgICAgaWYgKHJlcy5kYXRhLmFkbWluKSB7XG4gICAgICAgICAgc2V0UHJvY2VlZCh0cnVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBFeGVjdXRlIHRoZSBjcmVhdGVkIGZ1bmN0aW9uIGRpcmVjdGx5XG4gICAgY2hlY2tJZkFkbWluKClcbiAgfSwgW10pXG5cbiAgaWYgKCFwcm9jZWVkKSB7XG4gICAgcmV0dXJuIDxwIC8+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+UHJpdmF0ZTwvaDE+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpdmF0ZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin/private.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

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
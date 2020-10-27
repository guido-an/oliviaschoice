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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contexts/UserContext.js":
/*!*********************************!*\
  !*** ./contexts/UserContext.js ***!
  \*********************************/
/*! exports provided: UserContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContext\", function() { return UserContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/contexts/UserContext.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\nconst service = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({\n  baseURL: \"http://localhost:5000\",\n  withCredentials: true\n});\n\nconst UserContextProvider = props => {\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n\n  const signup = async user => {\n    const data = await service.post('/auth/signup', user);\n    return data;\n  };\n\n  const login = async user => {\n    const data = await service.post('/auth/login', user);\n    return data;\n  };\n\n  const checkIfLoggedIn = async () => {\n    const {\n      data\n    } = await service.get('/auth/loggedin');\n    return data.user;\n  };\n\n  const fetchUser = async () => {\n    try {\n      const res = await checkIfLoggedIn();\n      console.log(res, 'res');\n      setUser(res);\n    } catch (err) {\n      setUser(null);\n    }\n  };\n\n  const getUser = async () => {\n    try {\n      const res = await service.get('/user');\n      setUser(res.data.user);\n    } catch (err) {\n      setUser(null);\n    }\n  };\n\n  return __jsx(UserContext.Provider, {\n    value: {\n      user,\n      signup,\n      login,\n      setUser,\n      checkIfLoggedIn,\n      fetchUser,\n      getUser\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, props.children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserContextProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9Vc2VyQ29udGV4dC5qcz84MWQyIl0sIm5hbWVzIjpbIlVzZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInNlcnZpY2UiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwid2l0aENyZWRlbnRpYWxzIiwiVXNlckNvbnRleHRQcm92aWRlciIsInByb3BzIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInNpZ251cCIsImRhdGEiLCJwb3N0IiwibG9naW4iLCJjaGVja0lmTG9nZ2VkSW4iLCJnZXQiLCJmZXRjaFVzZXIiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZ2V0VXNlciIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sTUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsRUFBakM7QUFFUCxNQUFNQyxPQUFPLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUMzQkMsU0FBTyxFQUFFQyx1QkFEa0I7QUFFM0JDLGlCQUFlLEVBQUU7QUFGVSxDQUFiLENBQWhCOztBQUtBLE1BQU1DLG1CQUFtQixHQUFHQyxLQUFLLElBQUk7QUFDbkMsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEM7O0FBRUEsUUFBTUMsTUFBTSxHQUFHLE1BQU1ILElBQU4sSUFBYztBQUMzQixVQUFNSSxJQUFJLEdBQUcsTUFBTVosT0FBTyxDQUFDYSxJQUFSLENBQWEsY0FBYixFQUE2QkwsSUFBN0IsQ0FBbkI7QUFDQSxXQUFPSSxJQUFQO0FBQ0QsR0FIRDs7QUFLQSxRQUFNRSxLQUFLLEdBQUcsTUFBTU4sSUFBTixJQUFjO0FBQzFCLFVBQU1JLElBQUksR0FBRyxNQUFNWixPQUFPLENBQUNhLElBQVIsQ0FBYSxhQUFiLEVBQTRCTCxJQUE1QixDQUFuQjtBQUNBLFdBQU9JLElBQVA7QUFDRCxHQUhEOztBQUtBLFFBQU1HLGVBQWUsR0FBRyxZQUFZO0FBQ2xDLFVBQU07QUFBRUg7QUFBRixRQUFXLE1BQU1aLE9BQU8sQ0FBQ2dCLEdBQVIsQ0FBWSxnQkFBWixDQUF2QjtBQUNBLFdBQU9KLElBQUksQ0FBQ0osSUFBWjtBQUNELEdBSEQ7O0FBS0EsUUFBTVMsU0FBUyxHQUFHLFlBQVk7QUFDNUIsUUFBSTtBQUNGLFlBQU1DLEdBQUcsR0FBRyxNQUFNSCxlQUFlLEVBQWpDO0FBQ0FJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLEVBQWlCLEtBQWpCO0FBQ0FULGFBQU8sQ0FBQ1MsR0FBRCxDQUFQO0FBQ0QsS0FKRCxDQUlFLE9BQU9HLEdBQVAsRUFBWTtBQUNaWixhQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0Q7QUFDRixHQVJEOztBQVVBLFFBQU1hLE9BQU8sR0FBRyxZQUFZO0FBQzFCLFFBQUk7QUFDRixZQUFNSixHQUFHLEdBQUcsTUFBTWxCLE9BQU8sQ0FBQ2dCLEdBQVIsQ0FBWSxPQUFaLENBQWxCO0FBQ0FQLGFBQU8sQ0FBQ1MsR0FBRyxDQUFDTixJQUFKLENBQVNKLElBQVYsQ0FBUDtBQUNELEtBSEQsQ0FHRSxPQUFPYSxHQUFQLEVBQVk7QUFDWlosYUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNEO0FBQ0YsR0FQRDs7QUFTQSxTQUNFLE1BQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQUVELFVBQUY7QUFBUUcsWUFBUjtBQUFnQkcsV0FBaEI7QUFBdUJMLGFBQXZCO0FBQWdDTSxxQkFBaEM7QUFBaURFLGVBQWpEO0FBQTRESztBQUE1RCxLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dmLEtBQUssQ0FBQ2dCLFFBRFQsQ0FERjtBQUtELENBMUNEOztBQTRDZWpCLGtGQUFmIiwiZmlsZSI6Ii4vY29udGV4dHMvVXNlckNvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuY29uc3Qgc2VydmljZSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52LkFQUF9BUEksXG4gIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxufSlcblxuY29uc3QgVXNlckNvbnRleHRQcm92aWRlciA9IHByb3BzID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe30pXG5cbiAgY29uc3Qgc2lnbnVwID0gYXN5bmMgdXNlciA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHNlcnZpY2UucG9zdCgnL2F1dGgvc2lnbnVwJywgdXNlcilcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgY29uc3QgbG9naW4gPSBhc3luYyB1c2VyID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgc2VydmljZS5wb3N0KCcvYXV0aC9sb2dpbicsIHVzZXIpXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIGNvbnN0IGNoZWNrSWZMb2dnZWRJbiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHNlcnZpY2UuZ2V0KCcvYXV0aC9sb2dnZWRpbicpXG4gICAgcmV0dXJuIGRhdGEudXNlclxuICB9XG5cbiAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBjaGVja0lmTG9nZ2VkSW4oKVxuICAgICAgY29uc29sZS5sb2cocmVzLCAncmVzJylcbiAgICAgIHNldFVzZXIocmVzKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0VXNlcihudWxsKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdldFVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2UuZ2V0KCcvdXNlcicpXG4gICAgICBzZXRVc2VyKHJlcy5kYXRhLnVzZXIpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRVc2VyKG51bGwpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgc2lnbnVwLCBsb2dpbiwgc2V0VXNlciwgY2hlY2tJZkxvZ2dlZEluLCBmZXRjaFVzZXIsIGdldFVzZXIgfX0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29udGV4dFByb3ZpZGVyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/UserContext.js\n");

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/UserContext */ \"./contexts/UserContext.js\");\nvar _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/pages/login.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Login = () => {\n  const {\n    login,\n    setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__[\"UserContext\"]);\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: password,\n    1: setPassword\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n  const handleSubmit = async e => {\n    e.preventDefault();\n\n    try {\n      const user = {\n        email,\n        password\n      };\n      const res = await login(user);\n      setUser(res.data.currentUser);\n    } catch (err) {\n      console.log(err);\n    }\n  };\n\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, \"Login\"), __jsx(\"form\", {\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"email\",\n    value: email,\n    placeholder: \"*Email\",\n    required: true,\n    onChange: e => setEmail(e.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"password\",\n    placeholder: \"*Password\",\n    required: true,\n    onChange: e => setPassword(e.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"Login\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcz8zYjY5Il0sIm5hbWVzIjpbIkxvZ2luIiwibG9naW4iLCJzZXRVc2VyIiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiZW1haWwiLCJzZXRFbWFpbCIsInVzZVN0YXRlIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJyZXMiLCJkYXRhIiwiY3VycmVudFVzZXIiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLE1BQU07QUFDbEIsUUFBTTtBQUFFQyxTQUFGO0FBQVNDO0FBQVQsTUFBcUJDLHdEQUFVLENBQUNDLGlFQUFELENBQXJDO0FBRUEsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJGLHNEQUFRLENBQUMsRUFBRCxDQUF4Qzs7QUFFQSxRQUFNRyxZQUFZLEdBQUcsTUFBTUMsQ0FBTixJQUFXO0FBQzlCQSxLQUFDLENBQUNDLGNBQUY7O0FBQ0EsUUFBSTtBQUNGLFlBQU1DLElBQUksR0FBRztBQUNYUixhQURXO0FBRVhHO0FBRlcsT0FBYjtBQUlBLFlBQU1NLEdBQUcsR0FBRyxNQUFNYixLQUFLLENBQUNZLElBQUQsQ0FBdkI7QUFDQVgsYUFBTyxDQUFDWSxHQUFHLENBQUNDLElBQUosQ0FBU0MsV0FBVixDQUFQO0FBQ0QsS0FQRCxDQU9FLE9BQU9DLEdBQVAsRUFBWTtBQUNaQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBQ0YsR0FaRDs7QUFjQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRTtBQUFNLFlBQVEsRUFBRVAsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sUUFBSSxFQUFDLE9BQVo7QUFBb0IsU0FBSyxFQUFFTCxLQUEzQjtBQUFrQyxlQUFXLEVBQUMsUUFBOUM7QUFBdUQsWUFBUSxNQUEvRDtBQUFnRSxZQUFRLEVBQUdNLENBQUQsSUFBT0wsUUFBUSxDQUFDSyxDQUFDLENBQUNTLE1BQUYsQ0FBU0MsS0FBVixDQUF6RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFPLFFBQUksRUFBQyxVQUFaO0FBQXVCLGVBQVcsRUFBQyxXQUFuQztBQUErQyxZQUFRLE1BQXZEO0FBQXdELFlBQVEsRUFBR1YsQ0FBRCxJQUFPRixXQUFXLENBQUNFLENBQUMsQ0FBQ1MsTUFBRixDQUFTQyxLQUFWLENBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixDQUZGLENBREY7QUFVRCxDQTlCRDs7QUErQmVyQixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2xvZ2luLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL1VzZXJDb250ZXh0J1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgY29uc3QgeyBsb2dpbiwgc2V0VXNlciB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dClcblxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyID0ge1xuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGxvZ2luKHVzZXIpXG4gICAgICBzZXRVc2VyKHJlcy5kYXRhLmN1cnJlbnRVc2VyKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Mb2dpbjwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGlucHV0IHR5cGU9J2VtYWlsJyB2YWx1ZT17ZW1haWx9IHBsYWNlaG9sZGVyPScqRW1haWwnIHJlcXVpcmVkIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIHBsYWNlaG9sZGVyPScqUGFzc3dvcmQnIHJlcXVpcmVkIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICA8YnV0dG9uPkxvZ2luPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IExvZ2luXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

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
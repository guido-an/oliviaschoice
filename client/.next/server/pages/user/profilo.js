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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/user/profilo.js");
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContext\", function() { return UserContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/contexts/UserContext.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\nconst service = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({\n  baseURL: \"http://localhost:5000\",\n  withCredentials: true\n});\n\nconst UserContextProvider = props => {\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n\n  const signup = async user => {\n    const data = await service.post('/auth/signup', user);\n    return data;\n  };\n\n  const login = async user => {\n    const data = await service.post('/auth/login', user);\n    return data;\n  };\n\n  const updateUser = async form => {\n    const data = await service.post('/user/update', form);\n    return data;\n  };\n\n  const checkIfLoggedIn = async () => {\n    const {\n      data\n    } = await service.get('/auth/loggedin');\n    return data.user;\n  };\n\n  const fetchUser = async () => {\n    try {\n      const res = await checkIfLoggedIn();\n      console.log(res, 'res');\n      setUser(res);\n    } catch (err) {\n      setUser(null);\n    }\n  };\n\n  const getOrders = async () => {\n    try {\n      const res = await service.get('/user/orders');\n      return res.data.orders;\n    } catch (err) {\n      setUser(null);\n    }\n  };\n\n  const getSingleOrder = async id => {\n    try {\n      const res = await service.get('/user/order/' + id);\n      return res.data.order;\n    } catch (err) {\n      setUser(null);\n    }\n  };\n\n  return __jsx(UserContext.Provider, {\n    value: {\n      user,\n      signup,\n      login,\n      updateUser,\n      setUser,\n      checkIfLoggedIn,\n      fetchUser,\n      getOrders,\n      getSingleOrder\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }\n  }, props.children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserContextProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9Vc2VyQ29udGV4dC5qcz84MWQyIl0sIm5hbWVzIjpbIlVzZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInNlcnZpY2UiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwid2l0aENyZWRlbnRpYWxzIiwiVXNlckNvbnRleHRQcm92aWRlciIsInByb3BzIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInNpZ251cCIsImRhdGEiLCJwb3N0IiwibG9naW4iLCJ1cGRhdGVVc2VyIiwiZm9ybSIsImNoZWNrSWZMb2dnZWRJbiIsImdldCIsImZldGNoVXNlciIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJnZXRPcmRlcnMiLCJvcmRlcnMiLCJnZXRTaW5nbGVPcmRlciIsImlkIiwib3JkZXIiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLE1BQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLEVBQWpDO0FBRVAsTUFBTUMsT0FBTyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDM0JDLFNBQU8sRUFBRUMsdUJBRGtCO0FBRTNCQyxpQkFBZSxFQUFFO0FBRlUsQ0FBYixDQUFoQjs7QUFLQSxNQUFNQyxtQkFBbUIsR0FBR0MsS0FBSyxJQUFJO0FBQ25DLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQyxFQUFELENBQWhDOztBQUVBLFFBQU1DLE1BQU0sR0FBRyxNQUFNSCxJQUFOLElBQWM7QUFDM0IsVUFBTUksSUFBSSxHQUFHLE1BQU1aLE9BQU8sQ0FBQ2EsSUFBUixDQUFhLGNBQWIsRUFBNkJMLElBQTdCLENBQW5CO0FBQ0EsV0FBT0ksSUFBUDtBQUNELEdBSEQ7O0FBS0EsUUFBTUUsS0FBSyxHQUFHLE1BQU1OLElBQU4sSUFBYztBQUMxQixVQUFNSSxJQUFJLEdBQUcsTUFBTVosT0FBTyxDQUFDYSxJQUFSLENBQWEsYUFBYixFQUE0QkwsSUFBNUIsQ0FBbkI7QUFDQSxXQUFPSSxJQUFQO0FBQ0QsR0FIRDs7QUFLQSxRQUFNRyxVQUFVLEdBQUcsTUFBT0MsSUFBUCxJQUFnQjtBQUNqQyxVQUFNSixJQUFJLEdBQUcsTUFBTVosT0FBTyxDQUFDYSxJQUFSLENBQWEsY0FBYixFQUE2QkcsSUFBN0IsQ0FBbkI7QUFDQSxXQUFPSixJQUFQO0FBQ0QsR0FIRDs7QUFLQSxRQUFNSyxlQUFlLEdBQUcsWUFBWTtBQUNsQyxVQUFNO0FBQUVMO0FBQUYsUUFBVyxNQUFNWixPQUFPLENBQUNrQixHQUFSLENBQVksZ0JBQVosQ0FBdkI7QUFDQSxXQUFPTixJQUFJLENBQUNKLElBQVo7QUFDRCxHQUhEOztBQUtBLFFBQU1XLFNBQVMsR0FBRyxZQUFZO0FBQzVCLFFBQUk7QUFDRixZQUFNQyxHQUFHLEdBQUcsTUFBTUgsZUFBZSxFQUFqQztBQUNBSSxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixFQUFpQixLQUFqQjtBQUNBWCxhQUFPLENBQUNXLEdBQUQsQ0FBUDtBQUNELEtBSkQsQ0FJRSxPQUFPRyxHQUFQLEVBQVk7QUFDWmQsYUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNEO0FBQ0YsR0FSRDs7QUFVQSxRQUFNZSxTQUFTLEdBQUcsWUFBWTtBQUM1QixRQUFJO0FBQ0YsWUFBTUosR0FBRyxHQUFHLE1BQU1wQixPQUFPLENBQUNrQixHQUFSLENBQVksY0FBWixDQUFsQjtBQUNBLGFBQU9FLEdBQUcsQ0FBQ1IsSUFBSixDQUFTYSxNQUFoQjtBQUNELEtBSEQsQ0FHRSxPQUFPRixHQUFQLEVBQVk7QUFDWmQsYUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNEO0FBQ0YsR0FQRDs7QUFTQSxRQUFNaUIsY0FBYyxHQUFHLE1BQU9DLEVBQVAsSUFBYztBQUNuQyxRQUFJO0FBQ0YsWUFBTVAsR0FBRyxHQUFHLE1BQU1wQixPQUFPLENBQUNrQixHQUFSLENBQVksaUJBQWlCUyxFQUE3QixDQUFsQjtBQUNBLGFBQU9QLEdBQUcsQ0FBQ1IsSUFBSixDQUFTZ0IsS0FBaEI7QUFDRCxLQUhELENBR0UsT0FBT0wsR0FBUCxFQUFZO0FBQ1pkLGFBQU8sQ0FBQyxJQUFELENBQVA7QUFDRDtBQUNGLEdBUEQ7O0FBU0EsU0FDRSxNQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFRCxVQUFGO0FBQVFHLFlBQVI7QUFBZ0JHLFdBQWhCO0FBQXVCQyxnQkFBdkI7QUFBbUNOLGFBQW5DO0FBQTRDUSxxQkFBNUM7QUFBNkRFLGVBQTdEO0FBQXdFSyxlQUF4RTtBQUFtRkU7QUFBbkYsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHbkIsS0FBSyxDQUFDc0IsUUFEVCxDQURGO0FBS0QsQ0F4REQ7O0FBMERldkIsa0ZBQWYiLCJmaWxlIjoiLi9jb250ZXh0cy9Vc2VyQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5jb25zdCBzZXJ2aWNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuQVBQX0FQSSxcbiAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG59KVxuXG5jb25zdCBVc2VyQ29udGV4dFByb3ZpZGVyID0gcHJvcHMgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7fSlcblxuICBjb25zdCBzaWdudXAgPSBhc3luYyB1c2VyID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgc2VydmljZS5wb3N0KCcvYXV0aC9zaWdudXAnLCB1c2VyKVxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICBjb25zdCBsb2dpbiA9IGFzeW5jIHVzZXIgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzZXJ2aWNlLnBvc3QoJy9hdXRoL2xvZ2luJywgdXNlcilcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgY29uc3QgdXBkYXRlVXNlciA9IGFzeW5jIChmb3JtKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHNlcnZpY2UucG9zdCgnL3VzZXIvdXBkYXRlJywgZm9ybSlcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgY29uc3QgY2hlY2tJZkxvZ2dlZEluID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc2VydmljZS5nZXQoJy9hdXRoL2xvZ2dlZGluJylcbiAgICByZXR1cm4gZGF0YS51c2VyXG4gIH1cblxuICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNoZWNrSWZMb2dnZWRJbigpXG4gICAgICBjb25zb2xlLmxvZyhyZXMsICdyZXMnKVxuICAgICAgc2V0VXNlcihyZXMpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRVc2VyKG51bGwpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2V0T3JkZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlLmdldCgnL3VzZXIvb3JkZXJzJylcbiAgICAgIHJldHVybiByZXMuZGF0YS5vcmRlcnNcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldFVzZXIobnVsbClcbiAgICB9XG4gIH1cblxuICBjb25zdCBnZXRTaW5nbGVPcmRlciA9IGFzeW5jIChpZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlLmdldCgnL3VzZXIvb3JkZXIvJyArIGlkKVxuICAgICAgcmV0dXJuIHJlcy5kYXRhLm9yZGVyXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRVc2VyKG51bGwpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgc2lnbnVwLCBsb2dpbiwgdXBkYXRlVXNlciwgc2V0VXNlciwgY2hlY2tJZkxvZ2dlZEluLCBmZXRjaFVzZXIsIGdldE9yZGVycywgZ2V0U2luZ2xlT3JkZXIgfX0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29udGV4dFByb3ZpZGVyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/UserContext.js\n");

/***/ }),

/***/ "./pages/user/profilo.js":
/*!*******************************!*\
  !*** ./pages/user/profilo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/UserContext */ \"./contexts/UserContext.js\");\nvar _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/pages/user/profilo.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst Profilo = () => {\n  const {\n    user,\n    updateUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__[\"UserContext\"]);\n  const {\n    0: form,\n    1: setForm\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    firstName: '',\n    lastName: '',\n    email: '',\n    password: ''\n  });\n\n  const handleSubmit = async e => {\n    e.preventDefault();\n\n    try {\n      const updatedUser = {\n        firstName: form.firstName || user.firstName,\n        lastName: form.lastName || user.lastName,\n        email: form.email || user.email\n      };\n      updateUser(updatedUser);\n      window.location.reload();\n    } catch (err) {\n      console.log(err);\n    }\n  };\n\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, \"Profilo\"), __jsx(\"form\", {\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    placeholder: user.firstName,\n    onChange: e => setForm(_objectSpread(_objectSpread({}, form), {}, {\n      firstName: e.target.value\n    })),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    placeholder: user.lastName,\n    onChange: e => setForm(_objectSpread(_objectSpread({}, form), {}, {\n      lastName: e.target.value\n    })),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"email\",\n    placeholder: user.email,\n    onChange: e => setForm(_objectSpread(_objectSpread({}, form), {}, {\n      email: e.target.value\n    })),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"password\",\n    placeholder: \"*****\",\n    onChange: e => setForm(_objectSpread(_objectSpread({}, form), {}, {\n      password: e.target.value\n    })),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, \"Aggiorna\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profilo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy91c2VyL3Byb2ZpbG8uanM/Y2E0MSJdLCJuYW1lcyI6WyJQcm9maWxvIiwidXNlciIsInVwZGF0ZVVzZXIiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJmb3JtIiwic2V0Rm9ybSIsInVzZVN0YXRlIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlZFVzZXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxNQUFNO0FBQ3BCLFFBQU07QUFBRUMsUUFBRjtBQUFRQztBQUFSLE1BQXVCQyx3REFBVSxDQUFDQyxpRUFBRCxDQUF2QztBQUVBLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQztBQUMvQkMsYUFBUyxFQUFFLEVBRG9CO0FBRS9CQyxZQUFRLEVBQUUsRUFGcUI7QUFHL0JDLFNBQUssRUFBRSxFQUh3QjtBQUkvQkMsWUFBUSxFQUFFO0FBSnFCLEdBQUQsQ0FBaEM7O0FBUUEsUUFBTUMsWUFBWSxHQUFHLE1BQU1DLENBQU4sSUFBVztBQUM5QkEsS0FBQyxDQUFDQyxjQUFGOztBQUNBLFFBQUk7QUFDRixZQUFNQyxXQUFXLEdBQUc7QUFDaEJQLGlCQUFTLEVBQUVILElBQUksQ0FBQ0csU0FBTCxJQUFrQlAsSUFBSSxDQUFDTyxTQURsQjtBQUVoQkMsZ0JBQVEsRUFBRUosSUFBSSxDQUFDSSxRQUFMLElBQWlCUixJQUFJLENBQUNRLFFBRmhCO0FBR2hCQyxhQUFLLEVBQUVMLElBQUksQ0FBQ0ssS0FBTCxJQUFjVCxJQUFJLENBQUNTO0FBSFYsT0FBcEI7QUFLQVIsZ0JBQVUsQ0FBQ2EsV0FBRCxDQUFWO0FBQ0FDLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEI7QUFDRCxLQVJELENBUUUsT0FBT0MsR0FBUCxFQUFZO0FBQ1pDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0Q7QUFDRixHQWJEOztBQWVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFO0FBQU0sWUFBUSxFQUFFUCxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixlQUFXLEVBQUVYLElBQUksQ0FBQ08sU0FBckM7QUFBZ0QsWUFBUSxFQUFHSyxDQUFELElBQU9QLE9BQU8saUNBQU1ELElBQU47QUFBWUcsZUFBUyxFQUFFSyxDQUFDLENBQUNTLE1BQUYsQ0FBU0M7QUFBaEMsT0FBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixlQUFXLEVBQUV0QixJQUFJLENBQUNRLFFBQXJDO0FBQStDLFlBQVEsRUFBR0ksQ0FBRCxJQUFPUCxPQUFPLGlDQUFNRCxJQUFOO0FBQVlJLGNBQVEsRUFBRUksQ0FBQyxDQUFDUyxNQUFGLENBQVNDO0FBQS9CLE9BQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQU8sUUFBSSxFQUFDLE9BQVo7QUFBb0IsZUFBVyxFQUFFdEIsSUFBSSxDQUFDUyxLQUF0QztBQUE2QyxZQUFRLEVBQUdHLENBQUQsSUFBT1AsT0FBTyxpQ0FBTUQsSUFBTjtBQUFZSyxXQUFLLEVBQUVHLENBQUMsQ0FBQ1MsTUFBRixDQUFTQztBQUE1QixPQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRTtBQUFPLFFBQUksRUFBQyxVQUFaO0FBQXVCLGVBQVcsRUFBQyxPQUFuQztBQUEyQyxZQUFRLEVBQUdWLENBQUQsSUFBT1AsT0FBTyxpQ0FBTUQsSUFBTjtBQUFZTSxjQUFRLEVBQUVFLENBQUMsQ0FBQ1MsTUFBRixDQUFTQztBQUEvQixPQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGLENBRkYsQ0FERjtBQVlELENBdENEOztBQXVDZXZCLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdXNlci9wcm9maWxvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvVXNlckNvbnRleHQnXG5cbmNvbnN0IFByb2ZpbG8gPSAoKSA9PiB7XG4gIGNvbnN0IHsgdXNlciwgdXBkYXRlVXNlciB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dClcblxuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XG4gICAgZmlyc3ROYW1lOiAnJyxcbiAgICBsYXN0TmFtZTogJycsXG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgfSlcblxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cGRhdGVkVXNlciA9IHtcbiAgICAgICAgICBmaXJzdE5hbWU6IGZvcm0uZmlyc3ROYW1lIHx8IHVzZXIuZmlyc3ROYW1lLFxuICAgICAgICAgIGxhc3ROYW1lOiBmb3JtLmxhc3ROYW1lIHx8IHVzZXIubGFzdE5hbWUsXG4gICAgICAgICAgZW1haWw6IGZvcm0uZW1haWwgfHwgdXNlci5lbWFpbCxcbiAgICAgIH1cbiAgICAgIHVwZGF0ZVVzZXIodXBkYXRlZFVzZXIpXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkgXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlByb2ZpbG88L2gxPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj17dXNlci5maXJzdE5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIGZpcnN0TmFtZTogZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj17dXNlci5sYXN0TmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgbGFzdE5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICA8aW5wdXQgdHlwZT0nZW1haWwnIHBsYWNlaG9sZGVyPXt1c2VyLmVtYWlsfSBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgcGxhY2Vob2xkZXI9JyoqKioqJyBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgIDxidXR0b24+QWdnaW9ybmE8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user/profilo.js\n");

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
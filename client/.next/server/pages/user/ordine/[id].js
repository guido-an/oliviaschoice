module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/user/ordine/[id].js");
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContext\", function() { return UserContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/contexts/UserContext.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\nconst service = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({\n  baseURL: \"http://localhost:5000\",\n  withCredentials: true\n});\n\nconst UserContextProvider = props => {\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n\n  const signup = async user => {\n    const data = await service.post('/auth/signup', user);\n    return data;\n  };\n\n  const login = async user => {\n    const data = await service.post('/auth/login', user);\n    return data;\n  };\n\n  const updateUser = async form => {\n    const data = await service.post('/auth/update', form);\n    return data;\n  };\n\n  const checkIfLoggedIn = async () => {\n    const {\n      data\n    } = await service.get('/auth/loggedin');\n    return data.user;\n  };\n\n  const fetchUser = async () => {\n    try {\n      const res = await checkIfLoggedIn();\n      console.log(res, 'res');\n      setUser(res);\n    } catch (err) {\n      setUser(null);\n    }\n  };\n\n  const getOrders = async () => {\n    try {\n      const res = await service.get('/user/orders');\n      return res.data.orders;\n    } catch (err) {\n      setUser(null);\n    }\n  };\n\n  const getSingleOrder = async id => {\n    try {\n      const res = await service.get('/user/order/' + id);\n      return res.data.order;\n    } catch (err) {\n      setUser(null);\n    }\n  };\n\n  return __jsx(UserContext.Provider, {\n    value: {\n      user,\n      signup,\n      login,\n      updateUser,\n      setUser,\n      checkIfLoggedIn,\n      fetchUser,\n      getOrders,\n      getSingleOrder\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }\n  }, props.children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserContextProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9Vc2VyQ29udGV4dC5qcz84MWQyIl0sIm5hbWVzIjpbIlVzZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInNlcnZpY2UiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwid2l0aENyZWRlbnRpYWxzIiwiVXNlckNvbnRleHRQcm92aWRlciIsInByb3BzIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInNpZ251cCIsImRhdGEiLCJwb3N0IiwibG9naW4iLCJ1cGRhdGVVc2VyIiwiZm9ybSIsImNoZWNrSWZMb2dnZWRJbiIsImdldCIsImZldGNoVXNlciIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJnZXRPcmRlcnMiLCJvcmRlcnMiLCJnZXRTaW5nbGVPcmRlciIsImlkIiwib3JkZXIiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLE1BQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLEVBQWpDO0FBRVAsTUFBTUMsT0FBTyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDM0JDLFNBQU8sRUFBRUMsdUJBRGtCO0FBRTNCQyxpQkFBZSxFQUFFO0FBRlUsQ0FBYixDQUFoQjs7QUFLQSxNQUFNQyxtQkFBbUIsR0FBR0MsS0FBSyxJQUFJO0FBQ25DLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQyxFQUFELENBQWhDOztBQUVBLFFBQU1DLE1BQU0sR0FBRyxNQUFNSCxJQUFOLElBQWM7QUFDM0IsVUFBTUksSUFBSSxHQUFHLE1BQU1aLE9BQU8sQ0FBQ2EsSUFBUixDQUFhLGNBQWIsRUFBNkJMLElBQTdCLENBQW5CO0FBQ0EsV0FBT0ksSUFBUDtBQUNELEdBSEQ7O0FBS0EsUUFBTUUsS0FBSyxHQUFHLE1BQU1OLElBQU4sSUFBYztBQUMxQixVQUFNSSxJQUFJLEdBQUcsTUFBTVosT0FBTyxDQUFDYSxJQUFSLENBQWEsYUFBYixFQUE0QkwsSUFBNUIsQ0FBbkI7QUFDQSxXQUFPSSxJQUFQO0FBQ0QsR0FIRDs7QUFLQSxRQUFNRyxVQUFVLEdBQUcsTUFBT0MsSUFBUCxJQUFnQjtBQUNqQyxVQUFNSixJQUFJLEdBQUcsTUFBTVosT0FBTyxDQUFDYSxJQUFSLENBQWEsY0FBYixFQUE2QkcsSUFBN0IsQ0FBbkI7QUFDQSxXQUFPSixJQUFQO0FBQ0QsR0FIRDs7QUFLQSxRQUFNSyxlQUFlLEdBQUcsWUFBWTtBQUNsQyxVQUFNO0FBQUVMO0FBQUYsUUFBVyxNQUFNWixPQUFPLENBQUNrQixHQUFSLENBQVksZ0JBQVosQ0FBdkI7QUFDQSxXQUFPTixJQUFJLENBQUNKLElBQVo7QUFDRCxHQUhEOztBQUtBLFFBQU1XLFNBQVMsR0FBRyxZQUFZO0FBQzVCLFFBQUk7QUFDRixZQUFNQyxHQUFHLEdBQUcsTUFBTUgsZUFBZSxFQUFqQztBQUNBSSxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixFQUFpQixLQUFqQjtBQUNBWCxhQUFPLENBQUNXLEdBQUQsQ0FBUDtBQUNELEtBSkQsQ0FJRSxPQUFPRyxHQUFQLEVBQVk7QUFDWmQsYUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNEO0FBQ0YsR0FSRDs7QUFVQSxRQUFNZSxTQUFTLEdBQUcsWUFBWTtBQUM1QixRQUFJO0FBQ0YsWUFBTUosR0FBRyxHQUFHLE1BQU1wQixPQUFPLENBQUNrQixHQUFSLENBQVksY0FBWixDQUFsQjtBQUNBLGFBQU9FLEdBQUcsQ0FBQ1IsSUFBSixDQUFTYSxNQUFoQjtBQUNELEtBSEQsQ0FHRSxPQUFPRixHQUFQLEVBQVk7QUFDWmQsYUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNEO0FBQ0YsR0FQRDs7QUFTQSxRQUFNaUIsY0FBYyxHQUFHLE1BQU9DLEVBQVAsSUFBYztBQUNuQyxRQUFJO0FBQ0YsWUFBTVAsR0FBRyxHQUFHLE1BQU1wQixPQUFPLENBQUNrQixHQUFSLENBQVksaUJBQWlCUyxFQUE3QixDQUFsQjtBQUNBLGFBQU9QLEdBQUcsQ0FBQ1IsSUFBSixDQUFTZ0IsS0FBaEI7QUFDRCxLQUhELENBR0UsT0FBT0wsR0FBUCxFQUFZO0FBQ1pkLGFBQU8sQ0FBQyxJQUFELENBQVA7QUFDRDtBQUNGLEdBUEQ7O0FBU0EsU0FDRSxNQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFRCxVQUFGO0FBQVFHLFlBQVI7QUFBZ0JHLFdBQWhCO0FBQXVCQyxnQkFBdkI7QUFBbUNOLGFBQW5DO0FBQTRDUSxxQkFBNUM7QUFBNkRFLGVBQTdEO0FBQXdFSyxlQUF4RTtBQUFtRkU7QUFBbkYsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHbkIsS0FBSyxDQUFDc0IsUUFEVCxDQURGO0FBS0QsQ0F4REQ7O0FBMERldkIsa0ZBQWYiLCJmaWxlIjoiLi9jb250ZXh0cy9Vc2VyQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5jb25zdCBzZXJ2aWNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuQVBQX0FQSSxcbiAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG59KVxuXG5jb25zdCBVc2VyQ29udGV4dFByb3ZpZGVyID0gcHJvcHMgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7fSlcblxuICBjb25zdCBzaWdudXAgPSBhc3luYyB1c2VyID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgc2VydmljZS5wb3N0KCcvYXV0aC9zaWdudXAnLCB1c2VyKVxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICBjb25zdCBsb2dpbiA9IGFzeW5jIHVzZXIgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzZXJ2aWNlLnBvc3QoJy9hdXRoL2xvZ2luJywgdXNlcilcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgY29uc3QgdXBkYXRlVXNlciA9IGFzeW5jIChmb3JtKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHNlcnZpY2UucG9zdCgnL2F1dGgvdXBkYXRlJywgZm9ybSlcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgY29uc3QgY2hlY2tJZkxvZ2dlZEluID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc2VydmljZS5nZXQoJy9hdXRoL2xvZ2dlZGluJylcbiAgICByZXR1cm4gZGF0YS51c2VyXG4gIH1cblxuICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNoZWNrSWZMb2dnZWRJbigpXG4gICAgICBjb25zb2xlLmxvZyhyZXMsICdyZXMnKVxuICAgICAgc2V0VXNlcihyZXMpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRVc2VyKG51bGwpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2V0T3JkZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlLmdldCgnL3VzZXIvb3JkZXJzJylcbiAgICAgIHJldHVybiByZXMuZGF0YS5vcmRlcnNcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldFVzZXIobnVsbClcbiAgICB9XG4gIH1cblxuICBjb25zdCBnZXRTaW5nbGVPcmRlciA9IGFzeW5jIChpZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlLmdldCgnL3VzZXIvb3JkZXIvJyArIGlkKVxuICAgICAgcmV0dXJuIHJlcy5kYXRhLm9yZGVyXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRVc2VyKG51bGwpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgc2lnbnVwLCBsb2dpbiwgdXBkYXRlVXNlciwgc2V0VXNlciwgY2hlY2tJZkxvZ2dlZEluLCBmZXRjaFVzZXIsIGdldE9yZGVycywgZ2V0U2luZ2xlT3JkZXIgfX0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29udGV4dFByb3ZpZGVyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/UserContext.js\n");

/***/ }),

/***/ "./pages/user/ordine/[id].js":
/*!***********************************!*\
  !*** ./pages/user/ordine/[id].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../contexts/UserContext */ \"./contexts/UserContext.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/pages/user/ordine/[id].js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Ordine = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const {\n    id\n  } = router.query; // Destructuring our router object\n\n  const {\n    getSingleOrder\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__[\"UserContext\"]);\n  const {\n    0: order,\n    1: setOrder\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    async function getOrderFromDB() {\n      const orderFromDB = await getSingleOrder(id);\n      setOrder(orderFromDB);\n    }\n\n    getOrderFromDB();\n  }, [id]);\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 8\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 12\n    }\n  }, \"Pagina ordine\"), order && order._id);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ordine);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy91c2VyL29yZGluZS8uanM/NjRlYSJdLCJuYW1lcyI6WyJPcmRpbmUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZ2V0U2luZ2xlT3JkZXIiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJvcmRlciIsInNldE9yZGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRPcmRlckZyb21EQiIsIm9yZGVyRnJvbURCIiwiX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUNyQixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVNGLE1BQU0sQ0FBQ0csS0FBdEIsQ0FGcUIsQ0FFUTs7QUFFN0IsUUFBTTtBQUFFQztBQUFGLE1BQXFCQyx3REFBVSxDQUFDQyxpRUFBRCxDQUFyQztBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQWxDO0FBR0FDLHlEQUFTLENBQUMsTUFBTTtBQUNaLG1CQUFlQyxjQUFmLEdBQStCO0FBQzVCLFlBQU1DLFdBQVcsR0FBRyxNQUFNUixjQUFjLENBQUNGLEVBQUQsQ0FBeEM7QUFDQU0sY0FBUSxDQUFDSSxXQUFELENBQVI7QUFDRjs7QUFDREQsa0JBQWM7QUFDakIsR0FOUSxFQU1OLENBQUNULEVBQUQsQ0FOTSxDQUFUO0FBUUcsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixFQUVLSyxLQUFLLElBQUlBLEtBQUssQ0FBQ00sR0FGcEIsQ0FESjtBQU1GLENBdEJEOztBQXdCZWQscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy91c2VyL29yZGluZS9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dHMvVXNlckNvbnRleHQnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuXG5jb25zdCBPcmRpbmUgPSAoKSA9PiB7XG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbmNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTsgLy8gRGVzdHJ1Y3R1cmluZyBvdXIgcm91dGVyIG9iamVjdFxuXG5jb25zdCB7IGdldFNpbmdsZU9yZGVyIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KVxuY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZShbXSlcblxuXG51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldE9yZGVyRnJvbURCKCl7XG4gICAgICAgY29uc3Qgb3JkZXJGcm9tREIgPSBhd2FpdCBnZXRTaW5nbGVPcmRlcihpZClcbiAgICAgICBzZXRPcmRlcihvcmRlckZyb21EQilcbiAgICB9XG4gICAgZ2V0T3JkZXJGcm9tREIoKVxufSwgW2lkXSlcblxuICAgcmV0dXJuKFxuICAgICAgIDxkaXY+XG4gICAgICAgICAgIDxoMT5QYWdpbmEgb3JkaW5lPC9oMT5cbiAgICAgICAgICAge29yZGVyICYmIG9yZGVyLl9pZH1cbiAgICAgICA8L2Rpdj5cbiAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkaW5lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user/ordine/[id].js\n");

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
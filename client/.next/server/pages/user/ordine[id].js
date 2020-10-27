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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/user/ordine[id].js");
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContext\", function() { return UserContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/contexts/UserContext.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\nconst service = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({\n  baseURL: \"http://localhost:5000\",\n  withCredentials: true\n});\n\nconst UserContextProvider = props => {\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n\n  const signup = async user => {\n    const data = await service.post('/auth/signup', user);\n    return data;\n  };\n\n  const login = async user => {\n    const data = await service.post('/auth/login', user);\n    return data;\n  };\n\n  const checkIfLoggedIn = async () => {\n    const {\n      data\n    } = await service.get('/auth/loggedin');\n    return data.user;\n  };\n\n  const fetchUser = async () => {\n    try {\n      const res = await checkIfLoggedIn();\n      console.log(res, 'res');\n      setUser(res);\n    } catch (err) {\n      setUser(null);\n    }\n  };\n\n  const getOrders = async () => {\n    try {\n      const res = await service.get('/user/orders');\n      return res.data.orders;\n    } catch (err) {\n      setUser(null);\n    }\n  };\n\n  const getSingleOrder = async id => {\n    try {\n      const res = await service.get('/user/order/' + id);\n      return res.data.order;\n    } catch (err) {\n      setUser(null);\n    }\n  };\n\n  return __jsx(UserContext.Provider, {\n    value: {\n      user,\n      signup,\n      login,\n      setUser,\n      checkIfLoggedIn,\n      fetchUser,\n      getOrders,\n      getSingleOrder\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 5\n    }\n  }, props.children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserContextProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9Vc2VyQ29udGV4dC5qcz84MWQyIl0sIm5hbWVzIjpbIlVzZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInNlcnZpY2UiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwid2l0aENyZWRlbnRpYWxzIiwiVXNlckNvbnRleHRQcm92aWRlciIsInByb3BzIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInNpZ251cCIsImRhdGEiLCJwb3N0IiwibG9naW4iLCJjaGVja0lmTG9nZ2VkSW4iLCJnZXQiLCJmZXRjaFVzZXIiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZ2V0T3JkZXJzIiwib3JkZXJzIiwiZ2V0U2luZ2xlT3JkZXIiLCJpZCIsIm9yZGVyIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNQSxXQUFXLGdCQUFHQywyREFBYSxFQUFqQztBQUVQLE1BQU1DLE9BQU8sR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzNCQyxTQUFPLEVBQUVDLHVCQURrQjtBQUUzQkMsaUJBQWUsRUFBRTtBQUZVLENBQWIsQ0FBaEI7O0FBS0EsTUFBTUMsbUJBQW1CLEdBQUdDLEtBQUssSUFBSTtBQUNuQyxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsRUFBRCxDQUFoQzs7QUFFQSxRQUFNQyxNQUFNLEdBQUcsTUFBTUgsSUFBTixJQUFjO0FBQzNCLFVBQU1JLElBQUksR0FBRyxNQUFNWixPQUFPLENBQUNhLElBQVIsQ0FBYSxjQUFiLEVBQTZCTCxJQUE3QixDQUFuQjtBQUNBLFdBQU9JLElBQVA7QUFDRCxHQUhEOztBQUtBLFFBQU1FLEtBQUssR0FBRyxNQUFNTixJQUFOLElBQWM7QUFDMUIsVUFBTUksSUFBSSxHQUFHLE1BQU1aLE9BQU8sQ0FBQ2EsSUFBUixDQUFhLGFBQWIsRUFBNEJMLElBQTVCLENBQW5CO0FBQ0EsV0FBT0ksSUFBUDtBQUNELEdBSEQ7O0FBS0EsUUFBTUcsZUFBZSxHQUFHLFlBQVk7QUFDbEMsVUFBTTtBQUFFSDtBQUFGLFFBQVcsTUFBTVosT0FBTyxDQUFDZ0IsR0FBUixDQUFZLGdCQUFaLENBQXZCO0FBQ0EsV0FBT0osSUFBSSxDQUFDSixJQUFaO0FBQ0QsR0FIRDs7QUFLQSxRQUFNUyxTQUFTLEdBQUcsWUFBWTtBQUM1QixRQUFJO0FBQ0YsWUFBTUMsR0FBRyxHQUFHLE1BQU1ILGVBQWUsRUFBakM7QUFDQUksYUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosRUFBaUIsS0FBakI7QUFDQVQsYUFBTyxDQUFDUyxHQUFELENBQVA7QUFDRCxLQUpELENBSUUsT0FBT0csR0FBUCxFQUFZO0FBQ1paLGFBQU8sQ0FBQyxJQUFELENBQVA7QUFDRDtBQUNGLEdBUkQ7O0FBVUEsUUFBTWEsU0FBUyxHQUFHLFlBQVk7QUFDNUIsUUFBSTtBQUNGLFlBQU1KLEdBQUcsR0FBRyxNQUFNbEIsT0FBTyxDQUFDZ0IsR0FBUixDQUFZLGNBQVosQ0FBbEI7QUFDQSxhQUFPRSxHQUFHLENBQUNOLElBQUosQ0FBU1csTUFBaEI7QUFDRCxLQUhELENBR0UsT0FBT0YsR0FBUCxFQUFZO0FBQ1paLGFBQU8sQ0FBQyxJQUFELENBQVA7QUFDRDtBQUNGLEdBUEQ7O0FBU0EsUUFBTWUsY0FBYyxHQUFHLE1BQU9DLEVBQVAsSUFBYztBQUNuQyxRQUFJO0FBQ0YsWUFBTVAsR0FBRyxHQUFHLE1BQU1sQixPQUFPLENBQUNnQixHQUFSLENBQVksaUJBQWlCUyxFQUE3QixDQUFsQjtBQUNBLGFBQU9QLEdBQUcsQ0FBQ04sSUFBSixDQUFTYyxLQUFoQjtBQUNELEtBSEQsQ0FHRSxPQUFPTCxHQUFQLEVBQVk7QUFDWlosYUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNEO0FBQ0YsR0FQRDs7QUFTQSxTQUNFLE1BQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQUVELFVBQUY7QUFBUUcsWUFBUjtBQUFnQkcsV0FBaEI7QUFBdUJMLGFBQXZCO0FBQWdDTSxxQkFBaEM7QUFBaURFLGVBQWpEO0FBQTRESyxlQUE1RDtBQUF1RUU7QUFBdkUsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHakIsS0FBSyxDQUFDb0IsUUFEVCxDQURGO0FBS0QsQ0FuREQ7O0FBcURlckIsa0ZBQWYiLCJmaWxlIjoiLi9jb250ZXh0cy9Vc2VyQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5jb25zdCBzZXJ2aWNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuQVBQX0FQSSxcbiAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG59KVxuXG5jb25zdCBVc2VyQ29udGV4dFByb3ZpZGVyID0gcHJvcHMgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7fSlcblxuICBjb25zdCBzaWdudXAgPSBhc3luYyB1c2VyID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgc2VydmljZS5wb3N0KCcvYXV0aC9zaWdudXAnLCB1c2VyKVxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICBjb25zdCBsb2dpbiA9IGFzeW5jIHVzZXIgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzZXJ2aWNlLnBvc3QoJy9hdXRoL2xvZ2luJywgdXNlcilcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgY29uc3QgY2hlY2tJZkxvZ2dlZEluID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc2VydmljZS5nZXQoJy9hdXRoL2xvZ2dlZGluJylcbiAgICByZXR1cm4gZGF0YS51c2VyXG4gIH1cblxuICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNoZWNrSWZMb2dnZWRJbigpXG4gICAgICBjb25zb2xlLmxvZyhyZXMsICdyZXMnKVxuICAgICAgc2V0VXNlcihyZXMpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRVc2VyKG51bGwpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2V0T3JkZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlLmdldCgnL3VzZXIvb3JkZXJzJylcbiAgICAgIHJldHVybiByZXMuZGF0YS5vcmRlcnNcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldFVzZXIobnVsbClcbiAgICB9XG4gIH1cblxuICBjb25zdCBnZXRTaW5nbGVPcmRlciA9IGFzeW5jIChpZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlLmdldCgnL3VzZXIvb3JkZXIvJyArIGlkKVxuICAgICAgcmV0dXJuIHJlcy5kYXRhLm9yZGVyXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRVc2VyKG51bGwpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgc2lnbnVwLCBsb2dpbiwgc2V0VXNlciwgY2hlY2tJZkxvZ2dlZEluLCBmZXRjaFVzZXIsIGdldE9yZGVycywgZ2V0U2luZ2xlT3JkZXIgfX0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29udGV4dFByb3ZpZGVyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/UserContext.js\n");

/***/ }),

/***/ "./pages/user/ordine[id].js":
/*!**********************************!*\
  !*** ./pages/user/ordine[id].js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/UserContext */ \"./contexts/UserContext.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/pages/user/ordine[id].js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Ordine = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const {\n    id\n  } = router.query; // Destructuring our router object\n\n  const {\n    getSingleOrder\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__[\"UserContext\"]);\n  const {\n    0: order,\n    1: setOrder\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    async function getOrderFromDB() {\n      const orderFromDB = await getSingleOrder();\n      setOrder(orderFromDB);\n    }\n\n    getOrderFromDB();\n  }, []);\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 8\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 12\n    }\n  }, \"Pagina ordine\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ordine);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy91c2VyL29yZGluZS5qcz8xOTY5Il0sIm5hbWVzIjpbIk9yZGluZSIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJnZXRTaW5nbGVPcmRlciIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsIm9yZGVyIiwic2V0T3JkZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldE9yZGVyRnJvbURCIiwib3JkZXJGcm9tREIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ3JCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBU0YsTUFBTSxDQUFDRyxLQUF0QixDQUZxQixDQUVROztBQUU3QixRQUFNO0FBQUVDO0FBQUYsTUFBcUJDLHdEQUFVLENBQUNDLGlFQUFELENBQXJDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFHQUMseURBQVMsQ0FBQyxNQUFNO0FBQ1osbUJBQWVDLGNBQWYsR0FBK0I7QUFDNUIsWUFBTUMsV0FBVyxHQUFHLE1BQU1SLGNBQWMsRUFBeEM7QUFDQUksY0FBUSxDQUFDSSxXQUFELENBQVI7QUFDRjs7QUFDREQsa0JBQWM7QUFDakIsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFHLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosQ0FESjtBQVlGLENBNUJEOztBQThCZVoscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy91c2VyL29yZGluZVtpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9Vc2VyQ29udGV4dCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5cbmNvbnN0IE9yZGluZSA9ICgpID0+IHtcbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5OyAvLyBEZXN0cnVjdHVyaW5nIG91ciByb3V0ZXIgb2JqZWN0XG5cbmNvbnN0IHsgZ2V0U2luZ2xlT3JkZXIgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpXG5jb25zdCBbb3JkZXIsIHNldE9yZGVyXSA9IHVzZVN0YXRlKFtdKVxuXG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0T3JkZXJGcm9tREIoKXtcbiAgICAgICBjb25zdCBvcmRlckZyb21EQiA9IGF3YWl0IGdldFNpbmdsZU9yZGVyKClcbiAgICAgICBzZXRPcmRlcihvcmRlckZyb21EQilcbiAgICB9XG4gICAgZ2V0T3JkZXJGcm9tREIoKVxufSwgW10pXG5cbiAgIHJldHVybihcbiAgICAgICA8ZGl2PlxuICAgICAgICAgICA8aDE+UGFnaW5hIG9yZGluZTwvaDE+XG4gICAgICAgICAgIHsvKiB7b3JkZXJzLm1hcChvcmRlciA9PiB7XG4gICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e29yZGVyLl9pZH0+XG4gICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5PUkRFUjwvc3Ryb25nPjwvcD5cbiAgICAgICAgICAgICAgICAgICA8cD57b3JkZXIuX2lkfTwvcD5cbiAgICAgICAgICAgICAgICAgICA8cD57b3JkZXIuY3JlYXRlZF9hdH08L3A+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgfSl9ICovfVxuICAgICAgIDwvZGl2PlxuICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBPcmRpbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user/ordine[id].js\n");

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
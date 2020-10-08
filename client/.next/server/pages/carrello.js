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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/carrello.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contexts/CartContext.js":
/*!*********************************!*\
  !*** ./contexts/CartContext.js ***!
  \*********************************/
/*! exports provided: CartContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartContext\", function() { return CartContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/contexts/CartContext.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\nconst service = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({\n  baseURL: \"http://localhost:5000\",\n  withCredentials: true\n});\n\nconst CartContextProvider = props => {\n  const {\n    0: productsInCart,\n    1: setProductsInCart\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const {\n    0: renderPage,\n    1: setRenderPage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false); // without this localStorage in addProductToLocalStorage would be undefined (rendered on the server)\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const productsFromLocalStorage = JSON.parse(localStorage.getItem('productsInCart'));\n    setProductsInCart(productsFromLocalStorage);\n    setRenderPage(true);\n  }, []);\n\n  const addProductToLocalStorage = () => {\n    if (renderPage) {\n      console.log('add to local storage', productsInCart);\n      localStorage.setItem('productsInCart', JSON.stringify(productsInCart));\n    }\n  };\n\n  const addToCart = async (product, quantityFromInput) => {\n    let productIsInCart = false;\n    productsInCart && productsInCart.forEach(productInCart => {\n      if (productInCart._id === product._id) {\n        productIsInCart = true;\n        product.boughtQuantity = Number(productInCart.boughtQuantity) + Number(quantityFromInput);\n      }\n    });\n\n    if (!productsInCart) {\n      product.boughtQuantity = Number(quantityFromInput);\n      setProductsInCart([product]);\n    } else if (productIsInCart) {\n      setProductsInCart([...productsInCart]);\n    } else {\n      product.boughtQuantity = Number(quantityFromInput);\n      setProductsInCart([...productsInCart, product]);\n    }\n  }; // it needs to be called when addToCart finish executing\n\n\n  addProductToLocalStorage();\n  return __jsx(CartContext.Provider, {\n    value: {\n      productsInCart,\n      addToCart\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, props.children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartContextProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9DYXJ0Q29udGV4dC5qcz80Yzk0Il0sIm5hbWVzIjpbIkNhcnRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInNlcnZpY2UiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwid2l0aENyZWRlbnRpYWxzIiwiQ2FydENvbnRleHRQcm92aWRlciIsInByb3BzIiwicHJvZHVjdHNJbkNhcnQiLCJzZXRQcm9kdWN0c0luQ2FydCIsInVzZVN0YXRlIiwicmVuZGVyUGFnZSIsInNldFJlbmRlclBhZ2UiLCJ1c2VFZmZlY3QiLCJwcm9kdWN0c0Zyb21Mb2NhbFN0b3JhZ2UiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWRkUHJvZHVjdFRvTG9jYWxTdG9yYWdlIiwiY29uc29sZSIsImxvZyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhZGRUb0NhcnQiLCJwcm9kdWN0IiwicXVhbnRpdHlGcm9tSW5wdXQiLCJwcm9kdWN0SXNJbkNhcnQiLCJmb3JFYWNoIiwicHJvZHVjdEluQ2FydCIsIl9pZCIsImJvdWdodFF1YW50aXR5IiwiTnVtYmVyIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNQSxXQUFXLGdCQUFHQywyREFBYSxFQUFqQztBQUVQLE1BQU1DLE9BQU8sR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzNCQyxTQUFPLEVBQUVDLHVCQURrQjtBQUUzQkMsaUJBQWUsRUFBRTtBQUZVLENBQWIsQ0FBaEI7O0FBS0EsTUFBTUMsbUJBQW1CLEdBQUdDLEtBQUssSUFBSTtBQUNuQyxRQUFNO0FBQUEsT0FBQ0MsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ0Msc0RBQVEsQ0FBQyxFQUFELENBQXBEO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCRixzREFBUSxDQUFDLEtBQUQsQ0FBNUMsQ0FGbUMsQ0FFaUI7O0FBRXBERyx5REFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyx3QkFBd0IsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixnQkFBckIsQ0FBWCxDQUFqQztBQUNBVCxxQkFBaUIsQ0FBQ0ssd0JBQUQsQ0FBakI7QUFDQUYsaUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDRCxHQUpRLEVBSU4sRUFKTSxDQUFUOztBQU1BLFFBQU1PLHdCQUF3QixHQUFHLE1BQU07QUFDckMsUUFBSVIsVUFBSixFQUFnQjtBQUNkUyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ2IsY0FBcEM7QUFDQVMsa0JBQVksQ0FBQ0ssT0FBYixDQUFxQixnQkFBckIsRUFBdUNQLElBQUksQ0FBQ1EsU0FBTCxDQUFlZixjQUFmLENBQXZDO0FBQ0Q7QUFDRixHQUxEOztBQU9BLFFBQU1nQixTQUFTLEdBQUcsT0FBT0MsT0FBUCxFQUFnQkMsaUJBQWhCLEtBQXNDO0FBQ3RELFFBQUlDLGVBQWUsR0FBRyxLQUF0QjtBQUNBbkIsa0JBQWMsSUFBSUEsY0FBYyxDQUFDb0IsT0FBZixDQUF1QkMsYUFBYSxJQUFJO0FBQ3hELFVBQUlBLGFBQWEsQ0FBQ0MsR0FBZCxLQUFzQkwsT0FBTyxDQUFDSyxHQUFsQyxFQUF1QztBQUNyQ0gsdUJBQWUsR0FBRyxJQUFsQjtBQUNBRixlQUFPLENBQUNNLGNBQVIsR0FBeUJDLE1BQU0sQ0FBQ0gsYUFBYSxDQUFDRSxjQUFmLENBQU4sR0FBdUNDLE1BQU0sQ0FBQ04saUJBQUQsQ0FBdEU7QUFDRDtBQUNGLEtBTGlCLENBQWxCOztBQU1BLFFBQUksQ0FBQ2xCLGNBQUwsRUFBcUI7QUFDbkJpQixhQUFPLENBQUNNLGNBQVIsR0FBeUJDLE1BQU0sQ0FBQ04saUJBQUQsQ0FBL0I7QUFDQWpCLHVCQUFpQixDQUFDLENBQUNnQixPQUFELENBQUQsQ0FBakI7QUFDRCxLQUhELE1BR08sSUFBSUUsZUFBSixFQUFxQjtBQUMxQmxCLHVCQUFpQixDQUFDLENBQUMsR0FBR0QsY0FBSixDQUFELENBQWpCO0FBQ0QsS0FGTSxNQUVBO0FBQ0xpQixhQUFPLENBQUNNLGNBQVIsR0FBeUJDLE1BQU0sQ0FBQ04saUJBQUQsQ0FBL0I7QUFDQWpCLHVCQUFpQixDQUFDLENBQUMsR0FBR0QsY0FBSixFQUFvQmlCLE9BQXBCLENBQUQsQ0FBakI7QUFDRDtBQUNGLEdBakJELENBakJtQyxDQW9DbkM7OztBQUNBTiwwQkFBd0I7QUFFeEIsU0FDRSxNQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFWCxvQkFBRjtBQUFrQmdCO0FBQWxCLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2pCLEtBQUssQ0FBQzBCLFFBRFQsQ0FERjtBQUtELENBNUNEOztBQThDZTNCLGtGQUFmIiwiZmlsZSI6Ii4vY29udGV4dHMvQ2FydENvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBjb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5jb25zdCBzZXJ2aWNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuQVBQX0FQSSxcbiAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG59KVxuXG5jb25zdCBDYXJ0Q29udGV4dFByb3ZpZGVyID0gcHJvcHMgPT4ge1xuICBjb25zdCBbcHJvZHVjdHNJbkNhcnQsIHNldFByb2R1Y3RzSW5DYXJ0XSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbcmVuZGVyUGFnZSwgc2V0UmVuZGVyUGFnZV0gPSB1c2VTdGF0ZShmYWxzZSkgLy8gd2l0aG91dCB0aGlzIGxvY2FsU3RvcmFnZSBpbiBhZGRQcm9kdWN0VG9Mb2NhbFN0b3JhZ2Ugd291bGQgYmUgdW5kZWZpbmVkIChyZW5kZXJlZCBvbiB0aGUgc2VydmVyKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcHJvZHVjdHNGcm9tTG9jYWxTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZHVjdHNJbkNhcnQnKSlcbiAgICBzZXRQcm9kdWN0c0luQ2FydChwcm9kdWN0c0Zyb21Mb2NhbFN0b3JhZ2UpXG4gICAgc2V0UmVuZGVyUGFnZSh0cnVlKVxuICB9LCBbXSlcblxuICBjb25zdCBhZGRQcm9kdWN0VG9Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgaWYgKHJlbmRlclBhZ2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdhZGQgdG8gbG9jYWwgc3RvcmFnZScsIHByb2R1Y3RzSW5DYXJ0KVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2R1Y3RzSW5DYXJ0JywgSlNPTi5zdHJpbmdpZnkocHJvZHVjdHNJbkNhcnQpKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFkZFRvQ2FydCA9IGFzeW5jIChwcm9kdWN0LCBxdWFudGl0eUZyb21JbnB1dCkgPT4ge1xuICAgIGxldCBwcm9kdWN0SXNJbkNhcnQgPSBmYWxzZVxuICAgIHByb2R1Y3RzSW5DYXJ0ICYmIHByb2R1Y3RzSW5DYXJ0LmZvckVhY2gocHJvZHVjdEluQ2FydCA9PiB7XG4gICAgICBpZiAocHJvZHVjdEluQ2FydC5faWQgPT09IHByb2R1Y3QuX2lkKSB7XG4gICAgICAgIHByb2R1Y3RJc0luQ2FydCA9IHRydWVcbiAgICAgICAgcHJvZHVjdC5ib3VnaHRRdWFudGl0eSA9IE51bWJlcihwcm9kdWN0SW5DYXJ0LmJvdWdodFF1YW50aXR5KSArIE51bWJlcihxdWFudGl0eUZyb21JbnB1dClcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmICghcHJvZHVjdHNJbkNhcnQpIHtcbiAgICAgIHByb2R1Y3QuYm91Z2h0UXVhbnRpdHkgPSBOdW1iZXIocXVhbnRpdHlGcm9tSW5wdXQpXG4gICAgICBzZXRQcm9kdWN0c0luQ2FydChbcHJvZHVjdF0pXG4gICAgfSBlbHNlIGlmIChwcm9kdWN0SXNJbkNhcnQpIHtcbiAgICAgIHNldFByb2R1Y3RzSW5DYXJ0KFsuLi5wcm9kdWN0c0luQ2FydF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2R1Y3QuYm91Z2h0UXVhbnRpdHkgPSBOdW1iZXIocXVhbnRpdHlGcm9tSW5wdXQpXG4gICAgICBzZXRQcm9kdWN0c0luQ2FydChbLi4ucHJvZHVjdHNJbkNhcnQsIHByb2R1Y3RdKVxuICAgIH1cbiAgfVxuXG4gIC8vIGl0IG5lZWRzIHRvIGJlIGNhbGxlZCB3aGVuIGFkZFRvQ2FydCBmaW5pc2ggZXhlY3V0aW5nXG4gIGFkZFByb2R1Y3RUb0xvY2FsU3RvcmFnZSgpXG5cbiAgcmV0dXJuIChcbiAgICA8Q2FydENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgcHJvZHVjdHNJbkNhcnQsIGFkZFRvQ2FydCB9fT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRDb250ZXh0UHJvdmlkZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/CartContext.js\n");

/***/ }),

/***/ "./pages/carrello.js":
/*!***************************!*\
  !*** ./pages/carrello.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/CartContext */ \"./contexts/CartContext.js\");\nvar _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/pages/carrello.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Carrello = () => {\n  const {\n    addToCart,\n    productsInCart\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_1__[\"CartContext\"]);\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, \"Carrello\"), productsInCart && productsInCart.map(product => {\n    return __jsx(\"div\", {\n      key: product._id,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 11\n      }\n    }, __jsx(\"p\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 13\n      }\n    }, product.name), __jsx(\"p\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 13\n      }\n    }, product.boughtQuantity));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carrello);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jYXJyZWxsby5qcz8yMDc1Il0sIm5hbWVzIjpbIkNhcnJlbGxvIiwiYWRkVG9DYXJ0IiwicHJvZHVjdHNJbkNhcnQiLCJ1c2VDb250ZXh0IiwiQ2FydENvbnRleHQiLCJtYXAiLCJwcm9kdWN0IiwiX2lkIiwibmFtZSIsImJvdWdodFF1YW50aXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUNyQixRQUFNO0FBQUVDLGFBQUY7QUFBYUM7QUFBYixNQUFnQ0Msd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FBaEQ7QUFFQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUdGLGNBQWMsSUFBSUEsY0FBYyxDQUFDRyxHQUFmLENBQW1CQyxPQUFPLElBQUk7QUFDL0MsV0FDRTtBQUFLLFNBQUcsRUFBRUEsT0FBTyxDQUFDQyxHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJRCxPQUFPLENBQUNFLElBQVosQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUYsT0FBTyxDQUFDRyxjQUFaLENBRkYsQ0FERjtBQU1ELEdBUGtCLENBRnJCLENBREY7QUFhRCxDQWhCRDs7QUFpQmVULHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2FycmVsbG8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDYXJ0Q29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0NhcnRDb250ZXh0J1xuXG5jb25zdCBDYXJyZWxsbyA9ICgpID0+IHtcbiAgY29uc3QgeyBhZGRUb0NhcnQsIHByb2R1Y3RzSW5DYXJ0IH0gPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5DYXJyZWxsbzwvaDE+XG4gICAgICB7cHJvZHVjdHNJbkNhcnQgJiYgcHJvZHVjdHNJbkNhcnQubWFwKHByb2R1Y3QgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0Ll9pZH0+XG4gICAgICAgICAgICA8cD57cHJvZHVjdC5uYW1lfTwvcD5cbiAgICAgICAgICAgIDxwPntwcm9kdWN0LmJvdWdodFF1YW50aXR5fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IENhcnJlbGxvXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/carrello.js\n");

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
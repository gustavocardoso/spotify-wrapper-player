(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["spotifyWrapper"] = factory();
	else
		root["spotifyWrapper"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index */ \"./src/index.js\").default\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nwb3RpZnlXcmFwcGVyLy4vaW5kZXguanM/NDFmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc3JjL2luZGV4JykuZGVmYXVsdFxuIl0sIm1hcHBpbmdzIjoiQUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./src/album.js":
/*!**********************!*\
  !*** ./src/album.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getAlbum; });\nfunction getAlbum() {\n  var _this = this;\n\n  return {\n    getAlbum: function getAlbum(id) {\n      return _this.request(\"\".concat(_this.apiURL, \"/albums/\").concat(id));\n    },\n    getAlbums: function getAlbums(ids) {\n      return _this.request(\"\".concat(_this.apiURL, \"/albums/?ids=\").concat(ids));\n    },\n    getTracks: function getTracks(id) {\n      return _this.request(\"\".concat(_this.apiURL, \"/albums/\").concat(id, \"/tracks\"));\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWxidW0uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5V3JhcHBlci8uL3NyYy9hbGJ1bS5qcz9mZGFmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEFsYnVtICgpIHtcbiAgcmV0dXJuIHtcbiAgICBnZXRBbGJ1bTogaWQgPT4gdGhpcy5yZXF1ZXN0KGAke3RoaXMuYXBpVVJMfS9hbGJ1bXMvJHtpZH1gKSxcbiAgICBnZXRBbGJ1bXM6IGlkcyA9PiB0aGlzLnJlcXVlc3QoYCR7dGhpcy5hcGlVUkx9L2FsYnVtcy8/aWRzPSR7aWRzfWApLFxuICAgIGdldFRyYWNrczogaWQgPT4gdGhpcy5yZXF1ZXN0KGAke3RoaXMuYXBpVVJMfS9hbGJ1bXMvJHtpZH0vdHJhY2tzYClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/album.js\n");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: API_URL, HEADERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL\", function() { return API_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HEADERS\", function() { return HEADERS; });\nvar TOKEN_API = 'BQBkc2KEZFusQO35GmkecTFNcN1NO4Ldt7vaREwlxqltGo7HFXcIL3TCCZe273J7QsESy6NRkGkdZv3vyLgS9erZaYv9CnY1mA0AsYrCPWzHKnnxPKOaNyCeNN-PSIQ7WJUCItPsZlAyvZEfPxSdJefqCU8FGI8-M2u5SAJMQpX2Sv0EbyczgwAiP9yPmEk1C3LbL6-WWFQw6g_H-BDTmJjiBijs7wlgN0Y1TZVzYtPCo24Fa-fUaeWyDfJ5YBVdRMmssKilSdlZeg';\nvar API_URL = 'https://api.spotify.com/v1';\nvar HEADERS = {\n  headers: {\n    Authorization: \"Bearer \".concat(TOKEN_API)\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BvdGlmeVdyYXBwZXIvLi9zcmMvY29uZmlnLmpzP2RiNDkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVE9LRU5fQVBJID1cbiAgJ0JRQmtjMktFWkZ1c1FPMzVHbWtlY1RGTmNOMU5PNExkdDd2YVJFd2x4cWx0R283SEZYY0lMM1RDQ1plMjczSjdRc0VTeTZOUmtHa2RadjN2eUxnUzllclphWXY5Q25ZMW1BMEFzWXJDUFd6SEtubnhQS09hTnlDZU5OLVBTSVE3V0pVQ0l0UHNabEF5dlpFZlB4U2RKZWZxQ1U4RkdJOC1NMnU1U0FKTVFwWDJTdjBFYnljemd3QWlQOXlQbUVrMUMzTGJMNi1XV0ZRdzZnX0gtQkRUbUpqaUJpanM3d2xnTjBZMVRaVnpZdFBDbzI0RmEtZlVhZVd5RGZKNVlCVmRSTW1zc0tpbFNkbFplZydcblxuZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEnXG5cbmV4cG9ydCBjb25zdCBIRUFERVJTID0ge1xuICBoZWFkZXJzOiB7XG4gICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke1RPS0VOX0FQSX1gXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SpotifyWrapper; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ \"./src/search.js\");\n/* harmony import */ var _album__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./album */ \"./src/album.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\nvar SpotifyWrapper =\n/*#__PURE__*/\nfunction () {\n  function SpotifyWrapper(options) {\n    _classCallCheck(this, SpotifyWrapper);\n\n    this.apiURL = options.apiURL || _config__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"];\n    this.token = options.token;\n    this.album = _album__WEBPACK_IMPORTED_MODULE_3__[\"default\"].bind(this)();\n    this.search = _search__WEBPACK_IMPORTED_MODULE_2__[\"default\"].bind(this)();\n  }\n\n  _createClass(SpotifyWrapper, [{\n    key: \"request\",\n    value: function request(url) {\n      var headers = {\n        headers: {\n          Authorization: \"Bearer \".concat(this.token)\n        }\n      };\n      return fetch(url, headers).then(_utils__WEBPACK_IMPORTED_MODULE_1__[\"toJSON\"]);\n    }\n  }]);\n\n  return SpotifyWrapper;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5V3JhcHBlci8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuL2NvbmZpZydcbmltcG9ydCB7IHRvSlNPTiB9IGZyb20gJy4vdXRpbHMnXG5cbmltcG9ydCBzZWFyY2ggZnJvbSAnLi9zZWFyY2gnXG5pbXBvcnQgYWxidW0gZnJvbSAnLi9hbGJ1bSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BvdGlmeVdyYXBwZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHRoaXMuYXBpVVJMID0gb3B0aW9ucy5hcGlVUkwgfHwgQVBJX1VSTFxuICAgIHRoaXMudG9rZW4gPSBvcHRpb25zLnRva2VuXG5cbiAgICB0aGlzLmFsYnVtID0gYWxidW0uYmluZCh0aGlzKSgpXG4gICAgdGhpcy5zZWFyY2ggPSBzZWFyY2guYmluZCh0aGlzKSgpXG4gIH1cblxuICByZXF1ZXN0ICh1cmwpIHtcbiAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy50b2tlbn1gXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZldGNoKHVybCwgaGVhZGVycykudGhlbih0b0pTT04pXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return search; });\nfunction searcher(type, query) {\n  return this.request(\"\".concat(this.apiURL, \"/search?q=\").concat(query, \"&type=\").concat(type));\n}\n\nfunction search() {\n  return {\n    artists: searcher.bind(this, 'artist'),\n    albums: searcher.bind(this, 'album'),\n    tracks: searcher.bind(this, 'track'),\n    playlists: searcher.bind(this, 'playlist')\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VhcmNoLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BvdGlmeVdyYXBwZXIvLi9zcmMvc2VhcmNoLmpzPzMyNTUiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2VhcmNoZXIgKHR5cGUsIHF1ZXJ5KSB7XG4gIHJldHVybiB0aGlzLnJlcXVlc3QoYCR7dGhpcy5hcGlVUkx9L3NlYXJjaD9xPSR7cXVlcnl9JnR5cGU9JHt0eXBlfWApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlYXJjaCAoKSB7XG4gIHJldHVybiB7XG4gICAgYXJ0aXN0czogc2VhcmNoZXIuYmluZCh0aGlzLCAnYXJ0aXN0JyksXG4gICAgYWxidW1zOiBzZWFyY2hlci5iaW5kKHRoaXMsICdhbGJ1bScpLFxuICAgIHRyYWNrczogc2VhcmNoZXIuYmluZCh0aGlzLCAndHJhY2snKSxcbiAgICBwbGF5bGlzdHM6IHNlYXJjaGVyLmJpbmQodGhpcywgJ3BsYXlsaXN0JylcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/search.js\n");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: toJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toJSON\", function() { return toJSON; });\nvar toJSON = function toJSON(data) {\n  return data.json();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5V3JhcHBlci8uL3NyYy91dGlscy5qcz8wMjVlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0b0pTT04gPSBkYXRhID0+IGRhdGEuanNvbigpXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils.js\n");

/***/ })

/******/ });
});
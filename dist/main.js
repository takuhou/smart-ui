(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BoringDecision"] = factory();
	else
		root["BoringDecision"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BoringDecision; });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _svg_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg.json */ \"./src/svg.json\");\n/* harmony import */ var _svg_json__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_json__WEBPACK_IMPORTED_MODULE_1__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar BoringDecision = function BoringDecision(settings) {\n  var _this = this;\n\n  _classCallCheck(this, BoringDecision);\n\n  _defineProperty(this, \"start\", function () {\n    _this.startTime = new Date().getTime();\n\n    if (!_this.timer) {\n      _this.timer = setInterval(_this.counter, _this.interval);\n    }\n  });\n\n  _defineProperty(this, \"stop\", function () {\n    clearInterval(_this.timer);\n    _this.timer = null;\n    var sec = document.getElementById('bd-second');\n    sec.innerText = _this.limit / 1000;\n    var outerCircle = document.getElementById('bd-outer-circle');\n\n    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hasConicGradient()) {\n      outerCircle.style.background = \"conic-gradient(\".concat(_this.startColor, \" 0deg, white 0deg 360deg)\");\n    } else {\n      // svg.jsを使う\n      var svg = 'url(\"' + _svg_json__WEBPACK_IMPORTED_MODULE_1___default.a.black[0] + '\")';\n      outerCircle.style.backgroundImage = svg;\n    }\n\n    _this.progress = 0;\n  });\n\n  _defineProperty(this, \"counter\", function () {\n    var now = new Date().getTime();\n    var sec = document.getElementById('bd-second');\n    sec.innerText = ((_this.limit - (now - _this.startTime)) / 1000).toFixed(1);\n    _this.progress = _this.progress + 360 / (_this.limit / 100);\n    var outerCircle = document.getElementById('bd-outer-circle');\n\n    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hasConicGradient()) {\n      outerCircle.style.background = \"conic-gradient(\".concat(_this.startColor, \" \").concat(_this.progress, \"deg, white 0deg 360deg)\");\n    } else {\n      // svg.jsを使う\n      var svg = 'url(\"' + _svg_json__WEBPACK_IMPORTED_MODULE_1___default.a.black[_this.progress / 18] + '\")';\n      outerCircle.style.backgroundImage = svg;\n    }\n\n    if (_this.limit < now - _this.startTime) {\n      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hasConicGradient()) {\n        outerCircle.style.background = \"conic-gradient(\".concat(_this.startColor, \" 0deg, \").concat(_this.endColor, \" 0deg 360deg)\");\n      } else {\n        // svg.jsを使う\n        var _svg = 'url(\"' + _svg_json__WEBPACK_IMPORTED_MODULE_1___default.a.black[20] + '\")';\n\n        outerCircle.style.backgroundImage = _svg;\n      }\n\n      sec.innerText = 'OK';\n      clearInterval(_this.timer);\n      _this.timer = null; // callbackFunction();\n    }\n  });\n\n  _defineProperty(this, \"init\", function () {\n    var outerCircle = document.createElement('div');\n    outerCircle.id = \"bd-outer-circle\";\n    outerCircle.style.width = \"\".concat(_this.size, \"px\");\n    outerCircle.style.height = \"\".concat(_this.size, \"px\");\n    outerCircle.style.borderRadius = '50%';\n    outerCircle.style.border = '1px solid gray';\n    outerCircle.style.background = \"conic-gradient(\".concat(_this.startColor, \" 0deg, white 0deg 360deg)\");\n    var button = document.createElement(\"button\");\n    button.id = \"bd-button\";\n    button.style.width = \"\".concat(_this.size - 10, \"px\");\n    button.style.height = \"\".concat(_this.size - 10, \"px\");\n    button.style.borderRadius = '50%';\n    button.style.border = 'none';\n    button.style.marginTop = '5px';\n    button.style.marginLeft = '5px';\n    button.style.outline = 'none';\n\n    button.oncontextmenu = function () {\n      return false;\n    };\n\n    var second = document.createElement(\"div\");\n    second.id = \"bd-second\";\n    second.innerText = _this.limit / 1000;\n    button.appendChild(second);\n    outerCircle.appendChild(button);\n\n    _this.targetDom.appendChild(outerCircle);\n\n    button.addEventListener('mousedown', _this.start, false);\n    button.addEventListener('mouseup', _this.stop, false);\n    button.addEventListener('mouseout', _this.stop, false);\n  });\n\n  this.limit = settings.limit || 2000;\n  this.startColor = settings.startColor || \"black\";\n  this.endColor = settings.endColor || \"white\";\n  this.size = settings.size || 100;\n  this.targetDom = document.getElementById(\"boring-decision\");\n  this.startTime = 0;\n  this.timer = null;\n  this.interval = 100;\n  this.progress = 0;\n};\n\n\n\n//# sourceURL=webpack://BoringDecision/./src/index.js?");

/***/ }),

/***/ "./src/svg.json":
/*!**********************!*\
  !*** ./src/svg.json ***!
  \**********************/
/*! no static exports found */
/***/ (function(module) {

eval("!(function webpackMissingModule() { var e = new Error(\"Cannot find module './svg.json'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n//# sourceURL=webpack://BoringDecision/./src/svg.json?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Utils; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Utils =\n/*#__PURE__*/\nfunction () {\n  function Utils() {\n    _classCallCheck(this, Utils);\n  }\n\n  _createClass(Utils, null, [{\n    key: \"ua\",\n    get: function get() {\n      return window.navigator.userAgent.toLowerCase();\n    }\n  }]);\n\n  return Utils;\n}();\n\n_defineProperty(Utils, \"isChrome\", function () {\n  if (Utils.ua.indexOf('chrome') > 0) {\n    return true;\n  }\n\n  return false;\n});\n\n_defineProperty(Utils, \"isSafari\", function () {\n  if (Utils.ua.indexOf('chrome') < 0 && Utils.ua.indexOf('safari') > 0) {\n    return true;\n  }\n\n  return false;\n});\n\n_defineProperty(Utils, \"isFirefox\", function () {\n  if (Utils.ua.indexOf('firefox') > 0) {\n    return true;\n  }\n\n  return false;\n});\n\n_defineProperty(Utils, \"isIe\", function () {\n  if (Utils.ua.indexOf('trident') > 0) {\n    return true;\n  }\n\n  return false;\n});\n\n_defineProperty(Utils, \"isEdge\", function () {\n  if (Utils.ua.indexOf('edge') > 0) {\n    return true;\n  }\n\n  return false;\n});\n\n_defineProperty(Utils, \"hasConicGradient\", function () {\n  if (Utils.isSafari() || Utils.isFirefox() || Utils.isIe() || Utils.isEdge()) {\n    return false;\n  }\n\n  return true;\n});\n\n\n\n//# sourceURL=webpack://BoringDecision/./src/utils.js?");

/***/ })

/******/ })["default"];
});
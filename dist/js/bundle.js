/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_MobileMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script/MobileMenu */ \"./src/js/script/MobileMenu.js\");\n\n\n// Menu Mobile\nconst mobileMenu = new _script_MobileMenu__WEBPACK_IMPORTED_MODULE_0__.default(\"[data-menu]\", \"[data-menu-list]\");\nmobileMenu.init();\n\n\n//# sourceURL=webpack://minhas-taferas-automatizadas-front-end/./src/js/index.js?");

/***/ }),

/***/ "./src/js/script/MobileMenu.js":
/*!*************************************!*
  !*** ./src/js/script/MobileMenu.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MobileMenu; }\n/* harmony export */ });\nclass MobileMenu {\n  constructor(button, list) {\n    this.button = document.querySelector(button);\n    this.list = document.querySelector(list);\n\n    // bind\n    this.openMenu = this.openMenu.bind(this);\n    this.closeMenu = this.closeMenu.bind(this);\n    this.outsideClick = this.outsideClick.bind(this);\n    this.removeEvents = this.removeEvents.bind(this);\n  }\n\n  // Fechar o menu se estiver aberto\n  closeMenu() {\n    this.button.dataset.menu = \"close\";\n    this.list.dataset.menuList = \"close\";\n\n    this.removeEvents();\n\n    this.addEvents();\n  }\n\n  // Clicar fora e fechar\n  outsideClick({ target }) {\n    if (\n      this.button.dataset.menu === \"open\" &&\n      !target.hasAttribute(\"data-menu-list\") &&\n      !target.hasAttribute(\"data-menu\")\n    ) {\n      this.closeMenu();\n    }\n  }\n\n  // Abre o menu ao clicar no botao\n  openMenu() {\n    this.button.dataset.menu = \"open\";\n    this.list.dataset.menuList = \"open\";\n\n    // adiciona evento de fechar menu ao abrir\n    this.button.addEventListener(\"click\", this.closeMenu);\n\n    // adiciona evento clicar fora e fechar ao body\n    document.body.addEventListener(\"click\", this.outsideClick);\n  }\n\n  // remove eventos\n  removeEvents() {\n    this.button.removeEventListener(\"click\", this.openMenu);\n    this.button.removeEventListener(\"click\", this.closeMenu);\n    document.body.removeEventListener(\"click\", this.outsideClick);\n  }\n\n  // adiciona evento de click no botao\n  addEvents() {\n    this.button.addEventListener(\"click\", this.openMenu);\n  }\n\n  // inicia a classe\n  init() {\n    if (this.button && this.list) {\n      this.addEvents();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://minhas-taferas-automatizadas-front-end/./src/js/script/MobileMenu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
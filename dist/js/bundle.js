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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_MobileMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script/MobileMenu */ \"./src/js/script/MobileMenu.js\");\n/* harmony import */ var _script_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/Modal */ \"./src/js/script/Modal.js\");\n/* harmony import */ var _script_Slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/Slide */ \"./src/js/script/Slide.js\");\n\n\n\n\n// Menu Mobile\nconst mobileMenu = new _script_MobileMenu__WEBPACK_IMPORTED_MODULE_0__.default(\"[data-menu]\", \"[data-menu-list]\");\nmobileMenu.init();\n\n// Slide\nconst slide = new _script_Slide__WEBPACK_IMPORTED_MODULE_2__.default(\n  \".c-slide\",\n  \".c-slide__imagens img\",\n  \".c-slide__bullets-item\",\n  \".c-slide__arrow-next\",\n  \".c-slide__arrow-prev\"\n);\nslide.init();\n\n// Modal\nconst modal = new _script_Modal__WEBPACK_IMPORTED_MODULE_1__.default(\n  \".c-modal\",\n  \".c-modal__body\",\n  \".c-modal__title\",\n  \".c-modal__close\"\n);\n\nmodal.init();\n\n\n//# sourceURL=webpack://minhas-taferas-automatizadas-front-end/./src/js/index.js?");

/***/ }),

/***/ "./src/js/script/MobileMenu.js":
/*!*************************************!*
  !*** ./src/js/script/MobileMenu.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MobileMenu; }\n/* harmony export */ });\nclass MobileMenu {\n  constructor(button, list) {\n    this.button = document.querySelector(button);\n    this.list = document.querySelector(list);\n\n    // bind\n    this.openMenu = this.openMenu.bind(this);\n    this.closeMenu = this.closeMenu.bind(this);\n    this.outsideClick = this.outsideClick.bind(this);\n    this.removeEvents = this.removeEvents.bind(this);\n  }\n\n  // Fechar o menu se estiver aberto\n  closeMenu() {\n    this.button.dataset.menu = \"close\";\n    this.list.dataset.menuList = \"close\";\n\n    this.removeEvents();\n\n    this.addEvents();\n  }\n\n  // Clicar fora e fechar\n  outsideClick({ target }) {\n    if (\n      this.button.dataset.menu === \"open\" &&\n      !target.hasAttribute(\"data-menu-list\") &&\n      !target.hasAttribute(\"data-menu\")\n    ) {\n      this.closeMenu();\n    }\n  }\n\n  // Abre o menu ao clicar no botao\n  openMenu() {\n    this.button.dataset.menu = \"open\";\n    this.list.dataset.menuList = \"open\";\n\n    // adiciona evento de fechar menu ao abrir\n    this.button.addEventListener(\"click\", this.closeMenu);\n\n    // adiciona evento clicar fora e fechar ao body\n    document.body.addEventListener(\"click\", this.outsideClick);\n  }\n\n  // remove eventos\n  removeEvents() {\n    this.button.removeEventListener(\"click\", this.openMenu);\n    this.button.removeEventListener(\"click\", this.closeMenu);\n    document.body.removeEventListener(\"click\", this.outsideClick);\n  }\n\n  // adiciona evento de click no botao\n  addEvents() {\n    this.button.addEventListener(\"click\", this.openMenu);\n  }\n\n  // inicia a classe\n  init() {\n    if (this.button && this.list) {\n      this.addEvents();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://minhas-taferas-automatizadas-front-end/./src/js/script/MobileMenu.js?");

/***/ }),

/***/ "./src/js/script/Modal.js":
/*!********************************!*
  !*** ./src/js/script/Modal.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Modal; }\n/* harmony export */ });\nclass Modal {\n  constructor(wrapper, modalBody, modalTitle, modalClose) {\n    this.wrapper = document.querySelector(wrapper);\n    this.container = this.wrapper.querySelector(\".c-modal__container\");\n    this.modalBody = this.wrapper.querySelector(modalBody);\n    this.modalTitle = this.wrapper.querySelector(modalTitle);\n    this.modalClose = this.wrapper.querySelector(modalClose);\n\n    // itens\n    this.itens = document.querySelectorAll('[data-modal=\"image\"]');\n\n    // bind\n    this.openModal = this.openModal.bind(this);\n    this.closeModal = this.closeModal.bind(this);\n    this.outsideCloseModal = this.outsideCloseModal.bind(this);\n  }\n\n  // clicar fora e fechar modal\n  outsideCloseModal({ target }) {\n    if (!this.container.contains(target)) this.closeModal();\n  }\n\n  // fechar modal\n  closeModal() {\n    this.wrapper.dataset.modal = \"closed\";\n    this.removeEvents();\n  }\n\n  // open modal\n  openModal({ target }) {\n    const imagem = document.createElement(\"img\");\n    imagem.src = target.src;\n    imagem.alt = target.alt;\n\n    this.modalBody.innerHTML = \"\";\n\n    this.wrapper.dataset.modal = \"active\";\n    this.modalBody.append(imagem);\n    this.modalTitle.innerHTML = target.alt;\n\n    // close modal\n    this.modalClose.addEventListener(\"click\", this.closeModal);\n\n    // outside close modal\n    setTimeout(() => {\n      document.body.addEventListener(\"click\", this.outsideCloseModal);\n    }, 0);\n  }\n\n  // add events\n  addEvents() {\n    this.itens.forEach((item) =>\n      item.addEventListener(\"click\", this.openModal)\n    );\n  }\n\n  // removeEvents\n  removeEvents() {\n    this.modalClose.removeEventListener(\"click\", this.closeModal);\n    document.body.removeEventListener(\"click\", this.outsideCloseModal);\n  }\n\n  // inicia a classe\n  init() {\n    if (this.wrapper) {\n      this.addEvents();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://minhas-taferas-automatizadas-front-end/./src/js/script/Modal.js?");

/***/ }),

/***/ "./src/js/script/Slide.js":
/*!********************************!*
  !*** ./src/js/script/Slide.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Slide; }\n/* harmony export */ });\nclass Slide {\n  constructor(wrapper, imagens, bullets, next, prev) {\n    // slide wrapper\n    this.wrapper = document.querySelector(wrapper);\n\n    // images\n    this.imagens = this.wrapper.querySelectorAll(imagens);\n\n    // bullets\n    this.bullets = this.wrapper.querySelectorAll(bullets);\n\n    // arrows\n    this.next = this.wrapper.querySelector(next);\n    this.prev = this.wrapper.querySelector(prev);\n\n    // bind\n    this.slideBullets = this.slideBullets.bind(this);\n  }\n\n  // removendo atributo das imagens\n  removeAttributes() {\n    this.imagens.forEach((img) => img.removeAttribute(\"data-slide\"));\n    this.bullets.forEach((bullet) => bullet.removeAttribute(\"data-bullets\"));\n  }\n\n  // adicionando atributos nas imagens\n  addAttributes(index) {\n    this.imagens[index].setAttribute(\"data-slide\", \"active\");\n    this.bullets[index].setAttribute(\"data-bullets\", \"active\");\n  }\n\n  // bolinhas do slide\n  slideBullets() {\n    // Percorre todas as bolinhas e ao clicar nelas aparece a imagem correspondente\n    this.bullets.forEach((bullet, index) => {\n      // Adiciona evento de click\n      this.bullets[index].addEventListener(\"click\", () => {\n        // remove o atributo para desaparecer da tela\n        this.removeAttributes();\n\n        // ao clicar na bolinha para a transição das imagens\n        clearInterval(this.slideInterval);\n\n        // adiciona atributo para a imagem aparecer\n        this.addAttributes(index);\n\n        // reinicia a transição das imagens caso não clique em outra bolinha\n        setTimeout(() => {\n          this.start();\n        }, 0);\n      });\n    });\n  }\n\n  // inicia a transição das imagens\n  start() {\n    // posição de inicio\n    this.slideCount = 0;\n\n    // quantidade de imagens\n    this.slideSize = this.imagens.length;\n\n    // Inicia a transição das imagens a cada 5 segundos\n    this.slideInterval = setInterval(() => {\n      // removendo o atributo das imagens\n      this.removeAttributes();\n\n      // adicionando o atributo na imagem correspondente ao loop\n      this.addAttributes(this.slideCount);\n\n      // incrementa +1 ao index para ir para a proxima imagem\n      this.slideCount += 1;\n\n      // se o index for do tamanho do slide, reinicia o index para 0 (cria um loop infinito)\n      if (this.slideCount === this.slideSize) {\n        this.slideCount = 0;\n      }\n    }, 5000);\n  }\n\n  // inicia a classe\n  init() {\n    if (this.wrapper && this.imagens[0]) {\n      this.start();\n      this.slideBullets();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://minhas-taferas-automatizadas-front-end/./src/js/script/Slide.js?");

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
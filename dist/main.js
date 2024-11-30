/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://web-portfolio/./src/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n\r\n/* import Home from \"./home\"\r\n\r\nconst H = new Home();\r\nH.createElemAboutMe()\r\n */\r\n\r\n\r\n /* || Burger Button */\r\n\r\n/* function burgerButton() {\r\n   const burgerBtn = document.querySelector(\".header__burger\");\r\n   const nav = document.querySelector(\"nav\");\r\n   const main = document.querySelector(\".home\");\r\n\r\n   function pressBurgerBtn() {\r\n      nav.classList.toggle(\"active\")\r\n      main.classList.toggle(\"active\")\r\n      document.querySelector(\".header__burger--line-top\").classList.toggle(\"pressed\");\r\n      document.querySelector(\".header__burger--line-centr\").classList.toggle(\"pressed\");\r\n      document.querySelector(\".header__burger--line-bottom\").classList.toggle(\"pressed\");\r\n      \r\n   }\r\n   \r\n   burgerBtn.addEventListener(\"click\", pressBurgerBtn);\r\n}\r\n\r\nburgerButton(); */\r\n\r\n\r\n/* || Contact me */ \r\n\r\nfunction contactMe() {\r\n   const contactMeBtn = document.querySelector(\".home__title--btn\");\r\n   const modale = document.querySelector(\".home__description--contactme\");\r\n   const closeBtn = document.querySelector(\".home__description--icon\");\r\n   const menu = document.querySelector(\".home__description--menu\");\r\n   \r\n   const openMenu = () => {\r\n      modale.classList.add(\"active\");\r\n      menu.classList.add(\"active\");\r\n   }\r\n   const closeMenu = () => {\r\n      modale.classList.remove(\"active\");\r\n      menu.classList.remove(\"active\");\r\n   }\r\n\r\n   window.addEventListener(\"click\", e => {\r\n      if(e.target === modale) {\r\n         modale.classList.remove(\"active\");\r\n         menu.classList.remove(\"active\");\r\n      } \r\n   })\r\n   \r\n   closeBtn.addEventListener(\"click\", closeMenu);\r\n   contactMeBtn.addEventListener(\"click\", openMenu);\r\n}\r\n\r\ncontactMe();\r\n\r\n/* || Projects Block With IntersectionObserver */\r\n\r\nfunction projects() {\r\n   const cards = document.querySelectorAll(\".projects__site\");\r\n\r\n   const observer = new IntersectionObserver(entries => {\r\n      entries.forEach(entry => {\r\n         if (!entry.isIntersecting) return\r\n         entry.target.classList.toggle(\"show\", entry.isIntersecting);\r\n      })\r\n   })\r\n\r\n   cards.forEach(card => {\r\n      observer.observe(card)\r\n   })\r\n   //console.log(cards)\r\n}\r\nprojects()\r\n\r\n/* || Technologies I Use Block With IntersectionObserver */\r\n\r\nfunction tech() {\r\n   const cards = document.querySelectorAll(\".tech__in\");\r\n\r\n   const observer = new IntersectionObserver(entries => {\r\n      entries.forEach(entry => {\r\n         if (!entry.isIntersecting) return\r\n         entry.target.classList.toggle(\"show\", entry.isIntersecting);\r\n      })\r\n   })\r\n\r\n   cards.forEach(card => {\r\n      observer.observe(card)\r\n\r\n   })\r\n}\r\ntech()\r\n\r\n/* || Contacts Block With IntersectionObserver */\r\n\r\nfunction contactsObserve() {\r\n   const cards = document.querySelectorAll(\"[data-contact]\");\r\n\r\n   const observer = new IntersectionObserver(entries => {\r\n      entries.forEach(entry => {\r\n         if (!entry.isIntersecting) return\r\n         entry.target.classList.toggle(\"show\", entry.isIntersecting);\r\n      })\r\n   })\r\n\r\n   cards.forEach(card => {\r\n      observer.observe(card)\r\n\r\n   })\r\n}\r\ncontactsObserve()\r\n\r\n\r\n\r\n/* || NAVBAR */\r\n\r\n/* function naVbarAnim() {\r\n   const liElements = document.querySelectorAll(\"nav li\");\r\n      \r\n   function removeActiveLi() {\r\n      liElements.forEach(elem => elem.classList.remove(\"active\"));\r\n   }\r\n\r\n   function isActive(e) {\r\n      removeActiveLi()\r\n      e.target.classList.add(\"active\")\r\n   }\r\n\r\n   liElements.forEach(element => element.addEventListener(\"click\", isActive))\r\n}\r\n\r\nnaVbarAnim() */\r\n\r\n/* || Switch Between Blocks */\r\n\r\nfunction nextPrevBlocks() {\r\n   const blocks = document.querySelectorAll(\".block\");\r\n   const nextBtn = document.querySelector(\".next\");\r\n   const prevBtn = document.querySelector(\".previous\");\r\n   const liElements = document.querySelectorAll(\"nav li\");\r\n  // const liElementsA = document.querySelectorAll(\"nav li a\");\r\n   /* const img = document.querySelector(\".pictures img\") */\r\n   const imgs = document.querySelectorAll(\".pictures__bg\");\r\n   const nav = document.querySelector(\"nav\");\r\n   const main = document.querySelector(\".home\");\r\n\r\n   const burgerBtn = document.querySelector(\".header__burger\");\r\n\r\n   /* || Burger Button */\r\n   function pressBurgerBtn() {\r\n      nav.classList.toggle(\"active\");\r\n      main.classList.toggle(\"active\");\r\n      document.querySelector(\".header__burger--line-top\").classList.toggle(\"pressed\");\r\n      document.querySelector(\".header__burger--line-centr\").classList.toggle(\"pressed\");\r\n      document.querySelector(\".header__burger--line-bottom\").classList.toggle(\"pressed\");\r\n      if (!main.classList.contains(\"active\")) {\r\n         document.body.style.overflow = \"hidden\";\r\n      } else {\r\n         document.body.style.overflow = \"auto\";\r\n      }\r\n   }\r\n   \r\n   burgerBtn.addEventListener(\"click\", pressBurgerBtn);\r\n\r\n   let i = 0;\r\n\r\n  \r\n\r\n\r\n\r\n   // Background Images On Scroll\r\n   window.addEventListener(\"scroll\", () => {\r\n      let offset = window.scrollY;\r\n      \r\n      if (offset < 600) {\r\n         imgs.forEach(img => {img.classList.remove(\"isActive\")});\r\n         imgs[0].classList.add(\"isActive\");\r\n         liElements.forEach(elem => elem.classList.remove(\"active\"));\r\n         liElements[0].classList.add(\"active\");\r\n\r\n      }\r\n      if (offset > 600) {\r\n         imgs.forEach(img => {img.classList.remove(\"isActive\")});\r\n         imgs[1].classList.add(\"isActive\");\r\n         liElements.forEach(elem => elem.classList.remove(\"active\"));\r\n         liElements[1].classList.add(\"active\");\r\n      }\r\n      if (offset > 1400) {\r\n         imgs.forEach(img => {img.classList.remove(\"isActive\")});\r\n         imgs[2].classList.add(\"isActive\");\r\n         liElements.forEach(elem => elem.classList.remove(\"active\"));\r\n         liElements[2].classList.add(\"active\");\r\n      }\r\n      if (offset > 2000) {\r\n         imgs.forEach(img => {img.classList.remove(\"isActive\")});\r\n         imgs[3].classList.add(\"isActive\");\r\n         liElements.forEach(elem => elem.classList.remove(\"active\"));\r\n         liElements[3].classList.add(\"active\");\r\n      }\r\n    \r\n   })\r\n\r\n   // Previuos Button\r\n   function prevBtnVisability() {\r\n      if (i < 1) {\r\n         prevBtn.setAttribute(\"style\", \"display: none;\")\r\n      } else {\r\n         prevBtn.setAttribute(\"style\", \"display: block;\")\r\n      }\r\n\r\n   }\r\n   prevBtnVisability();\r\n\r\n   // Next Button\r\n   function nextBtnVisability() {\r\n      if (i > 2) {\r\n         nextBtn.setAttribute(\"style\", \"opacity: 0.5\")\r\n      } else {\r\n         nextBtn.setAttribute(\"style\", \"opacity: 1;\")\r\n      }\r\n   }\r\n   nextBtnVisability();\r\n\r\n   // Remove Active Li\r\n   function removeActiveLi() {\r\n      liElements.forEach(elem => elem.classList.remove(\"active\"));\r\n   }\r\n\r\n \r\n\r\n   liElements.forEach((element, index) => {\r\n      element.addEventListener(\"click\", (e) => {\r\n         i = index;\r\n         //console.log(element)\r\n         //pressBurgerBtn() \r\n         if (window.innerWidth <= 800) {\r\n            pressBurgerBtn()\r\n         }\r\n         removeActiveLi();\r\n         e.target.classList.add(\"active\");\r\n         blocks.forEach(block => {block.classList.remove(\"active\")});\r\n         blocks[index].classList.add(\"active\");\r\n         imgs.forEach(img => {img.classList.remove(\"isActive\")});\r\n         imgs[index].classList.add(\"isActive\");\r\n\r\n         prevBtnVisability();\r\n         nextBtnVisability()\r\n      })\r\n   })\r\n\r\n   \r\n   // Next Block\r\n   function nextBlock() {\r\n      i++\r\n      if (i > 3) {\r\n         i = 3;\r\n      }\r\n      //img.src = i === 0 ? \"img/home.webp\" : i === 1 ? \"img/projects.webp\" : i === 2 ? \"img/tech.webp\" : i === 3 ? \"img/contact.webp\" : \"img/home.webp\";\r\n      blocks.forEach(block => {block.classList.remove(\"active\")});\r\n      blocks[i].classList.add(\"active\");\r\n      liElements.forEach(elem => elem.classList.remove(\"active\"));\r\n      liElements[i].classList.add(\"active\");\r\n      imgs.forEach(img => {img.classList.remove(\"isActive\")});\r\n      imgs[i].classList.add(\"isActive\");\r\n      prevBtnVisability();\r\n      nextBtnVisability();\r\n   }\r\n\r\n   // Previous Block\r\n   function prevBlock() {\r\n      i--;\r\n      //img.src = i === 0 ? \"img/home.webp\" : i === 1 ? \"img/projects.webp\" : i === 2 ? \"img/tech.webp\" : i === 3 ? \"img/contact.webp\" : \"img/home.webp\";\r\n      blocks.forEach(block => {block.classList.remove(\"active\")});\r\n      liElements.forEach(elem => elem.classList.remove(\"active\"));\r\n      blocks[i].classList.add(\"active\");\r\n      liElements[i].classList.add(\"active\");\r\n      imgs.forEach(img => {img.classList.remove(\"isActive\")});\r\n      imgs[i].classList.add(\"isActive\");\r\n      prevBtnVisability();\r\n      nextBtnVisability();\r\n   }\r\n\r\n   nextBtn.addEventListener(\"click\", nextBlock)\r\n   prevBtn.addEventListener(\"click\", prevBlock)\r\n\r\n  \r\n\r\n}\r\n\r\nnextPrevBlocks()\n\n//# sourceURL=webpack://web-portfolio/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
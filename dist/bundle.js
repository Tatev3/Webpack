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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthService: () => (/* binding */ AuthService)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nclass AuthService {\n    constructor() { }\n    create({ name, email, password }) {\n        return __awaiter(this, void 0, void 0, function* () { });\n    }\n    login({ email, password }) {\n        return __awaiter(this, void 0, void 0, function* () { });\n    }\n    resetPassword({ email }) {\n        return __awaiter(this, void 0, void 0, function* () { });\n    }\n}\nconst authService = new AuthService();\nauthService.create({\n    name: \"TaTev Karapetyan\",\n    email: \"tatevkarapetyan1291@gmail.com\",\n    password: \"123\"\n});\nauthService.login({\n    email: \"tatevkarapetyan1291@gmail.com\",\n    password: \"123\"\n});\nauthService.resetPassword({\n    email: \"tatevkarapetyan1291@gmail.com\"\n});\nconst todo = {\n    title: \"Clean room\",\n    completed: false,\n    createdAt: 1615544252770,\n};\ntodo;\nconst todoInfo = {\n    title: \"Pick up kids\",\n    description: \"Kindergarten closes at 5pm\",\n};\ntodoInfo;\nconst statusTypes = {\n    not_started: { icon: 'icon-not-started', color: 'gray' },\n    progress: { icon: 'icon-progress', color: 'orange' },\n    completed: { icon: 'icon-completed', color: 'green' },\n    failed: { icon: 'icon-failed', color: 'red' },\n};\nstatusTypes.completed;\nconst user = [\"TaTev\", \"tatevkarapetyan1291@gmail.com\"];\nconsole.log(user);\nconst emp2 = {\n    id: 1,\n    name: 'Tatev',\n    salary: 300,\n};\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
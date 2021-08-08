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

/***/ "./src/docsInitialize.js":
/*!*******************************!*\
  !*** ./src/docsInitialize.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"definitionResponse\": () => (/* binding */ definitionResponse),\n/* harmony export */   \"paths\": () => (/* binding */ paths)\n/* harmony export */ });\n/* harmony import */ var _docs_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs/register */ \"./src/docs/register/index.js\");\n\r\n\r\nconst definitionResponse = {\r\n    ..._docs_register__WEBPACK_IMPORTED_MODULE_0__.default.definationResponse\r\n}\r\nconst paths = {\r\n    ..._docs_register__WEBPACK_IMPORTED_MODULE_0__.default.paths\r\n}\n\n//# sourceURL=webpack://Education_DocumentAPI/./src/docsInitialize.js?");

/***/ }),

/***/ "./src/docs/register/index.js":
/*!************************************!*\
  !*** ./src/docs/register/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst register = {\r\n    paths : {\r\n        \"/api/register/\": {    // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/\r\n            post: {        // Phương thức gửi request: get, post, put, delete\r\n                tags: [\"Authentication\"],\r\n                summary: \"Tạo tài khoản user\",\r\n                description: \"\",\r\n                operationId: \"createNewAdminAccount\",\r\n                consumes: [\"application/json\"],    // Loại dữ liệu gửi đi\r\n                produces: [\"application/json\"],       // Loại dữ liệu trả về\r\n                parameters: [               // Các tham số\r\n                    {\r\n                        \"in\": \"application/json\",      // Tham số được gửi lên từ form\r\n                        \"name\": \"fullname\",    // Tên tham số\r\n                        \"required\": \"true\",    // Tham số là bắt buộc\r\n                        \"schema\": {\r\n                            \"type\": \"string\"   // Loại dữ liệu của tham số là chuỗi\r\n                        },\r\n                        \"description\": \"Họ tên đầy đủ của người dùng\"\r\n                    },\r\n                    {\r\n                        \"in\": \"application/json\",\r\n                        \"name\": \"password\",\r\n                        \"required\": \"true\",\r\n                        \"schema\": {\r\n                            \"type\": \"string\"\r\n                        },\r\n                        \"description\": \"Mật khẩu của người dùng\"\r\n                    },\r\n                    {\r\n                        \"in\": \"application/json\",\r\n                        \"name\": \"email\",\r\n                        \"required\": \"true\",\r\n                        \"schema\": {\r\n                            \"type\": \"string\"\r\n                        },\r\n                        \"description\": \"Email của người dùng\"\r\n                    },\r\n                    {\r\n                        \"in\": \"application/json\",\r\n                        \"name\": \"username\",\r\n                        \"required\": \"true\",\r\n                        \"schema\": {\r\n                            \"type\": \"string\"\r\n                        },\r\n                        \"description\": \"Tên đăng nhập của người dùng\"\r\n                    }\r\n    \r\n                ],\r\n                responses: {\r\n                    \"200:DONE\": {\r\n                        description: \"status: 200 => Tạo thành công\",\r\n                        schema: {\r\n                            $ref: \"#/definitions/register200\"           // Dữ liệu trả về là đói tượng admin (tham chiếu với phần definitions ở cuối)\r\n                        }\r\n                    },\r\n                    \"400:ERROR\": {\r\n                        description: \"status: 400 => Tạo thất bại\",\r\n                        schema: {\r\n                            $ref: \"#/definitions/register400\"           // Dữ liệu trả về là đói tượng admin (tham chiếu với phần definitions ở cuối)\r\n                        }\r\n                    },\r\n                    \"400:ERROR_VALIDATE\": {\r\n                        description: \"status: 400 => Validate dữ liệu body thất bại\",\r\n                        schema: {\r\n                            $ref: \"#/definitions/registerBODY\"           // Dữ liệu trả về là đói tượng admin (tham chiếu với phần definitions ở cuối)\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    },\r\n    // defination response\r\n    definationResponse : {\r\n        register200: {                 // Tên đối tượng\r\n            type: \"object\",         // Loại đối tượng là object\r\n            properties: {           // Các thuộc tính của đối tượng\r\n                message: {                  // Tên thuộc tính\r\n                    type: \"array\",\r\n                    example : \"[]\"    // Loại dữ liệu là số nguyên\r\n                },\r\n                status: {\r\n                    type: \"boolean\",\r\n                    example : true     // Loại dữ liệu là chuỗi\r\n                },\r\n                data: {\r\n                    type: \"string\",\r\n                    example : {\r\n                        _id : \"ID user register\",\r\n                        username : \"username\",\r\n                        email : \"email\"\r\n                    }\r\n                }\r\n            }\r\n        },\r\n        register400: {            \r\n            type: \"object\",       \r\n            properties: {          \r\n                message: {               \r\n                    type: \"array\",\r\n                    example : [\r\n                        'ERROR_SAVE'\r\n                    ]   \r\n                },\r\n                status: {\r\n                    type: \"boolean\",\r\n                    example : false    \r\n                }\r\n            }\r\n        },\r\n        registerBODY: {            \r\n            type: \"object\",       \r\n            properties: {          \r\n                message: {               \r\n                    type: \"array\",\r\n                    example : [\r\n                        'INVALID_DATA'\r\n                    ]   \r\n                },\r\n                status: {\r\n                    type: \"boolean\",\r\n                    example : false    \r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (register);\n\n//# sourceURL=webpack://Education_DocumentAPI/./src/docs/register/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _docsInitialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docsInitialize */ \"./src/docsInitialize.js\");\n\r\n\r\nvar initialize =\r\n{\r\n    swagger: \"2.0\",    // Phiên bản Swagger UI\r\n    info: {\r\n        description:\"Các thông tin mô tả về dự án devchallenge và API\",\r\n        version: \"4.0 PRO\",    // Phiên bản API\r\n        title: \"Devchallenge Project\"\r\n    },\r\n    host: \"localhost:4000\",    // Server và port deploy API\r\n    basePath: \"/\",       // Đường dẫn tới API\r\n    tags: [    // Danh sách các nhóm API: admin, users, images,...\r\n        {\r\n            name: \"Devchallenge API\",                                   // Tên nhóm API\r\n            description: \"Các API của devchallenge\",    // Mô tả về nhóm API\r\n        },\r\n    ],\r\n    schemes: [\"http\"],    // Sử dụng scheme gì? HTTP, HTTPS?\r\n    paths: _docsInitialize__WEBPACK_IMPORTED_MODULE_0__.paths,\r\n    definitions: _docsInitialize__WEBPACK_IMPORTED_MODULE_0__.definitionResponse\r\n};\r\n\r\nwindow.initialize = initialize;\n\n//# sourceURL=webpack://Education_DocumentAPI/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
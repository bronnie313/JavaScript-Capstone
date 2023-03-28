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


/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  border: 1px solid;\\r\\n}\\r\\n\\r\\n.navbar {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  margin: 2% 15%;\\r\\n}\\r\\n\\r\\n.items {\\r\\n  display: flex;\\r\\n  gap: 90px;\\r\\n  list-style: none;\\r\\n  font-size: 100%;\\r\\n  list-style: none;\\r\\n  font-family: 'poppins', sans-serif;\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: black;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  display: flex;\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  border: 1px solid;\\r\\n  padding: 20px;\\r\\n  width: -webkit-fill-available;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://kanban/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://kanban/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://kanban/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ "./src/displayShowsData.js":
/*!*********************************!*\
  !*** ./src/displayShowsData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayShowsData)\n/* harmony export */ });\n/* harmony import */ var _fetchShowsData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchShowsData.js */ \"./src/fetchShowsData.js\");\n\n\nconst display = document.querySelector('.display');\ndisplay.innerHTML = 'Loading...';\n\n// Displays the TV show data in the HTML page\nfunction displayShowsData() {\n  (0,_fetchShowsData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    .then((showDataList) => {\n      // Use the showDataList to display information about each TV show\n      console.log(showDataList);\n\n      // Build the HTML string to display the TV show information\n      let html = '';\n      showDataList.forEach((showData) => {\n        html += '<div>';\n        html += `<h2>${showData.name}</h2>`;\n        html += `<img src=\"${showData.image.medium}\" alt=\"${showData.name}\">`;\n        html += `<p>${showData.summary}</p>`;\n        html += '<div class=\"button-container\">';\n        html += '<button class=\"reservations-button\">Reservations</button>';\n        html += '<button class=\"lie-button\">Lies</button>';\n        html += '</div>';\n        html += '</div>';\n      });\n\n      // Set the innerHTML of the display element to the HTML string\n      display.innerHTML = html;\n\n      // Add event listeners to the lie buttons\n      const lieButtons = document.querySelectorAll('.lie-button');\n      lieButtons.forEach((button) => {\n        button.addEventListener('click', (event) => {\n          const { showId } = button.dataset;\n          console.log(`User clicked lie button for show ID ${showId}`);\n          // Add your code here to handle the lie button click event\n        });\n      });\n\n      // Add event listeners to the reservation buttons\n      const reservationButtons = document.querySelectorAll('.reservation-button');\n      reservationButtons.forEach((button) => {\n        button.addEventListener('click', (event) => {\n          const { showId } = button.dataset;\n          console.log(`User clicked reservation button for show ID ${showId}`);\n          // Add your code here to handle the reservation button click event\n        });\n      });\n    })\n    .catch((error) => {\n      console.error(error);\n    });\n}\n\n\n//# sourceURL=webpack://kanban/./src/displayShowsData.js?");

/***/ }),

/***/ "./src/fetchShowsData.js":
/*!*******************************!*\
  !*** ./src/fetchShowsData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchShowsData)\n/* harmony export */ });\nconst apiKey = '{BSoXkkCLDpXvsVEWmeucPVwel0ajRbUB}'; // Replace with your actual API key\nconst numShows = 100; // Number of shows to retrieve\n\n// Fetches the TV show data and returns a Promise that resolves to an array of show data objects\nfunction fetchShowsData() {\n  return fetch(`https://api.tvmaze.com/shows?page=0&per_page=${numShows}`)\n    .then((response) => {\n      if (response.ok) {\n        // Parse the JSON response\n        return response.json();\n      }\n      throw new Error(`Request failed with status ${response.status}`);\n    })\n    .then((shows) => {\n      // Extract the IDs of the shows\n      const showIds = shows.map((show) => show.id);\n\n      // Make an individual request for each show to retrieve detailed information\n      return Promise.all(showIds.map((id) => {\n        const url = `https://api.tvmaze.com/shows/${id}?embed=cast`;\n        return fetch(url, {\n          headers: {\n            Accept: 'application/json',\n          },\n          params: {\n            apikey: apiKey,\n          },\n        }).then((response) => response.json());\n      }));\n    });\n}\n\n\n//# sourceURL=webpack://kanban/./src/fetchShowsData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayShowsData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayShowsData.js */ \"./src/displayShowsData.js\");\n\n\n(0,_displayShowsData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://kanban/./src/index.js?");

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
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
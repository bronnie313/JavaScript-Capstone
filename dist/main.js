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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-family: 'poppins', sans-serif;\\r\\n  margin-bottom: 50px;\\r\\n}\\r\\n\\r\\n.display {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr 1fr 1fr;\\r\\n}\\r\\n\\r\\n.show-card-header {\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  align-items: center;\\r\\n  gap: 2%;\\r\\n  font-size: 11px;\\r\\n}\\r\\n\\r\\n.button-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin-bottom: 5%;\\r\\n  width: 68%;\\r\\n}\\r\\n\\r\\n.show-card-buttons {\\r\\n  border: 2px solid black;\\r\\n}\\r\\n\\r\\n.like-icon {\\r\\n  max-width: 20px;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  border: 1px solid;\\r\\n}\\r\\n\\r\\n.navbar {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  margin: 0 15%;\\r\\n}\\r\\n\\r\\n.items {\\r\\n  display: flex;\\r\\n  gap: 90px;\\r\\n  list-style: none;\\r\\n  font-size: 100%;\\r\\n  font-family: 'poppins', sans-serif;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: black;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  display: flex;\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  border: 1px solid;\\r\\n  padding-left: 20px;\\r\\n  width: 100%;\\r\\n  color: white;\\r\\n  background-color: seagreen;\\r\\n  font-family: 'Times New Roman', Times, serif;\\r\\n}\\r\\n\\r\\n.comment-popup {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  border-radius: 10px;\\r\\n  padding: 10px;\\r\\n  margin: 4em;\\r\\n  border: 1px solid lightgray;\\r\\n  height: 76vh;\\r\\n  top: 0;\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  right: 0;\\r\\n  left: 0;\\r\\n  background: #fff;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.pop-img {\\r\\n  width: 23%;\\r\\n}\\r\\n\\r\\n.info {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto;\\r\\n  width: 85%;\\r\\n  column-gap: 10px;\\r\\n  padding-left: 60px;\\r\\n}\\r\\n\\r\\n.movie-info {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  width: 50%;\\r\\n  height: 50%;\\r\\n  margin-top: 20px;\\r\\n  margin-bottom: 37px;\\r\\n}\\r\\n\\r\\n#close-button {\\r\\n  position: fixed;\\r\\n  right: 0;\\r\\n  margin-right: 4em;\\r\\n  background: none;\\r\\n  font-size: x-large;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.movie {\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  height: 100vh;\\r\\n  width: 100vw;\\r\\n  background-color: rgba(0, 0, 0, 0.8);\\r\\n}\\r\\n\\r\\n#logo {\\r\\n  width: 92%;\\r\\n}\\r\\n\\r\\n#forest {\\r\\n  margin: 0;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  flex-wrap: wrap;\\r\\n  gap: 5px;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.film-name {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.film {\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.sum {\\r\\n  margin: 2px;\\r\\n  font-size: 12px;\\r\\n  font-family: cursive;\\r\\n  font-weight: 900;\\r\\n  color: lightseagreen;\\r\\n}\\r\\n\\r\\n.summary-text {\\r\\n  margin: 2px;\\r\\n  font-size: 12px;\\r\\n  font-family: cursive;\\r\\n  font-weight: 900;\\r\\n  color: lightseagreen;\\r\\n}\\r\\n\\r\\n.movieName {\\r\\n  margin: 4px;\\r\\n  font-family: cursive;\\r\\n  font-size: 24px;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.comment-popup::-webkit-scrollbar {\\r\\n  width: 10px;\\r\\n}\\r\\n\\r\\n.comment-popup::-webkit-scrollbar-thumb {\\r\\n  background-color: rgb(66, 70, 68);\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\nform > label {\\r\\n  font-size: 18px;\\r\\n  font-family: cursive;\\r\\n  padding-top: 8px;\\r\\n}\\r\\n\\r\\n#submit {\\r\\n  margin-top: 8px;\\r\\n  width: fit-content;\\r\\n  color: hsla(240, 7%, 100%, 1);\\r\\n  padding: 5px;\\r\\n  background: seagreen;\\r\\n  border: none;\\r\\n  border-radius: 5px;\\r\\n  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.8);\\r\\n  align-self: start;\\r\\n}\\r\\n\\r\\nform > input,\\r\\ntextarea {\\r\\n  outline: none;\\r\\n  border: 2px solid hsla(260, 11%, 85%, 1);\\r\\n  border-radius: 4px;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n#chart {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 55%;\\r\\n  padding: 10px;\\r\\n  border: 1px solid lightgray;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.comments-p {\\r\\n  background: hsla(240, 7%, 97%, 1);\\r\\n  margin: 1px;\\r\\n  font-size: 18px;\\r\\n  padding: 5px;\\r\\n  color: hsla(0, 0%, 13%, 1);\\r\\n  border-radius: 5px;\\r\\n  font-family: 'Courier New', Courier, monospace;\\r\\n}\\r\\n\\r\\n#comment-counter {\\r\\n  color: darkslategrey;\\r\\n  font-style: oblique;\\r\\n  margin-bottom: 30px;\\r\\n}\\r\\n\\r\\n.likeBtn {\\r\\n  color: white;\\r\\n  background: black;\\r\\n  border-radius: 6px;\\r\\n}\\r\\n\\r\\n.likeBtn:hover {\\r\\n  border: 1px solid lightgray;\\r\\n  color: black;\\r\\n  background-color: aqua;\\r\\n}\\r\\n\\r\\n.likes-section {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  width: 50%;\\r\\n  margin-top: 10px;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  display: none;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  border-radius: 10px;\\r\\n  padding: 10px;\\r\\n  margin: 4em;\\r\\n  border: 1px solid lightgray;\\r\\n  height: 76vh;\\r\\n  top: 0;\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  right: 0;\\r\\n  left: 0;\\r\\n  background: #fff;\\r\\n  overflow-y: scroll;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.popup.show {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n#reservation-list {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 55%;\\r\\n  padding: 10px;\\r\\n  border: 1px solid lightgray;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.info-ms {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-content: center;\\r\\n  justify-content: center;\\r\\n  width: 100%;\\r\\n  padding: 0 0 10px 0;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#reservation-info {\\r\\n  margin: 0;\\r\\n  padding-top: 10px;\\r\\n  width: 100%;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#close-btn {\\r\\n  position: fixed;\\r\\n  right: 0;\\r\\n  margin-right: 4em;\\r\\n  background: none;\\r\\n  font-size: x-large;\\r\\n  border: none;\\r\\n  top: 80px;\\r\\n}\\r\\n\\r\\n.reserve-show {\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  height: 100vh;\\r\\n  width: 100vw;\\r\\n  background-color: rgba(0, 0, 0, 0.8);\\r\\n}\\r\\n\\r\\n.reserve-show.show {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n#input-form input {\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://kanban/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://kanban/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://kanban/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://kanban/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://kanban/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://kanban/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://kanban/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://kanban/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/displayCommnents.js":
/*!*********************************!*\
  !*** ./src/displayCommnents.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_getComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getComment.js */ \"./src/modules/getComment.js\");\n\n\n// displaying comments\nconst chart = document.getElementById('chart');\nconst commentCounter = document.getElementById('comment-counter');\nconst displayComments = async (id) => {\n  const data = await (0,_modules_getComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id);\n  const length = data?.length ?? 0;\n  if (commentCounter) {\n    commentCounter.innerHTML = `(${length}) comments`;\n  }\n  chart.innerHTML = '';\n  if (!data.error) {\n    data.forEach((comment) => {\n      const li = document.createElement('li');\n      li.className = 'chart-comments';\n      li.innerHTML = `<p class=\"comments-p\">\"${comment.comment}\" By '${comment.username}' on \"${comment.creation_date}\"</p>`;\n      chart.appendChild(li);\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComments);\n\n\n//# sourceURL=webpack://kanban/./src/displayCommnents.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _assets_movie_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/movie.png */ \"./src/assets/movie.png\");\n/* harmony import */ var _modules_addComment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addComment.js */ \"./src/modules/addComment.js\");\n/* harmony import */ var _displayCommnents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayCommnents.js */ \"./src/displayCommnents.js\");\n/* harmony import */ var _modules_addLikes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/addLikes.js */ \"./src/modules/addLikes.js\");\n/* harmony import */ var _modules_reservationAPI_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/reservationAPI.js */ \"./src/modules/reservationAPI.js\");\n\n\n\n\n\n\n\n// import displayShowsData from './displayShowsData.js';\n// import fetchShowsData from './fetchShowsData';\n\n// displayShowsData();\nconst logo = document.getElementById('logo');\nlogo.src = _assets_movie_png__WEBPACK_IMPORTED_MODULE_1__;\n\nconst container = document.getElementById('cont');\ncontainer.appendChild(logo);\n\n// closing the comment section\nconst closeBtn = document.getElementById('close-button');\nconst showMovie = document.getElementById('movie');\n\n// add event Listener to the form\nconst submit = document.querySelector('.submit');\nconst userInput = document.getElementById('user-input');\nconst userComment = document.getElementById('user-comment');\n\ncloseBtn.addEventListener('click', () => {\n  showMovie.style.display = 'none';\n});\n\n// get data from the API\nconst getData = async () => {\n  const res = await fetch('https://api.tvmaze.com/shows');\n  const data = await res.json();\n  return data;\n};\n\n//  get likes\nconst getLikes = async () => {\n  const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ks3kK3cgFuKaK7pMQUGy/likes';\n  const res = await fetch(URL);\n  const data = await res.json();\n  return data;\n};\n\n// display data\nconst forest = document.getElementById('forest');\n\nconst displayData = async () => {\n  const data = await getData();\n  data.forEach((data, i) => {\n    forest.innerHTML += `\n      <div class=\"film\">\n        <img class=\"cinema\" src=${data.image.medium}>\n         <p class=\"film-name\">${data.name}</p>\n        <button class=\"commentBtn\" data-index=\"${i}\">comments</button> \n        <button class=\"reservBtn\" data-index=\"${i}\">reservation</button>\n        <div class=\"likes-section\"><button class=\"likeBtn\" data-index=\"${i}\">Likes</button><div id=\"noLike\"></div></div>\n        <i class=\"fa-regular fa-heart\"></i>\n      </div>\n    `;\n    // displaying likes\n    const displayLikes = async () => {\n      if (!data.error) {\n        const data = await getLikes();\n        const noLikeDiv = document.querySelectorAll('#noLike')[i];\n        noLikeDiv.innerHTML = `${data[i].likes} likes`;\n      }\n    };\n    displayLikes();\n  });\n};\n\ndisplayData();\n\nforest.addEventListener('click', async (event) => {\n  if (event.target.classList.contains('commentBtn')) {\n    const index = parseInt(event.target.dataset.index, 10);\n    const data = await getData();\n    const selectedMovie = data[index];\n    const movieInfo = document.getElementById('movie-info');\n    movieInfo.innerHTML = `\n      <img class=\"pop-img\" src=${selectedMovie.image.medium}>\n      <p class=\"movieName\">${selectedMovie.name}</p>\n      <div class=\"info\">\n        <p class=\"sum\">LANGUAGE: ${selectedMovie.language}</p>\n        <p class=\"sum\">STATUS: ${selectedMovie.status}</p>\n        <p class=\"sum\">PREMIERED: ${selectedMovie.premiered}</p>\n        <p class=\"sum\">ENDED: ${selectedMovie.ended}</p>\n      </div>\n    `;\n    const showMovie = document.getElementById('movie');\n    showMovie.style.display = 'block';\n    (0,_displayCommnents_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(selectedMovie.id);\n\n    submit.addEventListener('click', async (e) => {\n      e.preventDefault();\n      await (0,_modules_addComment_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(selectedMovie.id, userInput.value, userComment.value);\n      userComment.value = '';\n      userInput.value = '';\n      (0,_displayCommnents_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(selectedMovie.id);\n    });\n  }\n\n  // check if the clicked element is a reservation button\n  if (event.target.classList.contains('reservBtn')) {\n    const index = parseInt(event.target.dataset.index, 10);\n    const data = await getData();\n    const selected = data[index];\n    const moviedetails = document.getElementById('reservation-info');\n    moviedetails.innerHTML = `\n      <img class=\"pop-img\" src=${selected.image.medium}>\n      <p class=\"movieName\">${selected.name}</p>\n      <div class=\"info-ms\">\n        <p class=\"sum\">LANGUAGE: ${selected.language}</p>\n        <p class=\"sum\">STATUS: ${selected.status}</p>\n        <p class=\"sum\">PREMIERED: ${selected.premiered}</p>\n        <p class=\"sum\">ENDED: ${selected.ended}</p>\n        <br>\n        <br>\n        <p class=\"sum\">SUMMARY:</p>\n        <div class=\"summary-text\">${selected.summary}</div>\n        <button id=\"close-btn\">x</button>\n        <ul id=\"reservation-list\"></ul>\n        <form class=\"form\" id='input-form'>\n          <h3>Add a reservation</h3>\n          <input type=\"text\" id=\"user\" name=\"username\" required placeholder=\"Your Name\"/>\n          <input type=\"text\" id=\"startdate\" name=\"startdate\" placeholder=\"Start date\" required>\n          <input type=\"text\" id=\"enddate\" name=\"enddate\" placeholder=\"End date\" required>\n          <button class=\"submit\" id=\"submit\" data-index=\"${selected.id}\" type=\"submit\">Reserve</button>\n        </form>\n      </div>\n    `;\n    const user = document.getElementById('user');\n    const startdate = document.getElementById('startdate');\n    const enddate = document.getElementById('enddate');\n    const reservBtn = document.querySelector('#reservation-info .submit');\n    reservBtn.dataset.index = selected.id;\n    reservBtn.addEventListener('click', async (e) => {\n      e.preventDefault();\n      await (0,_modules_reservationAPI_js__WEBPACK_IMPORTED_MODULE_5__.addReservation)(selected.id, user.value, startdate.value, enddate.value);\n      user.value = '';\n      startdate.value = '';\n      enddate.value = '';\n      (0,_modules_reservationAPI_js__WEBPACK_IMPORTED_MODULE_5__.displayReservations)(selected.id);\n    });\n    (0,_modules_reservationAPI_js__WEBPACK_IMPORTED_MODULE_5__.displayReservations)(selected.id);\n    const closeButton = document.getElementById('close-btn');\n    const reservePopup = document.getElementById('reservation-popup');\n    reservePopup.classList.add('show');\n    const reservesection = document.getElementById('reserve-section');\n    reservesection.classList.add('show');\n    closeButton.addEventListener('click', () => {\n      reservePopup.classList.remove('show');\n      reservesection.classList.remove('show');\n    });\n  }\n\n  // check if the clicked element is a clicked button at the right index\n  if (event.target.classList.contains('likeBtn')) {\n    const index = parseInt(event.target.dataset.index, 10);\n    const data = await getData();\n    const selectedMovie = data[index];\n    // console.log(selectedMovie.id)\n    await (0,_modules_addLikes_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(selectedMovie.id);\n    // displayLikes(selectedMovie.id);\n  }\n});\n\n\n//# sourceURL=webpack://kanban/./src/index.js?");

/***/ }),

/***/ "./src/modules/addComment.js":
/*!***********************************!*\
  !*** ./src/modules/addComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Adding comment\n\nconst addComment = async (id, username, comment) => {\n  const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RaFwCQaj74dsBIFihdqp/comments',\n    {\n      method: 'POST',\n      headers: {\n        'content-type': 'application/json',\n      },\n      body: JSON.stringify({\n        item_id: id,\n        username,\n        comment,\n      }),\n    });\n  return res;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);\n\n//# sourceURL=webpack://kanban/./src/modules/addComment.js?");

/***/ }),

/***/ "./src/modules/addLikes.js":
/*!*********************************!*\
  !*** ./src/modules/addLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Adding likes\nconst addLike = async (id) => {\n  const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ks3kK3cgFuKaK7pMQUGy/likes',\n    {\n      method: 'POST',\n      headers: {\n        'content-type': 'application/json',\n      },\n      body: JSON.stringify({\n        item_id: id,\n      }),\n    });\n  return res;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLike);\n\n//# sourceURL=webpack://kanban/./src/modules/addLikes.js?");

/***/ }),

/***/ "./src/modules/getComment.js":
/*!***********************************!*\
  !*** ./src/modules/getComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// getting comments\nconst getComment = async (id) => {\n  const URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RaFwCQaj74dsBIFihdqp/comments?item_id=${id}`;\n  const res = await fetch(URL,\n    {\n      method: 'GET',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    });\n  const data = await res.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComment);\n\n\n//# sourceURL=webpack://kanban/./src/modules/getComment.js?");

/***/ }),

/***/ "./src/modules/reservationAPI.js":
/*!***************************************!*\
  !*** ./src/modules/reservationAPI.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addReservation\": () => (/* binding */ addReservation),\n/* harmony export */   \"displayReservations\": () => (/* binding */ displayReservations),\n/* harmony export */   \"getReservations\": () => (/* binding */ getReservations)\n/* harmony export */ });\nconst getReservations = async (id) => {\n  try {\n    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kMfZtpBsA8ykWcn9ZrZx/reservations?item_id=${id}`, {\n      method: 'GET',\n      headers: {\n        'Content-type': 'application/json',\n      },\n    });\n    const data = await response.json();\n    console.log('Data from API:', data);\n\n    return data;\n  } catch (error) {\n    console.error('Error fetching reservations:', error);\n    return null;\n  }\n};\n\nconst displayReservations = async (id) => {\n  const data = await getReservations(id);\n  console.log('Data from getReservations:', data);\n  const scoreboard = document.getElementById('reservation-list');\n  scoreboard.innerHTML = '';\n  const header = document.createElement('h3');\n  header.textContent = `Reservations${data.length ? ` (${data.length})` : ''}`;\n  scoreboard.appendChild(header);\n  if (!data.error) {\n    data.forEach((reservation) => {\n      const li = document.createElement('li');\n      li.classList.add('reserve-list');\n      li.textContent = `${reservation.date_start}  -  ${reservation.date_end} by ${reservation.username}`;\n      scoreboard.appendChild(li);\n    });\n  }\n};\n\nconst addReservation = async (id, username, datestart, dateend) => {\n  const formattedStartDate = new Date(datestart).toISOString();\n  const formattedEndDate = new Date(dateend).toISOString();\n\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kMfZtpBsA8ykWcn9ZrZx/reservations/', {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: id,\n      username,\n      date_start: formattedStartDate,\n      date_end: formattedEndDate,\n    }),\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n  console.log('Response from API:', response);\n\n  return response;\n};\n\n\n\n\n//# sourceURL=webpack://kanban/./src/modules/reservationAPI.js?");

/***/ }),

/***/ "./src/assets/movie.png":
/*!******************************!*\
  !*** ./src/assets/movie.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/movie.4e71d18801d6b5413852.png\";\n\n//# sourceURL=webpack://kanban/./src/assets/movie.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
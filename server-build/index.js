/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common/scenes/Welcome.js":
/*!**********************************!*\
  !*** ./common/scenes/Welcome.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Welcome = () => {\n  render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"loadingWheelContainer\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Loading\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"loadingWheel\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"message\"\n  }, 'test')));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Welcome);\n\n//# sourceURL=webpack:///./common/scenes/Welcome.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _src_store_configureStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/store/configureStore */ \"./src/store/configureStore.js\");\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n/* harmony import */ var _common_scenes_Welcome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/scenes/Welcome */ \"./common/scenes/Welcome.js\");\n\n\n\n\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('./build'));\napp.get('/*', render);\n\nfunction render(req, res) {\n  const name = 'hi'; // Create the Redux store\n\n  const store = Object(_src_store_configureStore__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(); // The initial state has been prepared, and we can render the initial html\n  //() => {\n\n  const component = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    name: name\n  })));\n  /*const html = `\n  <!doctype html>\n    <html>\n    <head>\n      <script>window.__INITIAL__DATA__ = ${JSON.stringify({ name })}</script>\n      <script>window.__PRELOADED_STATE__ = ${JSON.stringify({store})}</script>\n    </head>\n    <body>\n    <div id=\"root\">${component}</div>\n    <script src=\"/static/home.js\"></script>\n  </body>\n  </html>`*/\n  // Grab the initial state from our Redux store\n\n  const preloadedState = store.getState(); //res.writeHead(200, { \"Content-Type\": \"text/html\"});\n  //res.end(html);\n  //}\n  // Send the rendered page back to the client\n\n  res.send(renderFullPage(component, preloadedState));\n\n  function renderFullPage(html, preloadedState) {\n    return \"\\n      <!doctype html>\\n      <html>\\n        <head>\\n        <script>window.__INITIAL__DATA__ = \".concat(JSON.stringify({\n      name\n    }), \"</script>\\n        <script>\\n          // WARNING: See the following for security issues around embedding JSON in HTML:\\n          // http://redux.js.org/recipes/ServerRendering.html#security-considerations\\n          window.__PRELOADED_STATE__ = \").concat(JSON.stringify(preloadedState).replace(/</g, '\\\\u003c'), \"\\n        </script>\\n          <title>Redux Universal Example</title>\\n        </head>\\n        <body>\\n          <div id=\\\"root\\\">\").concat(html, \"</div>\\n          <script src=\\\"/static/bundle.js\\\"></script>\\n        </body>\\n      </html>\\n      \");\n  }\n}\n\napp.listen(PORT, () => {\n  console.log(\"\\uD83D\\uDE0E Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Home */ \"./src/components/Home.js\");\n\n\n\nconst App = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Hello, \", props.name, \"!\"));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/actions/ActionTypes.js":
/*!************************************!*\
  !*** ./src/actions/ActionTypes.js ***!
  \************************************/
/*! exports provided: SELECT_LOGIN, SELECT_SIGNUP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SELECT_LOGIN\", function() { return SELECT_LOGIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SELECT_SIGNUP\", function() { return SELECT_SIGNUP; });\nconst SELECT_LOGIN = 'SELECT_LOGIN';\nconst SELECT_SIGNUP = 'SELECT_SIGNUP';\n\n//# sourceURL=webpack:///./src/actions/ActionTypes.js?");

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (props => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Hello \", props.name, \"!\");\n});\n\n//# sourceURL=webpack:///./src/components/Home.js?");

/***/ }),

/***/ "./src/reducers/WelcomeFormReducers.js":
/*!*********************************************!*\
  !*** ./src/reducers/WelcomeFormReducers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/ActionTypes */ \"./src/actions/ActionTypes.js\");\n\nconst initialState = {\n  login: false\n};\n\nconst selectAuth = (state = initialState, action) => {\n  switch (action.type) {\n    case _actions_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"SELECT_LOGIN\"]:\n      {\n        return {\n          login: true\n        };\n      }\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (selectAuth);\n\n//# sourceURL=webpack:///./src/reducers/WelcomeFormReducers.js?");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _WelcomeFormReducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WelcomeFormReducers */ \"./src/reducers/WelcomeFormReducers.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n\n // Each reducer corresponds to a slice of the state\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  // Equivalent to returning authInfo: authInfo(state.authInfo, action)\n  selectAuth: _WelcomeFormReducers__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n//# sourceURL=webpack:///./src/reducers/index.js?");

/***/ }),

/***/ "./src/store/configureStore.js":
/*!*************************************!*\
  !*** ./src/store/configureStore.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ \"./src/reducers/index.js\");\n\n\n\n\nconst configureStore = () =>\n/*preRenderState*/\n{\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], //preRenderState,\n  Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n  return store;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (configureStore);\n\n//# sourceURL=webpack:///./src/store/configureStore.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });
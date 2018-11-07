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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/palettes/Map.json":
/*!*******************************!*\
  !*** ./src/palettes/Map.json ***!
  \*******************************/
/*! exports provided: height, infinite, layers, nextlayerid, nextobjectid, orientation, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

eval("module.exports = {\"height\":24,\"infinite\":false,\"layers\":[{\"data\":[1,2,2,2,3,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,1,2,2,2,3,7,7,1,2,2,2,3,7,7,7,7,7,7,7,7,7,7,7,1,2,2,2,2,2,2,2,2,3,7,7,7,7,1,2,2,2,3,6,14,15,15,8,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,6,14,15,15,8,7,7,6,14,15,15,8,7,7,7,7,7,7,7,7,7,7,7,6,14,15,15,15,15,15,15,15,8,7,7,7,7,6,14,15,15,8,6,19,20,20,16,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,18,20,20,20,8,7,7,6,19,20,20,8,7,7,7,7,7,7,7,7,7,7,7,6,19,20,20,20,20,20,20,20,16,17,17,17,17,18,20,20,20,8,6,19,20,20,8,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,6,19,20,20,8,7,7,6,19,20,20,5,2,2,3,7,7,7,1,2,2,2,2,4,19,20,20,20,20,20,20,20,8,7,7,7,7,6,19,20,20,8,11,12,21,12,13,7,7,7,7,7,7,7,7,7,7,7,7,7,7,1,2,2,4,19,20,20,8,7,7,6,19,20,20,15,15,15,8,7,7,7,6,14,15,15,15,15,20,20,20,10,12,12,21,12,13,7,7,7,7,11,12,21,12,13,7,7,22,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,6,14,15,15,20,20,20,8,7,7,6,19,20,20,20,20,20,16,17,17,17,18,20,20,20,20,20,20,20,20,8,7,7,22,7,7,7,7,7,7,7,7,22,7,7,7,7,22,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,6,19,20,20,20,20,20,8,7,7,6,19,20,20,20,20,20,8,7,7,7,6,19,20,20,20,20,20,20,20,8,7,7,22,7,7,7,7,7,7,7,7,22,7,7,1,2,23,2,2,2,2,3,7,7,7,7,7,7,7,7,7,7,7,6,19,20,20,20,20,20,8,7,7,6,19,20,20,10,12,12,13,7,7,7,11,12,21,12,12,12,12,12,12,13,7,7,22,7,7,7,7,7,7,7,7,22,7,7,6,14,20,15,15,15,15,8,7,7,7,7,7,7,7,7,7,7,7,6,19,20,20,10,12,12,13,7,7,6,19,20,20,8,7,7,7,7,7,7,7,7,22,7,7,7,7,7,7,7,7,7,22,7,7,7,7,7,7,1,2,23,2,3,6,19,20,20,20,20,20,8,7,7,7,7,7,7,7,7,7,7,7,6,19,20,20,8,7,7,7,7,7,6,19,20,20,8,7,7,7,7,7,7,7,7,22,7,7,7,7,7,7,7,7,7,22,7,7,7,7,7,7,6,14,20,15,8,6,19,20,20,20,20,20,8,7,7,7,7,7,7,7,7,1,2,2,4,19,20,20,5,2,2,2,2,2,4,19,20,20,5,2,2,3,7,7,7,7,7,22,7,7,7,7,7,7,7,1,2,23,2,3,7,7,7,7,6,19,20,20,8,11,12,12,9,19,20,20,8,7,7,7,7,7,7,7,7,6,14,15,15,20,20,20,15,15,15,15,15,15,15,20,20,20,15,15,15,8,7,7,7,7,7,22,7,7,7,7,7,7,7,6,14,20,15,8,7,7,7,7,6,19,20,20,8,7,7,7,6,19,20,20,16,17,17,17,17,17,17,17,17,18,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,8,7,7,7,7,7,22,7,7,7,7,7,7,7,6,19,20,20,8,7,7,7,7,11,12,21,12,13,1,2,2,4,19,20,20,8,7,7,7,7,7,7,7,7,6,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,8,7,7,7,1,2,23,2,3,7,7,7,7,7,6,19,20,20,8,7,7,7,7,7,7,22,7,7,6,14,15,15,20,20,20,8,7,7,7,7,7,7,7,7,11,12,21,12,12,12,12,9,19,20,20,20,20,20,10,12,9,19,20,20,8,7,7,7,6,14,20,15,8,7,7,7,7,7,6,19,20,20,8,7,7,7,7,7,7,22,7,7,6,19,20,20,20,20,20,8,7,7,7,7,7,7,7,7,7,7,22,7,7,7,7,6,19,20,20,20,20,20,8,7,6,19,20,20,16,17,17,17,18,20,20,20,8,7,7,7,7,7,6,19,20,20,8,7,7,7,7,7,7,22,7,7,6,19,20,20,20,20,20,8,7,7,7,7,7,7,7,7,7,7,22,7,7,7,7,6,19,20,20,20,20,20,8,7,6,19,20,20,8,7,7,7,6,19,20,20,8,7,7,7,7,7,6,19,20,20,8,7,7,7,7,1,2,23,2,3,11,12,21,12,12,12,12,13,7,7,7,7,7,7,7,7,7,7,22,7,7,7,7,11,12,12,9,19,20,20,8,7,11,12,12,12,13,7,7,7,6,19,20,20,8,7,7,7,7,7,6,19,20,20,8,7,7,7,7,6,14,20,15,8,7,7,22,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,22,7,7,7,7,7,7,7,6,19,20,20,8,7,7,7,7,7,7,7,7,7,6,19,20,20,8,7,7,7,7,7,6,19,20,20,8,7,7,7,7,6,19,20,20,8,1,2,23,2,3,7,7,7,7,7,7,7,7,7,7,7,1,2,23,2,3,7,7,1,2,2,4,19,20,20,5,2,2,3,7,7,7,7,7,7,6,19,20,20,5,2,2,2,2,2,4,19,20,20,5,2,2,2,2,4,19,20,20,8,6,14,20,15,8,7,7,7,7,7,7,7,7,7,7,7,6,14,20,15,8,7,7,6,14,15,15,20,20,20,15,15,15,8,7,7,7,7,7,7,6,19,20,20,15,15,15,15,15,15,15,20,20,20,15,15,15,15,15,15,20,20,20,8,6,19,20,20,16,17,17,17,17,17,17,17,17,17,17,17,18,20,20,20,16,17,17,18,20,20,20,20,20,20,20,20,20,16,17,17,17,17,17,17,18,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,8,6,19,20,20,8,7,7,7,7,7,7,7,7,7,7,7,6,19,20,20,8,7,7,6,19,20,20,20,20,20,20,20,20,8,7,7,7,7,7,7,6,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,8,11,12,12,12,13,7,7,7,7,7,7,7,7,7,7,7,11,12,12,12,13,7,7,11,12,12,12,12,12,12,12,12,12,13,7,7,7,7,7,7,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13],\"height\":24,\"id\":1,\"name\":\"Base\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":64,\"x\":0,\"y\":0}],\"nextlayerid\":2,\"nextobjectid\":1,\"orientation\":\"orthogonal\",\"renderorder\":\"right-down\",\"tiledversion\":\"1.2.0\",\"tileheight\":32,\"tilesets\":[{\"columns\":0,\"firstgid\":1,\"grid\":{\"height\":1,\"orientation\":\"orthogonal\",\"width\":1},\"margin\":0,\"name\":\"WoodenFort\",\"spacing\":0,\"tilecount\":23,\"tileheight\":32,\"tiles\":[{\"id\":1,\"image\":\"../tiles/woodenfort-fort-tl.png\",\"imageheight\":32,\"imagewidth\":32,\"properties\":[{\"name\":\"solid\",\"type\":\"bool\",\"value\":true}]},{\"id\":2,\"image\":\"../tiles/woodenfort-fort-tm.png\",\"imageheight\":32,\"imagewidth\":32,\"properties\":[{\"name\":\"solid\",\"type\":\"bool\",\"value\":true}]},{\"id\":3,\"image\":\"../tiles/woodenfort-fort-tr.png\",\"imageheight\":32,\"imagewidth\":32,\"properties\":[{\"name\":\"solid\",\"type\":\"bool\",\"value\":true}]},{\"id\":4,\"image\":\"../tiles/woodenfort-fort-clt.png\",\"imageheight\":32,\"imagewidth\":32,\"properties\":[{\"name\":\"solid\",\"type\":\"bool\",\"value\":true}]},{\"id\":5,\"image\":\"../tiles/woodenfort-fort-crt.png\",\"imageheight\":32,\"imagewidth\":32,\"properties\":[{\"name\":\"solid\",\"type\":\"bool\",\"value\":true}]},{\"id\":6,\"image\":\"../tiles/woodenfort-fort-ml.png\",\"imageheight\":32,\"imagewidth\":32,\"properties\":[{\"name\":\"solid\",\"type\":\"bool\",\"value\":true}]},{\"id\":7,\"image\":\"../tiles/woodenfort-empty.png\",\"imageheight\":32,\"imagewidth\":32,\"properties\":[{\"name\":\"solid\",\"type\":\"bool\",\"value\":true}]},{\"id\":8,\"image\":\"../tiles/woodenfort-fort-mr.png\",\"imageheight\":32,\"imagewidth\":32,\"properties\":[{\"name\":\"solid\",\"type\":\"bool\",\"value\":true}]},{\"id\":9,\"image\":\"../tiles/woodenfort-fort-cld.png\",\"imageheight\":32,\"imagewidth\":32,\"properties\":[{\"name\":\"solid\",\"type\":\"bool\",\"value\":true}]},{\"id\":10,\"image\":\"../tiles/woodenfort-fort-crb.png\",\"imageheight\":32,\"imagewidth\":32,\"properties\":[{\"name\":\"solid\",\"type\":\"bool\",\"value\":true}]},{\"id\":11,\"image\":\"../tiles/woodenfort-fort-bl.png\",\"imageheight\":32,\"imagewidth\":32,\"properties\":[{\"name\":\"solid\",\"type\":\"bool\",\"value\":true}]},{\"id\":12,\"image\":\"../tiles/woodenfort-fort-bm.png\",\"imageheight\":32,\"imagewidth\":32,\"properties\":[{\"name\":\"solid\",\"type\":\"bool\",\"value\":true}]},{\"id\":13,\"image\":\"../tiles/woodenfort-fort-br.png\",\"imageheight\":32,\"imagewidth\":32,\"properties\":[{\"name\":\"solid\",\"type\":\"bool\",\"value\":true}]},{\"id\":14,\"image\":\"../tiles/woodenfort-fort-floor-ilts.png\",\"imageheight\":32,\"imagewidth\":32,\"properties\":[{\"name\":\"solid\",\"type\":\"bool\",\"value\":false}]},{\"id\":15,\"image\":\"../tiles/woodenfort-fort-floor-its.png\",\"imageheight\":32,\"imagewidth\":32,\"properties\":[{\"name\":\"solid\",\"type\":\"bool\",\"value\":false}]},{\"id\":16,\"image\":\"../tiles/woodenfort-bridge-el.png\",\"imageheight\":32,\"imagewidth\":32,\"properties\":[{\"name\":\"solid\",\"type\":\"bool\",\"value\":false}]},{\"id\":17,\"image\":\"../tiles/woodenfort-bridge-h.png\",\"imageheight\":32,\"imagewidth\":32,\"properties\":[{\"name\":\"solid\",\"type\":\"bool\",\"value\":false}]},{\"id\":18,\"image\":\"../tiles/woodenfort-bridge-er.png\",\"imageheight\":32,\"imagewidth\":32,\"properties\":[{\"name\":\"solid\",\"type\":\"bool\",\"value\":false}]},{\"id\":19,\"image\":\"../tiles/woodenfort-fort-floor-ils.png\",\"imageheight\":32,\"imagewidth\":32,\"properties\":[{\"name\":\"solid\",\"type\":\"bool\",\"value\":false}]},{\"id\":20,\"image\":\"../tiles/woodenfort-fort-floor-ins.png\",\"imageheight\":32,\"imagewidth\":32,\"properties\":[{\"name\":\"solid\",\"type\":\"bool\",\"value\":false}]},{\"id\":21,\"image\":\"../tiles/woodenfort-bridge-et.png\",\"imageheight\":32,\"imagewidth\":32,\"properties\":[{\"name\":\"solid\",\"type\":\"bool\",\"value\":false}]},{\"id\":22,\"image\":\"../tiles/woodenfort-bridge-v.png\",\"imageheight\":32,\"imagewidth\":32,\"properties\":[{\"name\":\"solid\",\"type\":\"bool\",\"value\":false}]},{\"id\":23,\"image\":\"../tiles/woodenfort-bridge-eb.png\",\"imageheight\":32,\"imagewidth\":32,\"properties\":[{\"name\":\"solid\",\"type\":\"bool\",\"value\":false}]}],\"tilewidth\":32}],\"tilewidth\":32,\"type\":\"map\",\"version\":1.2,\"width\":64};\n\n//# sourceURL=webpack:///./src/palettes/Map.json?");

/***/ }),

/***/ "./src/scripts/camera.js":
/*!*******************************!*\
  !*** ./src/scripts/camera.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Camera; });\n\r\n/** Boundary on screen to start follow player when moving beyond */\r\nconst FOLLOW_BOUNDARY = 0.2\r\n\r\n/** Color used for background rendering */\r\nconst BACKGROUND_COLOR = \"blue\"\r\n\r\n/** @module Camera\r\n * A class representing game camera\r\n */\r\nclass Camera {\r\n\r\n    constructor(width, height, offset) {\r\n        this.width = width\r\n        this.height = height\r\n\r\n        this.offset = offset\r\n        this.target = null\r\n\r\n        this.layers = []\r\n    }\r\n\r\n    /** @method bindTo\r\n     * Binds camera to follow specified target\r\n     * @param {Object} target - target object to follow\r\n     */\r\n    bindTo(target) {\r\n        this.target = target\r\n    }\r\n\r\n    /** @method addLayer\r\n     * Adds next layer to be rendered on top of all the others\r\n     * @param {Canvas} canvas - reference to canvas which content will get rendered\r\n     * @param {float} speed - speed at which this layer will move (1 equals to speed of tracked object)\r\n     * @param {int} offset - basic offset of displayed layer\r\n     */\r\n    addLayer(canvas, speed, offset) {\r\n        this.layers.push( { canvas: canvas, speed: speed, offset: offset } )\r\n    }\r\n\r\n    /** @method render\r\n     * Renders all layers using given context\r\n     * @param {2DContext} context - context to render layers onto\r\n     */\r\n    render(context) {\r\n        context.fillStyle = BACKGROUND_COLOR\r\n        context.fillRect( 0, 0, this.width, this.height )\r\n\r\n        this.layers.forEach( layer => {\r\n            context.drawImage( layer.canvas, layer.offset, 0 )\r\n        })\r\n    }\r\n\r\n    /** @method update\r\n     * Allows camera to react to changes in game\r\n     * @param {float} deltaT - time elapsed in between last two frames\r\n     */\r\n    update(deltaT) {\r\n        var deltaX = this.computeDeltaX( deltaT )\r\n\r\n        this.offset += deltaX\r\n        this.layers.forEach( layer => {\r\n            layer.offset -= layer.speed * deltaX\r\n        })\r\n    }\r\n\r\n    /** @method computeDeltaX\r\n     * Computes number of pixels the main camera should move\r\n     * @param {float} deltaT - time elapsed in between last two frames\r\n     */\r\n    computeDeltaX(deltaT) {\r\n        if( !this.target ) {\r\n            return 0.0\r\n        }\r\n\r\n        var cameraX = this.target.x - this.offset\r\n        var leftBoundary = this.width * FOLLOW_BOUNDARY\r\n        var rightBoundary = this.width * (1 - FOLLOW_BOUNDARY)\r\n\r\n        if( cameraX < leftBoundary ) {\r\n            return cameraX - leftBoundary\r\n        }\r\n\r\n        if( cameraX > rightBoundary ) {\r\n            return cameraX - rightBoundary\r\n        }\r\n\r\n        return 0.0\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/scripts/camera.js?");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ \"./src/scripts/input.js\");\n/* harmony import */ var _gameMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameMap */ \"./src/scripts/gameMap.js\");\n/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camera */ \"./src/scripts/camera.js\");\n\r\n\r\n\r\n\r\n/** @class Game\r\n  * A class representing the high-level functionality\r\n  * of a game - the game loop, buffer swapping, etc.\r\n  */\r\nclass Game {\r\n\r\n    /** @constructor\r\n     * Creates the game instance\r\n     * @param {integer} width - the width of the game screen in pixels\r\n     * @param {integer} heght - the height of the game screen in pixels\r\n     */\r\n    constructor(width, height) {\r\n      this.frameStart = null\r\n\r\n        this.width = width\r\n        this.height = height\r\n\r\n        this.input = new _input__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\r\n        this.entities = []\r\n\r\n        var mapFile = __webpack_require__( /*! ../palettes/Map.json */ \"./src/palettes/Map.json\" )\r\n        this.map = _gameMap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].parseMap( mapFile )\r\n\r\n        this.camera = new _camera__WEBPACK_IMPORTED_MODULE_2__[\"default\"]( width, height, 0 )\r\n\r\n        // Set up the back buffer\r\n        this.backBuffer = document.createElement( 'canvas' )\r\n        this.backBuffer.width = this.map.width * this.map.tileWidth\r\n        this.backBuffer.height = this.map.height * this.map.tileHeight\r\n        this.backBufferCtx = this.backBuffer.getContext( '2d' )\r\n        this.camera.addLayer( this.backBuffer, 1, 0 )\r\n\r\n        // Set up the screen buffer\r\n        this.screenBuffer = document.createElement( 'canvas' )\r\n        this.screenBuffer.width = this.width\r\n        this.screenBuffer.height = this.height\r\n        this.screenBufferCtx = this.screenBuffer.getContext( '2d' )\r\n\r\n        document.body.append( this.screenBuffer )\r\n    }\r\n\r\n    /** @method setCameraTracking\r\n     * Binds camera to given target object\r\n     * @param {Object} target - target for camera to follow\r\n     */\r\n    setCameraTracking(target) {\r\n        this.camera.bindTo( target )\r\n    }\r\n\r\n    /** @method addEntity\r\n     * Adds an entity to the game world. Entities should have an update() and render() method\r\n     * @param {Object} entity - the entity to be added\r\n     */\r\n    addEntity(entity) {\r\n        this.entities.push( entity )\r\n    }\r\n\r\n    /** @method update\r\n     * Updates the game state\r\n     * @param {integer} elapsedTime - the number of milliseconds per frame\r\n     */\r\n    update(elapsedTime) {\r\n        this.entities.forEach( entity => entity.update( elapsedTime, this.input, this.map ) )\r\n\r\n        this.input.update()\r\n        this.camera.update()\r\n    }\r\n\r\n    /** @method render\r\n     * Renders the game state\r\n     * @param {integer} elapsedTime - the number of milliseconds per frame\r\n     */\r\n    render(elapsedTime) {\r\n        this.backBufferCtx.clearRect( 0, 0, this.map.width * this.map.tileWidth, this.map.height * this.map.tileHeight )\r\n\r\n        this.map.render( this.backBufferCtx, 0, 0 )\r\n        this.entities.forEach( entity => entity.render( elapsedTime, this.backBufferCtx ) )\r\n\r\n        //this.screenBufferCtx.drawImage( this.backBuffer, 0, 0 )\r\n        this.camera.render( this.screenBufferCtx )\r\n    }\r\n\r\n    /** @method loop\r\n     * Updates and renders the game and calls itself on the next draw cycle.\r\n     * @param {DOMHighResTimestamp} timestamp - the current system time\r\n     */\r\n    loop(timestamp) {\r\n        var elapsedTime = this.frameStart ? timestamp - this.frameStart : 0\r\n\r\n        this.update( elapsedTime )\r\n        this.render( elapsedTime )\r\n\r\n        this.frameStart = timestamp\r\n\r\n        window.requestAnimationFrame( timestamp => {\r\n            this.loop( timestamp )\r\n        })\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/scripts/game.js?");

/***/ }),

/***/ "./src/scripts/gameMap.js":
/*!********************************!*\
  !*** ./src/scripts/gameMap.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameMap; });\n/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ \"./src/scripts/tile.js\");\n\r\n\r\n/** @module GameMap\r\n * Class representing optimized array of tiles\r\n */\r\nclass GameMap {\r\n\r\n    /** @static @method parseMap\r\n     * Parses map from given Tiled JSON object\r\n     * @param {JSON} mapJSON - JSON object to be parsed\r\n     */\r\n    static parseMap(mapJSON) {\r\n        var width = mapJSON.width\r\n        var height = mapJSON.height\r\n\r\n        var tileWidth = mapJSON.tilewidth\r\n        var tileHeight = mapJSON.tileheight\r\n\r\n        var tiles = Int8Array.from( mapJSON.layers[0].data )\r\n\r\n        var tileTemplates = {}\r\n        mapJSON.tilesets[0].tiles.forEach( tileJSON => {\r\n            var tile = _tile__WEBPACK_IMPORTED_MODULE_0__[\"default\"].parseTile( tileJSON )\r\n            tileTemplates[tile.id] = tile\r\n        });\r\n\r\n        return new GameMap( width, height, tileWidth, tileHeight, tiles, tileTemplates )\r\n    }\r\n\r\n    /** @constructor\r\n     * Constructs new instance of game map\r\n     * @param {int} width - width of game map in tiles\r\n     * @param {int} height - height of game map in tiles\r\n     * @param {int} tileWidth - width of default tile\r\n     * @param {int} tileHeight - height of default tile\r\n     * @param {Int8Array} tiles - array of tile IDs\r\n     * @param {Array} templates - array of reference tiles\r\n     */\r\n    constructor(width, height, tileWidth, tileHeight, tiles, templates) {\r\n        this.width = width\r\n        this.height = height\r\n\r\n        this.tileWidth = tileWidth\r\n        this.tileHeight = tileHeight\r\n\r\n        this.tiles = tiles\r\n        this.templates = templates\r\n    }\r\n\r\n    /** @method render\r\n     * Renders game map on given coordinates\r\n     * @param {2DContext} context - context used for rendering\r\n     * @param {int} xOffset - number of pixels to set game map of on horizontal axis\r\n     * @param {int} yOffset - number of pixels to set game map of on vertical axis\r\n     */\r\n    render(context, xOffset, yOffset) {\r\n        for( var j = 0; j < this.height; j++ ) {\r\n            for( var i = 0; i < this.width; i++ ) {\r\n                var x = i * this.tileWidth + xOffset\r\n                var y = j * this.tileHeight + yOffset\r\n\r\n                var templateID = this.tiles[this.getTileIndex( i, j )]\r\n                this.templates[templateID].render( context, x, y )\r\n            }\r\n        }\r\n    }\r\n\r\n    /** @method canMove\r\n     * Checks, whether object on coordinates X and Y with width and height can be moved there\r\n     * @param {int} x - X coordinate of object to check (center)\r\n     * @param {int} y - Y coordinate of object to check (center)\r\n     * @param {int} width - width of object in pixels\r\n     * @param {int} height - height of object in pixels\r\n     */\r\n    canMove(x, y, width, height) {\r\n        var minI = Math.floor( (x - width / 2) / this.tileWidth )\r\n        var maxI = Math.floor( (x + width / 2) / this.tileWidth )\r\n\r\n        var minJ = Math.floor( (y - height / 2) / this.tileHeight )\r\n        var maxJ = Math.floor( (y + height / 2) / this.tileHeight )\r\n\r\n        for( var j = minJ; j <= maxJ; j++ ) {\r\n            for( var i = minI; i <= maxI; i++ ) {\r\n                var templateID = this.tiles[this.getTileIndex( i, j )]\r\n                if( this.templates[templateID].solid ) {\r\n                    return false\r\n                }\r\n            }\r\n        }\r\n\r\n        return true\r\n    }\r\n\r\n    /** @method getTileIndex\r\n     * Computes index of tile on coordinated [i, j]\r\n     * @param {int} i - horizontal index\r\n     * @param {int} j - vertical index\r\n     */\r\n    getTileIndex(i, j) {\r\n        return j * this.width + i\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/scripts/gameMap.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/scripts/game.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n\r\n\r\n\r\nvar game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]( 1024, 768 )\r\nvar player = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]( 80, 80 )\r\n\r\ngame.addEntity( player )\r\ngame.setCameraTracking( player )\r\n\r\ngame.loop()\r\n\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/input.js":
/*!******************************!*\
  !*** ./src/scripts/input.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Input; });\n\r\n/** @module Input\r\n  * A class for handling input from the user\r\n  * will work for all keys on the keyboard\r\n  */\r\nclass Input {\r\n\r\n  /** @constructor\r\n    * Constructs a new instance of the Input class\r\n    * and attaches event listeners to the window.\r\n    */\r\n  constructor() {\r\n    this.oldState = {}\r\n    this.newState = {}\r\n\r\n    window.addEventListener('keydown', (event) => {\r\n      event.preventDefault();\r\n      this.newState[event.key] = true;\r\n    });\r\n\r\n    window.addEventListener('keyup', (event) => {\r\n      event.preventDefault();\r\n      this.newState[event.key] = false;\r\n    });\r\n  }\r\n\r\n  /** @method update\r\n    * Copies the new state to the old state\r\n    */\r\n  update() {\r\n    this.oldState = JSON.parse(JSON.stringify(this.newState));\r\n  }\r\n\r\n  /** @method keyPressed\r\n    * Returns true if the specified key is\r\n    * currently pressed.\r\n    * @param {String} key - the key to test\r\n    * @return {bool} if the key is pressed\r\n    */\r\n  keyPressed(key) {\r\n    return this.newState[key];\r\n  }\r\n\r\n  /** @method keyDown\r\n    * Returns true if the specified key\r\n    * went down this frame\r\n    * @param {String} key - the key to test\r\n    * @return {bool} if the key is pressed\r\n    */\r\n  keyDown(key) {\r\n    return this.newState[key] && !this.oldState[key];\r\n  }\r\n\r\n  /** @method keyUp\r\n    * Returns true if the specified key\r\n    * went up this frame\r\n    * @param {String} key - the key to test\r\n    * @return {bool} if the key is pressed\r\n    */\r\n  keyUp(key) {\r\n    return !this.newState[key] && this.oldState[key];\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/scripts/input.js?");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n\r\n/** Number of frames in animation */\r\nconst ANIMATION_FRAMES = 8\r\n\r\n/** Number of cycles before animation frame changes */\r\nconst ANIMATION_TICK = 12\r\n\r\n/** Size of player sprite */\r\nconst SPRITE_SIZE = 32\r\n\r\n/** Size of sprite collider */\r\nconst SPRITE_COLLIDER = 24\r\n\r\n/** Relative path to folder containing sprite images */\r\nconst SPRITE_FOLDER = \"./mage/\"\r\n\r\n/** Base name of sprite files */\r\nconst SPRITE_NAME = \"mage\"\r\n\r\n/** Default sprite frame file extension */\r\nconst SPRITE_EXTENSION = \".png\"\r\n\r\n/** Base player facing direction */\r\nconst DIRECTIONS = [\"left\", \"right\", \"up\", \"down\"]\r\n\r\n/** @module Player\r\n * A class representing the player.\r\n */\r\nclass Player {\r\n\r\n    /** @constructor\r\n     * Constructs a new player instance\r\n     * @param {float} x - the player's x position\r\n     * @param {float} y - the player's y position\r\n     */\r\n    constructor(x, y) {\r\n        this.x = x\r\n        this.y = y\r\n\r\n        this.images = {}\r\n        this.loadImages()\r\n\r\n        this.state = \"down\"\r\n        this.frame = 0\r\n\r\n        this.cycleCount = 0\r\n    }\r\n\r\n    /** @method update\r\n     * Updates the player\r\n     * @param {double} deltaT - the elapsed time\r\n     * @param {Input} input - the input object\r\n     * @param {GameMap} map - the game map\r\n     */\r\n    update(deltaT, input, map) {\r\n\r\n        var changed = false\r\n        if( input.keyPressed( \"ArrowLeft\" )\r\n         && map.canMove( this.x - 1, this.y, SPRITE_COLLIDER, SPRITE_COLLIDER ) ) {\r\n            this.x--\r\n            this.state = \"left\"\r\n\r\n            changed = true\r\n        }\r\n\r\n        if( input.keyPressed( \"ArrowRight\")\r\n         && map.canMove( this.x + 1, this.y, SPRITE_COLLIDER, SPRITE_COLLIDER ) ) {\r\n            this.x++\r\n            this.state = \"right\"\r\n\r\n            changed = true\r\n        }\r\n\r\n        if( input.keyPressed( \"ArrowUp\" )\r\n         && map.canMove( this.x, this.y - 1, SPRITE_COLLIDER, SPRITE_COLLIDER ) ) {\r\n            this.y--\r\n            this.state = \"up\"\r\n\r\n            changed = true\r\n        }\r\n\r\n        if( input.keyPressed( \"ArrowDown\" ) \r\n         && map.canMove( this.x, this.y + 1, SPRITE_COLLIDER, SPRITE_COLLIDER ) ) {\r\n            this.y++\r\n            this.state = \"down\"\r\n\r\n            changed = true\r\n        }\r\n\r\n        if( changed && this.cycleCount >= ANIMATION_TICK && ( this.frame != 0 || this.frame != 4 ) ) {\r\n            this.frame += 1\r\n            this.frame = this.frame % ANIMATION_FRAMES\r\n\r\n            this.cycleCount = 0\r\n        }\r\n\r\n        this.cycleCount++\r\n    }\r\n\r\n    /** @method render\r\n     * Renders the player\r\n     * @param {double} deltaT - elapsed time\r\n     * @param {Context2D} context - the rendering context\r\n     */\r\n    render(deltaT, context) {\r\n        var image = this.images[this.state][this.frame]\r\n        context.drawImage( image, this.x - SPRITE_SIZE / 2, this.y - SPRITE_SIZE / 2 )\r\n    }\r\n\r\n    /** @method loadImages\r\n     * Loads animation images\r\n     */\r\n    loadImages() {\r\n        DIRECTIONS.forEach( direction => {\r\n            this.images[direction] = []\r\n        })\r\n\r\n        for( var i = 0; i < ANIMATION_FRAMES; i++ ) {\r\n            DIRECTIONS.forEach( direction => {\r\n                this.images[direction].push( this.obtainFrame( direction, i ) )\r\n            })\r\n        }\r\n    }\r\n\r\n    /** @method obtainFrame\r\n     * Obtains specified frame of given direction animation\r\n     * @param {string} direction - name of animation direction\r\n     * @param {int} number - number of frame\r\n     */\r\n    obtainFrame(direction, number) {\r\n        var frame = new Image( SPRITE_SIZE, SPRITE_SIZE )\r\n        frame.src = SPRITE_FOLDER + SPRITE_NAME + \"-\" + direction + \"-\" + number + SPRITE_EXTENSION\r\n\r\n        return frame\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/scripts/player.js?");

/***/ }),

/***/ "./src/scripts/tile.js":
/*!*****************************!*\
  !*** ./src/scripts/tile.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tile; });\n\r\n/** @module Tile\r\n * A class representing one tile\r\n */\r\nclass Tile {\r\n\r\n    /** @static @method parseTile\r\n     * Parses tile from given JSON object\r\n     * @param {JSON} tileJSON - JSON object containing info about tile\r\n     */\r\n    static parseTile(tileJSON) {\r\n        var id = tileJSON.id\r\n        var solid = tileJSON.properties[0].value\r\n\r\n        var imageSrc = tileJSON.image\r\n        var imageWidth = tileJSON.imagewidth\r\n        var imageHeight = tileJSON.imageheight\r\n\r\n        return new Tile( id, imageWidth, imageHeight, imageSrc, solid )\r\n    }\r\n\r\n    /** @constructor\r\n     * Constructs a new instance of reference tile\r\n     * @param {int} id - ID of this tile for referencing\r\n     * @param {int} width - width of tile\r\n     * @param {int} height - height of tile\r\n     * @param {string} imageSrc - path for image source\r\n     * @param {boolean} solid - indicator, whether this tile is solid or not\r\n     */\r\n    constructor(id, width, height, imageSrc, solid) {\r\n        this.id = id\r\n        this.solid = solid\r\n\r\n        this.width = width\r\n        this.height = height\r\n\r\n        this.image = new Image( width, height )\r\n        this.image.src = \"./dist/\" + imageSrc\r\n    }\r\n\r\n    /** @method render\r\n    * Renders this tile on given coordinates\r\n    * @param {Context2D} context - the rendering context\r\n    * @param {int} x - X coordinate to render on\r\n    * @param {int} y - Y coordinate to render on\r\n    */\r\n    render(context, x, y) {\r\n        context.drawImage( this.image, x, y )\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/scripts/tile.js?");

/***/ })

/******/ });
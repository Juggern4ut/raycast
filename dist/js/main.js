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

/***/ "./src/js/Player.js":
/*!**************************!*\
  !*** ./src/js/Player.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Vector2D_1 = __importDefault(__webpack_require__(/*! ./Vector2D */ \"./src/js/Vector2D.js\"));\nclass Player {\n    constructor(position) {\n        this.rotate = (value) => {\n            this.rotation += value;\n        };\n        this.update = (progress) => {\n        };\n        this.draw = (ctx) => {\n            ctx.fillStyle = \"#000\";\n            ctx.fillRect(this.position.x, this.position.y, 6, 6);\n            ctx.beginPath();\n            ctx.moveTo(this.position.x + 3, this.position.y + 3);\n            const targetX = this.position.x + 20 * Math.cos(this.rotation);\n            const targetY = this.position.y + 20 * Math.sin(this.rotation);\n            ctx.lineTo(targetX, targetY);\n            ctx.stroke();\n            ctx.closePath();\n        };\n        this.position = position;\n        this.rotation = 0;\n        this.direction = new Vector2D_1.default(0, 0);\n    }\n}\nexports[\"default\"] = Player;\n//# sourceMappingURL=Player.js.map\n\n//# sourceURL=webpack://wetyss-boiler/./src/js/Player.js?");

/***/ }),

/***/ "./src/js/Simulation.js":
/*!******************************!*\
  !*** ./src/js/Simulation.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Player_1 = __importDefault(__webpack_require__(/*! ./Player */ \"./src/js/Player.js\"));\nconst Vector2D_1 = __importDefault(__webpack_require__(/*! ./Vector2D */ \"./src/js/Vector2D.js\"));\nclass Simulation {\n    constructor(canvas) {\n        this.lastRender = 0;\n        /**\n         * The main loop\n         */\n        this.loop = (timestamp) => {\n            const progress = timestamp - this.lastRender;\n            this.update(progress);\n            this.draw();\n            this.lastRender = timestamp;\n            window.requestAnimationFrame(this.loop);\n        };\n        this.update = (progress) => {\n            this.player.update(progress);\n        };\n        this.draw = () => {\n            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n            this.player.draw(this.ctx);\n        };\n        this.canvas = canvas;\n        this.ctx = canvas.getContext(\"2d\");\n        this.player = new Player_1.default(new Vector2D_1.default(250, 250));\n        window.requestAnimationFrame(this.loop);\n        window.addEventListener(\"keydown\", (e) => {\n            e.key === \"a\" ? this.player.rotate(-0.03) : null;\n            e.key === \"d\" ? this.player.rotate(0.03) : null;\n        });\n    }\n}\nexports[\"default\"] = Simulation;\n//# sourceMappingURL=Simulation.js.map\n\n//# sourceURL=webpack://wetyss-boiler/./src/js/Simulation.js?");

/***/ }),

/***/ "./src/js/Vector2D.js":
/*!****************************!*\
  !*** ./src/js/Vector2D.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Vector2D {\n    constructor(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    /**\n     * Adds a given vector to this one\n     * @param other The other vector to add\n     */\n    add(other) {\n        this.x += other.x;\n        this.y += other.y;\n    }\n    /**\n     * Multiplies a given vector to this one\n     * @param other The vector to multiply\n     */\n    multiply(other) {\n        this.x *= other.x;\n        this.y *= other.y;\n    }\n    /**\n     * Creates a copy of this vector\n     * @returns A clone of the vector\n     */\n    clone() {\n        return new Vector2D(this.x, this.y);\n    }\n    /**\n     * Returns the distance between this vecor and a given one\n     * @param other The Vector to get the distance to\n     * @returns The calculated distance\n     */\n    dist(other) {\n        const deltaX = Math.abs(this.x - other.x);\n        const deltaY = Math.abs(this.y - other.y);\n        return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));\n    }\n    /**\n     * Calculates the dot product of this and a given vector\n     * @param other The other vector\n     * @returns The dot product\n     */\n    dot(other) {\n        return this.x * other.x + this.y * other.y;\n    }\n    /**\n     * Calculates the magnitude of this vector and returns it\n     * @returns The magnitude of this vector\n     */\n    magnitude() {\n        return Math.sqrt(this.x * this.x + this.y * this.y);\n    }\n    /**\n     * Normalizes this vector\n     */\n    normalize() {\n        const magnitude = this.magnitude();\n        this.x /= magnitude;\n        this.y /= magnitude;\n    }\n    /**\n     * Calculates the angle in radians between this\n     * vector and a given one and returns it.\n     * @param other The other vector\n     * @returns The angle in radians\n     */\n    angle(other) {\n        const dotProduct = this.dot(other);\n        const magnitudeProduct = this.magnitude() * other.magnitude();\n        return Math.acos(dotProduct / magnitudeProduct);\n    }\n}\nexports[\"default\"] = Vector2D;\n//# sourceMappingURL=Vector2D.js.map\n\n//# sourceURL=webpack://wetyss-boiler/./src/js/Vector2D.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Simulation_1 = __importDefault(__webpack_require__(/*! ./Simulation */ \"./src/js/Simulation.js\"));\nconst canvas = document.querySelector(\"#canvas\");\nnew Simulation_1.default(canvas);\n//# sourceMappingURL=main.js.map\n\n//# sourceURL=webpack://wetyss-boiler/./src/js/main.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/gameboard.js":
/*!******************************!*\
  !*** ./src/app/gameboard.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameboard: () => (/* binding */ gameboard)
/* harmony export */ });
class gameboard{
    constructor(val){
        this.boardSunk = false;
        this.playerName = val;
        this.boardArr = new Array(10).fill(0).map(() => new Array(10).fill(0));
        for(let i=0; i<10; i++){
            for(let j=0; j<10; j++){
                this.boardArr[i][j]={marked: false, isTaken: false, shipType: this.shipType};
            }
        }
    }
    
    placeShip(size,arr){
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);
        let position = Math.floor(Math.random() * 2);
        //1-horizontal 0-vertical

        //check if path is free
        if(position===1){
            if(col+size>=10) col = col+size-10;
            for(let k= col, count=0; count<size; k++){
                if(this.boardArr[row][k].isTaken){
                    return false;
                }
                arr.push({row,k});
                count++;
            }
        }
        if(position===0){
            if(row+size>=10) row = row+size-10;
            for(let k= row, count=0; count<size; k++){
                if(this.boardArr[k][col].isTaken){
                    return false;
                }
                arr.push({k,col});
                count++;                
            }
        }
        return true;
    }

    receiveAttack(m,n){
        if(this.boardArr[m][n].isTaken===true){
            this.boardArr[m][n].marked = true;
            return true;
        }
        this.boardArr[m][n].marked = true;
    }
}

/***/ }),

/***/ "./src/app/player.js":
/*!***************************!*\
  !*** ./src/app/player.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   player: () => (/* binding */ player)
/* harmony export */ });
class player{
    constructor(val){
        this.playerName = val;
    }
}

/***/ }),

/***/ "./src/app/ship.js":
/*!*************************!*\
  !*** ./src/app/ship.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ship: () => (/* binding */ ship)
/* harmony export */ });
class ship{
    constructor(type, size){
        this.type = type;
        this.size = size;
        this.hits = 0;
        this.damaged = false;
        this.sunk = false;
        this.placed = false;
    }
    isHit(){
        this.hits++;
        this.damaged=true;
        if(this.hits===this.size) this.sunk=true;
    }
}




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/ship */ "./src/app/ship.js");
/* harmony import */ var _app_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/gameboard */ "./src/app/gameboard.js");
/* harmony import */ var _app_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/player */ "./src/app/player.js");




//create ship
let human = new _app_player__WEBPACK_IMPORTED_MODULE_2__.player("mike")
let computer = new _app_player__WEBPACK_IMPORTED_MODULE_2__.player("AI")

let playerShips = [];
playerShips.push(new _app_ship__WEBPACK_IMPORTED_MODULE_0__.ship('Carrier',5));
playerShips.push(new _app_ship__WEBPACK_IMPORTED_MODULE_0__.ship('Battleship',4));
playerShips.push(new _app_ship__WEBPACK_IMPORTED_MODULE_0__.ship('Destroyer',3));
playerShips.push(new _app_ship__WEBPACK_IMPORTED_MODULE_0__.ship('Submarine',3));
playerShips.push(new _app_ship__WEBPACK_IMPORTED_MODULE_0__.ship('Patrol Boat',2));

let AIShips = [];
AIShips.push(new _app_ship__WEBPACK_IMPORTED_MODULE_0__.ship('Carrier',5));
AIShips.push(new _app_ship__WEBPACK_IMPORTED_MODULE_0__.ship('Battleship',4));
AIShips.push(new _app_ship__WEBPACK_IMPORTED_MODULE_0__.ship('Destroyer',3));
AIShips.push(new _app_ship__WEBPACK_IMPORTED_MODULE_0__.ship('Submarine',3));
AIShips.push(new _app_ship__WEBPACK_IMPORTED_MODULE_0__.ship('Patrol Boat',2));

//create gameboard
let playerBoard = new _app_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboard(human.playerName);
let AIBoard = new _app_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboard(computer.playerName);
let playerPlace = [], AIPlace = [];

function gameShips(board, place, ships){
    for(let i=0; i<ships.length; i++){
        let trackPlace = [];
    while(ships[i].placed===false){
        let check = board.placeShip(ships[i].size,trackPlace);
        if(check===false) trackPlace = [];
        if(check===true) ships[i].placed=true;
    }
    place.push(trackPlace);
    for(let j=0; j<trackPlace.length;j++){
            if(trackPlace[j].row){
                board.boardArr[trackPlace[j].row][trackPlace[j].k].isTaken = true;
                board.boardArr[trackPlace[j].row][trackPlace[j].k].shipType = ships[i].type;
            }
            if(trackPlace[j].col){
                board.boardArr[trackPlace[j].k][trackPlace[j].col].isTaken = true;
                board.boardArr[trackPlace[j].k][trackPlace[j].col].shipType = ships[i].type;;
            }
    }
    }
}

//move: 0-AI, 1-player
let move=0
while((!playerBoard.boardSunk)&&(!AIBoard.boardSunk)){
    if(move===0){
        break;
    }
}

gameShips(playerBoard,playerPlace,playerShips);
gameShips(AIBoard,AIPlace,AIShips);

console.log(playerPlace, AIPlace);
console.log(playerBoard.boardArr, AIBoard.boardArr);
console.log(playerShips, AIShips)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsTUFBTTtBQUMzQix5QkFBeUIsTUFBTTtBQUMvQixxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxZQUFZO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixNQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsWUFBWTtBQUNqRDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsTUFBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakRPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7VUNkQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOa0M7QUFDVTtBQUNOOztBQUV0QztBQUNBLGdCQUFnQiwrQ0FBTTtBQUN0QixtQkFBbUIsK0NBQU07O0FBRXpCO0FBQ0EscUJBQXFCLDJDQUFJO0FBQ3pCLHFCQUFxQiwyQ0FBSTtBQUN6QixxQkFBcUIsMkNBQUk7QUFDekIscUJBQXFCLDJDQUFJO0FBQ3pCLHFCQUFxQiwyQ0FBSTs7QUFFekI7QUFDQSxpQkFBaUIsMkNBQUk7QUFDckIsaUJBQWlCLDJDQUFJO0FBQ3JCLGlCQUFpQiwyQ0FBSTtBQUNyQixpQkFBaUIsMkNBQUk7QUFDckIsaUJBQWlCLDJDQUFJOztBQUVyQjtBQUNBLHNCQUFzQixxREFBUztBQUMvQixrQkFBa0IscURBQVM7QUFDM0I7O0FBRUE7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG9CQUFvQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHAvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBnYW1lYm9hcmR7XG4gICAgY29uc3RydWN0b3IodmFsKXtcbiAgICAgICAgdGhpcy5ib2FyZFN1bmsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wbGF5ZXJOYW1lID0gdmFsO1xuICAgICAgICB0aGlzLmJvYXJkQXJyID0gbmV3IEFycmF5KDEwKS5maWxsKDApLm1hcCgoKSA9PiBuZXcgQXJyYXkoMTApLmZpbGwoMCkpO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTwxMDsgaSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPDEwOyBqKyspe1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRBcnJbaV1bal09e21hcmtlZDogZmFsc2UsIGlzVGFrZW46IGZhbHNlLCBzaGlwVHlwZTogdGhpcy5zaGlwVHlwZX07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcGxhY2VTaGlwKHNpemUsYXJyKXtcbiAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgbGV0IGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICAgIC8vMS1ob3Jpem9udGFsIDAtdmVydGljYWxcblxuICAgICAgICAvL2NoZWNrIGlmIHBhdGggaXMgZnJlZVxuICAgICAgICBpZihwb3NpdGlvbj09PTEpe1xuICAgICAgICAgICAgaWYoY29sK3NpemU+PTEwKSBjb2wgPSBjb2wrc2l6ZS0xMDtcbiAgICAgICAgICAgIGZvcihsZXQgaz0gY29sLCBjb3VudD0wOyBjb3VudDxzaXplOyBrKyspe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRBcnJbcm93XVtrXS5pc1Rha2VuKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcnIucHVzaCh7cm93LGt9KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHBvc2l0aW9uPT09MCl7XG4gICAgICAgICAgICBpZihyb3crc2l6ZT49MTApIHJvdyA9IHJvdytzaXplLTEwO1xuICAgICAgICAgICAgZm9yKGxldCBrPSByb3csIGNvdW50PTA7IGNvdW50PHNpemU7IGsrKyl7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5ib2FyZEFycltrXVtjb2xdLmlzVGFrZW4pe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFyci5wdXNoKHtrLGNvbH0pO1xuICAgICAgICAgICAgICAgIGNvdW50Kys7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2sobSxuKXtcbiAgICAgICAgaWYodGhpcy5ib2FyZEFyclttXVtuXS5pc1Rha2VuPT09dHJ1ZSl7XG4gICAgICAgICAgICB0aGlzLmJvYXJkQXJyW21dW25dLm1hcmtlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvYXJkQXJyW21dW25dLm1hcmtlZCA9IHRydWU7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBwbGF5ZXJ7XG4gICAgY29uc3RydWN0b3IodmFsKXtcbiAgICAgICAgdGhpcy5wbGF5ZXJOYW1lID0gdmFsO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3Mgc2hpcHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBzaXplKXtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICAgICAgdGhpcy5kYW1hZ2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYWNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpc0hpdCgpe1xuICAgICAgICB0aGlzLmhpdHMrKztcbiAgICAgICAgdGhpcy5kYW1hZ2VkPXRydWU7XG4gICAgICAgIGlmKHRoaXMuaGl0cz09PXRoaXMuc2l6ZSkgdGhpcy5zdW5rPXRydWU7XG4gICAgfVxufVxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc2hpcCB9IGZyb20gXCIuL2FwcC9zaGlwXCI7XG5pbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tIFwiLi9hcHAvZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tIFwiLi9hcHAvcGxheWVyXCI7XG5cbi8vY3JlYXRlIHNoaXBcbmxldCBodW1hbiA9IG5ldyBwbGF5ZXIoXCJtaWtlXCIpXG5sZXQgY29tcHV0ZXIgPSBuZXcgcGxheWVyKFwiQUlcIilcblxubGV0IHBsYXllclNoaXBzID0gW107XG5wbGF5ZXJTaGlwcy5wdXNoKG5ldyBzaGlwKCdDYXJyaWVyJyw1KSk7XG5wbGF5ZXJTaGlwcy5wdXNoKG5ldyBzaGlwKCdCYXR0bGVzaGlwJyw0KSk7XG5wbGF5ZXJTaGlwcy5wdXNoKG5ldyBzaGlwKCdEZXN0cm95ZXInLDMpKTtcbnBsYXllclNoaXBzLnB1c2gobmV3IHNoaXAoJ1N1Ym1hcmluZScsMykpO1xucGxheWVyU2hpcHMucHVzaChuZXcgc2hpcCgnUGF0cm9sIEJvYXQnLDIpKTtcblxubGV0IEFJU2hpcHMgPSBbXTtcbkFJU2hpcHMucHVzaChuZXcgc2hpcCgnQ2FycmllcicsNSkpO1xuQUlTaGlwcy5wdXNoKG5ldyBzaGlwKCdCYXR0bGVzaGlwJyw0KSk7XG5BSVNoaXBzLnB1c2gobmV3IHNoaXAoJ0Rlc3Ryb3llcicsMykpO1xuQUlTaGlwcy5wdXNoKG5ldyBzaGlwKCdTdWJtYXJpbmUnLDMpKTtcbkFJU2hpcHMucHVzaChuZXcgc2hpcCgnUGF0cm9sIEJvYXQnLDIpKTtcblxuLy9jcmVhdGUgZ2FtZWJvYXJkXG5sZXQgcGxheWVyQm9hcmQgPSBuZXcgZ2FtZWJvYXJkKGh1bWFuLnBsYXllck5hbWUpO1xubGV0IEFJQm9hcmQgPSBuZXcgZ2FtZWJvYXJkKGNvbXB1dGVyLnBsYXllck5hbWUpO1xubGV0IHBsYXllclBsYWNlID0gW10sIEFJUGxhY2UgPSBbXTtcblxuZnVuY3Rpb24gZ2FtZVNoaXBzKGJvYXJkLCBwbGFjZSwgc2hpcHMpe1xuICAgIGZvcihsZXQgaT0wOyBpPHNoaXBzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IHRyYWNrUGxhY2UgPSBbXTtcbiAgICB3aGlsZShzaGlwc1tpXS5wbGFjZWQ9PT1mYWxzZSl7XG4gICAgICAgIGxldCBjaGVjayA9IGJvYXJkLnBsYWNlU2hpcChzaGlwc1tpXS5zaXplLHRyYWNrUGxhY2UpO1xuICAgICAgICBpZihjaGVjaz09PWZhbHNlKSB0cmFja1BsYWNlID0gW107XG4gICAgICAgIGlmKGNoZWNrPT09dHJ1ZSkgc2hpcHNbaV0ucGxhY2VkPXRydWU7XG4gICAgfVxuICAgIHBsYWNlLnB1c2godHJhY2tQbGFjZSk7XG4gICAgZm9yKGxldCBqPTA7IGo8dHJhY2tQbGFjZS5sZW5ndGg7aisrKXtcbiAgICAgICAgICAgIGlmKHRyYWNrUGxhY2Vbal0ucm93KXtcbiAgICAgICAgICAgICAgICBib2FyZC5ib2FyZEFyclt0cmFja1BsYWNlW2pdLnJvd11bdHJhY2tQbGFjZVtqXS5rXS5pc1Rha2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBib2FyZC5ib2FyZEFyclt0cmFja1BsYWNlW2pdLnJvd11bdHJhY2tQbGFjZVtqXS5rXS5zaGlwVHlwZSA9IHNoaXBzW2ldLnR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0cmFja1BsYWNlW2pdLmNvbCl7XG4gICAgICAgICAgICAgICAgYm9hcmQuYm9hcmRBcnJbdHJhY2tQbGFjZVtqXS5rXVt0cmFja1BsYWNlW2pdLmNvbF0uaXNUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgYm9hcmQuYm9hcmRBcnJbdHJhY2tQbGFjZVtqXS5rXVt0cmFja1BsYWNlW2pdLmNvbF0uc2hpcFR5cGUgPSBzaGlwc1tpXS50eXBlOztcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgfVxufVxuXG4vL21vdmU6IDAtQUksIDEtcGxheWVyXG5sZXQgbW92ZT0wXG53aGlsZSgoIXBsYXllckJvYXJkLmJvYXJkU3VuaykmJighQUlCb2FyZC5ib2FyZFN1bmspKXtcbiAgICBpZihtb3ZlPT09MCl7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuZ2FtZVNoaXBzKHBsYXllckJvYXJkLHBsYXllclBsYWNlLHBsYXllclNoaXBzKTtcbmdhbWVTaGlwcyhBSUJvYXJkLEFJUGxhY2UsQUlTaGlwcyk7XG5cbmNvbnNvbGUubG9nKHBsYXllclBsYWNlLCBBSVBsYWNlKTtcbmNvbnNvbGUubG9nKHBsYXllckJvYXJkLmJvYXJkQXJyLCBBSUJvYXJkLmJvYXJkQXJyKTtcbmNvbnNvbGUubG9nKHBsYXllclNoaXBzLCBBSVNoaXBzKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
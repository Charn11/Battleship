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
        //generate 2d array
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
            if(col+size>=10) return false;
            for(let h= col, count=0; count<size; h++){
                if(this.boardArr[row][h].isTaken){
                    return false;
                }
                arr.push({row,h});
                count++;
            }
        }
        if(position===0){
            if(row+size>=10) return false;
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
        if(this.boardArr[m][n].marked) return false;
        else{
            this.boardArr[m][n].marked = true;
            return true;
        }
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
let human = new _app_player__WEBPACK_IMPORTED_MODULE_2__.player("mike"), computer = new _app_player__WEBPACK_IMPORTED_MODULE_2__.player("AI")

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

//create gameboard and place ships
let playerBoard = new _app_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboard(human.playerName), AIBoard = new _app_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboard(computer.playerName);
let playerPlace = [], AIPlace = [];

function gameShips(board, place, ships){
    for(let i=0; i<ships.length; i++){
        let trackPlace = [];
    while(!ships[i].placed){
        let check = board.placeShip(ships[i].size,trackPlace);
        if(!check) trackPlace = [];
        if(check) ships[i].placed=true;
    }
    place.push(trackPlace);
    for(let j=0; j<trackPlace.length;j++){
            if(trackPlace[j].hasOwnProperty('row')){
                board.boardArr[trackPlace[j].row][trackPlace[j].h].isTaken = true;
                board.boardArr[trackPlace[j].row][trackPlace[j].h].shipType = ships[i].type;
            }
            if(trackPlace[j].hasOwnProperty('col')){
                board.boardArr[trackPlace[j].k][trackPlace[j].col].isTaken = true;
                board.boardArr[trackPlace[j].k][trackPlace[j].col].shipType = ships[i].type;
            }
        }
    }
}
gameShips(playerBoard,playerPlace,playerShips);
gameShips(AIBoard,AIPlace,AIShips);

//move: 0-AI, 1-player
//gameplay
let move=0, playerCount=5, AICount=5;
while(!playerBoard.boardSunk&&!AIBoard.boardSunk){
    if(move===0){
        let m = Math.floor(Math.random()*10);
        let n = Math.floor(Math.random()*10);
        let AIMove = playerBoard.receiveAttack(m,n);
        if(!AIMove) continue;
        else if(AIMove){
            move = 1;
            let getType = playerBoard.boardArr[m][n].shipType;
            if(getType===undefined) continue;
            else{
                for(let val in playerShips){
                    if(playerShips[val].type===getType){
                        playerShips[val].isHit();
                        if(playerShips[val].sunk) playerCount--;
                        if(playerCount===0) playerBoard.boardSunk=true;
                        break;
                    }
                }
            }
        }
    }
    if(move===1){
        let m = Math.floor(Math.random()*10);
        let n = Math.floor(Math.random()*10);
        let PlayerMove = AIBoard.receiveAttack(m,n);
        if(!PlayerMove) continue;
        else if(PlayerMove){
            move = 0;
            let getType = AIBoard.boardArr[m][n].shipType;
            if(getType===undefined) continue;
            else{
                for(let val in AIShips){
                    if(AIShips[val].type===getType){
                        AIShips[val].isHit();
                        if(AIShips[val].sunk) AICount--;
                        if(AICount===0) AIBoard.boardSunk=true;
                        break;
                    }
                }
            }
        }
    }
}
if(playerBoard.boardSunk) console.log("AI wins")
else console.log(human.playerName+" wins")

console.log(playerPlace, AIPlace);
console.log(playerBoard.boardArr, AIBoard.boardArr);
console.log(playerShips, AIShips)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixNQUFNO0FBQzNCLHlCQUF5QixNQUFNO0FBQy9CLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFlBQVk7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE1BQU07QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxZQUFZO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixNQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9DTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0pPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDZEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ1U7QUFDTjs7QUFFdEM7QUFDQSxnQkFBZ0IsK0NBQU0seUJBQXlCLCtDQUFNOztBQUVyRDtBQUNBLHFCQUFxQiwyQ0FBSTtBQUN6QixxQkFBcUIsMkNBQUk7QUFDekIscUJBQXFCLDJDQUFJO0FBQ3pCLHFCQUFxQiwyQ0FBSTtBQUN6QixxQkFBcUIsMkNBQUk7O0FBRXpCO0FBQ0EsaUJBQWlCLDJDQUFJO0FBQ3JCLGlCQUFpQiwyQ0FBSTtBQUNyQixpQkFBaUIsMkNBQUk7QUFDckIsaUJBQWlCLDJDQUFJO0FBQ3JCLGlCQUFpQiwyQ0FBSTs7QUFFckI7QUFDQSxzQkFBc0IscURBQVMsa0NBQWtDLHFEQUFTO0FBQzFFOztBQUVBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHAvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBnYW1lYm9hcmR7XG4gICAgY29uc3RydWN0b3IodmFsKXtcbiAgICAgICAgdGhpcy5ib2FyZFN1bmsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wbGF5ZXJOYW1lID0gdmFsO1xuICAgICAgICAvL2dlbmVyYXRlIDJkIGFycmF5XG4gICAgICAgIHRoaXMuYm9hcmRBcnIgPSBuZXcgQXJyYXkoMTApLmZpbGwoMCkubWFwKCgpID0+IG5ldyBBcnJheSgxMCkuZmlsbCgwKSk7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPDEwOyBpKyspe1xuICAgICAgICAgICAgZm9yKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZEFycltpXVtqXT17bWFya2VkOiBmYWxzZSwgaXNUYWtlbjogZmFsc2UsIHNoaXBUeXBlOiB0aGlzLnNoaXBUeXBlfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwbGFjZVNoaXAoc2l6ZSxhcnIpe1xuICAgICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBsZXQgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBsZXQgcG9zaXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgICAgLy8xLWhvcml6b250YWwgMC12ZXJ0aWNhbFxuICAgICAgICAvL2NoZWNrIGlmIHBhdGggaXMgZnJlZVxuICAgICAgICBpZihwb3NpdGlvbj09PTEpe1xuICAgICAgICAgICAgaWYoY29sK3NpemU+PTEwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBmb3IobGV0IGg9IGNvbCwgY291bnQ9MDsgY291bnQ8c2l6ZTsgaCsrKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkQXJyW3Jvd11baF0uaXNUYWtlbil7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goe3JvdyxofSk7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihwb3NpdGlvbj09PTApe1xuICAgICAgICAgICAgaWYocm93K3NpemU+PTEwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBmb3IobGV0IGs9IHJvdywgY291bnQ9MDsgY291bnQ8c2l6ZTsgaysrKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkQXJyW2tdW2NvbF0uaXNUYWtlbil7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goe2ssY29sfSk7XG4gICAgICAgICAgICAgICAgY291bnQrKzsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJlY2VpdmVBdHRhY2sobSxuKXtcbiAgICAgICAgaWYodGhpcy5ib2FyZEFyclttXVtuXS5tYXJrZWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRBcnJbbV1bbl0ubWFya2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBwbGF5ZXJ7XG4gICAgY29uc3RydWN0b3IodmFsKXtcbiAgICAgICAgdGhpcy5wbGF5ZXJOYW1lID0gdmFsO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3Mgc2hpcHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBzaXplKXtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICAgICAgdGhpcy5kYW1hZ2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYWNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpc0hpdCgpe1xuICAgICAgICB0aGlzLmhpdHMrKztcbiAgICAgICAgdGhpcy5kYW1hZ2VkPXRydWU7XG4gICAgICAgIGlmKHRoaXMuaGl0cz09PXRoaXMuc2l6ZSkgdGhpcy5zdW5rPXRydWU7XG4gICAgfVxufVxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc2hpcCB9IGZyb20gXCIuL2FwcC9zaGlwXCI7XG5pbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tIFwiLi9hcHAvZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tIFwiLi9hcHAvcGxheWVyXCI7XG5cbi8vY3JlYXRlIHNoaXBcbmxldCBodW1hbiA9IG5ldyBwbGF5ZXIoXCJtaWtlXCIpLCBjb21wdXRlciA9IG5ldyBwbGF5ZXIoXCJBSVwiKVxuXG5sZXQgcGxheWVyU2hpcHMgPSBbXTtcbnBsYXllclNoaXBzLnB1c2gobmV3IHNoaXAoJ0NhcnJpZXInLDUpKTtcbnBsYXllclNoaXBzLnB1c2gobmV3IHNoaXAoJ0JhdHRsZXNoaXAnLDQpKTtcbnBsYXllclNoaXBzLnB1c2gobmV3IHNoaXAoJ0Rlc3Ryb3llcicsMykpO1xucGxheWVyU2hpcHMucHVzaChuZXcgc2hpcCgnU3VibWFyaW5lJywzKSk7XG5wbGF5ZXJTaGlwcy5wdXNoKG5ldyBzaGlwKCdQYXRyb2wgQm9hdCcsMikpO1xuXG5sZXQgQUlTaGlwcyA9IFtdO1xuQUlTaGlwcy5wdXNoKG5ldyBzaGlwKCdDYXJyaWVyJyw1KSk7XG5BSVNoaXBzLnB1c2gobmV3IHNoaXAoJ0JhdHRsZXNoaXAnLDQpKTtcbkFJU2hpcHMucHVzaChuZXcgc2hpcCgnRGVzdHJveWVyJywzKSk7XG5BSVNoaXBzLnB1c2gobmV3IHNoaXAoJ1N1Ym1hcmluZScsMykpO1xuQUlTaGlwcy5wdXNoKG5ldyBzaGlwKCdQYXRyb2wgQm9hdCcsMikpO1xuXG4vL2NyZWF0ZSBnYW1lYm9hcmQgYW5kIHBsYWNlIHNoaXBzXG5sZXQgcGxheWVyQm9hcmQgPSBuZXcgZ2FtZWJvYXJkKGh1bWFuLnBsYXllck5hbWUpLCBBSUJvYXJkID0gbmV3IGdhbWVib2FyZChjb21wdXRlci5wbGF5ZXJOYW1lKTtcbmxldCBwbGF5ZXJQbGFjZSA9IFtdLCBBSVBsYWNlID0gW107XG5cbmZ1bmN0aW9uIGdhbWVTaGlwcyhib2FyZCwgcGxhY2UsIHNoaXBzKXtcbiAgICBmb3IobGV0IGk9MDsgaTxzaGlwcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCB0cmFja1BsYWNlID0gW107XG4gICAgd2hpbGUoIXNoaXBzW2ldLnBsYWNlZCl7XG4gICAgICAgIGxldCBjaGVjayA9IGJvYXJkLnBsYWNlU2hpcChzaGlwc1tpXS5zaXplLHRyYWNrUGxhY2UpO1xuICAgICAgICBpZighY2hlY2spIHRyYWNrUGxhY2UgPSBbXTtcbiAgICAgICAgaWYoY2hlY2spIHNoaXBzW2ldLnBsYWNlZD10cnVlO1xuICAgIH1cbiAgICBwbGFjZS5wdXNoKHRyYWNrUGxhY2UpO1xuICAgIGZvcihsZXQgaj0wOyBqPHRyYWNrUGxhY2UubGVuZ3RoO2orKyl7XG4gICAgICAgICAgICBpZih0cmFja1BsYWNlW2pdLmhhc093blByb3BlcnR5KCdyb3cnKSl7XG4gICAgICAgICAgICAgICAgYm9hcmQuYm9hcmRBcnJbdHJhY2tQbGFjZVtqXS5yb3ddW3RyYWNrUGxhY2Vbal0uaF0uaXNUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgYm9hcmQuYm9hcmRBcnJbdHJhY2tQbGFjZVtqXS5yb3ddW3RyYWNrUGxhY2Vbal0uaF0uc2hpcFR5cGUgPSBzaGlwc1tpXS50eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodHJhY2tQbGFjZVtqXS5oYXNPd25Qcm9wZXJ0eSgnY29sJykpe1xuICAgICAgICAgICAgICAgIGJvYXJkLmJvYXJkQXJyW3RyYWNrUGxhY2Vbal0ua11bdHJhY2tQbGFjZVtqXS5jb2xdLmlzVGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJvYXJkLmJvYXJkQXJyW3RyYWNrUGxhY2Vbal0ua11bdHJhY2tQbGFjZVtqXS5jb2xdLnNoaXBUeXBlID0gc2hpcHNbaV0udHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmdhbWVTaGlwcyhwbGF5ZXJCb2FyZCxwbGF5ZXJQbGFjZSxwbGF5ZXJTaGlwcyk7XG5nYW1lU2hpcHMoQUlCb2FyZCxBSVBsYWNlLEFJU2hpcHMpO1xuXG4vL21vdmU6IDAtQUksIDEtcGxheWVyXG4vL2dhbWVwbGF5XG5sZXQgbW92ZT0wLCBwbGF5ZXJDb3VudD01LCBBSUNvdW50PTU7XG53aGlsZSghcGxheWVyQm9hcmQuYm9hcmRTdW5rJiYhQUlCb2FyZC5ib2FyZFN1bmspe1xuICAgIGlmKG1vdmU9PT0wKXtcbiAgICAgICAgbGV0IG0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICBsZXQgbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgIGxldCBBSU1vdmUgPSBwbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKG0sbik7XG4gICAgICAgIGlmKCFBSU1vdmUpIGNvbnRpbnVlO1xuICAgICAgICBlbHNlIGlmKEFJTW92ZSl7XG4gICAgICAgICAgICBtb3ZlID0gMTtcbiAgICAgICAgICAgIGxldCBnZXRUeXBlID0gcGxheWVyQm9hcmQuYm9hcmRBcnJbbV1bbl0uc2hpcFR5cGU7XG4gICAgICAgICAgICBpZihnZXRUeXBlPT09dW5kZWZpbmVkKSBjb250aW51ZTtcbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgZm9yKGxldCB2YWwgaW4gcGxheWVyU2hpcHMpe1xuICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXJTaGlwc1t2YWxdLnR5cGU9PT1nZXRUeXBlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBzW3ZhbF0uaXNIaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBsYXllclNoaXBzW3ZhbF0uc3VuaykgcGxheWVyQ291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBsYXllckNvdW50PT09MCkgcGxheWVyQm9hcmQuYm9hcmRTdW5rPXRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZihtb3ZlPT09MSl7XG4gICAgICAgIGxldCBtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgbGV0IG4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICBsZXQgUGxheWVyTW92ZSA9IEFJQm9hcmQucmVjZWl2ZUF0dGFjayhtLG4pO1xuICAgICAgICBpZighUGxheWVyTW92ZSkgY29udGludWU7XG4gICAgICAgIGVsc2UgaWYoUGxheWVyTW92ZSl7XG4gICAgICAgICAgICBtb3ZlID0gMDtcbiAgICAgICAgICAgIGxldCBnZXRUeXBlID0gQUlCb2FyZC5ib2FyZEFyclttXVtuXS5zaGlwVHlwZTtcbiAgICAgICAgICAgIGlmKGdldFR5cGU9PT11bmRlZmluZWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBmb3IobGV0IHZhbCBpbiBBSVNoaXBzKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoQUlTaGlwc1t2YWxdLnR5cGU9PT1nZXRUeXBlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFJU2hpcHNbdmFsXS5pc0hpdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoQUlTaGlwc1t2YWxdLnN1bmspIEFJQ291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKEFJQ291bnQ9PT0wKSBBSUJvYXJkLmJvYXJkU3Vuaz10cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5pZihwbGF5ZXJCb2FyZC5ib2FyZFN1bmspIGNvbnNvbGUubG9nKFwiQUkgd2luc1wiKVxuZWxzZSBjb25zb2xlLmxvZyhodW1hbi5wbGF5ZXJOYW1lK1wiIHdpbnNcIilcblxuY29uc29sZS5sb2cocGxheWVyUGxhY2UsIEFJUGxhY2UpO1xuY29uc29sZS5sb2cocGxheWVyQm9hcmQuYm9hcmRBcnIsIEFJQm9hcmQuYm9hcmRBcnIpO1xuY29uc29sZS5sb2cocGxheWVyU2hpcHMsIEFJU2hpcHMpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
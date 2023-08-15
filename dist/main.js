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




/***/ }),

/***/ "./src/dom/createGameboard.js":
/*!************************************!*\
  !*** ./src/dom/createGameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOM: () => (/* binding */ DOM)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _moves__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moves */ "./src/dom/moves.js");

;


let DOM = ( () => {

let startGame = document.getElementById('start-game');

startGame.addEventListener('click', e => {

    //enter player name
    ___WEBPACK_IMPORTED_MODULE_0__.human.playerName=document.getElementById('entername').value;
    document.getElementById('playername').remove();

    //create player gameboard
    let gamearea = document.createElement('div');
    gamearea.setAttribute('id','gamearea')
    document.getElementById('main').appendChild(gamearea);
    let plBoard = document.createElement('div');
    plBoard.setAttribute('id','plBoard')
    gamearea.appendChild(plBoard);

    let displaypl = document.createElement('div');
    displaypl.setAttribute('id','displaypl');
    displaypl.innerText = ___WEBPACK_IMPORTED_MODULE_0__.human.playerName+"'s Board";
    plBoard.appendChild(displaypl);
    for(let i=0; i<10; i++){
        let plrow = document.createElement('div');
        plrow.setAttribute('class','plrow');
        for(let j=0; j<10; j++){
            const plgrids=document.createElement('div');
            plgrids.setAttribute('class','plgrids');
            plgrids.setAttribute('id',"pl"+String(i)+String(j));
            plrow.appendChild(plgrids);
        }
        plBoard.appendChild(plrow);
    }

    for(let i=0; i<___WEBPACK_IMPORTED_MODULE_0__.playerBoard.boardArr.length; i++){
        for(let j=0; j<10; j++){
            if(___WEBPACK_IMPORTED_MODULE_0__.playerBoard.boardArr[i][j].isTaken){
                document.getElementById("pl"+String(i)+String(j)).setAttribute('style', 'background-color: '+'silver');
            }
        }
    }

    //create AI board
    let aiBoard = document.createElement('div');
    aiBoard.setAttribute('id','aiBoard')
    gamearea.appendChild(aiBoard);

    let displayAI = document.createElement('div');
    displayAI.setAttribute('id','displayAI');
    displayAI.innerText = "Computer's Board";
    aiBoard.appendChild(displayAI);
    for(let i=0; i<10; i++){
        let airow = document.createElement('div');
        airow.setAttribute('class','airow');
        for(let j=0; j<10; j++){
            const aigrids=document.createElement('div');
            aigrids.setAttribute('class','aigrids');
            aigrids.setAttribute('id',"ai"+String(i)+String(j));
            airow.appendChild(aigrids);
        }
        aiBoard.appendChild(airow);
    }
    (0,_moves__WEBPACK_IMPORTED_MODULE_1__.playerMove)();
    })

})();

/***/ }),

/***/ "./src/dom/moves.js":
/*!**************************!*\
  !*** ./src/dom/moves.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIMove: () => (/* binding */ AIMove),
/* harmony export */   playerMove: () => (/* binding */ playerMove)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");


function result(){
    document.getElementById('plBoard').remove();
    document.getElementById('aiBoard').remove();
    let message = document.createElement('div');
    message.setAttribute('class','alert');
    if(___WEBPACK_IMPORTED_MODULE_0__.AIBoard.boardSunk) message.innerText = ___WEBPACK_IMPORTED_MODULE_0__.human.playerName+" WINS!"
    else message.innerText = "YOU LOSE!"
    gamearea.appendChild(message);
}


function AIMove(){
    let m = Math.floor(Math.random()*10);
    let n = Math.floor(Math.random()*10);
    if((___WEBPACK_IMPORTED_MODULE_0__.playerBoard.boardArr[m][n].isTaken)&&(!___WEBPACK_IMPORTED_MODULE_0__.playerBoard.boardArr[m][n].marked)){
        let pl = document.getElementById("pl"+String(m)+String(n));
        pl.setAttribute('style', 'background-color: '+'red');
        (0,___WEBPACK_IMPORTED_MODULE_0__.AIPlay)(m,n);
        if(___WEBPACK_IMPORTED_MODULE_0__.playerBoard.boardSunk){ 
            console.log("AI wins")
            result();
            return true;
        }
        playerMove();
    }
    else if(!___WEBPACK_IMPORTED_MODULE_0__.playerBoard.boardArr[m][n].marked){
        let pl = document.getElementById("pl"+String(m)+String(n));
        pl.setAttribute('style', 'background-color: '+'purple');
        (0,___WEBPACK_IMPORTED_MODULE_0__.AIPlay)(m,n);
        if(___WEBPACK_IMPORTED_MODULE_0__.playerBoard.boardSunk){ 
            console.log("AI wins")
            result();
            return true;
        }
        playerMove();
    }
    else if(___WEBPACK_IMPORTED_MODULE_0__.playerBoard.boardArr[m][n].marked) AIMove();
}

function playerMove(){
    const eachGrid = document.getElementsByClassName('.aigrids');
    const gridHover = document.querySelectorAll('.aigrids');
    gridHover.forEach(eachGrid =>{
        eachGrid.addEventListener('click', e => {
            let id1 = Number(eachGrid.getAttribute('id').slice(2,3));
            let id2 = Number(eachGrid.getAttribute('id').slice(3,4));
            if((___WEBPACK_IMPORTED_MODULE_0__.AIBoard.boardArr[id1][id2].isTaken)&&(!___WEBPACK_IMPORTED_MODULE_0__.AIBoard.boardArr[id1][id2].marked)){
                eachGrid.setAttribute('style', 'background-color: '+'red');
                (0,___WEBPACK_IMPORTED_MODULE_0__.playerPlay)(id1,id2);
                if(___WEBPACK_IMPORTED_MODULE_0__.AIBoard.boardSunk){
                    console.log(___WEBPACK_IMPORTED_MODULE_0__.human.playerName+" wins")
                    eachGrid.removeEventListener('click', e);
                    result();
                    return true;
                }
                AIMove();
            }
            else if(!___WEBPACK_IMPORTED_MODULE_0__.AIBoard.boardArr[id1][id2].marked){
                eachGrid.setAttribute('style', 'background-color: '+'purple');
                (0,___WEBPACK_IMPORTED_MODULE_0__.playerPlay)(id1,id2);
                if(___WEBPACK_IMPORTED_MODULE_0__.AIBoard.boardSunk){
                    console.log(___WEBPACK_IMPORTED_MODULE_0__.human.playerName+" wins")
                    eachGrid.removeEventListener('click', e);
                    result();
                    return true;
                }
                AIMove();
            }
        })  
    })
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIBoard: () => (/* binding */ AIBoard),
/* harmony export */   AIPlay: () => (/* binding */ AIPlay),
/* harmony export */   human: () => (/* binding */ human),
/* harmony export */   playerBoard: () => (/* binding */ playerBoard),
/* harmony export */   playerPlay: () => (/* binding */ playerPlay)
/* harmony export */ });
/* harmony import */ var _app_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/ship */ "./src/app/ship.js");
/* harmony import */ var _app_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/gameboard */ "./src/app/gameboard.js");
/* harmony import */ var _app_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/player */ "./src/app/player.js");
/* harmony import */ var _dom_createGameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/createGameboard */ "./src/dom/createGameboard.js");
/* harmony import */ var _dom_moves__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/moves */ "./src/dom/moves.js");




;

//create ship

let human = new _app_player__WEBPACK_IMPORTED_MODULE_2__.player(), computer = new _app_player__WEBPACK_IMPORTED_MODULE_2__.player("AI")
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

let playerBoard = new _app_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboard(human.playerName), AIBoard = new _app_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboard(computer.playerName);
let playerPlace = [], AIPlace = [];
//create gameboard and place ships
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

let AICount = 5, playerCount=5;
let playerPlay = (a,b) => {
    let moveArr = (0,_dom_moves__WEBPACK_IMPORTED_MODULE_4__.playerMove)();
    let PlayerMove = AIBoard.receiveAttack(a,b);
    let getType = AIBoard.boardArr[a][b].shipType;
    if(getType!==undefined){
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

let AIPlay = (m,n) => {
    playerBoard.receiveAttack(m,n);
    let getType = playerBoard.boardArr[m][n].shipType;
    if(getType!==undefined){
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ekIscUJBQXFCLDJDQUFJOztBQUV6QjtBQUNBLGlCQUFpQiwyQ0FBSTtBQUNyQixpQkFBaUIsMkNBQUk7QUFDckIsaUJBQWlCLDJDQUFJO0FBQ3JCLGlCQUFpQiwyQ0FBSTtBQUNyQixpQkFBaUIsMkNBQUk7O0FBRXJCLHNCQUFzQixxREFBUyxrQ0FBa0MscURBQVM7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixvQkFBb0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixzREFBVTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ2hGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHAvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS9jcmVhdGVHYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20vbW92ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBnYW1lYm9hcmR7XG4gICAgY29uc3RydWN0b3IodmFsKXtcbiAgICAgICAgdGhpcy5ib2FyZFN1bmsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wbGF5ZXJOYW1lID0gdmFsO1xuICAgICAgICAvL2dlbmVyYXRlIDJkIGFycmF5XG4gICAgICAgIHRoaXMuYm9hcmRBcnIgPSBuZXcgQXJyYXkoMTApLmZpbGwoMCkubWFwKCgpID0+IG5ldyBBcnJheSgxMCkuZmlsbCgwKSk7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPDEwOyBpKyspe1xuICAgICAgICAgICAgZm9yKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZEFycltpXVtqXT17bWFya2VkOiBmYWxzZSwgaXNUYWtlbjogZmFsc2UsIHNoaXBUeXBlOiB0aGlzLnNoaXBUeXBlfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwbGFjZVNoaXAoc2l6ZSxhcnIpe1xuICAgICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBsZXQgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBsZXQgcG9zaXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgICAgLy8xLWhvcml6b250YWwgMC12ZXJ0aWNhbFxuICAgICAgICAvL2NoZWNrIGlmIHBhdGggaXMgZnJlZVxuICAgICAgICBpZihwb3NpdGlvbj09PTEpe1xuICAgICAgICAgICAgaWYoY29sK3NpemU+PTEwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBmb3IobGV0IGg9IGNvbCwgY291bnQ9MDsgY291bnQ8c2l6ZTsgaCsrKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkQXJyW3Jvd11baF0uaXNUYWtlbil7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goe3JvdyxofSk7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihwb3NpdGlvbj09PTApe1xuICAgICAgICAgICAgaWYocm93K3NpemU+PTEwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBmb3IobGV0IGs9IHJvdywgY291bnQ9MDsgY291bnQ8c2l6ZTsgaysrKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkQXJyW2tdW2NvbF0uaXNUYWtlbil7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goe2ssY29sfSk7XG4gICAgICAgICAgICAgICAgY291bnQrKzsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJlY2VpdmVBdHRhY2sobSxuKXtcbiAgICAgICAgaWYodGhpcy5ib2FyZEFyclttXVtuXS5tYXJrZWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRBcnJbbV1bbl0ubWFya2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBwbGF5ZXJ7XG4gICAgY29uc3RydWN0b3IodmFsKXtcbiAgICAgICAgdGhpcy5wbGF5ZXJOYW1lID0gdmFsO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3Mgc2hpcHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBzaXplKXtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICAgICAgdGhpcy5kYW1hZ2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYWNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpc0hpdCgpe1xuICAgICAgICB0aGlzLmhpdHMrKztcbiAgICAgICAgdGhpcy5kYW1hZ2VkPXRydWU7XG4gICAgICAgIGlmKHRoaXMuaGl0cz09PXRoaXMuc2l6ZSkgdGhpcy5zdW5rPXRydWU7XG4gICAgfVxufVxuXG5cbiIsImV4cG9ydCB7IERPTSB9XG5pbXBvcnQgeyBodW1hbiwgcGxheWVyQm9hcmQsIEFJQm9hcmQsIGdhbWVwbGF5IH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBBSU1vdmUsIHBsYXllck1vdmUgfSBmcm9tIFwiLi9tb3Zlc1wiO1xuXG5sZXQgRE9NID0gKCAoKSA9PiB7XG5cbmxldCBzdGFydEdhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtZ2FtZScpO1xuXG5zdGFydEdhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcblxuICAgIC8vZW50ZXIgcGxheWVyIG5hbWVcbiAgICBodW1hbi5wbGF5ZXJOYW1lPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRlcm5hbWUnKS52YWx1ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVybmFtZScpLnJlbW92ZSgpO1xuXG4gICAgLy9jcmVhdGUgcGxheWVyIGdhbWVib2FyZFxuICAgIGxldCBnYW1lYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhbWVhcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCdnYW1lYXJlYScpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKS5hcHBlbmRDaGlsZChnYW1lYXJlYSk7XG4gICAgbGV0IHBsQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbEJvYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCdwbEJvYXJkJylcbiAgICBnYW1lYXJlYS5hcHBlbmRDaGlsZChwbEJvYXJkKTtcblxuICAgIGxldCBkaXNwbGF5cGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXNwbGF5cGwuc2V0QXR0cmlidXRlKCdpZCcsJ2Rpc3BsYXlwbCcpO1xuICAgIGRpc3BsYXlwbC5pbm5lclRleHQgPSBodW1hbi5wbGF5ZXJOYW1lK1wiJ3MgQm9hcmRcIjtcbiAgICBwbEJvYXJkLmFwcGVuZENoaWxkKGRpc3BsYXlwbCk7XG4gICAgZm9yKGxldCBpPTA7IGk8MTA7IGkrKyl7XG4gICAgICAgIGxldCBwbHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwbHJvdy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywncGxyb3cnKTtcbiAgICAgICAgZm9yKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICAgICAgICBjb25zdCBwbGdyaWRzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcGxncmlkcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywncGxncmlkcycpO1xuICAgICAgICAgICAgcGxncmlkcy5zZXRBdHRyaWJ1dGUoJ2lkJyxcInBsXCIrU3RyaW5nKGkpK1N0cmluZyhqKSk7XG4gICAgICAgICAgICBwbHJvdy5hcHBlbmRDaGlsZChwbGdyaWRzKTtcbiAgICAgICAgfVxuICAgICAgICBwbEJvYXJkLmFwcGVuZENoaWxkKHBscm93KTtcbiAgICB9XG5cbiAgICBmb3IobGV0IGk9MDsgaTxwbGF5ZXJCb2FyZC5ib2FyZEFyci5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGZvcihsZXQgaj0wOyBqPDEwOyBqKyspe1xuICAgICAgICAgICAgaWYocGxheWVyQm9hcmQuYm9hcmRBcnJbaV1bal0uaXNUYWtlbil7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbFwiK1N0cmluZyhpKStTdHJpbmcoaikpLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogJysnc2lsdmVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL2NyZWF0ZSBBSSBib2FyZFxuICAgIGxldCBhaUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWlCb2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywnYWlCb2FyZCcpXG4gICAgZ2FtZWFyZWEuYXBwZW5kQ2hpbGQoYWlCb2FyZCk7XG5cbiAgICBsZXQgZGlzcGxheUFJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGlzcGxheUFJLnNldEF0dHJpYnV0ZSgnaWQnLCdkaXNwbGF5QUknKTtcbiAgICBkaXNwbGF5QUkuaW5uZXJUZXh0ID0gXCJDb21wdXRlcidzIEJvYXJkXCI7XG4gICAgYWlCb2FyZC5hcHBlbmRDaGlsZChkaXNwbGF5QUkpO1xuICAgIGZvcihsZXQgaT0wOyBpPDEwOyBpKyspe1xuICAgICAgICBsZXQgYWlyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWlyb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2Fpcm93Jyk7XG4gICAgICAgIGZvcihsZXQgaj0wOyBqPDEwOyBqKyspe1xuICAgICAgICAgICAgY29uc3QgYWlncmlkcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGFpZ3JpZHMuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2FpZ3JpZHMnKTtcbiAgICAgICAgICAgIGFpZ3JpZHMuc2V0QXR0cmlidXRlKCdpZCcsXCJhaVwiK1N0cmluZyhpKStTdHJpbmcoaikpO1xuICAgICAgICAgICAgYWlyb3cuYXBwZW5kQ2hpbGQoYWlncmlkcyk7XG4gICAgICAgIH1cbiAgICAgICAgYWlCb2FyZC5hcHBlbmRDaGlsZChhaXJvdyk7XG4gICAgfVxuICAgIHBsYXllck1vdmUoKTtcbiAgICB9KVxuXG59KSgpOyIsImltcG9ydCB7IGh1bWFuLCBwbGF5ZXJCb2FyZCwgQUlCb2FyZCwgcGxheWVyUGxheSwgQUlQbGF5fSBmcm9tIFwiLi5cIjtcblxuZnVuY3Rpb24gcmVzdWx0KCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsQm9hcmQnKS5yZW1vdmUoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWlCb2FyZCcpLnJlbW92ZSgpO1xuICAgIGxldCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnYWxlcnQnKTtcbiAgICBpZihBSUJvYXJkLmJvYXJkU3VuaykgbWVzc2FnZS5pbm5lclRleHQgPSBodW1hbi5wbGF5ZXJOYW1lK1wiIFdJTlMhXCJcbiAgICBlbHNlIG1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJZT1UgTE9TRSFcIlxuICAgIGdhbWVhcmVhLmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBBSU1vdmUoKXtcbiAgICBsZXQgbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgbGV0IG4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgIGlmKChwbGF5ZXJCb2FyZC5ib2FyZEFyclttXVtuXS5pc1Rha2VuKSYmKCFwbGF5ZXJCb2FyZC5ib2FyZEFyclttXVtuXS5tYXJrZWQpKXtcbiAgICAgICAgbGV0IHBsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbFwiK1N0cmluZyhtKStTdHJpbmcobikpO1xuICAgICAgICBwbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6ICcrJ3JlZCcpO1xuICAgICAgICBBSVBsYXkobSxuKTtcbiAgICAgICAgaWYocGxheWVyQm9hcmQuYm9hcmRTdW5rKXsgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFJIHdpbnNcIilcbiAgICAgICAgICAgIHJlc3VsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyTW92ZSgpO1xuICAgIH1cbiAgICBlbHNlIGlmKCFwbGF5ZXJCb2FyZC5ib2FyZEFyclttXVtuXS5tYXJrZWQpe1xuICAgICAgICBsZXQgcGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsXCIrU3RyaW5nKG0pK1N0cmluZyhuKSk7XG4gICAgICAgIHBsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogJysncHVycGxlJyk7XG4gICAgICAgIEFJUGxheShtLG4pO1xuICAgICAgICBpZihwbGF5ZXJCb2FyZC5ib2FyZFN1bmspeyBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQUkgd2luc1wiKVxuICAgICAgICAgICAgcmVzdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBwbGF5ZXJNb3ZlKCk7XG4gICAgfVxuICAgIGVsc2UgaWYocGxheWVyQm9hcmQuYm9hcmRBcnJbbV1bbl0ubWFya2VkKSBBSU1vdmUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllck1vdmUoKXtcbiAgICBjb25zdCBlYWNoR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJy5haWdyaWRzJyk7XG4gICAgY29uc3QgZ3JpZEhvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFpZ3JpZHMnKTtcbiAgICBncmlkSG92ZXIuZm9yRWFjaChlYWNoR3JpZCA9PntcbiAgICAgICAgZWFjaEdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGxldCBpZDEgPSBOdW1iZXIoZWFjaEdyaWQuZ2V0QXR0cmlidXRlKCdpZCcpLnNsaWNlKDIsMykpO1xuICAgICAgICAgICAgbGV0IGlkMiA9IE51bWJlcihlYWNoR3JpZC5nZXRBdHRyaWJ1dGUoJ2lkJykuc2xpY2UoMyw0KSk7XG4gICAgICAgICAgICBpZigoQUlCb2FyZC5ib2FyZEFycltpZDFdW2lkMl0uaXNUYWtlbikmJighQUlCb2FyZC5ib2FyZEFycltpZDFdW2lkMl0ubWFya2VkKSl7XG4gICAgICAgICAgICAgICAgZWFjaEdyaWQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiAnKydyZWQnKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJQbGF5KGlkMSxpZDIpO1xuICAgICAgICAgICAgICAgIGlmKEFJQm9hcmQuYm9hcmRTdW5rKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaHVtYW4ucGxheWVyTmFtZStcIiB3aW5zXCIpXG4gICAgICAgICAgICAgICAgICAgIGVhY2hHcmlkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQUlNb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKCFBSUJvYXJkLmJvYXJkQXJyW2lkMV1baWQyXS5tYXJrZWQpe1xuICAgICAgICAgICAgICAgIGVhY2hHcmlkLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogJysncHVycGxlJyk7XG4gICAgICAgICAgICAgICAgcGxheWVyUGxheShpZDEsaWQyKTtcbiAgICAgICAgICAgICAgICBpZihBSUJvYXJkLmJvYXJkU3Vuayl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGh1bWFuLnBsYXllck5hbWUrXCIgd2luc1wiKVxuICAgICAgICAgICAgICAgICAgICBlYWNoR3JpZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGUpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEFJTW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSAgXG4gICAgfSlcbn1cbiIsImltcG9ydCB7IHNoaXAgfSBmcm9tIFwiLi9hcHAvc2hpcFwiO1xuaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSBcIi4vYXBwL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSBcIi4vYXBwL3BsYXllclwiO1xuZXhwb3J0IHtodW1hbiwgcGxheWVyQm9hcmQsIEFJQm9hcmQsIHBsYXllclBsYXksIEFJUGxheX1cbmltcG9ydCB7IERPTSB9IGZyb20gXCIuL2RvbS9jcmVhdGVHYW1lYm9hcmRcIjtcbmltcG9ydCB7IHBsYXllck1vdmUgfSBmcm9tIFwiLi9kb20vbW92ZXNcIjtcbi8vY3JlYXRlIHNoaXBcblxubGV0IGh1bWFuID0gbmV3IHBsYXllcigpLCBjb21wdXRlciA9IG5ldyBwbGF5ZXIoXCJBSVwiKVxubGV0IHBsYXllclNoaXBzID0gW107XG5wbGF5ZXJTaGlwcy5wdXNoKG5ldyBzaGlwKCdDYXJyaWVyJyw1KSk7XG5wbGF5ZXJTaGlwcy5wdXNoKG5ldyBzaGlwKCdCYXR0bGVzaGlwJyw0KSk7XG5wbGF5ZXJTaGlwcy5wdXNoKG5ldyBzaGlwKCdEZXN0cm95ZXInLDMpKTtcbnBsYXllclNoaXBzLnB1c2gobmV3IHNoaXAoJ1N1Ym1hcmluZScsMykpO1xucGxheWVyU2hpcHMucHVzaChuZXcgc2hpcCgnUGF0cm9sIEJvYXQnLDIpKTtcblxubGV0IEFJU2hpcHMgPSBbXTtcbkFJU2hpcHMucHVzaChuZXcgc2hpcCgnQ2FycmllcicsNSkpO1xuQUlTaGlwcy5wdXNoKG5ldyBzaGlwKCdCYXR0bGVzaGlwJyw0KSk7XG5BSVNoaXBzLnB1c2gobmV3IHNoaXAoJ0Rlc3Ryb3llcicsMykpO1xuQUlTaGlwcy5wdXNoKG5ldyBzaGlwKCdTdWJtYXJpbmUnLDMpKTtcbkFJU2hpcHMucHVzaChuZXcgc2hpcCgnUGF0cm9sIEJvYXQnLDIpKTtcblxubGV0IHBsYXllckJvYXJkID0gbmV3IGdhbWVib2FyZChodW1hbi5wbGF5ZXJOYW1lKSwgQUlCb2FyZCA9IG5ldyBnYW1lYm9hcmQoY29tcHV0ZXIucGxheWVyTmFtZSk7XG5sZXQgcGxheWVyUGxhY2UgPSBbXSwgQUlQbGFjZSA9IFtdO1xuLy9jcmVhdGUgZ2FtZWJvYXJkIGFuZCBwbGFjZSBzaGlwc1xuZnVuY3Rpb24gZ2FtZVNoaXBzKGJvYXJkLCBwbGFjZSwgc2hpcHMpe1xuICAgIGZvcihsZXQgaT0wOyBpPHNoaXBzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IHRyYWNrUGxhY2UgPSBbXTtcbiAgICB3aGlsZSghc2hpcHNbaV0ucGxhY2VkKXtcbiAgICAgICAgbGV0IGNoZWNrID0gYm9hcmQucGxhY2VTaGlwKHNoaXBzW2ldLnNpemUsdHJhY2tQbGFjZSk7XG4gICAgICAgIGlmKCFjaGVjaykgdHJhY2tQbGFjZSA9IFtdO1xuICAgICAgICBpZihjaGVjaykgc2hpcHNbaV0ucGxhY2VkPXRydWU7XG4gICAgfVxuICAgIHBsYWNlLnB1c2godHJhY2tQbGFjZSk7XG4gICAgICAgIGZvcihsZXQgaj0wOyBqPHRyYWNrUGxhY2UubGVuZ3RoO2orKyl7XG4gICAgICAgICAgICBpZih0cmFja1BsYWNlW2pdLmhhc093blByb3BlcnR5KCdyb3cnKSl7XG4gICAgICAgICAgICAgICAgYm9hcmQuYm9hcmRBcnJbdHJhY2tQbGFjZVtqXS5yb3ddW3RyYWNrUGxhY2Vbal0uaF0uaXNUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgYm9hcmQuYm9hcmRBcnJbdHJhY2tQbGFjZVtqXS5yb3ddW3RyYWNrUGxhY2Vbal0uaF0uc2hpcFR5cGUgPSBzaGlwc1tpXS50eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodHJhY2tQbGFjZVtqXS5oYXNPd25Qcm9wZXJ0eSgnY29sJykpe1xuICAgICAgICAgICAgICAgIGJvYXJkLmJvYXJkQXJyW3RyYWNrUGxhY2Vbal0ua11bdHJhY2tQbGFjZVtqXS5jb2xdLmlzVGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJvYXJkLmJvYXJkQXJyW3RyYWNrUGxhY2Vbal0ua11bdHJhY2tQbGFjZVtqXS5jb2xdLnNoaXBUeXBlID0gc2hpcHNbaV0udHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiB9XG5nYW1lU2hpcHMocGxheWVyQm9hcmQscGxheWVyUGxhY2UscGxheWVyU2hpcHMpO1xuZ2FtZVNoaXBzKEFJQm9hcmQsQUlQbGFjZSxBSVNoaXBzKTtcblxubGV0IEFJQ291bnQgPSA1LCBwbGF5ZXJDb3VudD01O1xubGV0IHBsYXllclBsYXkgPSAoYSxiKSA9PiB7XG4gICAgbGV0IG1vdmVBcnIgPSBwbGF5ZXJNb3ZlKCk7XG4gICAgbGV0IFBsYXllck1vdmUgPSBBSUJvYXJkLnJlY2VpdmVBdHRhY2soYSxiKTtcbiAgICBsZXQgZ2V0VHlwZSA9IEFJQm9hcmQuYm9hcmRBcnJbYV1bYl0uc2hpcFR5cGU7XG4gICAgaWYoZ2V0VHlwZSE9PXVuZGVmaW5lZCl7XG4gICAgICAgIGZvcihsZXQgdmFsIGluIEFJU2hpcHMpe1xuICAgICAgICAgICAgaWYoQUlTaGlwc1t2YWxdLnR5cGU9PT1nZXRUeXBlKXtcbiAgICAgICAgICAgIEFJU2hpcHNbdmFsXS5pc0hpdCgpO1xuICAgICAgICAgICAgaWYoQUlTaGlwc1t2YWxdLnN1bmspIEFJQ291bnQtLTtcbiAgICAgICAgICAgIGlmKEFJQ291bnQ9PT0wKSBBSUJvYXJkLmJvYXJkU3Vuaz10cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmxldCBBSVBsYXkgPSAobSxuKSA9PiB7XG4gICAgcGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhtLG4pO1xuICAgIGxldCBnZXRUeXBlID0gcGxheWVyQm9hcmQuYm9hcmRBcnJbbV1bbl0uc2hpcFR5cGU7XG4gICAgaWYoZ2V0VHlwZSE9PXVuZGVmaW5lZCl7XG4gICAgICAgIGZvcihsZXQgdmFsIGluIHBsYXllclNoaXBzKXtcbiAgICAgICAgICAgIGlmKHBsYXllclNoaXBzW3ZhbF0udHlwZT09PWdldFR5cGUpe1xuICAgICAgICAgICAgcGxheWVyU2hpcHNbdmFsXS5pc0hpdCgpO1xuICAgICAgICAgICAgaWYocGxheWVyU2hpcHNbdmFsXS5zdW5rKSBwbGF5ZXJDb3VudC0tO1xuICAgICAgICAgICAgaWYocGxheWVyQ291bnQ9PT0wKSBwbGF5ZXJCb2FyZC5ib2FyZFN1bms9dHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
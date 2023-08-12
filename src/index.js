import { ship } from "./app/ship";
import { gameboard } from "./app/gameboard";
import { player } from "./app/player";

//create ship
let human = new player("mike")
let computer = new player("AI")

let playerShips = [];
playerShips.push(new ship('Carrier',5));
playerShips.push(new ship('Battleship',4));
playerShips.push(new ship('Destroyer',3));
playerShips.push(new ship('Submarine',3));
playerShips.push(new ship('Patrol Boat',2));

let AIShips = [];
AIShips.push(new ship('Carrier',5));
AIShips.push(new ship('Battleship',4));
AIShips.push(new ship('Destroyer',3));
AIShips.push(new ship('Submarine',3));
AIShips.push(new ship('Patrol Boat',2));

//create gameboard
let playerBoard = new gameboard(human.playerName);
let AIBoard = new gameboard(computer.playerName);
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

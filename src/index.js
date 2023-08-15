import { ship } from "./app/ship";
import { gameboard } from "./app/gameboard";
import { player } from "./app/player";
export {human, playerBoard, AIBoard, playerPlay, AIPlay}
import { DOM } from "./dom/createGameboard";
import { playerMove } from "./dom/moves";
//create ship

let human = new player(), computer = new player("AI")
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

let playerBoard = new gameboard(human.playerName), AIBoard = new gameboard(computer.playerName);
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
    let moveArr = playerMove();
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


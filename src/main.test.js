import { ship } from "./app/ship";
import { gameboard } from "./app/gameboard";

//ship
let playerShips = [];
playerShips.push(new ship('Carrier',5));
playerShips.push(new ship('Battleship',4));
playerShips.push(new ship('Destroyer',3));
playerShips.push(new ship('Submarine',3));
playerShips.push(new ship('Patrol Boat',2));

describe ('createShip', () => {

test('create carrier ship', () => {
    expect(playerShips[0].type).toBe('Carrier')
})

test('show ship size', () => {
    expect(playerShips[2].size).toBe(3)
})

test('check if ship is hit', () => {
    playerShips[0].isHit();
    expect(playerShips[0].damaged).toBe(true);
    expect(playerShips[0].hits).toBe(1);
})

test('check if ship is sunk', () => {
    playerShips[0].isHit();
    playerShips[0].isHit();
    playerShips[0].isHit();
    playerShips[0].isHit();
    expect(playerShips[0].sunk).toBe(true);
    expect(playerShips[0].hits).toBe(playerShips[0].size);
})

});

//gameboard
let board = new gameboard();
let place = [];

describe('placeship', () => {
    test('length of placed tiles to equal ship length', () => {
    for(let i=0; i<playerShips.length; i++){
        let trackPlace = [];
       while(playerShips[i].placed===false){
        let check = board.placeShip(playerShips[i].size,trackPlace);
        if(check===false) trackPlace = [];
        if(check===true) playerShips[i].placed=true;
       }
       place.push(trackPlace);
        for(let j=0; j<trackPlace.length;j++){
            if(trackPlace[j].row){
                board.boardArr[trackPlace[j].row][trackPlace[j].k].isTaken = true;
                }
            if(trackPlace[j].col){
                board.boardArr[trackPlace[j].k][trackPlace[j].col].isTaken = true;
            }
        }
       expect(trackPlace.length).toBe(playerShips[i].size);
    }
    })
    test('place isTaken', () => {
        for(let i=0; i<place.length; i++){
            if(place[i].row) expect(board.boardArr[place[i].row][place[i].k].isTaken).toBe(true);
            if(place[i].col) expect(board.boardArr[place[i].k][place[i].col].isTaken).toBe(true);
        }
    })
    test('attack', () => {
        board.receiveAttack(2,9)
        expect(board.boardArr[2][9].marked).toBe(true);
    })
});
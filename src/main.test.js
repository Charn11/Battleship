import { ship } from "./app/ship";


//ship
describe ('createShip()', () => {

let playerShips = [];
playerShips.push(new ship('Carrier',5));
playerShips.push(new ship('Battleship',4));
playerShips.push(new ship('Destroyer',3));
playerShips.push(new ship('Submarine',3));
playerShips.push(new ship('Patrol Boat',2));

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
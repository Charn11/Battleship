import { ship } from "./app/ship";

let playerShips = [];
playerShips.push(new ship('Carrier',5));
playerShips.push(new ship('Battleship',4));
playerShips.push(new ship('Destroyer',3));
playerShips.push(new ship('Submarine',3));
playerShips.push(new ship('Patrol Boat',2));
console.log(playerShips)
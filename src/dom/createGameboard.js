export { DOM }
import { human, playerBoard, AIBoard, gameplay } from "..";
import { AIMove, playerMove } from "./moves";

let DOM = ( () => {

let startGame = document.getElementById('start-game');

startGame.addEventListener('click', e => {

    //enter player name
    human.playerName=document.getElementById('entername').value;
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
    displaypl.innerText = human.playerName+"'s Board";
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

    for(let i=0; i<playerBoard.boardArr.length; i++){
        for(let j=0; j<10; j++){
            if(playerBoard.boardArr[i][j].isTaken){
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
    playerMove();
    })

})();
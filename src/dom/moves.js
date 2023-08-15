import { human, playerBoard, AIBoard, playerPlay, AIPlay} from "..";

function result(){
    document.getElementById('plBoard').remove();
    document.getElementById('aiBoard').remove();
    let message = document.createElement('div');
    message.setAttribute('class','alert');
    if(AIBoard.boardSunk) message.innerText = human.playerName+" WINS!"
    else message.innerText = "YOU LOSE!"
    gamearea.appendChild(message);
}


export function AIMove(){
    let m = Math.floor(Math.random()*10);
    let n = Math.floor(Math.random()*10);
    if((playerBoard.boardArr[m][n].isTaken)&&(!playerBoard.boardArr[m][n].marked)){
        let pl = document.getElementById("pl"+String(m)+String(n));
        pl.setAttribute('style', 'background-color: '+'red');
        AIPlay(m,n);
        if(playerBoard.boardSunk){ 
            console.log("AI wins")
            result();
            return true;
        }
        playerMove();
    }
    else if(!playerBoard.boardArr[m][n].marked){
        let pl = document.getElementById("pl"+String(m)+String(n));
        pl.setAttribute('style', 'background-color: '+'purple');
        AIPlay(m,n);
        if(playerBoard.boardSunk){ 
            console.log("AI wins")
            result();
            return true;
        }
        playerMove();
    }
    else if(playerBoard.boardArr[m][n].marked) AIMove();
}

export function playerMove(){
    const eachGrid = document.getElementsByClassName('.aigrids');
    const gridHover = document.querySelectorAll('.aigrids');
    gridHover.forEach(eachGrid =>{
        eachGrid.addEventListener('click', e => {
            let id1 = Number(eachGrid.getAttribute('id').slice(2,3));
            let id2 = Number(eachGrid.getAttribute('id').slice(3,4));
            if((AIBoard.boardArr[id1][id2].isTaken)&&(!AIBoard.boardArr[id1][id2].marked)){
                eachGrid.setAttribute('style', 'background-color: '+'red');
                playerPlay(id1,id2);
                if(AIBoard.boardSunk){
                    console.log(human.playerName+" wins")
                    eachGrid.removeEventListener('click', e);
                    result();
                    return true;
                }
                AIMove();
            }
            else if(!AIBoard.boardArr[id1][id2].marked){
                eachGrid.setAttribute('style', 'background-color: '+'purple');
                playerPlay(id1,id2);
                if(AIBoard.boardSunk){
                    console.log(human.playerName+" wins")
                    eachGrid.removeEventListener('click', e);
                    result();
                    return true;
                }
                AIMove();
            }
        })  
    })
}

export class gameboard{
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
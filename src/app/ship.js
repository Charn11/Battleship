export class ship{
    constructor(type, size){
        this.type = type;
        this.size = size;
        this.hits = 0;
        this.damaged = false;
        this.sunk = false;
    }
    isHit(){
        this.hits++;
        this.damaged=true;
        if(this.hits===this.size) this.sunk=true;
    }
}



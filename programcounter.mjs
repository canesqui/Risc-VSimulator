export class ProgramCounter {
    
    constructor() {  
        this.counter = 0;
        this.reset = true;                 
    }

    set(pc) {
        this.reset = false;
        this.pc = pc;        
      } 

    get(){        
        if(this.reset){                        
            return 400000;
        }else{
            return this.pc;
        }
    }

    reset(){
        this.reset = true;
    }
}              
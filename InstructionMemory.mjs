import * as convert from './convertBase.js';

export class InstructionMemory {
    
    constructor() {  
        this.memory= [];
        for (var i=0;i<=5000;i++){
            this.memory.push(convert.dec2bin(i.toString().padStart(32,0)));        
        }        
    }

    get(memoryOffSet) {
        //console.log('IM memory offset '+ memoryOffSet);
        let index = (Number(memoryOffSet)-400000);
        //console.log('IM '+index);
        index = (index>0) ? index/4: 0;
        //console.log('IM after calc '+index);
        return this.memory[index];        
      }          
}
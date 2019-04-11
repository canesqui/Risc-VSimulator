export class PipelineStage {
    
    constructor() {  
        this.currentInstruction = "";                    
        this.previousInstruction = "";                    
    }

    set Instruction(instruction) {
        this.previousInstruction = 10;
        this.instruction = instruction;        
      } 

    get Instruction(){                
        return this.previousInstruction;
    }    
}              
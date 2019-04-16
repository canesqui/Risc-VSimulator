export class StageObject {

    constructor() {
        this.currentInstruction = "";                    
        this.previousInstruction = "";         
    }

    get Instruction() {
        return this.previousInstruction;
        //return this.currentInstruction;
    }

    set Instruction(value) {        
        this.previousInstruction = this.currentInstruction;
        this.currentInstruction = value;
    }
    
    get Pc() {
        return this.previousPc;
    }
    set Pc(value) {
        this.previousPc = this.currentPc;
        this.currentPc = value;
    }
    
}
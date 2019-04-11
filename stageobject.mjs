export class StageObject {

    constructor() {
        this.currentInstruction = "";                    
        this.previousInstruction = ""; 
        this.pc = 0;
    }

    get Instruction() {
        return this.previousInstruction;
    }
    set Instruction(value) {        
        this.previousInstruction = JSON.parse(JSON.stringify(this.currentInstruction));
        this.currentInstruction = value;
    }
    
    get Pc() {
        return this.pc;
    }
    set Pc(value) {
        this.pc = value;
    }
    
}
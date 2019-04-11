import { StageObject } from './stageobject.mjs';

export class StageExMem extends StageObject {
    
    set Zero(value){
        this.zero = value;
    }

    get Zero(){
        return this.zero;
    }

    set ReadData2(value){
        this.readData2 = value;
    }

    get ReadData2(){
        return this.readData2;
    }

    set ALUResult(value){
        this.aluResult = value;
    }

    get ALUResult(){
        return this.aluResult;
    }

    set Rs2(value){
        this.rs2 = value;
    }

    get Rs2(){
        return this.rs2;
    }

    set Rd(value){
        this.rd = value;
    }

    get Rd(){
        return this.rd;
    }
}
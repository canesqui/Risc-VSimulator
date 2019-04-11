import { StageObject } from './stageobject.mjs';

export class StageMemWb extends StageObject {

    set ReadData(value){
        this.readData = value;
    }

    get ReadData(){
        return this.readData;
    }

    set ALUResult(value){
        this.aluResult = value;
    }

    get ALUResult(){
        return this.aluResult;
    }

    set Rd(value){
        this.rd = value;
    }

    get Rd(){
        return this.rd;
    }
}
import { StageObject } from './stageobject.mjs';

export class StageMemWb extends StageObject {

    set ReadData(value){
        this.previousReadData = this.currentReadData;
        this.currentReadData = value;
    }

    get ReadData(){
        return this.previousReadData;
    }

    set ALUResult(value){
        this.previousALUResult = this.currentALUResult;
        this.currentALUResult = value;
    }

    get ALUResult(){
        return this.previousALUResult;
    }

    set Rd(value){
        this.previousRd = this.currentRd;
        this.currentRd = value;
    }

    get Rd(){
        return this.previousRd;
    }
}
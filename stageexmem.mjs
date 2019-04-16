import { StageObject } from './stageobject.mjs';

export class StageExMem extends StageObject {

    set Branch(value){
        this.previousBranch = this.currentBranch;
        this.currentBranch = value;
    }

    get Branch(){
        return this.previousBranch;
    }
        
    set MemWrite(value){
        this.previousMemWrite = this.currentMemWrite;
        this.currentMemWrite = value;
    }

    get MemWrite(){
        return this.previousMemWrite;
    }

    set MemRead(value){
        this.previousMemRead = this.currentMemRead;
        this.currentMemRead = value;
    }

    get MemRead(){
        return this.previousMemRead;
    }    

    set JumpBranchAddResult(value){
        this.previousJumpBranchAddResult = this.currentJumpBranchAddResult;
        this.currentJumpBranchAddResult = value;
    }

    get JumpBranchAddResult(){
        return this.previousJumpBranchAddResult;
    }

    set Zero(value){
        this.previousZero = this.currentZero;
        this.currentZero = value;
    }

    get Zero(){
        return this.previousZero;
    }
   
    set ALUResult(value){
        this.previousALUResult = this.currentALUResult;
        this.currentALUResult = value;
    }

    get ALUResult(){
        return this.previousALUResult;
    }

    set ReadData2(value){
        this.previousReadData2 = this.currentReadData2;
        this.currentReadData2 = value;
    }

    get ReadData2(){
        return this.previousReadData2;
    }

    set Rs2(value){
        this.previousRs2 = this.currentRs2;
        this.currentRs2 = value;
    }

    get Rs2(){
        return this.previousRs2;
    }

    set Rd(value){
        this.previousRd = this.currentRd;
        this.currentRd = value;
    }

    get Rd(){
        return this.previousRd;
    }
}
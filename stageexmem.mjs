import { StageObject } from './stageobject.mjs';

export class StageExMem extends StageObject {
   
    set Branch(value){
        this.branch = value;
    }

    get Branch(){
        return this.branch;
    }
        
    set MemWrite(value){
        this.memWrite = value;
    }

    get MemWrite(){
        return this.memWrite;
    }

    set MemRead(value){
        this.memRead = value;
    }

    get MemRead(){
        return this.memRead;
    }

    set JumpBranchAddResult(value){
        this.jumpBranchAddResult = value;
    }

    get JumpBranchAddResult(){
        return this.jumpBranchAddResult;
    }

    set Zero(value){
        this.zero = value;
    }

    get Zero(){
        return this.zero;
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
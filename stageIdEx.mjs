import { StageObject } from './stageobject.mjs';

export class StageIdEx extends StageObject {
    
    set Instruction64(value){
        this.previousInstruction64 = this.currentInstruction64;
        this.currentInstruction64 = value;
    }

    get Instruction64(){
        return this.previousInstruction64;
    }

    set ReadData1(value){
        this.previousReadData1 = this.currentReadData1;
        this.currentReadData1 = value;
    }

    get ReadData1(){
        return this.previousReadData1;
    }

    set ReadData2(value){
        this.previousReadData2 = this.currentReadData2;
        this.currentReadData2 = value;
    }

    get ReadData2(){
        return this.previousReadData2;
    }
    
    set Funct3(value){
        this.previousFunct3 = this.currentFunct3;
        this.currentFunct3 = value;
    }

    get Funct3(){
        return this.previousFunct3;
    }

    set RegWrite(value){
        this.previousRegWrite = this.currentRegWrite;
        this.currentRegWrite = value;
    }

    get RegWrite(){
        return this.previousRegWrite;
    }

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

    set MemToReg(value){
        this.previousMemToReg = this.currentMemToReg;
        this.currentMemToReg = value;
    }

    get MemToReg(){
        return this.previousMemToReg;
    }
    
    /*
    set Rs1(value){
        this.rs1 = value;
    }

    get Rs1(){
        return this.rs1;
    }

    set Rs2(value){
        this.rs2 = value;
    }

    get Rs2(){
        return this.rs2;
    }
    */

    set ALUSrc(value){
        this.previousALUSrc = this.currentALUSrc;
        this.currentALUSrc = value;
    }

    get ALUSrc(){
        return this.previousALUSrc;
    }

    set ALUOp(value){
        this.previousALUOp = this.currentALUOp;
        this.currentALUOp = value;
    }

    get ALUOp(){
        return this.previousALUOp;
    }    

    set Rd(value){
        this.previousRd = this.currentRd;
        this.currentRd = value;
    }

    get Rd(){
        return this.previousRd;
    }
}
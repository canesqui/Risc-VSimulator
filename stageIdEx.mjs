import { StageObject } from './stageobject.mjs';

export class StageIdEx extends StageObject {
    
    set ReadData1(value){
        this.readData1 = value;
    }

    get ReadData1(){
        return this.readData1;
    }

    set ReadData2(value){
        this.readData2 = value;
    }

    get ReadData2(){
        return this.readData2;
    }
    
    set Func3(value){
        this.func3 = value;
    }

    get Func3(){
        return this.func3;
    }

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
        this.aluSrc = value;
    }

    get ALUSrc(){
        return this.aluSrc;
    }

    set ALUOp(value){
        this.aluOp = value;
    }

    get ALUOp(){
        return this.aluOp;
    }

    set Rd(value){
        this.rd = value;
    }

    get Rd(){
        return this.rd;
    }
}
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

    set Rd(value){
        this.rd = value;
    }

    get Rd(){
        return this.rd;
    }
}
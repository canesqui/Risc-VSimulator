import * as convert from './convertBase.js';   

export class RegisterFile {

    constructor() {
        this.data = new Array(32);
        for(let i=0;i<32;i++){
            this.data[i] = convert.dec2bin(1000+i);
        }
        this.writeRegister = "";
        this.writeData = "";
        this.regWrite = "";
    }

    Data(register){
        console.log("Register File Data method");
        console.log(register);
        console.log(convert.bin2dec(register));        
        let arrayIndex = convert.bin2dec(register);
        console.log(arrayIndex);
        console.log(this.data[arrayIndex]);
        return this.data[arrayIndex];
    }

    set WriteData(data){
        this.ExecWrite();
        this.writeData = data;
    }

    set WriteRegister(register){
        this.ExecWrite();
        this.writeRegister = register;
    }

    set RegWrite(value){
        this.ExecWrite();
        this.regWrite = value;
    }

    ExecWrite(){
        if(this.writeData !=="" && 
            this.writeRegister !== "" &&
            this.regWrite !== ""){
                let arrayIndex = convert.bin2dec(writeRegister);
                this.data[arrayIndex] = this.writeData;
                this.writeData = "";
                this.writeRegister = "";
                this.regWrite = "";
            }

    } 
}
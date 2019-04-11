import * as convert from './convertBase.js';   

export class RegisterFile {

    constructor() {
        this.data = new Array(32);
        for(let i=0;i<32;i++){
            this.data[i] = 0;
        }
        this.writeRegister = "";
        this.writeData = "";
        this.regWrite = "";
    }

    Data(register){
        console.log("Register File Data method");
        console.log(register);
        console.log(convert.bin2dec(register));
        console.log(this.data[1]);
        let arrayIndex = convert.bin2dec(register);
        return this.data[arrayIndex];
    }

    set WriteData(register){
        ExecWrite();
        this.writeData = register;
    }

    set WriteRegister(register){
        ExecWrite();
        this.writeRegister = register;
    }

    set RegWrite(value){
        ExecWrite();
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
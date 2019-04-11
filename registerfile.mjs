import * as convert from './convertBase.js';   

export class RegisterFile {

    constructor() {
        this.data = [];
        this.writeRegister = "";
        this.writeData = "";
    }

    Data(register){
        let arrayIndex = convert.bin2dec(register);
        return this.data[arrayIndex];
    }

    set WriteData(register){
        this.writeData = register;
    }

    set WriteRegister(register){
        this.writeRegister = register;
    }

    WriteReg(){
        let arrayIndex = convert.bin2dec(writeRegister);
        this.data[arrayIndex] = this.writeData;
        this.writeData = "";
        this.writeRegister = "";
    }
}
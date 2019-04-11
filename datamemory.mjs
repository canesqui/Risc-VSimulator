import * as convert from './convertBase.js';   

export class DataMemory {

    constructor() {
        this.data = [];            
    }

    ReadData(address){        
        let arrayIndex = convert.bin2dec(address);
        return this.data[arrayIndex];
    }

    WriteData(address, data){
        let arrayIndex = convert.bin2dec(address);
        return this.data[arrayIndex];
    }    
}
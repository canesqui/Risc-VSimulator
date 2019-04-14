import * as convert from './convertBase.js';   

export class DataMemory {

    constructor() {
        this.data = [];            
    }

    ReadData(address){        
        //let arrayIndex = convert.bin2dec(address);
        //return this.data[arrayIndex];
        //let index = (Number(address)-400000);
        let index = (convert.bin2dec(address)-400000);
        //console.log('IM '+index);
        index = (index>0) ? index/4: 0;
        //console.log('IM after calc '+index);
        return this.data[index];
    }

    WriteData(address, data){
        //let arrayIndex = convert.bin2dec(address);
        //return this.data[arrayIndex];
        let index = (Number(address)-400000);
        //console.log('IM '+index);
        index = (index>0) ? index/4: 0;
        this.data[index] = data;
        //console.log('IM after calc '+index);
    }    
}
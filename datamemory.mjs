import * as convert from './convertBase.js';   

export class DataMemory {

    constructor() {
        this.data = [];            
        for (let i = 0; i < 10000; i++) {
            this.data[i] = convert.dec2bin(1000+i);         
        }
    }

    ReadData(address){        
        //let arrayIndex = convert.bin2dec(address);
        //return this.data[arrayIndex];
        //let index = (Number(address)-400000);
        console.log("Read data");
        console.log(convert.bin2dec(address));
        let index = (Number(convert.bin2dec(address)));
        console.log('IM '+index);
        console.log(this.data[index]);
        //index = (index>0) ? index/4: 0;
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
import * as convert from './convertBase.js';

export class InstructionMemory {

    constructor() {
        this.memory = [];
        //00000000011100110000001010110011
        //00000000101001001000010000110011
        //00000000110101100000010110110011

        //00000001000001111000011100110011
        //00000001001110010000100010110011
        
        /*
        this.memory.push("00000000011100110000001010110011");
        this.memory.push("00000000101001001000010000110011");
        this.memory.push("00000000110101100000010110110011");
        this.memory.push("00000001000001111000011100110011");
        this.memory.push("00000001001110010000100010110011");
*/

        this.memory.push("00111110100000000000001010010011");
        this.memory.push("00111110100000000000001100010011");
        this.memory.push("00000000011000101000010001100011");
        this.memory.push("00111110100000000000001110010011");
        this.memory.push("01010000100100001010000000100011");
        for (var i = 5; i <= 5000; i++) {
            this.memory.push(convert.dec2bin(i.toString().padStart(32, 0)));
        }
    }

    get(memoryOffSet) {
        //console.log('IM memory offset '+ memoryOffSet);
        let index = (convert.bin2dec(memoryOffSet) - 400000);
        //console.log('IM '+index);
        index = (index > 0) ? index / 4 : 0;
        //console.log('IM after calc '+index);
        return this.memory[index];
    }
}
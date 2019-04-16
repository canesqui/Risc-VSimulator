import * as convert from './convertBase.js';

export class Alu {

    constructor() {
    }

    Operation(operationType, inputA, inputB) {
        
        switch (operationType) {
            case 'Add':      
                return convert.dec2bin(Number(convert.bin2dec(inputA))+Number(convert.bin2dec(inputB)));
                //break;
            case 'Mult':
                return convert.dec2bin(Number(convert.bin2dec(inputA))*Number(convert.bin2dec(inputB)));
            case 'Div':
                return convert.dec2bin(Number(convert.bin2dec(inputA))/Number(convert.bin2dec(inputB)));
            default:
                return 0;
        }
    }
}
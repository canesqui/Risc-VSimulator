import * as convert from './convertBase.js';

export function AluAdder(inputA, inputB) {        
        return convert.dec2bin(Number(convert.bin2dec(inputA)) + Number(convert.bin2dec(inputB)));
}
import * as convert from './convertBase.js';


class Result {
    set Zero(value){
        this.zero = value;
    }
    get Zero(){
        return this.zero;
    }
    set Res(value){
        this.res = value;
    }
    get Res(){
        return this.res;
    }

}
export class AluMain  {

    constructor() {
        this.result = new Result();
        this.result.Res = "";
        this.result.Zero = "";
    }

    Operation(aluControl, inputA, inputB) {
        
        switch (aluControl) {
            //Add  
            case '0000':
                this.result.Res = convert.dec2bin(Number(convert.bin2dec(inputA)) + Number(convert.bin2dec(inputB)));
                this.result.Zero = 0;
                return this.result;
            //Sll    
            case '0001':
                this.result.Res = convert.dec2bin(Number(convert.bin2dec(inputA)) << Number(convert.bin2dec(inputB)));
                this.result.Zero = 0;
                return this.result;
            //A<B?1:0    
            case '0010':
                return (Number(convert.bin2dec(inputA)) < Number(convert.bin2dec(inputB)) ? 1 : 0);
            //Xor    
            case '0011':
                return (inputA ^ inputB);
            //Srl    
            case '1101':
                return convert.dec2bin(Number(convert.bin2dec(inputA)) >> Number(convert.bin2dec(inputB)));
            //Or    
            case '0101':
                return convert.dec2bin(Number(convert.bin2dec(inputA)) | Number(convert.bin2dec(inputB)));
            //And   
            case '0110':
                return convert.dec2bin(Number(convert.bin2dec(inputA)) & Number(convert.bin2dec(inputB)));
            //Sub-beq   
            case '0111':
                return (Number(convert.bin2dec(inputA)) - Number(convert.bin2dec(inputB))) == 0 ? 1 : 0;
            //Sub-bne   
            case '1000':
                return (Number(convert.bin2dec(inputA)) - Number(convert.bin2dec(inputB))) !== 0 ? 1 : 0;
            //Sub-blt,sub-bltu   
            case '1001':
                return (Number(convert.bin2dec(inputA)) < Number(convert.bin2dec(inputB))) ? 1 : 0;
            //Sub-bge,sub-bgeu   
            case '1010':
                return (Number(convert.bin2dec(inputA)) >= Number(convert.bin2dec(inputB))) ? 1 : 0;
            //Sub-bge,sub-bgeu   
            case '1011':
                return inputB.subString(0, 32);
            //Sub   
            case '1110':
                return convert.dec2bin(Number(convert.bin2dec(inputA)) - Number(convert.bin2dec(inputB)));  
            default:
                return 0;
        }
    }   
}
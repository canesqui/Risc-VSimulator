//import * as convert from './convertBase.js';
class Result {
    constructor() {
        this.aluSrc = "0";
        this.memToReg = "0";
        this.regWrite = "0";
        this.memRead = "0";
        this.memWrite = "0";
        this.branch = "0";
        this.ALUOp = "0000";
    }

    set ALUSrc(value) {
        this.aluSrc = value;
    }
    get ALUSrc() {
        return this.aluSrc;
    }
    set MemToReg(value) {
        this.memToReg = value;
    }
    get MemToReg() {
        return this.memToReg;
    }
    set RegWrite(value) {
        this.regWrite = value;
    }
    get RegWrite() {
        return this.regWrite;
    }
    set MemRead(value) {
        this.memRead = value;
    }
    get MemRead() {
        return this.memRead;
    }
    set MemWrite(value) {
        this.memWrite = value;
    }
    get MemWrite() {
        return this.memWrite;
    }
    set Branch(value) {
        this.branch = value;
    }
    get Branch() {
        return this.branch;
    }
    set ALUOp(value) {
        this.aluOp = value;
    }
    get ALUOp() {
        return this.aluOp;
    }
}

export function ALUControl(funct3, aluOp) {  
    console.log("ALUControl");
    console.log(funct3);  
    switch (aluOp) {
        //I format  
        case '00':
            return '0000';
        //I format but not reading or writing to memory
        case '11':
            switch (funct3.subString(1,4)) {
                //Add
                case '000':
                    return '0000';   
                //Sll                 
                case '001':
                    return '0001';
                //(A<B)?1:0
                case '010':
                    return '0001'; 
                //(A<B)?1:0    
                case '011':
                    return '0001';  
                //Xor         
                case '100':
                    return '0001';     
                //Slr      
                case '101':
                    return '0001'; 
                //Or  
                case '110':
                    return '0001';
                //And    
                case '111':
                    return '0001';                  
                default:
                    break;
            }            
            break;
         //Branch instructions   
        case '01':
            switch (funct3.subString(1,4)) {
                //Add
                case '000':
                    return '0111';                    
                case '001':
                    return '1000';
                case '100':
                    return '1001';  
                case '101':
                    return '1010';
                case '110':
                    return '1001';
                case '111':
                    return '1010';                              
                default:
                    break;
            }
        //R format    
        case '10':
            switch (funct3) {
                //Add
                case '0000':
                    return '0000';                    
                //Sub    
                case '1000':
                    return '1110';
                //Sll    
                case '0001':
                    return '0001';
                //(A<B)?1:0
                case '0010':
                    return '0010';
                //(A<B)?1:0
                case '0011':
                    return '0010';
                //Xor
                case '0100':
                    return '0011';  
                //Srl
                case '0101':
                    return '1101';      
                //Sra
                case '1101':
                    return '1101'; 
                //Or
                case '0110':
                    return '0101'; 
                //And
                case '0111':
                    return '0110';   
                default:
                    break;
            }

            break;    
         /*   

        //Sll    
        case '0001':
            return convert.dec2bin(Number(convert.bin2dec(inputA)) << Number(convert.bin2dec(inputB)));
        //A<B?1:0    
        case '0010':
            return (Number(convert.bin2dec(inputA)) < Number(convert.bin2dec(inputB)) ? 1 : 0);
        //Xor    
        case '0011':
            return (inputA ^ inputB);
        //Slr    
        case '0100':
            return convert.dec2bin(Number(convert.bin2dec(inputA)) >> Number(convert.bin2dec(inputB)));
        //Or    
        case '0101':
            return convert.dec2bin(Number(convert.bin2dec(inputA)) | Number(convert.bin2dec(inputB)));
        //And   
        case '0110':
            return convert.dec2bin(Number(convert.bin2dec(inputA)) & Number(convert.bin2dec(inputB)));
        //Sub-beq   
        case '0111':
            return (Number(convert.bin2dec(inputA)) - Number(convert.bin2dec(inputB))) = 0 ? 1 : 0;
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
        default:
            return 0;
            */
    }
}

export function Control(opCode) {
    console.log("Hello from Control");
    console.log(opCode);
    let result = new Result();


    switch (opCode) {
        case "0000011":
            result.ALUSrc = "1";
            result.MemRead = "1";
            result.RegWrite = "1";
            result.MemToReg = "1";
            result.ALUOp = "00";
            console.log(result);
            return result;
        case "0010011":
        case "0011011":
            result.ALUSrc = "1";
            result.RegWrite = "1";
            result.ALUOp = "00";
        /*
        switch (funct3) {
            case "0000":
                result.ALUOp = "0000";
                return result;
            case "1000":
                result.ALUOp = "0001";
                return result;
            case "010":
                result.ALUOp = "0010";
                return result;
            case "011":
                result.ALUOp = "0010";
                return result;
            case "100":
                result.ALUOp = "0011";
                return result;
            case "101":
                result.ALUOp = "0100";
                return result;
            case "110":
                result.ALUOp = "0101";
                return result;
            case "111":
                result.ALUOp = "0101";
                return result;
            default:
                break;
        }*/
        case "0110011":
        case "0111011":
            result.RegWrite = "1";
            result.ALUOp = "10";
            /*
            switch (funct3) {
                case "000":
                    result.ALUOp = "0000";
                    return result;
                case "001":
                    result.ALUOp = "0001";
                    return result;
                case "010":
                    result.ALUOp = "0010";
                    return result;
                case "011":
                    result.ALUOp = "0010";
                    return result;
                case "100":
                    result.ALUOp = "0011";
                    return result;
                case "101":
                    result.ALUOp = "0100";
                    return result;
                case "110":
                    result.ALUOp = "0101";
                    return result;
                case "111":
                    result.ALUOp = "0101";
                    return result;
                default:
                    break;
            }*/
            return result;
        case "0100011":                    
            result.ALUSrc = "1";
            result.MemWrite = "1";
            result.ALUOp = "00";
            return result;
        //S format
        case "1100011":
            result.Branch = "1"; 
            result.ALUOp = "01";           
            return result;        
        case "0010111":
        case "0110111":
            result.ALUSrc = "1";            
            result.RegWrite = "1";            
            result.ALUOp = "00";            
            return result;
        //UJ not supported yet
        case "1101111":
            result.ALUSrc = "1";            
            result.RegWrite = "1";
            result.ALUOp = "00";            
            return result;        
        default:
            break;
    }
}
import { Alu } from './Alu.mjs';

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

export class AluMain extends Alu {

    constructor() {
        super();
        this.result = new Result();
        this.result.Res = "";
        this.result.Zero = "";
    }


    Operation(operationType, inputA, inputB) {
        
        switch (operationType) {
            case 'Add':                
                console.log("AluMain");                
                this.result.Res = Number(inputA)+Number(inputB);                
                this.result.Zero = 0;
                console.log(this.result);
                return this.result;

            case 'Sub':
                this.result.Res = Number(inputA)-Number(inputB);                
                this.result.Zero = 0;
                return this.result;
                //break;
            case 'Mult':
                this.result.Res =  Number(inputA)*Number(inputB);
                this.result.Zero = 0;
                return this.result;
            case 'Div':
                this.result.Res =  Number(inputA)/Number(inputB);
                this.result.Zero = 0;
                return this.result;
            default:
                return this.result;
        }
    }   
}
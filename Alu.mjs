export class Alu {

    constructor() {
    }

    Operation(operationType, inputA, inputB) {
        
        switch (operationType) {
            case 'Add':                
                return Number(inputA)+Number(inputB);
                //break;
            case 'Mult':
                return Number(inputA)*Number(inputB);
            case 'Div':
                return Number(inputA)/Number(inputB);
            default:
                return 0;
        }
    }
}
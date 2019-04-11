export class Alu {

    constructor() {
    }

    operation(operationType, inputA, inputB) {
        
        switch (operationType) {
            case 'Add':                
                return Number(inputA)+Number(inputB);
                //break;
            case 'Mult':
            case 'Papayas':
                console.log('Mangoes and papayas are $2.79 a pound.');
                // expected output: "Mangoes and papayas are $2.79 a pound."
                break;
            default:
                return 0;
        }
    }
}
            
    // binary to decimal
    export function bin2dec(num) {
        return parseInt(num,2).toString(10);
    };
    
    // binary to hexadecimal
    export function bin2hex(num) {
        //console.log('bin2hex '+num);
        //return '0x'+ConvertBase(num).from(2).to(16).padStart(8,0);        
        return '0x'+parseInt(num, 2).toString(16).padStart(8,0);
    };
    
    export function bin2hexshort(num) {
        //console.log('bin2hex '+num);
        //return '0x'+ConvertBase(num).from(2).to(16).padStart(8,0);        
        return '0x'+parseInt(num, 2).toString(16);
    };

    // decimal to binary
    export function dec2bin(num) {
        return parseInt(num,10).toString(2);
    };
    
    // decimal to hexadecimal
    export function dec2hex(num) {
        return parseInt(num,10).toString(16);
    };
    
    // hexadecimal to binary
    export function hex2bin(num) {
        return parseInt(num,16).toString(2);
    };
    
    // hexadecimal to decimal
    export function hex2dec(num) {
        return parseInt(num,16).toString(10);
    };

    export function to64(num){
        return num.padStart(64,0);
    }
        
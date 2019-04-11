import * as convert from './convertBase.js';   

    export function loadBackground(context, width, height) {                
        let imageData;
        let background = new Image();
        background.src = "./Images/backgound.png";
        background.onload = function () {
            console.log("Onload");
            context.drawImage(background, 0, 0);
            window.imageData = context.getImageData(0, 0, width, height);            
        }
    }

    export function resetCanvas(context){
        context.putImageData(window.imageData, 0, 0);
    }

    export function writeStageInstruction(context, instruction, format, x, y, highlight) {
        let convertedInstruction;
        switch (format) {
            case 'asm':
                convertedInstruction = instruction;
                break;
            case 'hex':                
                convertedInstruction = convert.bin2hex(instruction);
                break;
            case 'bin':
                convertedInstruction = instruction;
                break;              
            default:
                convertedInstruction = instruction;
          }
        if (highlight==="true"){
            text(context, convertedInstruction, "white", x, y);
        }else{
            text(context, convertedInstruction, "black", x, y);
        }          
    }            

    export function text(context, text, color, x, y) {
        context.font = "15px Arial";        
        context.fillStyle = color;
        context.fillText(text, x, y);
    }




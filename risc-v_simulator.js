//import { pubsub } from './pubsub.mjs';
import { PubSub } from './pubsub.mjs';
import { ProgramCounter } from './programcounter.mjs';
import { InstructionMemory } from './InstructionMemory.mjs';
import { Alu } from './Alu.mjs';
import { AluMain } from './AluMain.mjs';
import { PipelineStage } from './pipelinestage.mjs';
import { StageObject } from './stageobject.mjs';
import { StageIdEx } from './stageIdEx.mjs';
import { StageExMem } from './stageexmem.mjs';
import { StageMemWb } from './stagememwb.mjs';
import { RegisterFile } from './registerfile.mjs';
import { Mux } from './Mux.mjs';

import * as ui from './ui.mjs';

window.pubsub = new PubSub();
var pc = new ProgramCounter();
var instructionMemory = new InstructionMemory();
var aluPc = new Alu();
var aluMain = new AluMain();
var aluIdEx = new Alu();

//var ifIdPipelineStage = new PipelineStage();
//var ifExPipelineStage = new PipelineStage();
//var exMemPipelineStage = new PipelineStage();
//var memWbPipelineStage = new PipelineStage();
var ifIdStageObject = new StageObject();
var idExStageObject = new StageIdEx();
var exMemStageObject = new StageExMem();
var memWbStageObject = new StageMemWb();
var registerFile = new RegisterFile();
var idExMux = new Mux();

let c = document.getElementById("datapath");
let ctx = c.getContext("2d");

function step() {
    window.pubsub.publish('clock', { tick: "tick" });
}

document.getElementById("step").addEventListener("click", function () { step() });
ui.loadBackground(ctx, c.width, c.height);
let format = 'hex'; //asm, hex or bin
pubsub.subscribe('clock', function (obj) {
    ifIdStageObject.Pc = pc.get();
    let inst = instructionMemory.get(pc.get());
    ifIdStageObject.Instruction = inst;
    ui.resetCanvas(ctx);
    ui.writeStageInstruction(ctx, inst, format, 100, 50);
    let instructionCount = pc.get() - 12;
    let position = 200;
    for (let i = 0; i < 5; i++) {
        instructionCount = instructionCount + 4;
        let instruction = instructionMemory.get(instructionCount);
        position = position + 20;
        if (i == 2) {
            ui.writeStageInstruction(ctx, instruction, format, 200, position, "true");
        } else {
            ui.writeStageInstruction(ctx, instruction, format, 200, position, "false");
        }
    }
    pc.set(aluPc.Operation('Add', 4, pc.get()));    
});

pubsub.subscribe('clock', function (obj) {
    pubsub.publish('ifid', ifIdStageObject);
    pubsub.publish('idex', idExStageObject);
    pubsub.publish('exmem', exMemStageObject);
    pubsub.publish('memwb', memWbStageObject);
});


pubsub.subscribe('ifid', function (obj) {
    if (obj.instruction !== "") {        
        ui.writeStageInstruction(ctx, obj.Instruction, format, 500, 50);
        idExStageObject.Instruction = obj.Instruction;
        idExStageObject.Pc = obj.Pc;        
        //substring does not consider the end itself, thus n+1    
        //rs1    
        idExStageObject.ReadData1 = registerFile.Data(obj.Instruction.substring(12, 17));
        //rs2
        idExStageObject.ReadData2 = registerFile.Data(obj.Instruction.substring(7, 12));
        //rs
        idExStageObject.Rs = obj.Instruction.substring(20, 25)
        idExStageObject.ALUSrc = "0";
        idExStageObject.ALUOp = "0";
        idExStageObject.Branch = "0";
        //pubsub.publish('idex', idExStageObject); 
    }
});


pubsub.subscribe('idex', function (obj) {
    if (obj.instruction !== "") {
        console.log("Hello from subscriber idex");
        console.log(obj.Instruction);
        ui.writeStageInstruction(ctx, obj.Instruction, format, 900, 50);
        exMemStageObject.Instruction = obj.Instruction;
        exMemStageObject.Pc = obj.Pc;
        idExMux.SourceZero = obj.ReadData2;
        idExMux.SourceOne = "00000000000000000000000000000000"
        idExMux.MuxSelector = obj.ALUSrc;        
        let aluMainResult = aluMain.Operation("Add", obj.ReadData1, idExMux.result);                       
        exMemStageObject.ALUResult = aluMainResult.Res;
        exMemStageObject.Zero = aluMainResult.Zero;
        exMemStageObject.ReaData2 = obj.ReaData2;
        exMemStageObject.Rs = obj.Rs;
        exMemStageObject.JumpBranchAddResult = aluIdEx.Operation("Add", obj.Pc, obj.Instruction << 1);
        //pubsub.publish('exmem', exMemStageObject); 
    }
});

pubsub.subscribe('exmem', function (obj) {
    if (obj.instruction !== "") {
        console.log("Hello from subscriber exmem");        
        ui.writeStageInstruction(ctx, obj.Instruction, format, 1300, 50);
        memWbStageObject.Instruction = obj.Instruction;
        memWbStageObject.Pc = obj.Pc;
        memWbStageObject.Rs = obj.Rs;
        memWbStageObject.ReadData2 = obj.ReaData2;
        memWbStageObject.ALUResult = obj.ALUResult;
        //memWbStageObject.ReadData = dataMemory.ReadData;    
    }
});

pubsub.subscribe('memwb', function (obj) {
    if (obj.instruction !== "") {
        console.log("Hello from subscriber memwb");
        console.log(obj.Instruction);
        ui.writeStageInstruction(ctx, obj.Instruction, format, 1700, 50);
        //memWbStageObject.Instruction = obj.Instruction; 
        //pubsub.publish('memwb', memWbStageObject); 
    }
});

pubsub.subscribe('reset', function (obj) {
    pc.reset();
});

pubsub.subscribe('pc', function (obj) {
    console.log('pc chanel');
    pc.set(aluPc.operation('Add', 4, obj));
    console.log(instructionMemory.get(obj));
    ifIdPipelineStage.set(instructionMemory.get(obj));
    // = instructionMemory.get(obj)
});





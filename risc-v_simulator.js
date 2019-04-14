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
import { DataMemory } from './datamemory.mjs';
import * as convert from './convertBase.js';
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

var ifMux = new Mux(0);
var idExMux = new Mux(0);
var memWbMux = new Mux(1)
var dataMemory = new DataMemory();

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
    let position = 490;
    for (let i = 0; i < 5; i++) {
        instructionCount = instructionCount + 4;
        let instruction = instructionMemory.get(instructionCount);
        position = position + 23;
        if (i == 2) {
            ui.writeStageInstruction(ctx, instruction, format, 315, position, "true");
        } else {
            ui.writeStageInstruction(ctx, instruction, format, 315, position, "false");
        }
    }
    //console.log("PC Get");
    //console.log(pc.get());  
    ifMux.SourceZero = aluPc.Operation('Add', convert.dec2bin(4), pc.get());
    //console.log("ifMux Result");
    //console.log(ifMux.Result);
    pc.set(ifMux.Result);


    //pubsub.publish('ifid', ifIdStageObject);
    //pubsub.publish('idex', idExStageObject);
    //pubsub.publish('exmem', exMemStageObject);
    //pubsub.publish('memwb', memWbStageObject);

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
        idExStageObject.Instruction64 = convert.to64(obj.Instruction);
        idExStageObject.Pc = obj.Pc;
        //substring does not consider the last characther itself, thus n+1    
        let readRegister1 = obj.Instruction.substring(12, 17);
        let readRegister2 = obj.Instruction.substring(7, 12);
        let readDestination = obj.Instruction.substring(20, 25);
        //rs1    
        idExStageObject.ReadData1 = registerFile.Data(readRegister1);
        //rs2                
        idExStageObject.ReadData2 = registerFile.Data(readRegister2);
        //rs
        idExStageObject.Rs = readDestination;
        //Funct3
        idExStageObject.Funct3 = obj.Instruction.substring(17, 20);

        //Imm generator
        idExStageObject.Instruction64 = convert.to64(obj.Instruction);

        //TODO: Create the control component and wire accordingly
        idExStageObject.ALUSrc = "0";
        idExStageObject.ALUOp = "0";
        idExStageObject.Branch = "0";
        idExStageObject.MemWrite = "0";
        idExStageObject.MemRead = "0";
        idExStageObject.MemToReg = "0";

        //Pc
        ui.writeStageInstruction(ctx, obj.Pc, "hex-short", 793, 275);
        //Rs1
        ui.writeStageInstruction(ctx, readRegister1, "hex-short", 550, 455);
        //Rs2
        ui.writeStageInstruction(ctx, readRegister2, "hex-short", 550, 502);
        //Rd
        ui.writeStageInstruction(ctx, readDestination, "hex-short", 769, 798);
        //Func3
        ui.writeStageInstruction(ctx, idExStageObject.Funct3, "hex-short", 805, 735);
        //Read data 1
        ui.writeStageInstruction(ctx, idExStageObject.ReadData1, "hex-short", 783, 472);
        //Read data 2
        ui.writeStageInstruction(ctx, idExStageObject.ReadData2, "hex-short", 783, 585);
    }
});

pubsub.subscribe('idex', function (obj) {
    if (obj.instruction !== "") {
        //console.log("Hello from subscriber idex");
        //console.log(obj.Instruction);
        ui.writeStageInstruction(ctx, obj.Instruction, format, 900, 50);
        exMemStageObject.Instruction = obj.Instruction;
        exMemStageObject.Pc = obj.Pc;
        idExMux.SourceZero = obj.ReadData2;
        idExMux.SourceOne = obj.Instruction.substring(0, 7);
        idExMux.MuxSelector = 0;
        //Main Alu
        let aluMainResult = aluMain.Operation("Add", obj.ReadData1, idExMux.Result);

        exMemStageObject.ALUResult = aluMainResult.Res;
        exMemStageObject.Zero = aluMainResult.Zero;
        exMemStageObject.ReaData2 = obj.ReaData2;
        exMemStageObject.Rs = obj.Rs;
        exMemStageObject.Branch = idExStageObject.Branch;
        exMemStageObject.MemWrite = idExStageObject.MemWrite;
        exMemStageObject.MemRead = idExStageObject.MemRead;
        exMemStageObject.MemToReg = idExStageObject.MemToReg;

        let imm = obj.Instruction64.substring(7, 12);
        //shift left 1 + add sum 
        exMemStageObject.JumpBranchAddResult = aluIdEx.Operation("Add", obj.Pc, imm << 1);


        //Pc
        ui.writeStageInstruction(ctx, obj.Pc, "hex-short", 968, 275);
        //Imm
        ui.writeStageInstruction(ctx, imm, "hex-short", 990, 357);
        //JumpBranchAddResult
        ui.writeStageInstruction(ctx, exMemStageObject.JumpBranchAddResult, "hex-short", 1210, 315);
        //ReadData1        
        ui.writeStageInstruction(ctx, obj.ReadData1, "hex-short", 1030, 470);
        //Mux result
        ui.writeStageInstruction(ctx, idExMux.Result, "hex-short", 1053, 555);
        //ALU Result
        ui.writeStageInstruction(ctx, aluMainResult.Res, "hex-short", 1190, 535);
        //Read data 2
        //ui.writeStageInstruction(ctx, idExStageObject.ReadData2, "hex-short", 783, 585);

        //pubsub.publish('exmem', exMemStageObject); 
    }
});

pubsub.subscribe('exmem', function (obj) {
    if (obj.instruction !== "") {
        //console.log("Hello from subscriber exmem");        
        ui.writeStageInstruction(ctx, obj.Instruction, format, 1300, 50);
        memWbStageObject.Instruction = obj.Instruction;
        memWbStageObject.Pc = obj.Pc;

        memWbStageObject.Rs = obj.Rs;
        memWbStageObject.ALUResult = obj.ALUResult;
        //memWbStageObject.ALUResult = obj.ALUResult;
        let dataResult = dataMemory.ReadData(obj.ALUResult);

        if (obj.MemWrite == "1") {
            dataMemory.WriteData(obj.ALUResult, obj.ReadData2);
        }
        if (obj.MemRead == "1") {
            memWbStageObject.ReadData = dataResult;
        }

        memWbStageObject.MemToReg = obj.MemToReg;
        ifMux.SourceOne = obj.JumpBranchAddResult;
        //branch    
        ifMux.MuxSelector = obj.Zero & obj.Branch;
    }
});

pubsub.subscribe('memwb', function (obj) {
    if (obj.instruction !== "") {
        //console.log("Hello from subscriber memwb");
        //console.log(obj.Instruction);
        ui.writeStageInstruction(ctx, obj.Instruction, format, 1700, 50);
        memWbMux.SourceOne = obj.ReadData;
        memWbMux.SourceZero = obj.ALUResult;
        memWbMux.MuxSelector = obj.MemToReg;
        registerFile.WriteRegister = obj.Rs;
        registerFile.WriteData = memWbMux.Result;
    }
});

pubsub.subscribe('reset', function (obj) {
    pc.reset();
});

/*
pubsub.subscribe('pc', function (obj) {
    console.log('pc chanel');
    pc.set(aluPc.operation('Add', 4, obj));
    console.log(instructionMemory.get(obj));
    ifIdPipelineStage.set(instructionMemory.get(obj));
    // = instructionMemory.get(obj)
});
*/




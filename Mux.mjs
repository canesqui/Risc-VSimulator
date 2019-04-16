export class Mux {

    constructor(defaultSelectorValue) {
        this.sourceZero = "";
        this.sourceOne = "";
        this.muxSelector = defaultSelectorValue;
        this.result = "";
    }

    set SourceZero(value) {        
        this.sourceZero = value;
    }

    set SourceOne(value) {        
        this.sourceOne = value;
    }

    set MuxSelector(value) {        
        this.muxSelector = value;
    }

    Execute() {
        console.log("Mux execute: Mux Selector");
        console.log(this.muxSelector);
        console.log("Mux source zero");
        console.log(this.sourceZero);
        console.log("Mux source one");
        console.log(this.sourceOne);

        switch (Number(this.muxSelector)) {
            case 0: 
                console.log("Mux Selector Zero");
                this.result = this.sourceZero;
                break;
            case 1:
                console.log("Mux Selector One");
                this.result = this.sourceOne;
                break;
            default:
                console.log("Mux Selector default");                
                this.result = undefined;
                break;
        }
    }

    get Result() {
        this.Execute();
        //console.log("Mux result");
        //console.log(this.result);
        return this.result;
    }
}
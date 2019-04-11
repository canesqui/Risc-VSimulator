export class Mux {

    constructor() {
        this.sourceZero = "";
        this.sourceOne = "";
        this.muxSelector = "";   
        this.result = "";     
    }

    set SourceZero(value){
        this.Execute();
        this.sourceZero = value;
    }

    set SourceOne(value){
        this.Execute();
        this.sourceOne = value;
    }

    set MuxSelector(value){
        this.Execute();
        this.muxSelector = value;
    }

    Execute(){
        if (this.sourceOne!==""&&
            this.sourceZero!==""&&
            this.muxSelector!==""){
                switch(this.muxSelector){
                    case "0":
                        return this.sourceZero;
                    case "1":
                        return this.sourceOne;
                    default:
                        return undefined;
                }
            }
    }

    get Result(){
        return this.result;
    }        
}
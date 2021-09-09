class Rocket{
    id:number;
    code:string;
    powers:Number[] = new Array();

    
    constructor(id:number, code:string){
        this.id=id;
        this.code=code;    
        this.powers=[];
    }
    
    addPower(power: Number):void{
        this.powers.push(power);
    }
}
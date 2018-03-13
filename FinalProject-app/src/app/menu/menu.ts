export class Menu{
    private name:string;
    private amount: number;
    private cuntity:number;
    private Desciptions: string;

    
    public get Name() : string {
        return this.name;
    }
    public set Name(v : string) {
        this.name = v;
    }
    
    
    public get Amount() : number {
        return this.amount;
    }
    public set Amount(v : number) {
        this.amount = v;
    }
    
 
    public get Cuntity() : number {
        return this.cuntity;
    }
    public set Cuntity(v : number) {
        this.cuntity = v;
    }
    
  
    public get desciptions() : string {
        return this.Desciptions;
    }
    public set desciptions(v : string) {
        this.Desciptions = v;
    }
    
    
    
    
}
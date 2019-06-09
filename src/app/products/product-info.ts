
export class ProductInfo {
    productName:string;
    productVariants: Map<string,number>;
    addons: Map<string,number>;
    constructor(name:string){
        this.productName = name;
        this.productVariants = new Map<string,number>();
        this.addons = new Map<string,number>();
    }
    public addVariant(variant:string, value:number){
        this.productVariants.set(variant,value);
    }
    addAddon(name:string,value:number){
        this.addons.set(name,value);
    }

}

import { ProductInfo } from './product-info';
export class Catalog {
    currentProducts: Map<string,ProductInfo>;
    constructor(){
        this.currentProducts = new  Map<string,ProductInfo>();
        let pn = ["P1","P2","P3"]
        for (let index = 0; index < pn.length; index++) {
            const element = pn[index];
            let p = new ProductInfo(element);
            for (let index = 0; index < 4; index++) {
                const element = "Variant${index}";
                p.addVariant( element, 0 );
            }
            this.currentProducts.set(p.productName, p);
        }
    }
    getCurrentProducts(){
        return this.currentProducts;
    }
}

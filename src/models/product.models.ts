import { ProductEntity } from "src/entities/produc.entity";
export class Product{
    id? : number;
    productName? : string;
    price?: number;
    desciption? : string;
    constructor({id,desciption,productName,price}) {
        if(id==null) this.id =id;
        if(productName==null) this.productName =productName;
        if(price==null) this.price =price;
        if(desciption==null) this.desciption =desciption;
    }
}
import { Delete, Get, Injectable, Post, Put } from "@nestjs/common";
import { ProductDto } from "src/dto/product.dto";
import { Product } from "src/models/product.models";
@Injectable()
export class ProductService {
    private products:Product[] = [
        {id: 1, categoryId: 2, price: 100, productName: "product 1"},
        {id: 2, categoryId: 1, price: 200, productName: "product 2"},
    ]
    getProducts(): Product[]{
        
        return this.products;
    }
    createProduct(productDto:ProductDto) : Product {
        const product : Product = {
            id: Math.random(),
            ...productDto
        }
        this.products.push(product);
        return productDto;
    }
    detailProduct(id:number) : Product{
        return this.products.find(p => p.id === Number(id));
    }
    updatelProduct(productDto : ProductDto, id : number) : Product{
        const index = this.products.findIndex(p => p.id === Number(id));
        this.products[index].categoryId = productDto.categoryId;
        this.products[index].productName = productDto.productName;
        this.products[index].price = productDto.price;
        return this.products[index];
    }
    deleteProduct(id : number) : boolean{
        const index = this.products.findIndex(p => p.id === Number(id));
        if(index != -1){
            this.products.slice(index,1);
            return true
        }
        return false;
    }
}
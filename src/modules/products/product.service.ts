import { Delete, Get, Injectable, Post, Put } from "@nestjs/common";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { ProductDto } from "src/dto/product.dto";
import { ProductEntity } from "src/entities/produc.entity";
import { Product } from "src/models/product.models";
import { Equal, Like, MoreThan, Repository } from 'typeorm';
@Injectable()
export class ProductService {
    // private products:Product[] = [
    //     {id: 1, categoryId: 2, price: 100, productName: "product 1"},
    //     {id: 2, categoryId: 1, price: 200, productName: "product 2"},
    // ]
    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>,
    ){}
    async getProducts(): Promise<ProductEntity[]> { // Sử dụng async và Promise<ProductEntity[]>
        return await this.productRepository.find(); // Sử dụng await để chờ kết quả trả về từ repository
    }
    async createProduct(productDto:ProductDto) : Promise<ProductEntity>{
        const createdProduct = this.productRepository.create(productDto);
        return await this.productRepository.save(createdProduct)
    }
    async detailProduct(id: number): Promise<ProductEntity> {
        return await this.productRepository.findOne({where : {id}}); 
    }
    async updateProduct(productDto: ProductDto, id: number): Promise<ProductEntity | undefined> {
        const existingProduct = await this.productRepository.findOne({where : {id}});
        if (!existingProduct) {
            throw new Error('Product not found');
        }

        const updatedProduct = Object.assign(existingProduct, productDto);
        return await this.productRepository.save(updatedProduct);
    }
    async deleteProduct(id : number) : Promise<boolean>{
        const result = await this.productRepository.delete(id);
        return result.affected > 0;
    }
}
import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ResponseData } from "src/global/globalClass";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";
import { Product } from "src/models/product.models";
import { ProductDto } from "src/dto/product.dto";

@Controller('products')
export class ProductController{
    constructor(private readonly productsService: ProductService) {}

    @Get()
    async getProducts(): Promise<ResponseData<Product[]>> {
        try {
            const products = await this.productsService.getProducts();
            return new ResponseData<Product[]>(products, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Product[]>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
    @Post()
    async createProduct(@Body() productDto: ProductDto): Promise<ResponseData<Product>> {
        try {
            const createdProduct = await this.productsService.createProduct(productDto);
            return new ResponseData<Product>(createdProduct, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
    @Get(':id')
    async detailProduct(@Param('id') id: number): Promise<ResponseData<Product>> {
        try {
            const product = await this.productsService.detailProduct(id);
            return new ResponseData<Product>(product, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Put('/:id')
    async updateProduct(@Body() productDto: ProductDto, @Param('id') id: number): Promise<ResponseData<Product>> {
        try {
            const updatedProduct = await this.productsService.updateProduct(productDto, id);
            return new ResponseData<Product>(updatedProduct, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Delete('/:id')
    async removeProduct(@Param('id') id: number): Promise<ResponseData<boolean>> {
        try {
            const isDeleted = await this.productsService.deleteProduct(id);
            return new ResponseData<boolean>(isDeleted, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<boolean>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
}
import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ResponseData } from "src/global/globalClass";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";
import { Product } from "src/models/product.models";
import { ProductDto } from "src/dto/product.dto";

@Controller('products')
export class ProductController{
    constructor(private readonly productsService: ProductService){}
    @Get()
    getProducts(): ResponseData<Product[]>{
        try {
            return new ResponseData<Product[]>(this.productsService.getProducts(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Product[]>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
        
    }
    @Post()
    createProduct(@Body() productDto: ProductDto) : ResponseData<ProductDto>{
        try {
            return new ResponseData<Product>(this.productsService.createProduct(productDto), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
    @Get(':id')
    detailProduct(@Param('id') id : number) : ResponseData<Product>{
        try {
            return new ResponseData<Product>(this.productsService.detailProduct(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
    @Put('/:id')
    updatelProduct(@Body() productDto : ProductDto, @Param('id') id : number) : ResponseData<Product>{
        try {
            return new ResponseData<Product>(this.productsService.updatelProduct(productDto,id), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
    @Delete('/:id')
    removeProduct(@Param('id') id: number) : ResponseData<boolean>{
        try {
            return new ResponseData<boolean>(this.productsService.deleteProduct(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<boolean>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
}
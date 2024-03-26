import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "src/entities/produc.entity";
@Module({
    imports : [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '123456',
            database: 'products',
            entities: [ProductEntity],
            synchronize: true,
            
          }),
          TypeOrmModule.forFeature([ProductEntity]),
    ],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule {
   
 };  
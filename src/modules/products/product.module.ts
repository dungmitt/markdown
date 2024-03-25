import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { TypeOrmModule } from "@nestjs/typeorm";
@Module({
    imports : [
        // TypeOrmModule.forRoot({
        //     type: 'mysql',
        //     host: 'localhost',
        //     port: 27017,
        //     username: 'root',
        //     password: '',
        //     database: 'font-2',
        //     entities: [],
        //     synchronize: true,
        //   }),
    ],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule {};  
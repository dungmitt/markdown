import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('products')
export class ProductEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id?:number
    @Column()
    productName : string
    @Column() 
    price : number
    @Column() 
    desciption : string
}
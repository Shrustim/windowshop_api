import { Entity } from '@loopback/repository';
export declare class Product extends Entity {
    id?: number;
    productName: string;
    price: number;
    categoryId: number;
    height?: number;
    weight?: number;
    description?: string;
    imageone?: string;
    imagetwo?: string;
    imagethree?: string;
    constructor(data?: Partial<Product>);
}
export interface ProductRelations {
}
export declare type ProductWithRelations = Product & ProductRelations;

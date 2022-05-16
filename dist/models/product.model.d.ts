import { Entity } from '@loopback/repository';
export declare class Product extends Entity {
    id?: number;
    productName: string;
    categoryId: number;
    description?: string;
    imageone?: string;
    imagetwo?: string;
    imagethree?: string;
    imagefour?: string;
    is_active?: number;
    created?: string;
    updated?: string;
    constructor(data?: Partial<Product>);
}
export interface ProductRelations {
}
export declare type ProductWithRelations = Product & ProductRelations;

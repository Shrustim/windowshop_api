import { Entity } from '@loopback/repository';
export declare class Productprice extends Entity {
    id?: number;
    productId: number;
    unitId: number;
    qty: number;
    price: number;
    discount: number;
    totalPrice: number;
    is_active?: number;
    created?: string;
    updated?: string;
    constructor(data?: Partial<Productprice>);
}
export interface ProductpriceRelations {
}
export declare type ProductpriceWithRelations = Productprice & ProductpriceRelations;

import { Entity } from '@loopback/repository';
export declare class Orderproduct extends Entity {
    id?: number;
    userId?: number;
    productId: number;
    totalPrice: number;
    qty: number;
    price: number;
    constructor(data?: Partial<Orderproduct>);
}
export interface OrderproductRelations {
}
export declare type OrderproductWithRelations = Orderproduct & OrderproductRelations;

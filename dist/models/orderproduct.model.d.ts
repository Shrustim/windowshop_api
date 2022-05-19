import { Entity } from '@loopback/repository';
export declare class Orderproduct extends Entity {
    id?: number;
    orderId?: number;
    userId?: number;
    productId: number;
    totalPrice: number;
    qty: number;
    price: number;
    unitId: number;
    discount: number;
    dbPrice: number;
    dbQty: number;
    is_active?: number;
    created?: string;
    updated?: string;
    constructor(data?: Partial<Orderproduct>);
}
export interface OrderproductRelations {
}
export declare type OrderproductWithRelations = Orderproduct & OrderproductRelations;

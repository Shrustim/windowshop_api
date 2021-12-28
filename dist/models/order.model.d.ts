import { Entity } from '@loopback/repository';
export declare class Order extends Entity {
    id?: number;
    userId: number;
    totalPrice: number;
    qty: number;
    address: string;
    pincode: number;
    constructor(data?: Partial<Order>);
}
export interface OrderRelations {
}
export declare type OrderWithRelations = Order & OrderRelations;

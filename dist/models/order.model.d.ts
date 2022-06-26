import { Entity } from '@loopback/repository';
export declare class Order extends Entity {
    id?: number;
    userId: number;
    totalPrice: number;
    qty: number;
    address: string;
    pincodeId: number;
    orderDate: string;
    status: string;
    is_active?: number;
    created?: string;
    updated?: string;
    constructor(data?: Partial<Order>);
}
export interface OrderRelations {
}
export declare type OrderWithRelations = Order & OrderRelations;

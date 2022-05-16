import { Entity } from '@loopback/repository';
export declare class Pincode extends Entity {
    id?: number;
    pincodeNo: string;
    is_show?: number;
    is_active?: number;
    created?: string;
    updated?: string;
    constructor(data?: Partial<Pincode>);
}
export interface PincodeRelations {
}
export declare type PincodeWithRelations = Pincode & PincodeRelations;

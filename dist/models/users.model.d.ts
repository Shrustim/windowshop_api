import { Entity } from '@loopback/repository';
export declare class Users extends Entity {
    id?: number;
    name: string;
    mobileNo?: string;
    pincodeId?: number;
    address?: string;
    password: string;
    is_active?: number;
    created?: string;
    updated?: string;
    constructor(data?: Partial<Users>);
}
export interface UsersRelations {
}
export declare type UsersWithRelations = Users & UsersRelations;

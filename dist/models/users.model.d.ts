import { Entity } from '@loopback/repository';
export declare class Users extends Entity {
    id?: number;
    name: string;
    mobileNo?: string;
    pincode?: string;
    address?: string;
    password: string;
    constructor(data?: Partial<Users>);
}
export interface UsersRelations {
}
export declare type UsersWithRelations = Users & UsersRelations;

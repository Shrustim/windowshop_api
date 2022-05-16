import { Entity } from '@loopback/repository';
export declare class UnitMaster extends Entity {
    id?: number;
    name: string;
    parentId?: number;
    conversion_value?: number;
    is_active?: number;
    created?: string;
    updated?: string;
    constructor(data?: Partial<UnitMaster>);
}
export interface UnitMasterRelations {
}
export declare type UnitMasterWithRelations = UnitMaster & UnitMasterRelations;

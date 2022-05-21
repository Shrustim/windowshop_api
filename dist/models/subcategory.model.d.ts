import { Entity } from '@loopback/repository';
export declare class Subcategory extends Entity {
    id?: number;
    subCategoryName: string;
    categoryId: number;
    image?: string;
    description?: string;
    is_active?: number;
    created?: string;
    updated?: string;
    constructor(data?: Partial<Subcategory>);
}
export interface SubcategoryRelations {
}
export declare type SubcategoryWithRelations = Subcategory & SubcategoryRelations;

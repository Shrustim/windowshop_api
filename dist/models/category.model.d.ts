import { Entity } from '@loopback/repository';
export declare class Category extends Entity {
    id?: number;
    categoryName: string;
    image: string;
    description?: string;
    is_active?: number;
    created?: string;
    updated?: string;
    constructor(data?: Partial<Category>);
}
export interface CategoryRelations {
}
export declare type CategoryWithRelations = Category & CategoryRelations;

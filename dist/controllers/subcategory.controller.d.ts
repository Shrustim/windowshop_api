import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Subcategory } from '../models';
import { SubcategoryRepository } from '../repositories';
export declare class SubcategoryController {
    subcategoryRepository: SubcategoryRepository;
    constructor(subcategoryRepository: SubcategoryRepository);
    create(subcategory: Subcategory): Promise<Subcategory>;
    count(where?: Where<Subcategory>): Promise<Count>;
    find(filter?: Filter<Subcategory>): Promise<Subcategory[]>;
    updateAll(subcategory: Subcategory, where?: Where<Subcategory>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Subcategory>): Promise<Subcategory>;
    updateById(id: number, subcategory: Subcategory): Promise<void>;
    replaceById(id: number, subcategory: Subcategory): Promise<void>;
    deleteById(id: number): Promise<void>;
}

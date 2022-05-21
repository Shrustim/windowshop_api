import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Subcategory, SubcategoryRelations } from '../models';
export declare class SubcategoryRepository extends DefaultCrudRepository<Subcategory, typeof Subcategory.prototype.id, SubcategoryRelations> {
    constructor(dataSource: DbDataSource);
}

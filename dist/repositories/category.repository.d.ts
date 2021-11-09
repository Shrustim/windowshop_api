import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Category, CategoryRelations } from '../models';
export declare class CategoryRepository extends DefaultCrudRepository<Category, typeof Category.prototype.id, CategoryRelations> {
    constructor(dataSource: DbDataSource);
}

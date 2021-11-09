import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Product, ProductRelations } from '../models';
export declare class ProductRepository extends DefaultCrudRepository<Product, typeof Product.prototype.id, ProductRelations> {
    constructor(dataSource: DbDataSource);
}

import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Productprice, ProductpriceRelations } from '../models';
export declare class ProductpriceRepository extends DefaultCrudRepository<Productprice, typeof Productprice.prototype.id, ProductpriceRelations> {
    constructor(dataSource: DbDataSource);
}

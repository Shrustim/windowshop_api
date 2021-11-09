import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Orderproduct, OrderproductRelations } from '../models';
export declare class OrderproductRepository extends DefaultCrudRepository<Orderproduct, typeof Orderproduct.prototype.id, OrderproductRelations> {
    constructor(dataSource: DbDataSource);
}

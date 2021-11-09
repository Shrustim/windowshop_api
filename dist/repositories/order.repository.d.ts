import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Order, OrderRelations } from '../models';
export declare class OrderRepository extends DefaultCrudRepository<Order, typeof Order.prototype.id, OrderRelations> {
    constructor(dataSource: DbDataSource);
}

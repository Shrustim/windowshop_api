import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Orderproduct, OrderproductRelations} from '../models';

export class OrderproductRepository extends DefaultCrudRepository<
  Orderproduct,
  typeof Orderproduct.prototype.id,
  OrderproductRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Orderproduct, dataSource);
  }
}

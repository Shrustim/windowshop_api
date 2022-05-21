import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Productprice, ProductpriceRelations} from '../models';

export class ProductpriceRepository extends DefaultCrudRepository<
  Productprice,
  typeof Productprice.prototype.id,
  ProductpriceRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Productprice, dataSource);
  }
}

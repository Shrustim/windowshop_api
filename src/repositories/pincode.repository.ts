import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Pincode, PincodeRelations} from '../models';

export class PincodeRepository extends DefaultCrudRepository<
  Pincode,
  typeof Pincode.prototype.id,
  PincodeRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Pincode, dataSource);
  }
}

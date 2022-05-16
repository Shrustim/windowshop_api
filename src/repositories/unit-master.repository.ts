import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {UnitMaster, UnitMasterRelations} from '../models';

export class UnitMasterRepository extends DefaultCrudRepository<
  UnitMaster,
  typeof UnitMaster.prototype.id,
  UnitMasterRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(UnitMaster, dataSource);
  }
}

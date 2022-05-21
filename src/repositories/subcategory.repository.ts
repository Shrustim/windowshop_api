import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Subcategory, SubcategoryRelations} from '../models';

export class SubcategoryRepository extends DefaultCrudRepository<
  Subcategory,
  typeof Subcategory.prototype.id,
  SubcategoryRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Subcategory, dataSource);
  }
}

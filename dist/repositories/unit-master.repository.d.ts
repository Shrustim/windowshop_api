import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { UnitMaster, UnitMasterRelations } from '../models';
export declare class UnitMasterRepository extends DefaultCrudRepository<UnitMaster, typeof UnitMaster.prototype.id, UnitMasterRelations> {
    constructor(dataSource: DbDataSource);
}

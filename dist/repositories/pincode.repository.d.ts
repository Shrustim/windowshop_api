import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Pincode, PincodeRelations } from '../models';
export declare class PincodeRepository extends DefaultCrudRepository<Pincode, typeof Pincode.prototype.id, PincodeRelations> {
    constructor(dataSource: DbDataSource);
}

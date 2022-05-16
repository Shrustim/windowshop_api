import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { UnitMaster } from '../models';
import { UnitMasterRepository } from '../repositories';
export declare class UnitMasterController {
    unitMasterRepository: UnitMasterRepository;
    constructor(unitMasterRepository: UnitMasterRepository);
    create(unitMaster: Omit<UnitMaster, 'id'>): Promise<UnitMaster>;
    count(where?: Where<UnitMaster>): Promise<Count>;
    find(filter?: Filter<UnitMaster>): Promise<UnitMaster[]>;
    updateAll(unitMaster: UnitMaster, where?: Where<UnitMaster>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<UnitMaster>): Promise<UnitMaster>;
    updateById(id: number, unitMaster: UnitMaster): Promise<void>;
    replaceById(id: number, unitMaster: UnitMaster): Promise<void>;
    deleteById(id: number): Promise<void>;
}

import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Pincode } from '../models';
import { PincodeRepository } from '../repositories';
export declare class PincodeController {
    pincodeRepository: PincodeRepository;
    constructor(pincodeRepository: PincodeRepository);
    create(pincode: Pincode): Promise<Pincode>;
    count(where?: Where<Pincode>): Promise<Count>;
    find(filter?: Filter<Pincode>): Promise<Pincode[]>;
    updateAll(pincode: Pincode, where?: Where<Pincode>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Pincode>): Promise<Pincode>;
    updateById(id: number, pincode: Pincode): Promise<void>;
    replaceById(id: number, pincode: Pincode): Promise<void>;
    deleteById(id: number): Promise<void>;
}

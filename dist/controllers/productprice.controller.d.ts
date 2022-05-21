import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Productprice } from '../models';
import { ProductpriceRepository } from '../repositories';
export declare class ProductpriceController {
    productpriceRepository: ProductpriceRepository;
    constructor(productpriceRepository: ProductpriceRepository);
    create(productprice: Productprice): Promise<Productprice>;
    count(where?: Where<Productprice>): Promise<Count>;
    find(filter?: Filter<Productprice>): Promise<Productprice[]>;
    updateAll(productprice: Productprice, where?: Where<Productprice>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Productprice>): Promise<Productprice>;
    updateById(id: number, productprice: Productprice): Promise<void>;
    replaceById(id: number, productprice: Productprice): Promise<void>;
    deleteById(id: number): Promise<void>;
}

import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Orderproduct } from '../models';
import { OrderproductRepository } from '../repositories';
export declare class OrderproductController {
    orderproductRepository: OrderproductRepository;
    constructor(orderproductRepository: OrderproductRepository);
    create(orderproduct: Orderproduct): Promise<Orderproduct>;
    count(where?: Where<Orderproduct>): Promise<Count>;
    find(filter?: Filter<Orderproduct>): Promise<Orderproduct[]>;
    updateAll(orderproduct: Orderproduct, where?: Where<Orderproduct>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Orderproduct>): Promise<Orderproduct>;
    updateById(id: number, orderproduct: Orderproduct): Promise<void>;
    replaceById(id: number, orderproduct: Orderproduct): Promise<void>;
    deleteById(id: number): Promise<void>;
}

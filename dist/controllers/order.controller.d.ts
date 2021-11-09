import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Order } from '../models';
import { OrderRepository } from '../repositories';
export declare class OrderController {
    orderRepository: OrderRepository;
    constructor(orderRepository: OrderRepository);
    create(order: Order): Promise<Order>;
    count(where?: Where<Order>): Promise<Count>;
    find(filter?: Filter<Order>): Promise<Order[]>;
    updateAll(order: Order, where?: Where<Order>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Order>): Promise<Order>;
    updateById(id: number, order: Order): Promise<void>;
    replaceById(id: number, order: Order): Promise<void>;
    deleteById(id: number): Promise<void>;
}

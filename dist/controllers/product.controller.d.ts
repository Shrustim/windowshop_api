import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Product } from '../models';
import { ProductRepository } from '../repositories';
export declare class ProductController {
    productRepository: ProductRepository;
    constructor(productRepository: ProductRepository);
    create(product: Product): Promise<Product>;
    count(where?: Where<Product>): Promise<Count>;
    find(filter?: Filter<Product>): Promise<Product[]>;
    updateAll(product: Product, where?: Where<Product>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Product>): Promise<Product>;
    updateById(id: number, product: Product): Promise<void>;
    replaceById(id: number, product: Product): Promise<void>;
    deleteById(id: number): Promise<void>;
    products_list(filter?: Filter<Product>): Promise<void>;
}

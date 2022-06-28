"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductpriceController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProductpriceController = class ProductpriceController {
    constructor(productpriceRepository) {
        this.productpriceRepository = productpriceRepository;
    }
    async create(productprice) {
        return this.productpriceRepository.create(productprice);
    }
    async count(where) {
        return this.productpriceRepository.count(where);
    }
    async find(filter) {
        return this.productpriceRepository.find(filter);
    }
    async updateAll(productprice, where) {
        return this.productpriceRepository.updateAll(productprice, where);
    }
    async findById(id, filter) {
        return this.productpriceRepository.findById(id, filter);
    }
    async updateById(id, productprice) {
        await this.productpriceRepository.updateById(id, productprice);
    }
    async replaceById(id, productprice) {
        await this.productpriceRepository.replaceById(id, productprice);
    }
    async deleteById(id) {
        await this.productpriceRepository.deleteById(id);
    }
    async ordersById(id, filter) {
        const result = await this.productpriceRepository.execute('SELECT `Productprice`.*, `UnitMaster`.name as unitName ,`Product`.`productName`,`Product`.`imageone` FROM `Productprice` INNER JOIN `Product` ON `Productprice`.productId=`Product`.id INNER JOIN `UnitMaster` ON `Productprice`.unitId=`UnitMaster`.id WHERE `Productprice`.`productId`="' + id + '"');
        return result;
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/productprices'),
    (0, rest_1.response)(200, {
        description: 'Productprice model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Productprice) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Productprice, {
                    title: 'NewProductprice',
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Productprice]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductpriceController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/productprices/count'),
    (0, rest_1.response)(200, {
        description: 'Productprice model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Productprice)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductpriceController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/productprices'),
    (0, rest_1.response)(200, {
        description: 'Array of Productprice model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Productprice, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Productprice)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductpriceController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/productprices'),
    (0, rest_1.response)(200, {
        description: 'Productprice PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Productprice, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Productprice)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Productprice, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductpriceController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/productprices/{id}'),
    (0, rest_1.response)(200, {
        description: 'Productprice model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Productprice, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Productprice, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductpriceController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/productprices/{id}'),
    (0, rest_1.response)(204, {
        description: 'Productprice PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Productprice, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Productprice]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductpriceController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/productprices/{id}'),
    (0, rest_1.response)(204, {
        description: 'Productprice PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Productprice]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductpriceController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/productprices/{id}'),
    (0, rest_1.response)(204, {
        description: 'Productprice DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductpriceController.prototype, "deleteById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/productPriceById/{id}'),
    (0, rest_1.response)(200, {
        description: 'Array of Order model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Productprice, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Productprice)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductpriceController.prototype, "ordersById", null);
ProductpriceController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.ProductpriceRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.ProductpriceRepository])
], ProductpriceController);
exports.ProductpriceController = ProductpriceController;
//# sourceMappingURL=productprice.controller.js.map
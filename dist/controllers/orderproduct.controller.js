"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderproductController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
// @authenticate('jwt')
let OrderproductController = class OrderproductController {
    constructor(orderproductRepository) {
        this.orderproductRepository = orderproductRepository;
    }
    async create(orderproduct) {
        return this.orderproductRepository.create(orderproduct);
    }
    async count(where) {
        return this.orderproductRepository.count(where);
    }
    async find(filter) {
        return this.orderproductRepository.find(filter);
    }
    async updateAll(orderproduct, where) {
        return this.orderproductRepository.updateAll(orderproduct, where);
    }
    async findById(id, filter) {
        return this.orderproductRepository.findById(id, filter);
    }
    async updateById(id, orderproduct) {
        await this.orderproductRepository.updateById(id, orderproduct);
    }
    async replaceById(id, orderproduct) {
        await this.orderproductRepository.replaceById(id, orderproduct);
    }
    async deleteById(id) {
        await this.orderproductRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/orderproducts'),
    (0, rest_1.response)(200, {
        description: 'Orderproduct model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Orderproduct) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Orderproduct, {
                    title: 'NewOrderproduct',
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Orderproduct]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrderproductController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/orderproducts/count'),
    (0, rest_1.response)(200, {
        description: 'Orderproduct model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Orderproduct)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrderproductController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/orderproducts'),
    (0, rest_1.response)(200, {
        description: 'Array of Orderproduct model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Orderproduct, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Orderproduct)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrderproductController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/orderproducts'),
    (0, rest_1.response)(200, {
        description: 'Orderproduct PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Orderproduct, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Orderproduct)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Orderproduct, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrderproductController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/orderproducts/{id}'),
    (0, rest_1.response)(200, {
        description: 'Orderproduct model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Orderproduct, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Orderproduct, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrderproductController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/orderproducts/{id}'),
    (0, rest_1.response)(204, {
        description: 'Orderproduct PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Orderproduct, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Orderproduct]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrderproductController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/orderproducts/{id}'),
    (0, rest_1.response)(204, {
        description: 'Orderproduct PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Orderproduct]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrderproductController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/orderproducts/{id}'),
    (0, rest_1.response)(204, {
        description: 'Orderproduct DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrderproductController.prototype, "deleteById", null);
OrderproductController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.OrderproductRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.OrderproductRepository])
], OrderproductController);
exports.OrderproductController = OrderproductController;
//# sourceMappingURL=orderproduct.controller.js.map
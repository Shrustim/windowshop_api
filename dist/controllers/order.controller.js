"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
// @authenticate('jwt')
let OrderController = class OrderController {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async create(order) {
        return this.orderRepository.create(order);
    }
    async count(where) {
        return this.orderRepository.count(where);
    }
    async find(filter) {
        return this.orderRepository.find(filter);
    }
    async updateAll(order, where) {
        return this.orderRepository.updateAll(order, where);
    }
    async findById(id, filter) {
        return this.orderRepository.findById(id, filter);
    }
    async updateById(id, order) {
        await this.orderRepository.updateById(id, order);
    }
    async replaceById(id, order) {
        await this.orderRepository.replaceById(id, order);
    }
    async deleteById(id) {
        await this.orderRepository.deleteById(id);
    }
    async ordersById(id, filter) {
        const result = await this.orderRepository.execute('SELECT `Orderproduct`.*, `UnitMaster`.name as unitName ,`Product`.`productName`,`Product`.`imageone` FROM `Orderproduct` INNER JOIN `Product` ON `Orderproduct`.productId=`Product`.id INNER JOIN `UnitMaster` ON `Orderproduct`.unitId=`UnitMaster`.id WHERE `Orderproduct`.`orderId`="' + id + '"');
        return result;
    }
    async ordersList(id, filter) {
        const result = await this.orderRepository.execute('SELECT `Order`.*,Pincode.pincodeNo,Users.name,Users.mobileNo FROM `Order` INNER JOIN `Users` ON `Order`.userId=`Users`.id LEFT OUTER JOIN `Pincode` ON `Order`.pincodeId=`Pincode`.id  WHERE `Order`.`userId`="' + id + '" ORDER BY id desc');
        return result;
    }
    async ordersAllList(filter) {
        const result = await this.orderRepository.execute('SELECT `Order`.*,Pincode.pincodeNo,Users.name,Users.mobileNo FROM `Order` INNER JOIN `Users` ON `Order`.userId=`Users`.id LEFT OUTER JOIN `Pincode` ON `Order`.pincodeId=`Pincode`.id   ORDER BY id desc');
        return result;
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/orders'),
    (0, rest_1.response)(200, {
        description: 'Order model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Order) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Order, {
                    title: 'NewOrder',
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Order]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrderController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/orders/count'),
    (0, rest_1.response)(200, {
        description: 'Order model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Order)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrderController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/orders'),
    (0, rest_1.response)(200, {
        description: 'Array of Order model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Order, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Order)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrderController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/orders'),
    (0, rest_1.response)(200, {
        description: 'Order PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Order, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Order)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Order, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrderController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/orders/{id}'),
    (0, rest_1.response)(200, {
        description: 'Order model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Order, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Order, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrderController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/orders/{id}'),
    (0, rest_1.response)(204, {
        description: 'Order PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Order, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Order]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrderController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/orders/{id}'),
    (0, rest_1.response)(204, {
        description: 'Order PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Order]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrderController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/orders/{id}'),
    (0, rest_1.response)(204, {
        description: 'Order DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrderController.prototype, "deleteById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/ordersById/{id}'),
    (0, rest_1.response)(200, {
        description: 'Array of Order model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Order, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Order)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrderController.prototype, "ordersById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/ordersList/{id}'),
    (0, rest_1.response)(200, {
        description: 'Array of Order model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Order, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Order)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrderController.prototype, "ordersList", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/ordersAllList'),
    (0, rest_1.response)(200, {
        description: 'Array of Order model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Order, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Order)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrderController.prototype, "ordersAllList", null);
OrderController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.OrderRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.OrderRepository])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map
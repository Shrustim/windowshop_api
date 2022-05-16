"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PincodeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PincodeController = class PincodeController {
    constructor(pincodeRepository) {
        this.pincodeRepository = pincodeRepository;
    }
    async create(pincode) {
        return this.pincodeRepository.create(pincode);
    }
    async count(where) {
        return this.pincodeRepository.count(where);
    }
    async find(filter) {
        return this.pincodeRepository.find(filter);
    }
    async updateAll(pincode, where) {
        return this.pincodeRepository.updateAll(pincode, where);
    }
    async findById(id, filter) {
        return this.pincodeRepository.findById(id, filter);
    }
    async updateById(id, pincode) {
        await this.pincodeRepository.updateById(id, pincode);
    }
    async replaceById(id, pincode) {
        await this.pincodeRepository.replaceById(id, pincode);
    }
    async deleteById(id) {
        await this.pincodeRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/pincodes'),
    (0, rest_1.response)(200, {
        description: 'Pincode model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Pincode) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pincode, {
                    title: 'NewPincode',
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Pincode]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PincodeController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/pincodes/count'),
    (0, rest_1.response)(200, {
        description: 'Pincode model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Pincode)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PincodeController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/pincodes'),
    (0, rest_1.response)(200, {
        description: 'Array of Pincode model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Pincode, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Pincode)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PincodeController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/pincodes'),
    (0, rest_1.response)(200, {
        description: 'Pincode PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pincode, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Pincode)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Pincode, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PincodeController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/pincodes/{id}'),
    (0, rest_1.response)(200, {
        description: 'Pincode model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pincode, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Pincode, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PincodeController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/pincodes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Pincode PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pincode, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Pincode]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PincodeController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/pincodes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Pincode PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Pincode]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PincodeController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/pincodes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Pincode DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PincodeController.prototype, "deleteById", null);
PincodeController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.PincodeRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.PincodeRepository])
], PincodeController);
exports.PincodeController = PincodeController;
//# sourceMappingURL=pincode.controller.js.map
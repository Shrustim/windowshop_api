"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitMasterController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UnitMasterController = class UnitMasterController {
    constructor(unitMasterRepository) {
        this.unitMasterRepository = unitMasterRepository;
    }
    async create(unitMaster) {
        return this.unitMasterRepository.create(unitMaster);
    }
    async count(where) {
        return this.unitMasterRepository.count(where);
    }
    async find(filter) {
        return this.unitMasterRepository.find(filter);
    }
    async updateAll(unitMaster, where) {
        return this.unitMasterRepository.updateAll(unitMaster, where);
    }
    async findById(id, filter) {
        return this.unitMasterRepository.findById(id, filter);
    }
    async updateById(id, unitMaster) {
        await this.unitMasterRepository.updateById(id, unitMaster);
    }
    async replaceById(id, unitMaster) {
        await this.unitMasterRepository.replaceById(id, unitMaster);
    }
    async deleteById(id) {
        await this.unitMasterRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/unit-masters'),
    (0, rest_1.response)(200, {
        description: 'UnitMaster model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.UnitMaster) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.UnitMaster, {
                    title: 'NewUnitMaster',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UnitMasterController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/unit-masters/count'),
    (0, rest_1.response)(200, {
        description: 'UnitMaster model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.UnitMaster)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UnitMasterController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/unit-masters'),
    (0, rest_1.response)(200, {
        description: 'Array of UnitMaster model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.UnitMaster, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.UnitMaster)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UnitMasterController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/unit-masters'),
    (0, rest_1.response)(200, {
        description: 'UnitMaster PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.UnitMaster, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.UnitMaster)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.UnitMaster, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UnitMasterController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/unit-masters/{id}'),
    (0, rest_1.response)(200, {
        description: 'UnitMaster model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.UnitMaster, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.UnitMaster, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UnitMasterController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/unit-masters/{id}'),
    (0, rest_1.response)(204, {
        description: 'UnitMaster PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.UnitMaster, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.UnitMaster]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UnitMasterController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/unit-masters/{id}'),
    (0, rest_1.response)(204, {
        description: 'UnitMaster PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.UnitMaster]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UnitMasterController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/unit-masters/{id}'),
    (0, rest_1.response)(204, {
        description: 'UnitMaster DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UnitMasterController.prototype, "deleteById", null);
UnitMasterController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.UnitMasterRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.UnitMasterRepository])
], UnitMasterController);
exports.UnitMasterController = UnitMasterController;
//# sourceMappingURL=unit-master.controller.js.map
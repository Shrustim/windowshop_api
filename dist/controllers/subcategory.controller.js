"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubcategoryController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SubcategoryController = class SubcategoryController {
    constructor(subcategoryRepository) {
        this.subcategoryRepository = subcategoryRepository;
    }
    async create(subcategory) {
        return this.subcategoryRepository.create(subcategory);
    }
    async count(where) {
        return this.subcategoryRepository.count(where);
    }
    async find(filter) {
        return this.subcategoryRepository.find(filter);
    }
    async updateAll(subcategory, where) {
        return this.subcategoryRepository.updateAll(subcategory, where);
    }
    async findById(id, filter) {
        return this.subcategoryRepository.findById(id, filter);
    }
    async updateById(id, subcategory) {
        await this.subcategoryRepository.updateById(id, subcategory);
    }
    async replaceById(id, subcategory) {
        await this.subcategoryRepository.replaceById(id, subcategory);
    }
    async deleteById(id) {
        await this.subcategoryRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/subcategories'),
    (0, rest_1.response)(200, {
        description: 'Subcategory model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Subcategory) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Subcategory, {
                    title: 'NewSubcategory',
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Subcategory]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SubcategoryController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/subcategories/count'),
    (0, rest_1.response)(200, {
        description: 'Subcategory model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Subcategory)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SubcategoryController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/subcategories'),
    (0, rest_1.response)(200, {
        description: 'Array of Subcategory model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Subcategory, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Subcategory)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SubcategoryController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/subcategories'),
    (0, rest_1.response)(200, {
        description: 'Subcategory PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Subcategory, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Subcategory)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Subcategory, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SubcategoryController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/subcategories/{id}'),
    (0, rest_1.response)(200, {
        description: 'Subcategory model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Subcategory, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Subcategory, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SubcategoryController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/subcategories/{id}'),
    (0, rest_1.response)(204, {
        description: 'Subcategory PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Subcategory, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Subcategory]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SubcategoryController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/subcategories/{id}'),
    (0, rest_1.response)(204, {
        description: 'Subcategory PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Subcategory]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SubcategoryController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/subcategories/{id}'),
    (0, rest_1.response)(204, {
        description: 'Subcategory DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SubcategoryController.prototype, "deleteById", null);
SubcategoryController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.SubcategoryRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.SubcategoryRepository])
], SubcategoryController);
exports.SubcategoryController = SubcategoryController;
//# sourceMappingURL=subcategory.controller.js.map
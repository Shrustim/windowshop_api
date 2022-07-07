"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
//@authenticate('jwt')
let CategoryController = class CategoryController {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async create(category) {
        return this.categoryRepository.create(category);
    }
    async count(where) {
        return this.categoryRepository.count(where);
    }
    async find(filter) {
        return this.categoryRepository.find(filter);
    }
    async updateAll(category, where) {
        return this.categoryRepository.updateAll(category, where);
    }
    async findById(id, filter) {
        return this.categoryRepository.findById(id, filter);
    }
    async updateById(id, category) {
        await this.categoryRepository.updateById(id, category);
    }
    async replaceById(id, category) {
        await this.categoryRepository.replaceById(id, category);
    }
    async deleteById(id) {
        await this.categoryRepository.deleteById(id);
    }
    async approvedHook(dataa) {
        console.log("JSON.stringify(dataa)", JSON.stringify(dataa));
        const result = await this.categoryRepository.execute("INSERT INTO Category (categoryName,image) VALUES ('approved " + JSON.stringify(dataa) + "','test')");
        return dataa;
    }
    async accountConfirmationHook(dataa) {
        console.log("JSON.stringify(dataa)", JSON.stringify(dataa));
        const result = await this.categoryRepository.execute("INSERT INTO Category (categoryName,image) VALUES ('accountConfirma " + JSON.stringify(dataa) + "','test')");
        return dataa;
    }
    async accountLoadConfirmationHook(dataa) {
        console.log("JSON.stringify(dataa)", JSON.stringify(dataa));
        const result = await this.categoryRepository.execute("INSERT INTO Category (categoryName,image) VALUES ('accountLoadConfirma " + JSON.stringify(dataa) + "','test')");
        return dataa;
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/categories'),
    (0, rest_1.response)(200, {
        description: 'Category model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Category) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Category, {
                    title: 'NewCategory',
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Category]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CategoryController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/categories/count'),
    (0, rest_1.response)(200, {
        description: 'Category model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Category)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CategoryController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/categories'),
    (0, rest_1.response)(200, {
        description: 'Array of Category model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Category, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Category)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CategoryController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/categories'),
    (0, rest_1.response)(200, {
        description: 'Category PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Category, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Category)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Category, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CategoryController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/categories/{id}'),
    (0, rest_1.response)(200, {
        description: 'Category model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Category, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Category, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CategoryController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/categories/{id}'),
    (0, rest_1.response)(204, {
        description: 'Category PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Category, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Category]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CategoryController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/categories/{id}'),
    (0, rest_1.response)(204, {
        description: 'Category PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Category]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CategoryController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/categories/{id}'),
    (0, rest_1.response)(204, {
        description: 'Category DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CategoryController.prototype, "deleteById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/approvedHook'),
    (0, rest_1.response)(200, {
        description: 'approvedHook',
        // content: {'application/json': {schema: Array}},
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: {
                    type: 'object'
                },
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CategoryController.prototype, "approvedHook", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/accountConfirmationHook'),
    (0, rest_1.response)(200, {
        description: 'approvedHook',
        // content: {'application/json': {schema: Array}},
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: {
                    type: 'object'
                },
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CategoryController.prototype, "accountConfirmationHook", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/accountLoadConfirmationHook'),
    (0, rest_1.response)(200, {
        description: 'approvedHook',
        // content: {'application/json': {schema: Array}},
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: {
                    type: 'object'
                },
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CategoryController.prototype, "accountLoadConfirmationHook", null);
CategoryController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.CategoryRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.CategoryRepository])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map
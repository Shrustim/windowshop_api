"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UsersController = class UsersController {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(users) {
        return this.usersRepository.create(users);
    }
    async count(where) {
        return this.usersRepository.count(where);
    }
    async find(filter) {
        return this.usersRepository.find(filter);
    }
    async updateAll(users, where) {
        return this.usersRepository.updateAll(users, where);
    }
    async findById(id, filter) {
        return this.usersRepository.findById(id, filter);
    }
    async updateById(id, users) {
        await this.usersRepository.updateById(id, users);
    }
    async replaceById(id, users) {
        await this.usersRepository.replaceById(id, users);
    }
    async deleteById(id) {
        await this.usersRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/users'),
    (0, rest_1.response)(200, {
        description: 'Users model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Users) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Users, {
                    title: 'NewUsers',
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Users]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsersController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/users/count'),
    (0, rest_1.response)(200, {
        description: 'Users model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Users)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsersController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/users'),
    (0, rest_1.response)(200, {
        description: 'Array of Users model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Users, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Users)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsersController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/users'),
    (0, rest_1.response)(200, {
        description: 'Users PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Users, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Users)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Users, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsersController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/users/{id}'),
    (0, rest_1.response)(200, {
        description: 'Users model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Users, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Users, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsersController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/users/{id}'),
    (0, rest_1.response)(204, {
        description: 'Users PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Users, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Users]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsersController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/users/{id}'),
    (0, rest_1.response)(204, {
        description: 'Users PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Users]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsersController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/users/{id}'),
    (0, rest_1.response)(204, {
        description: 'Users DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsersController.prototype, "deleteById", null);
UsersController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.UsersRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.UsersRepository])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map
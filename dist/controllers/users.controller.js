"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const tslib_1 = require("tslib");
const authentication_jwt_1 = require("@loopback/authentication-jwt");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const security_1 = require("@loopback/security");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UsersController = class UsersController {
    constructor(jwtService, userService, user, 
    // @repository(UsersRepository) protected userRepository: UsersRepository,
    usersRepository) {
        this.jwtService = jwtService;
        this.userService = userService;
        this.user = user;
        this.usersRepository = usersRepository;
    }
    async login(users) {
        // ensure the user exists, and the password is correct
        //  const user = await this.userService.verifyCredentials(credentials);
        // convert a User object into a UserProfile object (reduced set of properties)
        const userProfile = { id: 1, name: "shrushti", mobileNo: "9595959595" }; // this.userService.convertToUserProfile(user);
        // create a JSON Web Token based on the user profile
        const token = await this.jwtService.generateToken(userProfile);
        return { token };
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
    (0, rest_1.post)('/users/login', {
        responses: {
            '200': {
                description: 'Token',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                token: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        description: 'The input of login function',
        required: true,
        content: {
            'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Users) },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Users]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsersController.prototype, "login", null);
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
    (0, tslib_1.__param)(0, (0, core_1.inject)(authentication_jwt_1.TokenServiceBindings.TOKEN_SERVICE)),
    (0, tslib_1.__param)(1, (0, core_1.inject)(authentication_jwt_1.UserServiceBindings.USER_SERVICE)),
    (0, tslib_1.__param)(2, (0, core_1.inject)(security_1.SecurityBindings.USER, { optional: true })),
    (0, tslib_1.__param)(3, (0, repository_1.repository)(repositories_1.UsersRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, authentication_jwt_1.MyUserService, Object, repositories_1.UsersRepository])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map
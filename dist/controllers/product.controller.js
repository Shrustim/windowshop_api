"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProductController = class ProductController {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async create(product) {
        return this.productRepository.create(product);
    }
    async count(where) {
        return this.productRepository.count(where);
    }
    async find(filter) {
        return this.productRepository.find(filter);
    }
    async updateAll(product, where) {
        return this.productRepository.updateAll(product, where);
    }
    async findById(id, filter) {
        return this.productRepository.findById(id, filter);
    }
    async updateById(id, product) {
        await this.productRepository.updateById(id, product);
    }
    async replaceById(id, product) {
        await this.productRepository.replaceById(id, product);
    }
    async deleteById(id) {
        await this.productRepository.deleteById(id);
    }
    async products_list(dataa) {
        var query = "SELECT DISTINCT(Product.id), productName, categoryId, subCategoryId, description, imageone, imagetwo, imagethree, imagefour FROM `Product` LEFT JOIN Productprice ON Product.id = Productprice.productId WHERE Product.is_active = 1 AND Productprice.is_show = 1 AND Productprice.is_active = 1";
        var filter = " ";
        var filterForProductPrice = " ";
        // console.log("filter---", dataa)
        if (dataa) {
            if (dataa.categoryId && dataa.categoryId > 0) {
                // console.log("categoryId-----------", dataa.categoryId)
                filter = filter + " AND categoryId = '" + dataa.categoryId + "'";
            }
            if (dataa.subCategoryId && dataa.subCategoryId > 0) {
                // console.log("subCategoryId-----------", dataa.subCategoryId)
                filter = filter + " AND subCategoryId = '" + dataa.subCategoryId + "'";
            }
            if (dataa.unitId && dataa.unitId > 0) {
                // console.log("unitId-----------", dataa.unitId);
                filter = " AND Productprice.unitId = '" + dataa.unitId + "'" + filter;
            }
            if (dataa.startPrice && dataa.startPrice > 0 && dataa.endPrice && dataa.endPrice > 0) {
                // console.log("startPrice-----------", dataa.startPrice)
                // console.log("endPrice-----------", dataa.endPrice)
                filter = filter + " AND Productprice.totalPrice BETWEEN " + dataa.startPrice + " AND " + dataa.endPrice + " ";
                filterForProductPrice = " AND Productprice.totalPrice BETWEEN " + dataa.startPrice + " AND " + dataa.endPrice + " ";
            }
            if (dataa.limit && dataa.limit > 0 && dataa.offset >= 0) {
                // console.log("limit-----------", dataa.limit)
                // console.log("offset-----------", dataa.offset)
                filter = filter + "  LIMIT " + dataa.limit + " OFFSET " + dataa.offset + " ";
            }
        }
        // console.log("--------------", filter);
        var result = await this.productRepository.execute(query + " " + filter);
        var newData = await Promise.all(result.map(async (e, index) => {
            var resultData = [];
            resultData = await this.productRepository.execute('SELECT Productprice.id, productId, unitId, qty, price,discount, totalPrice ,UnitMaster.name as unitName FROM `Productprice` LEFT OUTER JOIN UnitMaster ON Productprice.unitId = UnitMaster.id WHERE Productprice.is_active = 1 AND Productprice.is_show = 1 AND productId = "' + e.id + '" ' + filterForProductPrice + '');
            var a = {
                ...e,
                "pricedata": resultData
            };
            return a;
        }));
        return newData;
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/products'),
    (0, rest_1.response)(200, {
        description: 'Product model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Product) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Product, {
                    title: 'NewProduct',
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Product]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/products/count'),
    (0, rest_1.response)(200, {
        description: 'Product model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Product)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/products'),
    (0, rest_1.response)(200, {
        description: 'Array of Product model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Product, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Product)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/products'),
    (0, rest_1.response)(200, {
        description: 'Product PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Product, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Product)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Product, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/products/{id}'),
    (0, rest_1.response)(200, {
        description: 'Product model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Product, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Product, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/products/{id}'),
    (0, rest_1.response)(204, {
        description: 'Product PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Product, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Product]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/products/{id}'),
    (0, rest_1.response)(204, {
        description: 'Product PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Product]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/products/{id}'),
    (0, rest_1.response)(204, {
        description: 'Product DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductController.prototype, "deleteById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/products-list'),
    (0, rest_1.response)(200, {
        description: 'Array of Product model instances',
        // content: {'application/json': {schema: Array}},
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        categoryId: { type: "number" },
                        subCategoryId: { type: "number" },
                        unitId: { type: "number" },
                        startPrice: { type: "number" },
                        endPrice: { type: "number" },
                        limit: { type: "number" },
                        offset: { type: "number" }
                    },
                },
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductController.prototype, "products_list", null);
ProductController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.ProductRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.ProductRepository])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map
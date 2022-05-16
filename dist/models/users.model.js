"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Users = class Users extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Users.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Users.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        default: 0,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Users.prototype, "mobileNo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number'
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Users.prototype, "pincodeId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Users.prototype, "address", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Users.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Users.prototype, "is_active", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Users.prototype, "created", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Users.prototype, "updated", void 0);
Users = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Users);
exports.Users = Users;
//# sourceMappingURL=users.model.js.map
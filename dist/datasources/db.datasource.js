"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    // name: 'db',
    // connector: 'mysql',
    // url: '',
    // host: 'sql5.freesqldatabase.com',
    // port: 3306,
    // user: 'sql5449233',
    // password: 'vY5PnXUB7X',
    // database: 'sql5449233'
    name: 'db',
    connector: 'mysql',
    url: '',
    host: 'www.db4free.net',
    port: 3306,
    user: 'clgpro_decore',
    password: 'clgProDecore@Akki',
    database: 'clgprodecoredb'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let DbDataSource = class DbDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
DbDataSource.dataSourceName = 'db';
DbDataSource.defaultConfig = config;
DbDataSource = (0, tslib_1.__decorate)([
    (0, core_1.lifeCycleObserver)('datasource'),
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.config.db', { optional: true })),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], DbDataSource);
exports.DbDataSource = DbDataSource;
//# sourceMappingURL=db.datasource.js.map
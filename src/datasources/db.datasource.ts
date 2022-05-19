import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  // name: 'db',
  // connector: 'mysql',
  // url: '',
  // host: 'sql5.freesqldatabase.com',
  // port: 3306,
  // user: 'sql5449233',
  // password: 'vY5PnXUB7X',
  // database: 'sql5449233'

  // name: 'db',
  // connector: 'mysql',
  // url: '',
  // host: 'www.db4free.net',
  // port: 3306,
  // user: 'clgpro_decore',
  // password: 'clgProDecore@Akki',
  // database: 'clgprodecoredb'

  // name: 'db',
  // connector: 'mysql',
  // url: '',
  // host: 'localhost',
  // port: 3306,
  // user: 'root',
  // password: '',
  // database: 'loopback4_bekery_api'
  name: 'db',
  connector: 'mysql',
  url: '',
  host: 'www.remotemysql.com',
  port: 3306,
  user: '6br4O9SyPX',
  password: 'BY5gM7x7Tm',
  database: '6br4O9SyPX'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

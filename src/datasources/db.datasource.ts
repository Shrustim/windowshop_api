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

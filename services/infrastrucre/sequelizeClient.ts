import { logger } from '@services/servers';
import { config } from '@config/config';

const Sequelize = require('sequelize');

const sequelizeClient = new Sequelize(
  config.DB.NAME,
  config.DB.USER,
  config.DB.PASSWORD,
  {
    host: config.DB.HOST,
    dialect: 'mysql',
  },
);

try {
  sequelizeClient.authenticate();
} catch (e) {
  logger.error('Unable to connect to the database: ', e);
}
export default sequelizeClient;

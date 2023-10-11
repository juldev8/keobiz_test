import express, { Express } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import pino from 'pino';
import bodyParser from 'body-parser';

export const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

export const logger = pino();

server.use(pino);

export const startServer = async (port: number): Promise<Express> => {
  try {
    server.listen(port, () => logger.info(`Keobiz server listening on port ${port}!`));
    return server;
  } catch (e) {
    logger.error(e);
    process.exit(1);
  }
};

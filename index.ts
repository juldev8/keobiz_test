import { startServer } from '@services/server';
import { config } from '@config/config';

startServer(config.APP.PORT as number);

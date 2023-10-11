import { startServer } from '@services/servers';
import { config } from '@config/config';

startServer(config.APP.PORT as number);

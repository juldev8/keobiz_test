import dotenv from 'dotenv';

dotenv.config();

export const config = {
  APP: {
    PORT: process.env.APP_PORT || 3000,
  },
  DB: {
    HOST: process.env.DB_HOST || 'localhost',
    USER: process.env.DB_USER || '',
    PASSWORD: process.env.DB_PASSWORD || '',
    NAME: process.env.DB_NAME || '',
  },
};

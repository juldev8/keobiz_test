import dotenv from 'dotenv';

dotenv.config();

export const config = {
  APP: {
    PORT: process.env.APP_PORT || 3000,
  },
};

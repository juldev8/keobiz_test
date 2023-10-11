import request from 'supertest';
import { server } from '@services/server';

export const httpGetAllRequest = (url: string) => {
  const response = request(server).get(url);
  return response;
};

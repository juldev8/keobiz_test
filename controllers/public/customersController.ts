import { Request, Response } from 'express';
import * as CustomersFetcherService from '@services/domain/entities/customers/fetcherService';
import { sendResponse } from '@services/application/helpers';

export const index = async (_: Request, response: Response) => {
  const result = await CustomersFetcherService.getCustomers();
  sendResponse(response, result, 200);
};

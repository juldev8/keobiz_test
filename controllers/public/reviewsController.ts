import { Request, Response } from 'express';
import * as ReviewsFetcherService from '@services/domain/entities/reviews/fetcherService';
import { sendResponse } from '@services/application/helpers';

export const index = async (_: Request, response: Response) => {
  const result = await ReviewsFetcherService.getReviews();
  sendResponse(response, result, 200);
};

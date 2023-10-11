import { Request, Response } from 'express';
import * as ReviewsCreatorService from '@services/domain/entities/reviews/creatorService';
import * as ReviewsFetcherService from '@services/domain/entities/reviews/fetcherService';
import { sendResponse } from '@services/application/helpers';

export const create = async (request: Request, response: Response) => {
  const { body: payload } = request;
  const result = await ReviewsCreatorService.createFromHttp({ payload });

  sendResponse(response, result, 201);
};

export const index = async (_: Request, response: Response) => {
  const result = await ReviewsFetcherService.getReviews();
  sendResponse(response, result, 200);
};
export const show = async (request: Request, response: Response) => {
  const { params: { id: customerId } } = request;

  const result = await
  ReviewsFetcherService.getReview(
    { customerId },
  );

  sendResponse(response, result, 200);
};

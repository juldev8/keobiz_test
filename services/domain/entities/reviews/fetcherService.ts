import * as ReviewsRepository from '@services/domain/repositories/reviewsRepository';
import * as Neverthrow from 'neverthrow';
import { neverthrowForbiddenError } from '@services/domain/errors/neverthrowErrorsReturn';
import * as Flows from '@services/domain/errors/class/notEntityFound';

export const getReview = async ({ customerId }: any): Promise<any> => {
  const entitySelectQueryResult = await ReviewsRepository
    .selectReviewFromCustomerId({ customerId });

  if (entitySelectQueryResult.isErr()) {
    if (entitySelectQueryResult.error.length === 0) {
      return Neverthrow.err(new Flows.NotEntityFoundFlow());
    }
    return neverthrowForbiddenError(entitySelectQueryResult);
  }

  return Neverthrow.ok(entitySelectQueryResult.value);
};

export const getReviews = async ():
Promise<Neverthrow.Result<any, Flows.NotEntityFoundFlow>> => {
  const entitySelectQueryResult = await ReviewsRepository.selectReviews();

  if (entitySelectQueryResult.isErr()) {
    return neverthrowForbiddenError(entitySelectQueryResult);
  }

  return Neverthrow.ok(entitySelectQueryResult.value);
};

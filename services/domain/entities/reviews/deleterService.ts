import * as Neverthrow from 'neverthrow';
import * as ReviewsRepository from '@services/domain/repositories/reviewsRepository';
import { neverthrowForbiddenError } from '@services/domain/errors/neverthrowErrorsReturn';

export const deleteFromHttp = async ({ customerId }: any) => {
  const entityDeletiontQueryResult = await ReviewsRepository.deleteFromCustomerId({ customerId });

  if (entityDeletiontQueryResult.isErr()) {
    return neverthrowForbiddenError(entityDeletiontQueryResult);
  }

  return Neverthrow.ok(entityDeletiontQueryResult.value);
};

import { schemaReviews } from '@services/domain/validators/reviews';
import { neverthrow422ErrorValidator, neverthrowForbiddenError } from '@services/domain/errors/neverthrowErrorsReturn';
import * as ReviewsRepository from '@services/domain/repositories/reviewsRepository';
import * as Neverthrow from 'neverthrow';

export const updateFromHttp = async ({ payload }: any) => {
  const { error: errors } = schemaReviews.validate(payload, { abortEarly: false });

  if (errors) {
    return neverthrow422ErrorValidator(errors);
  }

  const entityUpdateQueryResult = await
  ReviewsRepository.updateFromCustomerId({ payload });

  if (entityUpdateQueryResult.isErr()) {
    return neverthrowForbiddenError(entityUpdateQueryResult);
  }

  return Neverthrow.ok(entityUpdateQueryResult.value);
};

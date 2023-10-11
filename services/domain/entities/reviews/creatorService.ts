import { schemaReviews } from '@services/domain/validators/reviews';
import * as ReviewsRepository from '@services/domain/repositories/reviewsRepository';
import * as Neverthrow from 'neverthrow';
import { neverthrowForbiddenError, neverthrow422ErrorValidator } from '@services/domain/errors/neverthrowErrorsReturn';

export const createFromHttp = async ({ payload }: any) => {
  const { error: errors } = schemaReviews.validate(payload, { abortEarly: false });

  if (errors) {
    return neverthrow422ErrorValidator(errors);
  }

  const entityInsertionQueryResult = await ReviewsRepository.create({ payload });

  if (entityInsertionQueryResult.isErr()) {
    return neverthrowForbiddenError(entityInsertionQueryResult);
  }

  return Neverthrow.ok(entityInsertionQueryResult.value);
};

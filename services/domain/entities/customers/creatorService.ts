import { schemaCustomers } from '@services/domain/validators/customers';
import * as CustomersRepository from '@services/domain/repositories/customersRepositories';
import * as Neverthrow from 'neverthrow';
import { neverthrowForbiddenError, neverthrow422ErrorValidator } from '@services/domain/errors/neverthrowErrorsReturn';

export const createFromHttp = async ({ payload }: any) => {
  const { error: errors } = schemaCustomers.validate(payload, { abortEarly: false });

  if (errors) {
    return neverthrow422ErrorValidator(errors);
  }

  const entityInsertionQueryResult = await CustomersRepository.create({ payload });

  if (entityInsertionQueryResult.isErr()) {
    return neverthrowForbiddenError(entityInsertionQueryResult);
  }

  return Neverthrow.ok(entityInsertionQueryResult.value);
};

import { schemaCustomers } from '@services/domain/validators/customers';
import { neverthrow422ErrorValidator, neverthrowForbiddenError } from '@services/domain/errors/neverthrowErrorsReturn';
import * as CustomersRepository from '@services/domain/repositories/customersRepository';
import * as Neverthrow from 'neverthrow';

export const updateFromHttp = async ({ customerId, payload }: any) => {
  const { error: errors } = schemaCustomers.validate(payload, { abortEarly: false });

  if (errors) {
    return neverthrow422ErrorValidator(errors);
  }

  const entityUpdateQueryResult = await CustomersRepository.update({ customerId, payload });

  if (entityUpdateQueryResult.isErr()) {
    return neverthrowForbiddenError(entityUpdateQueryResult);
  }
  return Neverthrow.ok(entityUpdateQueryResult.value);
};

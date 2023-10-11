import * as Neverthrow from 'neverthrow';
import * as CustomersRepository from '@services/domain/repositories/customersRepositories';
import { neverthrowForbiddenError } from '@services/domain/errors/neverthrowErrorsReturn';

export const deleteFromHttp = async ({ customerId }: any) => {
  const entityDeletiontQueryResult = await CustomersRepository.delete_({ customerId });

  if (entityDeletiontQueryResult.isErr()) {
    return neverthrowForbiddenError(entityDeletiontQueryResult);
  }

  return Neverthrow.ok(entityDeletiontQueryResult.value);
};

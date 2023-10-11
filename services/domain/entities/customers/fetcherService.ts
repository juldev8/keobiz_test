import * as CustomersRepository from '@services/domain/repositories/customersRepositories';
import * as Neverthrow from 'neverthrow';
import { neverthrowForbiddenError } from '@services/domain/errors/nerverthrowErrorsReturn';
import * as Flows from '@services/domain/errors/class/notEntityFound';

export const getCustomers = async ():
Promise<Neverthrow.Result<any, Flows.NotEntityFoundFlow>> => {
  const entitySelectQueryResult = await CustomersRepository.selectCustomers();

  if (entitySelectQueryResult.isErr()) {
    return neverthrowForbiddenError(entitySelectQueryResult);
  }

  return Neverthrow.ok(entitySelectQueryResult.value);
};

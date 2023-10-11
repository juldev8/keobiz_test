import * as CustomersRepository from '@services/domain/repositories/customersRepositories';
import * as Neverthrow from 'neverthrow';
import { neverthrowForbiddenError } from '@services/domain/errors/nerverthrowErrorsReturn';
import * as Flows from '@services/domain/errors/class/notEntityFound';

export const getCustomer = async ({ customerId }: any): Promise<any> => {
  const entitySelectQueryResult = await CustomersRepository.selectCustomer({ customerId });

  if (entitySelectQueryResult.isErr()) {
    if (entitySelectQueryResult.error.length === 0) {
      return Neverthrow.err(new Flows.NotEntityFoundFlow());
    }
    return neverthrowForbiddenError(entitySelectQueryResult);
  }
  return Neverthrow.ok(entitySelectQueryResult.value);
};

export const getCustomers = async ():
Promise<Neverthrow.Result<any, Flows.NotEntityFoundFlow>> => {
  const entitySelectQueryResult = await CustomersRepository.selectCustomers();

  if (entitySelectQueryResult.isErr()) {
    return neverthrowForbiddenError(entitySelectQueryResult);
  }

  return Neverthrow.ok(entitySelectQueryResult.value);
};

import sequelizeClient from '@services/infrastrucre/sequelizeClient';
import { QueryTypes } from 'sequelize';
import * as Neverthrow from 'neverthrow';

export const selectCustomer = async ({ customerId }:any): Promise<any[]| any > => {
  try {
    const customer = await sequelizeClient.query(
      `SELECT *
       FROM clients
       WHERE clients.id = ${customerId}`,
      { type: QueryTypes.SELECT },
    );
    return customer.length ? Neverthrow.ok(customer) : Neverthrow.err(customer);
  } catch (e) {
    return Neverthrow.err(e);
  }
};

export const selectCustomers = async (): Promise<any[]| any > => {
  try {
    const customers = await sequelizeClient.query('SELECT * FROM `clients`', { type: QueryTypes.SELECT });
    return Neverthrow.ok(customers);
  } catch (e) {
    return Neverthrow.err(e);
  }
};

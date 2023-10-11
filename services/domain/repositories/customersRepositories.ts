import sequelizeClient from '@services/infrastrucre/sequelizeClient';
import { QueryTypes } from 'sequelize';
import * as Neverthrow from 'neverthrow';

export const create = async ({ payload }:any): Promise<any[]| any > => {
  const { firstName, lastName } = payload;
  try {
    const sql = `
    INSERT INTO clients (first_name, last_name)
    VALUES ('${firstName}', '${lastName}');
    `;
    const customer = await sequelizeClient.query(
      sql,
      { type: QueryTypes.INSERT },
    );
    return customer[1]
      ? Neverthrow.ok({ customer: { id: customer[0], firstName, lastName } })
      : Neverthrow.err(customer[0]);
  } catch (e) {
    return Neverthrow.err(e);
  }
};

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

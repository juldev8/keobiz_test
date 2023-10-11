import sequelizeClient from '@services/infrastructure/sequelizeClient';
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
export const delete_ = async ({ customerId }:any): Promise<any[]| any > => {
  try {
    const customer = await sequelizeClient.query(
      `DELETE
       FROM clients
       WHERE clients.id = ${customerId}
       `,
      { type: QueryTypes.DELETE },
    );
    return Neverthrow.ok(customer);
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

export const update = async ({ customerId, payload }:any): Promise<any[]| any > => {
  const { firstName, lastName } = payload;

  try {
    const customer = await sequelizeClient.query(
      `UPDATE clients
       SET clients.first_name = '${firstName}',
       clients.last_name = '${lastName}'
       WHERE clients.id = ${customerId}
       `,
      { type: QueryTypes.UPDATE },
    );
    return customer[1]
      ? Neverthrow.ok({ customer: { id: customer[0], firstName, lastName } })
      : Neverthrow.err(customer[0]);
  } catch (e) {
    return Neverthrow.err(e);
  }
};

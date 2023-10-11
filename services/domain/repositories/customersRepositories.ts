import sequelizeClient from '@services/infrastrucre/sequelizeClient';
import { QueryTypes } from 'sequelize';
import * as Neverthrow from 'neverthrow';

export const selectCustomers = async (): Promise<any[]| any > => {
  try {
    const customers = await sequelizeClient.query('SELECT * FROM `clients`', { type: QueryTypes.SELECT });
    return Neverthrow.ok(customers);
  } catch (e) {
    return Neverthrow.err(e);
  }
};

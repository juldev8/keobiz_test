import sequelizeClient from '@services/infrastructure/sequelizeClient';
import { QueryTypes } from 'sequelize';
import * as Neverthrow from 'neverthrow';

export const selectReviews = async (): Promise<any[]| any > => {
  try {
    const reviews = await sequelizeClient.query('SELECT * FROM `balance_sheets`', { type: QueryTypes.SELECT });
    return Neverthrow.ok(reviews);
  } catch (e) {
    return Neverthrow.err(e);
  }
};

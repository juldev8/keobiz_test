import sequelizeClient from '@services/infrastructure/sequelizeClient';
import { QueryTypes } from 'sequelize';
import * as Neverthrow from 'neverthrow';

export const selectReviewFromCustomerId = async ({ customerId }:any): Promise<any[]| any > => {
  try {
    const review = await sequelizeClient.query(
      `SELECT *
         FROM balance_sheets
         WHERE balance_sheets.client_id = ${customerId}`,
      { type: QueryTypes.SELECT },
    );
    return review.length ? Neverthrow.ok(review) : Neverthrow.err(review);
  } catch (e) {
    return Neverthrow.err(e);
  }
};

export const selectReviews = async (): Promise<any[]| any > => {
  try {
    const reviews = await sequelizeClient.query('SELECT * FROM `balance_sheets`', { type: QueryTypes.SELECT });
    return Neverthrow.ok(reviews);
  } catch (e) {
    return Neverthrow.err(e);
  }
};

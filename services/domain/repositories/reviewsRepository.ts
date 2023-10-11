import sequelizeClient from '@services/infrastructure/sequelizeClient';
import { QueryTypes } from 'sequelize';
import * as Neverthrow from 'neverthrow';

export const create = async ({ payload }:any): Promise<any[]| any > => {
  const { year, customerId, result } = payload;

  try {
    const sql = `
      INSERT INTO balance_sheets (year, client_id, result )
      VALUES ('${year}', '${customerId}', '${result}')
      `;
    const review = await sequelizeClient.query(
      sql,
      { type: QueryTypes.INSERT, returning: true },
    );

    return review[1]
      ? Neverthrow.ok({ review: { year, customerId, result } })
      : Neverthrow.err(review[0]);
  } catch (e) {
    return Neverthrow.err(e);
  }
};

export const deleteFromCustomerId = async ({ customerId }:any): Promise<any[]| any > => {
  try {
    const review = await sequelizeClient.query(
      `DELETE
         FROM balance_sheets
         WHERE balance_sheets.client_id = ${customerId}
         `,
      { type: QueryTypes.DELETE },
    );
    return Neverthrow.ok(review);
  } catch (e) {
    return Neverthrow.err(e);
  }
};

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

import { httpPostRequest } from '@tests/shared/http';

describe('Reviews creator Controller', () => {
  describe('POST /api/public/reviews', () => {
    describe('With valid payload', () => {
      const data = {} as any;
      beforeEach(async () => {
        data.response = await httpPostRequest(
          '/api/public/reviews',
          {
            year: Math.floor(Math.random() * (2200 - 2022 + 1) + 2022),
            customerId: Math.floor(Math.random() * (26 - 1 + 1) + 1),
            result: 202.34,
          },
        );
        data.body = JSON.parse(data.response.text);
      });

      it('Should have status code 201', async () => {
        expect(data.response.statusCode).toBe(201);
      });

      it('Should return accounts entity with an id', async () => {
        expect(data.body.review).toBeDefined();
        expect(data.body.review.year).toBeDefined();
        expect(data.body.review.customerId).toBeDefined();
        expect(data.body.review.result).toBeDefined();
      });

      it('Should create a account entity', async () => {
        // Check than review entity has been create in database
      });
    });

    describe('With invalid payload', () => {
      const data = {} as any;
      beforeEach(async () => {
        data.response = await httpPostRequest(
          '/api/public/reviews',
          {
            year: 2020,
            customerId: 867,
            result: 202.34,
          },
        );
        data.error = JSON.parse(data.response.error.text);
      });

      it('Should have status code 422', async () => {
        expect(data.response.statusCode).toBe(422);
      });

      it('Should contains 422 Json API payload', async () => {
        expect(data.error.name).toBe('UnprocessableEntityErrors');
      });
    });
  });
});

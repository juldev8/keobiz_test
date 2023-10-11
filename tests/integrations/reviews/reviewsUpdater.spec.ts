import { httpUpdateRequest } from '@tests/shared/http';

describe('Reviews updater Controller', () => {
  describe('UPDATE /api/public/reviews/', () => {
    describe('With valid payload', () => {
      const data = {} as any;
      beforeEach(async () => {
        data.response = await httpUpdateRequest(
          '/api/public/reviews',
          {
            year: 2020,
            customerId: 20,
            result: Math.random() * (26 - 1 + 1) * 0.1,
          },
        );
        data.body = JSON.parse(data.response.text);
      });

      it('Should have status code 200', async () => {
        expect(data.response.statusCode).toBe(200);
      });

      it('Should return review with an id', async () => {
        expect(data.body.review).toBeDefined();
        expect(data.body.review.year).toBeDefined();
        expect(data.body.review.customerId).toBeDefined();
        expect(data.body.review.result).toBeDefined();
      });

      it('Should update review entity ', async () => {
        // Check than review entity has been updated in database
      });
    });
    describe('With invalid customer-id', () => {
      const data = {} as any;
      beforeEach(async () => {
        data.response = await httpUpdateRequest(
          '/api/public/reviews',
          {
            year: 2020,
            customerId: 100,
            result: 12.23,
          },
        );
      });

      it('Should have status code 404', async () => {
        expect(data.response.statusCode).toBe(404);
      });
    });
  });
});

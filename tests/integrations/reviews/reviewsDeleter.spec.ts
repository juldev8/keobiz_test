import { httpDeleteRequest, httpPostRequest } from '@tests/shared/http';

describe('Reviews deleter Controller', () => {
  describe('DELETE /api/public/reviews', () => {
    describe('With valid customer-id', () => {
      const globalData = {} as any;
      const data = {} as any;
      beforeEach(async () => {
        globalData.response = await httpPostRequest(
          '/api/public/customers',
          {
            lastName: 'fake last-name',
            firstName: 'fake first-name',
          },
        );
        data.response = await httpDeleteRequest(
          `/api/public/reviews/${globalData.response.body.customer.id}`,
        );
      });

      it('Should have status code 204', async () => {
        expect(data.response.statusCode).toBe(204);
      });

      it('Should delete review in database', async () => {
        // Check than review entity has been create in database
      });
    });
  });
});

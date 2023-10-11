import { httpGetAllRequest } from '@tests/shared/http';

describe('Reviews fetcher Controller', () => {
  describe('GET /api/public/reviews', () => {
    const data = {} as any;
    beforeEach(async () => {
      data.response = await httpGetAllRequest('/api/public/reviews');
      data.body = JSON.parse(data.response.text);
    });

    it('Should have status code 200', async () => {
      expect(data.response.statusCode).toBe(200);
    });

    it('Should return an array', async () => {
      expect(data.body.length).toBeGreaterThan(80);
    });

    it('Should return review entity', async () => {
      expect(data.body[0].year).toBeDefined();
      expect(data.body[0].client_id).toBeDefined();
      expect(data.body[0].result).toBeDefined();
    });
  });
  describe('GET /api/public/reviews/<customer-id>', () => {
    describe('With valid customer-id', () => {
      const data = {} as any;
      beforeEach(async () => {
        data.response = await httpGetAllRequest('/api/public/reviews/8');
        data.body = JSON.parse(data.response.text);
      });
      it('Should have status code 200', async () => {
        expect(data.response.statusCode).toBe(200);
      });

      it('Should return review with an id', async () => {
        expect(data.body[0].year).toBeDefined();
        expect(data.body[0].client_id).toBeDefined();
        expect(data.body[0].result).toBeDefined();
      });
    });

    describe('With invalid customer-id', () => {
      const data = {} as any;
      beforeEach(async () => {
        data.response = await httpGetAllRequest('/api/public/reviews/60');
      });

      it('Should have status code 404', async () => {
        expect(data.response.statusCode).toBe(404);
      });
    });
  });
});

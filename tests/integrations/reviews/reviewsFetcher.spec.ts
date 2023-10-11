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
});

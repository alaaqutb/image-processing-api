import supertest from 'supertest';
import app from '../index';
const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe('test responses from endpoints', (): void => {
  describe('endpoint: /', (): void => {
    it('gets /', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/');
      expect(response.status).toBe(200);
    });
  });

  describe('endpoint: /api/image', (): void => {
    it('gets /api/image (no arguments)', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/api/image');
      expect(response.status).toBe(200);
    });

    it('gets thumbnail with name=fjord&width=100&height=100', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/api/image?name=fjord&width=100&height=100'
      );
      expect(response.status).toBe(200);
    });


    it('gets original image with name=fjord', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/api/image?name=fjord');
      expect(response.status).toBe(200);
    });

    it('image not found', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/api/image?name=hithfk');
      expect(response.status).toBe(200);
    });
  });
});

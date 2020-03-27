const request = require('supertest');

const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('NGO', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new NGO', async () => {
    const response = await request(app)
      .post('/ngos')
      .send({
        name: 'Test NGO',
        email: 'contact@ngo.com',
        whatsapp: '11000000000',
        city: 'City',
        uf: 'UF'
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});

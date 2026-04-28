const request = require('supertest');
const mongoose = require('mongoose');
const app = require('./server');

describe('GET /api/albums', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb+srv://AA4495:matalasi4444@cluster0.w4tsmbv.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should return the exact number of albums in the database', async () => {
    const response = await request(app).get('/api/albums');
    const albums = response.body;
    expect(albums.length).toBe(2); // replace 2 with the actual number of albums in your test database
  });
});

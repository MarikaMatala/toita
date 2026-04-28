const request = require('supertest');
const app = require('./server');

const albumSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    year: { type: Number, required: true }
  });
  
describe('POST /api/albums', () => {
    it('should add a new album', async () => {
        const albumData = {
          title: 'My Album',
          artist: 'Me',
          year: 2023
        };
        const res = await request(app)
          .post('/api/albums')
          .send(albumData);
        expect(res.statusCode).toEqual(201);
        expect(res.body.title).toEqual(albumData.title);
        expect(res.body.artist).toEqual(albumData.artist);
        expect(res.body.year).toEqual(albumData.year);
        const albums = await Album.find({});
        expect(albums).toHaveLength(1);
        expect(albums[0].title).toEqual(albumData.title);
        expect(albums[0].artist).toEqual(albumData.artist);
        expect(albums[0].year).toEqual(albumData.year);
      });
      
      it('should return a 400 error if album data is missing', async () => {
        const albumData = {};
        const res = await request(app)
          .post('/api/albums')
          .send(albumData);
        expect(res.statusCode).toEqual(400);
      });
    });

    it('should return a 400 error if album data is invalid', async () => {
        const albumData = {
          title: 'My Album',
          artist: 'Me',
          year: 'invalid'
        };
        const res = await request(app)
          .post('/api/albums')
          .send(albumData);
        expect(res.statusCode).toEqual(400);
      });

      it('should retrieve a list of albums', async () => {
        const albumData = [
          { title: 'My Album', artist: 'Me', year: 2023 },
          { title: 'Your Album', artist: 'You', year: 2024 }
        ];
        await Album.insertMany(albumData);
        const res = await request(app).get('/api/albums');
        expect(res.statusCode).toEqual(200);
        expect(res.body.results).toHaveLength(2);
      });
      
afterEach(async () => {
    await Album.deleteMany({});
});

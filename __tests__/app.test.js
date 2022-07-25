const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { zodiacs } = require('../data/zodiacs');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/zodiacs should return a filtered list of zodiac names and ids', async  () => {
    const res = await request(app).get('/zodiacs');
    const expected = zodiacs.map(zodiac => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(res.body).toEqual(expected);
  });
  it('/zodiacs/:id returns data for a specific zodiac', async () => {
    const res = await request(app).get('/zodiacs/3');
    const expected = { id: '3', name: 'cancer', dates: 'Jun 21 - Jul 22', symbol: 'Crab' };
    expect(res.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});



const path = require('path');
const request = require('supertest');
const { app } = require('../app');

const { frontendLogger, logger } = require('../logger/logger');
frontendLogger.error = jest.fn().mockImplementationOnce(() => {});
logger.error = jest.fn().mockImplementation(() => {});

describe('Test the route path', () => {
  test('Should send a status code of 200', () => {
    return request(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe('Test whether BASE_URL/anything uses the React App', () => {
  test('Should send a status code of 200', () => {
    return request(app)
      .get('/webgen/preview')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe('Test whether logo is served', () => {
  test('Should send a status code of 200', () => {
    return request(app)
      .get('/public/logo.png')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('image/png');
      });
  });
});

describe('Test whether favicon is served', () => {
  test('Should send a status code of 200', () => {
    return request(app)
      .get('/public/favicon-32x32.png')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('image/png');
      });
  });
});

describe('React Logger is functioning as expected', () => {
  test('Should return a status code of 201', () => {
    return request(app)
      .post('/api/log')
      .send({ message: 'Some error occured' })
      .then((response) => {
        expect(response.statusCode).toBe(201);
      });
  });
});

const randomFilePath = path.join(__dirname, '../', 'index.js');

describe('Upload endpoint should accept files with valid image extension', () => {
  test('Sends status 400', async () =>
    request(app)
      .post('/api/upload/single')
      .attach('image', randomFilePath)
      .then((response) => {
        expect(response.statusCode).toBe(400);
      }));
});

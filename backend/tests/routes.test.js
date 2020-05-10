const request = require('supertest');
const { app } = require('../app');

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

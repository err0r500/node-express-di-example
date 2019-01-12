// We're able to test the http layer without caring about the business logic

const request = require('supertest');
const {getRouter} = require('./router');

describe('Test the root path', () => {
    test('It should response the GET method', async () => {
        await getRouter(
            () => new Promise((resolve) => resolve("bla"))
        ).then((app) => request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.text).toBe('bla')
            })
        )
    });
});

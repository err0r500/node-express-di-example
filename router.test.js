// We're able to test the http layer without caring about the business logic

const request = require('supertest')
const {getRouter} = require('./router')

describe('Test the root path', () => {
    test('happy case', async () => {
        const mockFn = jest.fn(() => new Promise((resolve) => resolve("bla")))
        const testParam = 12
        await getRouter(mockFn).then((app) => request(app).get(`/${testParam}`).then((response) => {
                expect(mockFn.mock.calls.length).toBe(1)
                expect(mockFn.mock.calls[0][0]).toBe(testParam)
                expect(response.statusCode).toBe(200)
                expect(response.text).toBe('bla')
            })
        )
    })

    test('error in the business logic', async () => {
        const mockFn = jest.fn(() => new Promise((_, reject) => reject("bla")))
        const testParam = 12
        await getRouter(mockFn).then((app) => request(app).get(`/${testParam}`).then((response) => {
                expect(mockFn.mock.calls.length).toBe(1)
                expect(mockFn.mock.calls[0][0]).toBe(testParam)
                expect(response.statusCode).toBe(500)
                expect(response.text).toBe("")
            })
        )
    })

    test('error in the request params', async () => {
        const mockFn = jest.fn()
        const testParam = "bla"
        await getRouter(mockFn).then((app) => request(app).get(`/${testParam}`).then((response) => {
                expect(mockFn.mock.calls.length).toBe(0)
                expect(response.statusCode).toBe(400)
                expect(response.text).toBe("")
            })
        )
    })
})

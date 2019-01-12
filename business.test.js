// We're able to test the business logic without thinking about the actual implementation
const business = require('./business');

describe('Test the business logic', () => {
    test('happy case', async () => {
        await business.businessLogic(
            () => new Promise((resolve) => resolve("bla"))
        )(12).then(res => expect(res).toBe('12 bla bla'))
    })

    test('error in api call', async () => {
        await business.businessLogic(
            () => new Promise((_, reject) => reject("failed"))
        )(12).then(res => expect(res).toBe('failed'))
    })
})

// We're able to test the business logic without thinking about the actual implementation
const business = require('./business');

test('happy case', async () => {
    await business.businessLogic(
        () => new Promise((resolve) => resolve("bla"))
    )().then(res => expect(res).toBe('bla bla'))
});

test('error in api call', async () => {
    await business.businessLogic(
        () => new Promise((_, reject) => reject("failed"))
    )().then(res => expect(res).toBe('failed'))
});

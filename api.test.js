const api = require('./api');

beforeEach(() => {
    fetch.resetMocks();
});

test('Getting API string', async () => {
    fetch.mockResponseOnce(JSON.stringify({ name: 'ola' }))
    const respons = await api.login();
    expect(respons.name).toBe('ola');
});

test.skip('Logging out', async () => {
    api.logout();
});
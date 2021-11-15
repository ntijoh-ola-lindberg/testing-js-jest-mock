const api = require('./api');

beforeEach(() => {
    fetch.resetMocks();
});

test('Getting API string', async () => {

    fetch.mockResponseOnce(JSON.stringify({ "name": "ola la" }));

    const respons = await api.login();
    expect(respons).toBe('logged-in-ok');
});

test('Logging out', async () => {
    api.logout();
    expect(false).toBe(true); //todo
});
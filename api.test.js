const login = require('./api');

beforeEach(() => {
    fetch.resetMocks();
});

test('Getting API string', async () => {

    fetch.mockResponseOnce(JSON.stringify({ "name": "ola la" }));

    const respons = await login();
    expect(respons).toBe('logged-in-ok');
});

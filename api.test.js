const api = require('./api');

test('Getting API string', async () => {
    const respons = await api();
    expect(respons).toBe('api');
});

const api = require('./api');

test('Getting API string', () => {
    return api().then(data => {
        expect(data).toBe('api');
    })
});

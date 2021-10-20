const sum = require('./sum');

//Enkelt test för att se så test-ramverket (jest) funkar som de ska
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

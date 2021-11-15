const Math = require('./math');
var math = new Math();

test('Addition: 1 + 2 to equal 3', () => {
    expect(math.sum(1, 2)).toBe(3);
});

test('Subtraction: 2 - 1 to equal 1', () => {
    expect(math.sub(2, 1)).toBe(1);
});

test('Subtraction: 1 - 2 to equal -1', () => {
    expect(math.sub(1, 2)).toBe(-1);
});

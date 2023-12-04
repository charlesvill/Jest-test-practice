const calculator = require('./calculator');

test('addition', () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test('subtraction', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});
test('multiplication', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});
test('division', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

const reverseString = require('./reverseString');

test('reverseString', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});

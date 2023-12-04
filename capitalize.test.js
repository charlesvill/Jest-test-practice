const capitalize = require('./capitalize');

test('capitalize', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});

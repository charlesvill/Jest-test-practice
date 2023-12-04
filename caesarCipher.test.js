const caesarCipher = require('./caesarCipher');


test('shifted string', () => {
  expect(caesarCipher('hi')).toBe('kl');
});
test('shifted z to a', () => {
  expect(caesarCipher('amy')).toBe('dpb');
});
test('Case maintained', () => {
  expect(caesarCipher('Hello')).toBe('Khoor');
});
test('Case maintained Z to A', () => {
  expect(caesarCipher('AMY')).toBe('DPB');
});

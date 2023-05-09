const stringlength = require('./stringlength');

test('character count of string is', () => {
  expect(stringlength('hello')).toBe(5);
});

test('if character count of string is less than 11', () => {
  expect(stringlength('hello')).toBeLessThan(11);
});

test('if character count of string is greater than 0', () => {
  expect(stringlength('hello')).toBeGreaterThan(0);
});
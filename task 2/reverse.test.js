const reverseString = require('./reverse')

test('if the string is reversed', () => {
  expect(reverseString('hello')).toEqual('olleh');
});
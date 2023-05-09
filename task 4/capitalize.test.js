const capitalize = require('./capitalize')

test('first character is capitalized', () => {
    expect(capitalize('hello')).toEqual('Hello'); 
});
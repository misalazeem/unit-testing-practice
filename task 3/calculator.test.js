const Calculator = require('./calculator');

describe('Calculator', () => {
  test('addition', () => {
    expect(Calculator.add(2,2)).toEqual(4);
  });

  test('subtraction', () => {
    expect(Calculator.sub(2,3)).toEqual(-1);
  });

  test('multiply', () => {
    expect(Calculator.mul(2,5)).toEqual(10);
  });

  test('division', () => {
    expect(Calculator.div(2,0)).toEqual('undefined');
  });

  test('division', () => {
    expect(Calculator.div(10,2)).toEqual(5);
  });

});
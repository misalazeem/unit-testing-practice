const Calculator = {
  add(a, b) {
    return a+b;
  },
  sub(a, b){
    return a-b;
  },
  mul(a, b){
    return a * b;
  },
  div(a, b){
    if(b === 0){
      return 'undefined';
    }
    else {
      return a/b;
    }
  },
};
module.exports = Calculator;
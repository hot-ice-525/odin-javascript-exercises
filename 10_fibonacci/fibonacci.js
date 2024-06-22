const fibonacci = function(number) {
  const sequenceUpto = +number;
  if (sequenceUpto === 0) {
    return 0;
  }
  else if (sequenceUpto < 0) {
    return "OOPS";
  }
  else {
    let currentNumber;
    let fibonacciArr = [1];   
    for (let i = 1; i < sequenceUpto; i++) {
      if (i === 1) {
        currentNumber = 0 + fibonacciArr[i - 1];
      }
      else {
        currentNumber = fibonacciArr[i - 2] + fibonacciArr[i - 1];
      }   
      fibonacciArr.push(currentNumber);
    }   
    return fibonacciArr[sequenceUpto - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;

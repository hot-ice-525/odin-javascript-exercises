let total;

const add = function(...numbers) {
  total = numbers.reduce((total, number) => {
    return total + number;
  }, 0);
  return total;
};

const subtract = function(...numbers) {
	total = numbers.reduce((total, number) => {
    return total - number;
  });
  return total;
};

const sum = function(sumArray) {
	total = sumArray.reduce((total, number) => {
    return (total + number);
  }, 0);
  return total;
};

const multiply = function(multiplyArray) {
  total = multiplyArray.reduce((total, number) => {
    return (total * number);
  }, 1);
  return total;
};

const power = function(num1, num2) {
	total = 1;
  for (let i = 0; i < num2; i++) {
    total *= num1;
  }
  return total;
};

const factorial = function(number) {
	total = 1;
  for (let i = number; i > 0; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

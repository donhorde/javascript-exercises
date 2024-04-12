const add = function(op1 = 0, op2 = 0) {
	return op1+op2;
};

const subtract = function(op1 = 0, op2 = 0) {
	return op1-op2;
};

function getSum(total = 0, num) {
  return total + num;
}

const sum = function(array) {
	return array.reduce(getSum, 0);
};

function getProduct(total = 1, num) {
  return total * num;
}

const multiply = function(array) {
  return array.reduce(getProduct, 1)
};

const power = function(num, power) {
  let result = 1;
	for (let i = 0; i < power; i++) {
    result *= num;
  };
  return result;
};

const factorial = function(number) {
	if (number === 0) {
    return 1;
  } else {
    return number * factorial(number-1);
  };
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

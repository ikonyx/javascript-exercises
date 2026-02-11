const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((total, currentValue) => total + currentValue, 0);
};

const multiply = function(array) {
  return array.reduce((total, currentValue) => total * currentValue, 1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  let b;
  let array = [];
	for (i=a; i>0; i--) {
    array.push(a);
    b = a - 1;
    a = b;
  }
  return array.reduce((total, currentValue) => total * currentValue, 1);
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

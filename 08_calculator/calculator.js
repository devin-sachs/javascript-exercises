const add = function (a, b) {
  return a + b;

};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return sumArray = arr.reduce((acc, current) =>
    acc + current, 0);
};

const multiply = function (arr) {
  return productArray = arr.reduce((acc, current) =>
    acc * current, 1);
};

const power = function (base, power) {
  let result = 1;
  for (let i = 1; i <= power; i++) {
    result = result * base;
  }
  return result;
};

const factorial = function (num) {
  let newNum = 1;
  for (let i = 2; i <= num; i++) {
    newNum = newNum * i;
  }
  return newNum;
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

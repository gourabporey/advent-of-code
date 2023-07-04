const toNumber = text => +text;

const isInRange = (range, number) => {
  return number <= range.max && number >= range.min;
};

const multiply = (a, b) => a * b;

const product = numbers => numbers.reduce(multiply, 1);

module.exports = { toNumber, isInRange, multiply, product };
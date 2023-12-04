const isNumber = (text) => {
  const numRegex = /^\d+$/;
  return numRegex.test(text);
};

const add = (a, b) => a + b;

const sumOf = (numbers) => numbers.reduce(add, 0);

const isOutOfBound = (twoDArray, row, col) => {
  return (
    row > twoDArray.length - 1 ||
    row < 0 ||
    col > twoDArray[0].length - 1 ||
    col < 0
  );
};

const toArray = (set) => [...set];

const multiply = (a, b) => a * b;

const split = (char) => (text) => text.split(char);

module.exports = { isNumber, sumOf, isOutOfBound, toArray, multiply, split };

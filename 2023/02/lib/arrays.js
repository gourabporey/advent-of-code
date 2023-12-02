const add = (a, b) => a + b;

const sumOf = (numbers) => numbers.reduce(add, 0);

module.exports = { sumOf };

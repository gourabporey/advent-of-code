const add = (a, b) => a + b;

const sumOf = numbers => numbers.reduce(add, 0);

const toNumber = text => +text;

module.exports = { toNumber, sumOf };
const fs = require('fs');

const toNumbers = text => +text;

const extractNumbers = text => {
  return text.split('\n').map(toNumbers);
}

const productOf = (numbers, requiredSum) => {
  const remaining = {};

  for (const number of numbers) {
    const pair = requiredSum - number;

    if (number in remaining) {
      return number * pair;
    }

    remaining[pair] = number;
  }
}

const main = () => {
  fs.readFile('./day1-input.txt', 'utf-8', (err, data) => {
    if (!data) {
      console.error(err);
      return;
    }

    const numbers = extractNumbers(data);
    console.log(productOf(numbers, 2020));
  });
}

main();
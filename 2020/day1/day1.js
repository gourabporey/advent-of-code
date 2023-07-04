const fs = require('fs');

const toNumbers = text => +text;

const extractNumbers = text => {
  return text.split('\n').map(toNumbers);
}

const multiply = (a, b) => a * b;

const product = numbers => numbers.reduce(multiply, 1);

const twoSumUsingLookup = (numbers, requiredSum) => {
  const remaining = {};

  for (const number of numbers) {
    const pair = requiredSum - number;

    if (number in remaining) {
      return [number, pair];
    }

    remaining[pair] = number;
  }

  return [];
}

const twoSum = (numbers, requiredSum) => {
  const sortedNumbers = numbers.sort((a, b) => a - b);

  let left = 0;
  let right = sortedNumbers.length - 1;

  while (left <= right) {
    const currentSum = numbers[left] + numbers[right];

    if (currentSum === requiredSum) {
      return [numbers[left], numbers[right]];
    }

    if (currentSum < requiredSum) {
      left++;
    }

    if (currentSum > requiredSum) {
      right--;
    }
  }

  return [];
}

const threeSum = (numbers, requiredSum) => {
  let indexOfCurrent = 0;

  while (indexOfCurrent < numbers.length) {
    const currentNumber = numbers[indexOfCurrent];
    const otherNumbers = twoSum(numbers, requiredSum - currentNumber);

    if (otherNumbers.length === 2) return [currentNumber, ...otherNumbers];

    indexOfCurrent++;
  }

  return [];
}

const main = () => {
  fs.readFile('./day1-input.txt', 'utf-8', (err, data) => {
    if (!data) {
      console.error(err);
      return;
    }

    const numbers = extractNumbers(data);
    console.log(product(threeSum(numbers, 2020)));
  });
}

main();
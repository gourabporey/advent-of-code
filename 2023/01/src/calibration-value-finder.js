const add = (a, b) => a + b;

const sumOf = (numbers) => numbers.reduce(add, 0);

const VALID_NUMBERS = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

const identity = (text) => text;
const reverse = (text) => text.split('').reverse().join('');

const getValue = (text, callback) => {
  const numEntries = Object.entries(VALID_NUMBERS);
  for (const [numKey, value] of numEntries) {
    if (text.includes(callback(numKey))) return value;
  }
};

const getDigit = (word, callback) => {
  let text = '';
  const characters = callback(word);

  for (char of characters) {
    text += char;
    const value = getValue(text, callback);
    if (value) return value;
  }
};

const getFirstDigit = (word) => getDigit(word, identity);

const getLastDigit = (word) => getDigit(word, reverse);

const getFirstAndLastDigit = (word) => {
  const firstDigit = getFirstDigit(word);
  const lastDigit = getLastDigit(word);

  return { firstDigit, lastDigit };
};

const calculateSumOfCalibrationValues = (lines) => {
  const calibrationValues = lines.map((word) => {
    const { firstDigit, lastDigit } = getFirstAndLastDigit(word);
    return firstDigit * 10 + lastDigit;
  });

  return sumOf(calibrationValues);
};

module.exports = {
  findSumOfCalibrationValues: calculateSumOfCalibrationValues,
};

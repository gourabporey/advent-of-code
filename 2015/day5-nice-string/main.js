const fs = require('fs');
const { countNiceStrings } = require('./src/nice-string');

const readStrings = onRead => {
  onRead(fs.readFileSync('./resources/strings.txt', 'utf-8'));
};

const main = () => {
  readStrings(strings => {
    const rules = {
      vowelCount: 3,
      repeatingChar: true,
      restrictedStrings: ['ab', 'xy', 'pq', 'cd']
    };
    const numberOfNiceStrings = countNiceStrings(strings, rules);
    console.log('Part1: No of nice Strings:', numberOfNiceStrings);
  });
};

main();
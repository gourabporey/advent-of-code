const fs = require('fs');
const { countNiceStrings } = require('./src/nice-string');

const readStrings = onRead => {
  onRead(fs.readFileSync('./resources/strings.txt', 'utf-8'));
};

const main = () => {
  readStrings(strings => {
    const part1Rules = {
      vowelCount: 3,
      repeatingChar: true,
      restrictedStrings: ['ab', 'xy', 'pq', 'cd']
    };
    const numberOfNiceStringsP1 = countNiceStrings(strings, part1Rules);

    const part2Rules = {
      repeatingCharWithOneInMiddle: true,
      twoLetterPair: true
    };

    const numberOfNiceStringsP2 = countNiceStrings(strings, part2Rules);

    console.log('Part1: No of nice Strings:', numberOfNiceStringsP1);
    console.log('Part2: No of nice Strings:', numberOfNiceStringsP2);
  });
};

main();
const fs = require('fs');
const { noOfHousesCovered } = require('./src/santa');

const readInstructions = (onRead) => {
  const instructions = fs.readFileSync('./resources/instructions.txt', 'utf-8');
  onRead(instructions);
};

const main = () => {
  readInstructions(instructions => {
    console.log('Part1: Total Number of houses that received gift: ', noOfHousesCovered(instructions));
    console.log('Part2: Total Number of houses that received gift: ', noOfHousesCovered(instructions, 2));
  });
};

main();
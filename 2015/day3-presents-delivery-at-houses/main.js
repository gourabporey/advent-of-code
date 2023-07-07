const fs = require('fs');
const { noOfHousesCovered } = require('./src/santa');

const readInstructions = (onRead) => {
  const instructions = fs.readFileSync('./resources/instructions.txt', 'utf-8');
  onRead(instructions);
};

const main = () => {
  readInstructions(instructions => {
    console.log('Total Number of houses that received gift: ', noOfHousesCovered(instructions));
  });
};

main();
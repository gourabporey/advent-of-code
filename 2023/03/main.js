const fs = require('fs');
const { calculateSumOfPartNumbers } = require('./src/problem-1');
const { calculateSumOfGearRatios } = require('./src/problem-2');

const parseEngineSchematic = (rawEngineSchematic) => {
  return rawEngineSchematic.split('\n').map((line) => line.split(''));
};

const main = () => {
  const rawEngineSchematic = fs.readFileSync('./data/input.txt', 'utf-8');
  const parsedEngineSchematic = parseEngineSchematic(rawEngineSchematic);

  const sumOfPartNumbers = calculateSumOfPartNumbers(parsedEngineSchematic);
  const sumOfAllGearRatios = calculateSumOfGearRatios(parsedEngineSchematic);

  console.log('Sum of part numbers:', sumOfPartNumbers);
  console.log('Sum of all gear ratios:', sumOfAllGearRatios);
};

main();

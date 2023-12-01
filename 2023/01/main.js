const {
  findSumOfCalibrationValues,
} = require('./src/calibration-value-finder');

const fs = require('fs');

const main = () => {
  const lines = fs.readFileSync('./data/day-1.txt', 'utf-8');
  const sumOfCalibrationValues = findSumOfCalibrationValues(lines.split('\n'));
  console.log('sum of calibration values', sumOfCalibrationValues);
};

main();

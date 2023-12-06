const fs = require('fs');
const { zip, toNumber } = require('lodash');
const { calculateProductOfNumberOfWays } = require('./src/problems');

const parseRaceData = (rawRaceData) => {
  return zip(
    ...rawRaceData.split('\n').map((line) => line.match(/\d+/g).map(toNumber))
  );
};

const parseRaceData2 = (rawRaceData) => {
  return [rawRaceData.split('\n').map((line) => +line.match(/\d+/g).join(''))];
};

const main = () => {
  const rawRaceData = fs.readFileSync('./data/input.txt', 'utf8');
  const raceData = parseRaceData(rawRaceData);
  const raceData2 = parseRaceData2(rawRaceData);
  const productOfNumberOfWays = calculateProductOfNumberOfWays(raceData);

  const productOfNumberOfWays2 = calculateProductOfNumberOfWays(raceData2);

  console.log('Product of number of ways', productOfNumberOfWays);
  console.log('Product of number of ways', productOfNumberOfWays2);
};

main();

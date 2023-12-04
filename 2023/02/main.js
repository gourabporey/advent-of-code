const fs = require('fs');
const { calculateSumOfPowers } = require('./src/problem-2');
const { calculateSumOfIdsOfValidGame } = require('./src/problem-1');

const parseGameData = (rawGameData) => {
  return rawGameData.split('\n').map((line) => {
    return JSON.parse(
      line
        .replace(/Game\s(\d+):/, '"Game" :$1, "cubes": [{')
        .replaceAll(/(\d+)\s(\w+)/g, '"$2": $1')
        .replaceAll(';', '},{')
        .replace(/^/, '{')
        .replace(/$/, '}]}')
    );
  });
};

const main = () => {
  const lines = fs.readFileSync('./data/input.txt', 'utf-8');
  const parsedGameData = parseGameData(lines);
  const validContainerDetails = {
    red: 12,
    green: 13,
    blue: 14,
  };
  const sumOfValidGames = calculateSumOfIdsOfValidGame(
    parsedGameData,
    validContainerDetails
  );

  const sumOfPowers = calculateSumOfPowers(parsedGameData);

  console.log('sum of valid games', sumOfValidGames);
  console.log('sum of powers', sumOfPowers);
};

main();

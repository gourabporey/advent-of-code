const fs = require('fs');
const { calculateSumOfWinningNumberPoints } = require('./src/problem-1');

const parseScratchCards = (rawScratchCards) => {
  return rawScratchCards.split('\n').map((line) =>
    line
      .replace(/Card\s+\d+:\s+/, '')
      .split(/\s+\|\s+/)
      .map((cards) => cards.split(/\s+/))
  );
};

const main = () => {
  const rawScratchCards = fs.readFileSync('./data/original.txt', 'utf8');
  const parsedScratchCards = parseScratchCards(rawScratchCards);
  const sumOfWinningNumberPoints =
    calculateSumOfWinningNumberPoints(parsedScratchCards);
  console.log('Sum of points: ', sumOfWinningNumberPoints);
};

main();

const fs = require('fs');
const { calculateSumOfWinningNumberPoints } = require('./src/problem-1');
const { calculateSumOfAllScratchCards } = require('./src/problem-2');

const parseScratchCards = (rawScratchCards) => {
  return rawScratchCards.split('\n').map((line) =>
    line
      .replace(/Card\s+\d+:\s+/, '')
      .split(/\s+\|\s+/)
      .map((cards) => cards.split(/\s+/))
  );
};

const main = () => {
  const rawScratchCards = fs.readFileSync('./data/input.txt', 'utf8');
  const parsedScratchCards = parseScratchCards(rawScratchCards);
  console.log(parsedScratchCards);

  const sumOfWinningNumberPoints =
    calculateSumOfWinningNumberPoints(parsedScratchCards);
  const sumOfAllScratchCards =
    calculateSumOfAllScratchCards(parsedScratchCards);

  console.log('Sum of points: ', sumOfWinningNumberPoints);
  console.log('Sum of all scratch cards: ', sumOfAllScratchCards);
};

main();

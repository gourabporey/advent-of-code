const { sumOf } = require('../lib/arrays');
const { calculateNoOfMatchingCards } = require('./problem-1');

const calculateSumOfAllScratchCards = (scratchCards) => {
  const points = calculateNoOfMatchingCards(scratchCards);
  const noOfCards = points.length;
  const cardsInstances = new Array(noOfCards).fill(1);

  points.forEach((point, index) => {
    for (let i = index + 1; i <= index + point; i++) {
      cardsInstances[i] += cardsInstances[index] * 1;
    }
  });

  return sumOf(cardsInstances);
};

module.exports = { calculateSumOfAllScratchCards };

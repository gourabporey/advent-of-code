const { sumOf } = require('../lib/arrays');
const { calculateNoOfMatchingCards } = require('./problem-1');

const calculateSumOfAllScratchCards = (scratchCards) => {
  const points = calculateNoOfMatchingCards(scratchCards);
  const noOfCards = points.length;
  const cardsInstances = new Array(noOfCards).fill(1);

  points.forEach((point, index) => {
    const nextNumIndex = index + 1;
    const copyTillIndex = index + point;

    for (let i = nextNumIndex; i <= copyTillIndex; i++) {
      cardsInstances[i] += cardsInstances[index] * 1;
    }
  });

  return sumOf(cardsInstances);
};

module.exports = { calculateSumOfAllScratchCards };

const { sumOf } = require('../lib/arrays');

const calculateNoOfMatchingCards = (scratchCards) => {
  return scratchCards.map(([winningNumbers, numbersIHave]) => {
    const noOfMatchingCards = numbersIHave.reduce(
      (matchingCardsCount, number) =>
        winningNumbers.includes(number)
          ? matchingCardsCount + 1
          : matchingCardsCount,
      0
    );

    return noOfMatchingCards;
  });
};

const calculateAllPoints = (scratchCards) => {
  const points = calculateNoOfMatchingCards(scratchCards).map(
    (noOfMatchingCards) => Math.floor(Math.pow(2, noOfMatchingCards - 1))
  );

  return points;
};

const calculateSumOfWinningNumberPoints = (scratchCards) => {
  return sumOf(calculateAllPoints(scratchCards));
};

module.exports = {
  calculateSumOfWinningNumberPoints,
  calculateAllPoints,
  calculateNoOfMatchingCards,
};

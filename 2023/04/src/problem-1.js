const { sumOf } = require('../lib/arrays');

const calculateSumOfWinningNumberPoints = (scratchCards) => {
  const points = scratchCards.map(([winningNumbers, numbersIHave]) => {
    const noOfMatchingCards = numbersIHave.reduce(
      (matchingCardsCount, number) =>
        winningNumbers.includes(number)
          ? matchingCardsCount + 1
          : matchingCardsCount,
      0
    );

    return Math.floor(Math.pow(2, noOfMatchingCards - 1));
  });

  console.log(points);
  return sumOf(points);
};

module.exports = { calculateSumOfWinningNumberPoints };

const add = (a, b) => a + b;

const sumOf = (numbers) => numbers.reduce(add, 0);

const calculateSumOfValidGames = (gamesData, validContainerDetails) => {
  const validGames = gamesData.filter((gameData) => {
    return gameData.balls.every(({ red = 0, green = 0, blue = 0 }) => {
      return (
        red <= validContainerDetails.red &&
        green <= validContainerDetails.green &&
        blue <= validContainerDetails.blue
      );
    });
  });

  return sumOf(validGames.map(({ Game }) => Game));
};

module.exports = { calculateSumOfValidGames };

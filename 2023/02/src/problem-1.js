const { sumOf } = require('../lib/arrays');

const validCubeCountsMatcher =
  (validCubeCounts) =>
  ({ red = 0, green = 0, blue = 0 }) => {
    return (
      red <= validCubeCounts.red &&
      green <= validCubeCounts.green &&
      blue <= validCubeCounts.blue
    );
  };

const calculateSumOfIdsOfValidGame = (gamesData, validCubeCounts) => {
  const validGames = gamesData.filter(({ cubes }) =>
    cubes.every(validCubeCountsMatcher(validCubeCounts))
  );

  const gameIDsOfValidGames = validGames.map(({ Game }) => Game);

  return sumOf(gameIDsOfValidGames);
};

module.exports = {
  sumOf,
  calculateSumOfIdsOfValidGame,
};

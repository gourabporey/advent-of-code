const { sumOf } = require('../lib/arrays');

const calculateSumOfPowers = (gamesData) => {
  const fewestRequiredCubesInAllGame = gamesData.map(({ cubes }) => {
    const fewestCubeCountsPossible = { red: 0, green: 0, blue: 0 };

    cubes.forEach((cube) => {
      Object.entries(cube).forEach(
        ([color, count]) =>
          (fewestCubeCountsPossible[color] = Math.max(
            fewestCubeCountsPossible[color],
            count
          ))
      );
    });

    return fewestCubeCountsPossible;
  });

  const powers = fewestRequiredCubesInAllGame.map(
    ({ red, green, blue }) => red * green * blue
  );

  return sumOf(powers);
};

module.exports = { calculateSumOfPowers };

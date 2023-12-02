const { sumOf } = require('../lib/arrays');

const getFewestNoOfCubesOfGame = ({ cubes }) => {
  return cubes.reduce(
    (fewestNoOfCubes, { red = 0, green = 0, blue = 0 }) => {
      return {
        red: Math.max(fewestNoOfCubes.red, red),
        green: Math.max(fewestNoOfCubes.green, green),
        blue: Math.max(fewestNoOfCubes.blue, blue),
      };
    },
    { red: 0, green: 0, blue: 0 }
  );
};

const calculateSumOfPowers = (gamesData) => {
  const fewestRequiredCubesInAllGame = gamesData.map(getFewestNoOfCubesOfGame);

  const powers = fewestRequiredCubesInAllGame.map(
    ({ red, green, blue }) => red * green * blue
  );

  return sumOf(powers);
};

module.exports = { calculateSumOfPowers };

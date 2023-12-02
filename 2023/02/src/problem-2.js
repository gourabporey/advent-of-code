const { sumOf } = require('../lib/arrays');

const calculateSumOfPowers = (gamesData) => {
  const minimumRequiredBallsInEachGame = gamesData.map(({ balls }) => {
    const colors = { red: [], green: [], blue: [] };

    balls.forEach(({ red = 0, green = 0, blue = 0 }) => {
      colors.red.push(red);
      colors.green.push(green);
      colors.blue.push(blue);
    });

    return {
      red: Math.max(...colors.red),
      green: Math.max(...colors.green),
      blue: Math.max(...colors.blue),
    };
  });

  const powers = minimumRequiredBallsInEachGame.map(
    ({ red, green, blue }) => red * green * blue
  );

  return sumOf(powers);
};

module.exports = { calculateSumOfPowers };

const { multiply } = require('lodash');

const productOf = (numbers) => numbers.reduce(multiply, 1);

const calculateProductOfNumberOfWays = (raceData) => {
  const noOfWays = raceData.map(([time, distance]) => {
    for (let i = 0; i <= time; i++) {
      const distanceTravelled = i * (time - i);
      if (distanceTravelled > distance) return time + 1 - 2 * i;
    }
  });

  return productOf(noOfWays);
};

module.exports = { calculateProductOfNumberOfWays };

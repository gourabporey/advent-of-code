const { multiply } = require('lodash');

const productOf = (numbers) => numbers.reduce(multiply, 1);

const calculateNoOfWaysCrossingRecord = ([time, distance]) => {
  const totalNoOfTravels = time + 1;
  let chargingTime = 0;

  while (chargingTime <= time) {
    // charging time is also the speed of the boat
    const distanceTravelled = chargingTime * (time - chargingTime);

    if (distanceTravelled > distance) {
      const countOfFailingTravels = 2 * chargingTime;
      return totalNoOfTravels - countOfFailingTravels;
    }

    chargingTime++;
  }

  return 0;
};

const calculateProductOfNumberOfWays = (raceData) => {
  const noOfWays = raceData.map(calculateNoOfWaysCrossingRecord);
  return productOf(noOfWays);
};

module.exports = { calculateProductOfNumberOfWays };

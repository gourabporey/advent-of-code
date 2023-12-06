const calculatePossibleTimes = (time) =>
  new Array(time)
    .fill(time)
    .map((num, i) => i * (num - i))
    .concat(0);

const calculateProductOfNumberOfWays = (raceData) => {
  const noOfWays = raceData.map(([time, distance]) => {
    return calculatePossibleTimes(time).filter((num) => num > distance).length;
  });

  return noOfWays.reduce((a, b) => a * b, 1);
};

module.exports = { calculateProductOfNumberOfWays };

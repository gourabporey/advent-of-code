const { toNumber } = require('../lib/numbers.js');

const parseDimension = dimension => {
  const [length, width, height] = dimension.map(toNumber);
  return { length, width, height };
};

const extractDimensions = rawDimensionsData => {
  const isEmptyDimensionsData = !rawDimensionsData || rawDimensionsData.length === 0;
  if (isEmptyDimensionsData) return [];

  const dimensionLines = rawDimensionsData.split('\n');
  const splitDimensions = dimensionLines.map(line => line.split('x'));
  const dimensions = splitDimensions.map(parseDimension);

  return dimensions;
};

module.exports = { extractDimensions };
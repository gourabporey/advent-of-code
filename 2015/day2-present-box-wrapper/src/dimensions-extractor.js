const toNumber = text => +text;

const extractDimensions = rawDimensionsData => {
  const isNoAreaInformationPresent = rawDimensionsData === undefined || rawDimensionsData.length === 0;
  if (isNoAreaInformationPresent) return [];

  const dimensions = rawDimensionsData.split('\n').map(dimension => dimension.split('x'));

  return dimensions.map(dimension => {
    const [length, width, height] = dimension.map(toNumber);
    return { length, width, height };
  });
}

module.exports = { extractDimensions };
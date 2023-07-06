const toNumber = text => +text;

const extractDimensions = rawDimensionsData => {
  const dimensions = rawDimensionsData.split('\n').map(dimension => dimension.split('x'));

  return dimensions.map(dimension => {
    const [length, width, height] = dimension.map(toNumber);
    return { length, width, height };
  });
}

module.exports = { extractDimensions };
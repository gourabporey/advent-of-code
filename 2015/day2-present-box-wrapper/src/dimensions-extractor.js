const toNumber = text => +text;

const extractDimensions = rawDimensions => {
  const dimensions = rawDimensions.split('x');
  const [length, width, height] = dimensions.map(toNumber);
  return [{ length, width, height }];
}

module.exports = { extractDimensions };
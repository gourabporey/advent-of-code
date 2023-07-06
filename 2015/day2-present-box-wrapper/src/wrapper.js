const { PresentBox } = require("./present-box");
const { extractDimensions } = require("./dimensions-extractor");

const sumOf = numbers => numbers.reduce((sum, num) => sum + num, 0);

const calculateWrapperArea = dimension => new PresentBox(dimension).areaOfWrapper();

const findTotalWrapperArea = (rawDimensionsData) => {
  const isNoAreaInformationPresent = rawDimensionsData.length === 0 || rawDimensionsData === undefined;
  if (isNoAreaInformationPresent) return 0;

  const dimensions = extractDimensions(rawDimensionsData);

  const wrapperAreas = dimensions.map(calculateWrapperArea);
  const totalWrapperArea = sumOf(wrapperAreas);

  return totalWrapperArea;
}

module.exports = { findTotalWrapperArea };
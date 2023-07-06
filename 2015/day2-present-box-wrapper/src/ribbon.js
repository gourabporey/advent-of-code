const { extractDimensions } = require("./dimensions-extractor");
const { PresentBox } = require("./present-box");

const add = (a, b) => a + b;

const findRibbonLength = (dimension) => {
  const presentBox = new PresentBox(dimension);
  const smallestPerimeter = Math.min(...presentBox.getPerimeterOfFaces());
  const volume = presentBox.volume();
  return smallestPerimeter + volume;
};

const findTotalRibbonLength = (rawDimensionsData) => {
  const isNoAreaInformationPresent = rawDimensionsData === undefined || rawDimensionsData.length === 0;
  if (isNoAreaInformationPresent) return 0;

  const dimensions = extractDimensions(rawDimensionsData);
  return dimensions.map(findRibbonLength).reduce(add, 0);
}

module.exports = { findTotalRibbonLength };
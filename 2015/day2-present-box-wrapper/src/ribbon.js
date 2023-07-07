const { extractDimensions } = require("./dimensions-extractor");
const { PresentBox } = require("./present-box");
const { sumOf } = require("../lib/numbers.js");

const findRibbonLength = (dimension) => {
  const presentBox = new PresentBox(dimension);
  const smallestPerimeter = Math.min(...presentBox.getPerimeterOfFaces());
  const volume = presentBox.volume();
  return smallestPerimeter + volume;
};

const findTotalRibbonLength = (rawDimensionsData) => {
  const dimensions = extractDimensions(rawDimensionsData);
  const ribbonLengths = dimensions.map(findRibbonLength);
  const totalRibbonLength = sumOf(ribbonLengths);

  return totalRibbonLength;
};

module.exports = { findTotalRibbonLength };
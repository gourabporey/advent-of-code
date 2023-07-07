const { PresentBox } = require("./present-box");
const { extractDimensions } = require("./dimensions-extractor");
const { sumOf } = require("../lib/numbers.js");

const calculateWrapperArea = dimension => new PresentBox(dimension).areaOfWrapper();

const findTotalWrapperArea = (rawDimensionsData) => {
  const dimensions = extractDimensions(rawDimensionsData);

  const wrapperAreas = dimensions.map(calculateWrapperArea);
  const totalWrapperArea = sumOf(wrapperAreas);

  return totalWrapperArea;
};

module.exports = { findTotalWrapperArea };
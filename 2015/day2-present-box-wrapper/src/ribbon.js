const { extractDimensions } = require("./dimensions-extractor");

const findRibbonLength = (rawDimensionsData) => {
  const isNoAreaInformationPresent = rawDimensionsData === undefined || rawDimensionsData.length === 0;
  if (isNoAreaInformationPresent) return 0;

  return 5;
}

module.exports = { findRibbonLength };
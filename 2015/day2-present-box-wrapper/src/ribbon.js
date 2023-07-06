const { extractDimensions } = require("./dimensions-extractor");
const { PresentBox } = require("./present-box");

const findTotalRibbonLength = (rawDimensionsData) => {
  const isNoAreaInformationPresent = rawDimensionsData === undefined || rawDimensionsData.length === 0;
  if (isNoAreaInformationPresent) return 0;

  const dimensions = extractDimensions(rawDimensionsData);
  return dimensions.map((dimension) => {
    const presentBox = new PresentBox(dimension);
    const smallestPerimeter = Math.min(...presentBox.getPerimeterOfFaces());
    const volume = presentBox.volume();
    return smallestPerimeter + volume;
  }).reduce((sum, num) => sum + num, 0);
}

module.exports = { findTotalRibbonLength };
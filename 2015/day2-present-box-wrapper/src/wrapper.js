const { PresentBox } = require("./present-box");
const { extractDimensions } = require("./dimensions-extractor");

const sumOf = numbers => numbers.reduce((sum, num) => sum + num, 0);

const findTotalWrapperArea = (rawDimensionsData) => {
  const dimensions = extractDimensions(rawDimensionsData);

  const presentBoxes = dimensions.map(dimension => new PresentBox(dimension));

  const wrapperAreas = presentBoxes.map(presentBox => presentBox.areaOfWrapper());

  const totalWrapperArea = sumOf(wrapperAreas);

  return totalWrapperArea;
}

module.exports = { findTotalWrapperArea };
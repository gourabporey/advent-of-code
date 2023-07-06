const fs = require('fs');
const { findTotalWrapperArea } = require("./src/wrapper");
const { findTotalRibbonLength } = require('./src/ribbon');

const readDimensionsData = (onRead) => {
  fs.readFile('./resources/input.txt', 'utf-8', (_, data) => onRead(data));
}

const main = () => {
  readDimensionsData(rawDimensionsData => {
    console.log('Total Wrapper Area: ', findTotalWrapperArea(rawDimensionsData));
    console.log('Total Ribbon length: ', findTotalRibbonLength(rawDimensionsData));
  });
}

main();
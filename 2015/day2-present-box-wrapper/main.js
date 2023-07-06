const fs = require('fs');
const { findTotalWrapperArea } = require("./src/wrapper");

const readDimensionsData = (onRead) => {
  fs.readFile('./resources/input.txt', 'utf-8', (_, data) => onRead(data));
}

const main = () => {
  readDimensionsData(rawDimensionsData => {
    console.log('Total Wrapper Area: ', findTotalWrapperArea(rawDimensionsData));
  });
}

main();
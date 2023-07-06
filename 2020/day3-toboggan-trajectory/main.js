const fs = require('fs');
const { extractAreaInfo, countTreesOnPath } = require('./src/toboggan-trajectory-1');

const main = () => {
  fs.readFile('./resources/input.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const area = extractAreaInfo(data);
    const slope = { x: 3, y: 1 };
    const noOfTreesEncountered = countTreesOnPath(area, slope);
    console.log(noOfTreesEncountered);
  });
}

main();
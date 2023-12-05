const fs = require('fs');
const { determineLowestLocationNumber } = require('./src/problem-1');
const { determineLowestLocationNumberP2 } = require('./src/problem-2');

const toNumber = (text) => +text;

const chunk = (elements, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < elements.length; i += chunkSize) {
    const chunk = elements.slice(i, i + chunkSize);
    chunks.push(chunk);
  }
  return chunks;
};

const parseAlmanac = (rawAlmanac) => {
  const [seedsData, ...resourcesData] = rawAlmanac.split('\n\n');
  const seeds = [...seedsData.match(/\d+/g)].map(toNumber);

  const resources = resourcesData.map((resource) => {
    const [sourceAndTarget, ...ranges] = resource.split('\n');
    const [source, destination] = sourceAndTarget.split(/\s+/)[0].split('-to-');
    const map = ranges
      .map((range) => range.split(/\s+/).map(toNumber))
      .map(([destinationRangeStart, sourceRangeStart, rangeLength]) => {
        return { destinationRangeStart, sourceRangeStart, rangeLength };
      });

    return { source, destination, map };
  });

  return { seeds, resources };
};

const parseAlmanacP2 = (almanac) => {
  const seeds = chunk(almanac.seeds, 2).flatMap(([start, range]) => ({
    start,
    range,
  }));

  return { ...almanac, seeds };
};

const main = () => {
  const rawAlmanac = fs.readFileSync('./data/input.txt', 'utf8');
  const almanac = parseAlmanac(rawAlmanac);
  const almanacP2 = parseAlmanacP2(almanac);

  // console.log(almanacP2);

  const lowestLocationNumberP1 = determineLowestLocationNumber(almanac);
  const lowestLocationNumberP2 = determineLowestLocationNumberP2(almanacP2);

  console.log('Lowest location number problem 1', lowestLocationNumberP1);
  console.log('Lowest location number problem 2', lowestLocationNumberP2);
};

main();

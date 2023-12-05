const fs = require('fs');
const { determineLowestLocationNumber } = require('./src/problem-1');

const toNumber = (text) => +text;

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

const main = () => {
  const rawAlmanac = fs.readFileSync('./data/input.txt', 'utf8');
  const almanac = parseAlmanac(rawAlmanac);
  const lowestLocationNumber = determineLowestLocationNumber(almanac);

  console.log(almanac, almanac.resources[0].map);
  console.log('Lowest location number', lowestLocationNumber);
};

main();

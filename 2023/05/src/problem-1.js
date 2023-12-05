/*
{
  seeds: [ 79, 14, 55, 13 ],
  resources: [
    { source: 'seed', destination: 'soil', map: [Array] },
    { source: 'soil', destination: 'fertilizer', map: [Array] },
    { source: 'fertilizer', destination: 'water', map: [Array] },
    { source: 'water', destination: 'light', map: [Array] },
    { source: 'light', destination: 'temperature', map: [Array] },
    { source: 'temperature', destination: 'humidity', map: [Array] },
    { source: 'humidity', destination: 'location', map: [Array] }
  ]
}

[
  { destinationRangeStart: 50, sourceRangeStart: 98, rangeLength: 2 },
  { destinationRangeStart: 52, sourceRangeStart: 50, rangeLength: 48 }
]
*/

const calculateCorrespondingQtyOf = (qty, { map }) => {
  for (const { destinationRangeStart, sourceRangeStart, rangeLength } of map) {
    if (qty >= sourceRangeStart && qty < sourceRangeStart + rangeLength) {
      return destinationRangeStart + (qty - sourceRangeStart);
    }
  }

  return qty;
};

const determineLowestLocationNumber = (almanac) => {
  const { seeds, resources } = almanac;

  const locationNumbers = seeds.map((seed) => {
    return resources.reduce((qty, currentResource) => {
      return calculateCorrespondingQtyOf(qty, currentResource);
    }, seed);
  });

  return Math.min(...locationNumbers);
};

module.exports = { determineLowestLocationNumber };

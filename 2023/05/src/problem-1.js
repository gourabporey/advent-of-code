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

const calculateCorrespondingQtyOf = (qty, { map }) => {
  for (const { destinationRangeStart, sourceRangeStart, rangeLength } of map) {
    if (qty >= sourceRangeStart && qty < sourceRangeStart + rangeLength) {
      return destinationRangeStart + (qty - sourceRangeStart);
    }
  }

  return qty;
};

const determineLowestLocationNumberP2 = (almanac) => {
  const { seeds, resources } = almanac;
  let minLocation = Infinity;

  seeds.forEach(({ start, range }) => {
    for (let seed = start; seed < start + range; seed++) {
      const location = resources.reduce(calculateCorrespondingQtyOf, seed);
      minLocation = Math.min(minLocation, location);
    }
  });

  return minLocation;
};

module.exports = { determineLowestLocationNumberP2 };

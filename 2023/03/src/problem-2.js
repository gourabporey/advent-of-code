const {
  isOutOfBound,
  toArray,
  multiply,
  isNumber,
  split,
} = require('../lib/utils');

const calculateSumOfGearRatios = (schematic) => {
  const partNumbers = {};

  const isOutOfSchematicBound = (col, row) => isOutOfBound(schematic, row, col);

  schematic.forEach((schematicRow, rowIndex) => {
    schematicRow.forEach((element, colIndex) => {
      if (element != '*') return;

      for (let cr = rowIndex - 1; cr <= rowIndex + 1; cr++) {
        for (let cc = colIndex - 1; cc <= colIndex + 1; cc++) {
          const isNotCurrentCoor = cr === rowIndex && cc === colIndex;
          if (isOutOfSchematicBound(cc, cr) || isNotCurrentCoor) continue;

          if (isNumber(schematic[cr][cc])) {
            let currentCol = cc;

            while (isNumber(schematic[cr][currentCol])) {
              currentCol--;
            }

            const gearID = `${rowIndex}_${colIndex}`;
            partNumbers[gearID] = partNumbers[gearID] || new Set();
            partNumbers[gearID].add(`${cr}_${currentCol + 1}`);
          }
        }
      }
    });
  });

  const getNumberStartingFrom = ([row, col]) => {
    const line = schematic[row];
    let num = '';
    let cc = col;

    while (isNumber(line[cc])) {
      num += line[cc];
      cc++;
    }

    return +num;
  };

  const validGear = (group) => group.size === 2;
  const validGearRatioPairs = Object.values(partNumbers).filter(validGear);

  return validGearRatioPairs
    .map(toArray)
    .map((coordinates) =>
      coordinates.map(split('_')).map(getNumberStartingFrom).reduce(multiply, 1)
    )
    .reduce((a, b) => a + b, 0);
};

module.exports = { calculateSumOfGearRatios };

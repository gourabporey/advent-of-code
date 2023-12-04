const {
  isOutOfBound,
  toArray,
  multiply,
  isNumber,
  split,
} = require('../lib/utils');

const neighboursOf = ({ row, col }, matrix) => {
  const neighbours = [];

  [row - 1, row, row + 1].forEach((currRowIdx) => {
    [col - 1, col, col + 1].forEach((currColIdx) => {
      const isCurrentPos = currRowIdx === row && currColIdx === col;

      if (isOutOfBound(matrix, currRowIdx, currColIdx) || isCurrentPos) return;

      neighbours.push({ row: currRowIdx, col: currColIdx });
    });
  });

  return neighbours;
};

const calculateSumOfGearRatios = (schematic) => {
  const partNumbers = {};

  const getStartingCoordinateOfNumberContainingPoint = ({ row, col }) => {
    let currentCol = col;

    while (isNumber(schematic[row][currentCol])) {
      currentCol--;
    }

    return { row, col: currentCol + 1 };
  };

  schematic.forEach((schematicRow, rowIndex) => {
    schematicRow.forEach((element, colIndex) => {
      if (element != '*') return;

      const numberNeighbours = neighboursOf(
        { row: rowIndex, col: colIndex },
        schematic
      ).filter(({ row, col }) => isNumber(schematic[row][col]));

      const gearID = `${rowIndex}_${colIndex}`;

      numberNeighbours.forEach((neighbour) => {
        const { row, col } =
          getStartingCoordinateOfNumberContainingPoint(neighbour);
        partNumbers[gearID] = partNumbers[gearID] || new Set();
        partNumbers[gearID].add(`${row}_${col}`);
      });
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

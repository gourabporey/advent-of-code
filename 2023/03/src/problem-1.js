const isNumber = (text) => {
  const numRegex = /^\d+$/;
  return numRegex.test(text);
};

const calculateSumOfPartNumbers = (schematic) => {
  const partNumbers = new Set();

  const isOutOfBound = (col, row) => {
    return (
      row > schematic.length - 1 ||
      row < 0 ||
      col > schematic[0].length - 1 ||
      col < 0
    );
  };

  schematic.forEach((schematicRow, rowIndex) => {
    schematicRow.forEach((element, colIndex) => {
      if (isNumber(element) || element === '.') return;

      for (let cr = rowIndex - 1; cr <= rowIndex + 1; cr++) {
        for (let cc = colIndex - 1; cc <= colIndex + 1; cc++) {
          if (isOutOfBound(cc, cr) || (cr === rowIndex && cc === colIndex))
            continue;

          if (isNumber(schematic[cr][cc])) {
            let currentCol = cc;

            while (isNumber(schematic[cr][currentCol])) {
              currentCol--;
            }

            partNumbers.add(`${cr}_${currentCol + 1}`);
          }
        }
      }
    });
  });

  const partNumbersCoordinates = [...partNumbers];

  return partNumbersCoordinates
    .map((coordinate) => coordinate.split('_'))
    .map(([row, col]) => {
      const line = schematic[row];
      let num = '';
      let cc = col;

      while (isNumber(line[cc])) {
        num += line[cc];
        cc++;
      }

      return +num;
    })
    .reduce((a, b) => a + b, 0);
};

module.exports = { calculateSumOfPartNumbers };

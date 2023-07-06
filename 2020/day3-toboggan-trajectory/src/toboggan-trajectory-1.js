const updatePosition = (position, delta) => {
  position.x += delta.x || 0;
  position.y += delta.y || 0;
}

const isTobogganOnATree = (tobogganPosition, area) => {
  const { x, y } = tobogganPosition;
  const rowGrowth = area[0].length;
  return area[y][x % rowGrowth] === '#';
}

const countTreesOnPath = (area, slope) => {
  let noOfTreesEncountered = 0;
  const tobogganPosition = { x: 0, y: 0 };
  const lastRowNumber = area.length - 1;

  while (tobogganPosition.y < lastRowNumber) {
    updatePosition(tobogganPosition, slope);
    noOfTreesEncountered += isTobogganOnATree(tobogganPosition, area) ? 1 : 0;
  }

  return noOfTreesEncountered;
}

const extractAreaInfo = (rawAreaData) => {
  return rawAreaData.split('\n').map((row) => Array.from(row));
}

module.exports = { countTreesOnPath, extractAreaInfo };
const { Position } = require('./position');

const noOfHousesCovered = ([...instructions]) => {
  const santaPosition = new Position(0, 0);
  const houses = new Set();

  let instructionId = 0;

  do {
    houses.add(santaPosition.toString());
    const instruction = instructions[instructionId];

    switch (instruction) {
      case '>': santaPosition.east();
        break;
      case '<': santaPosition.west();
        break;
      case '^': santaPosition.north();
        break;
      case 'v': santaPosition.south();
        break;
    }

    instructionId++;
  } while (instructionId <= instructions.length);

  return houses.size;
};

module.exports = { noOfHousesCovered };
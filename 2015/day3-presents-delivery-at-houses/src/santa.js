const noOfHousesCovered = ([...instructions]) => {
  const santaPosition = { x: 0, y: 0 };
  const houses = new Set();

  let instructionId = 0;

  do {
    houses.add(Object.values(santaPosition).join(':'));
    const instruction = instructions[instructionId];

    switch (instruction) {
      case '>': santaPosition.x += 1;
        break;
      case '<': santaPosition.x -= 1;
        break;
      case '^': santaPosition.y += 1;
        break;
      case 'v': santaPosition.y -= 1;
        break;
    }

    instructionId++;
  } while (instructionId <= instructions.length);

  return houses.size;
};

module.exports = { noOfHousesCovered };
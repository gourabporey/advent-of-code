const { Position } = require('./position');

const changeDeliveryPosition = (santaPosition, instruction) => {
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
};

const getDeliveryPersons = numberOfDeliveryPersons => {
  return Array.from({ length: numberOfDeliveryPersons }).map(() => new Position(0, 0));
};

const noOfHousesCovered = ([...instructions], noOfDeliveryPersons = 1) => {
  const deliveryPersons = getDeliveryPersons(noOfDeliveryPersons);

  const housesGifted = new Set();

  housesGifted.add(deliveryPersons[0].toString());

  for (const instruction of instructions) {
    const currentDeliveryPersonPosition = deliveryPersons[0];
    changeDeliveryPosition(currentDeliveryPersonPosition, instruction);
    housesGifted.add(currentDeliveryPersonPosition.toString());
    deliveryPersons.reverse();
  }

  return housesGifted.size;
};

module.exports = { noOfHousesCovered };
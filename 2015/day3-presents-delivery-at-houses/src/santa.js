const { Position } = require('./position');
const { DeliveryPerson } = require('./delivery-person');

const changeDeliveryPosition = (deliveryPerson, instruction) => {
  switch (instruction) {
    case '>': deliveryPerson.moveToEast();
      break;
    case '<': deliveryPerson.moveToWest();
      break;
    case '^': deliveryPerson.moveToNorth();
      break;
    case 'v': deliveryPerson.moveToSouth();
      break;
  }
};

const getDeliveryPersons = numberOfDeliveryPersons => {
  return Array.from({ length: numberOfDeliveryPersons }).map(() => {
    return new DeliveryPerson(new Position(0, 0));
  });
};

const noOfHousesCovered = ([...instructions], noOfDeliveryPersons = 1) => {
  const deliveryPersons = getDeliveryPersons(noOfDeliveryPersons);

  const housesGifted = new Set();

  housesGifted.add(deliveryPersons[0].getCurrentPosition());

  for (const instruction of instructions) {
    const currentDeliveryPersonPosition = deliveryPersons[0];
    changeDeliveryPosition(currentDeliveryPersonPosition, instruction);
    housesGifted.add(currentDeliveryPersonPosition.getCurrentPosition());
    deliveryPersons.reverse();
  }

  return housesGifted.size;
};

module.exports = { noOfHousesCovered };
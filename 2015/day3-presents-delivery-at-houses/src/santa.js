const { Position } = require('./position');
const { DeliveryPerson } = require('./delivery-person');

const createDeliveryPerson = () => new DeliveryPerson(new Position(0, 0));

const getDeliveryPersons = numberOfDeliveryPersons => {
  return Array.from({ length: numberOfDeliveryPersons }).map(createDeliveryPerson);
};

const changeDeliveryPosition = (deliveryPerson, instruction) => {
  const moveFunctions = {
    '>': deliveryPerson.moveToEast,
    '<': deliveryPerson.moveToWest,
    '^': deliveryPerson.moveToSouth,
    'v': deliveryPerson.moveToNorth,
  };

  const moveFunction = moveFunctions[instruction];
  moveFunction.call(deliveryPerson);
};

const noOfHousesCovered = ([...instructions], noOfDeliveryPersons = 1) => {
  const deliveryPersons = getDeliveryPersons(noOfDeliveryPersons);

  const housesGifted = new Set();

  housesGifted.add(deliveryPersons[0].getCurrentPosition());

  for (const instruction of instructions) {
    const currentDeliveryPerson = deliveryPersons[0];
    changeDeliveryPosition(currentDeliveryPerson, instruction);
    housesGifted.add(currentDeliveryPerson.getCurrentPosition());
    deliveryPersons.reverse();
  }

  return housesGifted.size;
};

module.exports = { noOfHousesCovered };
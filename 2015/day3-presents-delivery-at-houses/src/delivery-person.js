class DeliveryPerson {
  #position;

  constructor(position) {
    this.#position = position;
  }

  moveToEast() {
    this.#position.east();
  }

  moveToWest() {
    this.#position.west();
  }

  moveToNorth() {
    this.#position.north();
  }

  moveToSouth() {
    this.#position.south();
  }

  getCurrentPosition() {
    return this.#position.toString();
  }
}

module.exports = { DeliveryPerson };
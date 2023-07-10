class Santa {
  #coordinate;

  constructor(coordinate) {
    this.#coordinate = coordinate;
  }

  moveToNorth() {
    return this.#coordinate.toNorth();
  }

  moveToSouth() {
    return this.#coordinate.toSouth();
  }

  moveToWest() {
    return this.#coordinate.toWest();
  }

  moveToEast() {
    return this.#coordinate.toEast();
  }
}

module.exports = { Santa };

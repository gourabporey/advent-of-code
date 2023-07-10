const DELTAS = {
  NORTH: { x: 0, y: 1 },
  SOUTH: { x: 0, y: -1 },
  WEST: { x: -1, y: 0 },
  EAST: { x: 1, y: 0 },
};

class Coordinate {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  toNorth() {
    this.#x += DELTAS.NORTH.x;
    this.#y += DELTAS.NORTH.y;
    return new Coordinate(this.#x, this.#y);
  }

  toSouth() {
    this.#x += DELTAS.SOUTH.x;
    this.#y += DELTAS.SOUTH.y;
    return new Coordinate(this.#x, this.#y);
  }

  toWest() {
    this.#x += DELTAS.WEST.x;
    this.#y += DELTAS.WEST.y;
    return new Coordinate(this.#x, this.#y);
  }

  toEast() {
    this.#x += DELTAS.EAST.x;
    this.#y += DELTAS.EAST.y;
    return new Coordinate(this.#x, this.#y);
  }

  equals(other) {
    return other.#x === this.#x && other.#y === this.#y;
  }
}

module.exports = { Coordinate };

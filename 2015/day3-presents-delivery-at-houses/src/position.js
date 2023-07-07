class Position {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  west() {
    this.#x--;
  }

  east() {
    this.#x++;
  }

  north() {
    this.#y--;
  }

  south() {
    this.#y++;
  }

  toString() {
    return `${this.#x}:${this.#y}`;
  }
}

module.exports = { Position };
class Santas {
  #santas;

  constructor(santas) {
    this.#santas = santas;
  }

  changeTurn() {
    this.#santas.reverse();
  }

  moveCurrentToNorth() {
    const currentSanta = this.#santas[0];
    return currentSanta.moveToNorth();
  }

  moveCurrentToSouth() {
    const currentSanta = this.#santas[0];
    return currentSanta.moveToSouth();
  }
}

module.exports = { Santas };

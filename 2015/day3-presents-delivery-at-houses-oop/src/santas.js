class Santas {
  #santas;

  constructor(santas) {
    this.#santas = santas;
  }

  moveCurrentToNorth() {
    const currentSanta = this.#santas[0];
    this.#santas.reverse();
    return currentSanta.moveToNorth();
  }
}

module.exports = { Santas };

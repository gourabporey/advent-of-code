class Elf {
  #santas;
  #housesVisited;

  constructor(santas) {
    this.#santas = santas;
    this.#housesVisited = {};
  }

  #isValid(direction) {
    return true;
  }

  #direct(santas, direction) {}

  giveDirections([...directions]) {
    directions.forEach((direction) => {
      if (this.#isValid(direction)) {
        this.#direct(this.#santas, direction);
        this.#santas.changeTurn();
      }
    });
  }

  getHousesVisited() {
    return JSON.parse(JSON.stringify(this.#housesVisited));
  }
}

module.exports = { Elf };
